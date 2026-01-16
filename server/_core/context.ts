import type { Request, Response } from "express";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export type TrpcContext = {
  req: Request;
  res: Response;
  user: {
    id: number;
    email: string;
    role: string;
  } | null;
};

export async function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  const userId = req.session.userId;

  if (!userId) {
    return {
      req,
      res,
      user: null,
    };
  }

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
