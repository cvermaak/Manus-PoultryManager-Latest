import type { Request, Response } from "express";
import { getDb } from "../db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const db = await getDb();

export type TrpcContext = {
  req: Request;
  res: Response;
  user: {
    id: number;
    email: string;
    role: string;
  } | null;
};

export async function createContext({ req }: { req: any }) {
  const db = await getDb();

  return {
    db,
    req,
    user: null, // or however you're resolving auth
  };
}

export type TrpcContext = Awaited<ReturnType<typeof createContext>>;

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
    columns: {
      id: true,
      email: true,
      role: true,
    },
  });

  return {
    req,
    res,
    user: user ?? null,
  };
}
