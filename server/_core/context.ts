import type { Request, Response } from "express";
import { getDb } from "../db";

export type ContextUser = {
  id: number;
  email: string;
  role: string;
};

export type TrpcContext = {
  req: Request;
  res: Response;
  db: Awaited<ReturnType<typeof getDb>> | null;
  user: ContextUser | null;
};

/**
 * tRPC context creator
 * Auth is NOT handled here yet (email/password will come later)
 */
export async function createContext(opts: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  const { req, res } = opts;

  const db = await getDb();

  return {
    req,
    res,
    db,
    user: null, // set later when auth middleware is added
  };
}
