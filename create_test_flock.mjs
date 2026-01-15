import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './drizzle/schema.ts';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: 'default' });

// Create test flock with placement date 25 days ago
const placementDate = new Date();
placementDate.setDate(placementDate.getDate() - 25);

const result = await db.insert(schema.flock).values({
  flockNumber: 'FL-CHART-TEST-2026',
  houseId: 10001, // AFGRO-DF-H10
  placementDate: placementDate,
  initialCount: 20000,
  currentCount: 19500,
  targetSlaughterWeight: '1.70',
  weightUnit: 'kg',
  growingPeriod: 42,
  targetDeliveredWeight: '2.500',
  targetCatchingWeight: '2.646', // 2.500 * 1.055
  status: 'active',
  createdBy: 'Clinton'
});

console.log('Flock created with ID:', result[0].insertId);

await connection.end();
