import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { harvestRecords, flocks } from "../../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";

/**
 * Calculate derived fields for harvest record
 */
function calculateDerivedFields(data: any) {
  const derived: any = {};

  // Feed withdrawal duration (hours)
  if (data.feedWithdrawalStartTime && data.harvestStartTime) {
    const withdrawalMs = new Date(data.harvestStartTime).getTime() - new Date(data.feedWithdrawalStartTime).getTime();
    derived.feedWithdrawalDurationHours = (withdrawalMs / (1000 * 60 * 60)).toFixed(2);
  }

  // Average loaded weight
  if (data.chickenCountLoaded && data.totalLoadedWeightKg) {
    derived.averageLoadedWeightKg = (parseFloat(data.totalLoadedWeightKg) / data.chickenCountLoaded).toFixed(3);
  }

  // Travel duration (hours)
  if (data.transportDepartTime && data.transportArrivalTime) {
    const travelMs = new Date(data.transportArrivalTime).getTime() - new Date(data.transportDepartTime).getTime();
    derived.travelDurationHours = (travelMs / (1000 * 60 * 60)).toFixed(2);
  }

  // Average delivered weight
  if (data.chickenCountDelivered && data.totalDeliveredWeightKg) {
    derived.averageDeliveredWeightKg = (parseFloat(data.totalDeliveredWeightKg) / data.chickenCountDelivered).toFixed(3);
  }

  // Shrinkage percentage
  if (data.totalLoadedWeightKg && data.totalDeliveredWeightKg) {
    const shrinkage = ((parseFloat(data.totalLoadedWeightKg) - parseFloat(data.totalDeliveredWeightKg)) / parseFloat(data.totalLoadedWeightKg)) * 100;
    derived.shrinkagePercentage = shrinkage.toFixed(2);
  }

  // Total revenue
  if (data.pricePerKg && data.totalDeliveredWeightKg) {
    derived.totalRevenue = (parseFloat(data.pricePerKg) * parseFloat(data.totalDeliveredWeightKg)).toFixed(2);
  }

  return derived;
}

/**
 * Update flock current count and status after harvest
 */
async function updateFlockAfterHarvest(flockId: number, chickenCountLoaded: number) {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });
  
  // Get current flock data
  const [flock] = await db.select().from(flocks).where(eq(flocks.id, flockId));
  if (!flock) {
    throw new TRPCError({ code: "NOT_FOUND", message: "Flock not found" });
  }

  const newCount = flock.currentCount - chickenCountLoaded;
  
  // Determine new status
  let newStatus = flock.status;
  if (newCount <= 0) {
    newStatus = "completed";
  } else if (flock.status === "active") {
    newStatus = "harvesting";
  }

  // Update flock
  await db.update(flocks)
    .set({ 
      currentCount: Math.max(0, newCount),
      status: newStatus,
      updatedAt: new Date(),
    })
    .where(eq(flocks.id, flockId));

  return { newCount: Math.max(0, newCount), newStatus };
}

const harvestInputSchema = z.object({
  flockId: z.number(),
  harvestDate: z.string().or(z.date()),
  harvestStartTime: z.string().or(z.date()),
  harvestDurationMinutes: z.number().optional(),
  feedWithdrawalStartTime: z.string().or(z.date()).optional(),
  destination: z.string().optional(),
  chickenCountLoaded: z.number(),
  totalLoadedWeightKg: z.number(),
  totalCrates: z.number().optional(),
  oddCrateCount: z.number().optional(),
  oddCrateWeightKg: z.number().optional(),
  transportDepartTime: z.string().or(z.date()).optional(),
  transportArrivalTime: z.string().or(z.date()).optional(),
  chickenCountDelivered: z.number().optional(),
  totalDeliveredWeightKg: z.number().optional(),
  transportMortalities: z.number().optional(),
  pricePerKg: z.number().optional(),
  paymentTerms: z.string().optional(),
  invoiceReference: z.string().optional(),
  notes: z.string().optional(),
});

export const harvestRouter = router({
  /**
   * Create a new harvest record
   */
  create: protectedProcedure
    .input(harvestInputSchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Calculate derived fields
      const derived = calculateDerivedFields(input);

      // Insert harvest record
      const [result] = await db.insert(harvestRecords).values({
        ...input,
        ...derived,
        recordedBy: ctx.user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Update flock current count and status
      await updateFlockAfterHarvest(input.flockId, input.chickenCountLoaded);

      return { id: result.insertId, success: true };
    }),

  /**
   * Update an existing harvest record
   */
  update: protectedProcedure
    .input(z.object({
      id: z.number(),
      data: harvestInputSchema.partial(),
    }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Get original record to restore flock count if needed
      const [original] = await db.select().from(harvestRecords).where(eq(harvestRecords.id, input.id));
      if (!original) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Harvest record not found" });
      }

      // Calculate derived fields
      const derived = calculateDerivedFields({ ...original, ...input.data });

      // Update harvest record
      await db.update(harvestRecords)
        .set({
          ...input.data,
          ...derived,
          updatedAt: new Date(),
        })
        .where(eq(harvestRecords.id, input.id));

      // If chicken count changed, adjust flock count
      if (input.data.chickenCountLoaded && input.data.chickenCountLoaded !== original.chickenCountLoaded) {
        const countDiff = input.data.chickenCountLoaded - original.chickenCountLoaded;
        const [flock] = await db.select().from(flocks).where(eq(flocks.id, original.flockId));
        if (flock) {
          await db.update(flocks)
            .set({ 
              currentCount: Math.max(0, flock.currentCount - countDiff),
              updatedAt: new Date(),
            })
            .where(eq(flocks.id, original.flockId));
        }
      }

      return { success: true };
    }),

  /**
   * Delete a harvest record
   */
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Get record to restore flock count
      const [record] = await db.select().from(harvestRecords).where(eq(harvestRecords.id, input.id));
      if (!record) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Harvest record not found" });
      }

      // Restore flock count
      const [flock] = await db.select().from(flocks).where(eq(flocks.id, record.flockId));
      if (flock) {
        const restoredCount = flock.currentCount + record.chickenCountLoaded;
        
        // Determine new status
        let newStatus = flock.status;
        if (flock.status === "completed" && restoredCount > 0) {
          // Check if there are other harvests
          const otherHarvests = await db.select().from(harvestRecords)
            .where(and(
              eq(harvestRecords.flockId, record.flockId),
              eq(harvestRecords.id, input.id) // Exclude current record
            ));
          
          newStatus = otherHarvests.length > 0 ? "harvesting" : "active";
        }

        await db.update(flocks)
          .set({ 
            currentCount: restoredCount,
            status: newStatus,
            updatedAt: new Date(),
          })
          .where(eq(flocks.id, record.flockId));
      }

      // Delete harvest record
      await db.delete(harvestRecords).where(eq(harvestRecords.id, input.id));

      return { success: true };
    }),

  /**
   * Get all harvest records
   */
  list: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });
    const records = await db.select().from(harvestRecords).orderBy(desc(harvestRecords.harvestDate));
    return records;
  }),

  /**
   * Get harvest records for a specific flock
   */
  getByFlock: protectedProcedure
    .input(z.object({ flockId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });
      const records = await db.select()
        .from(harvestRecords)
        .where(eq(harvestRecords.flockId, input.flockId))
        .orderBy(desc(harvestRecords.harvestDate));
      return records;
    }),

  /**
   * Get a single harvest record by ID
   */
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });
      const [record] = await db.select().from(harvestRecords).where(eq(harvestRecords.id, input.id));
      if (!record) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Harvest record not found" });
      }
      return record;
    }),
});
