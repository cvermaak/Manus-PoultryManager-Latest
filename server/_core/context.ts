import type { Request, Response } from "express";
import { db } from "../db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export type TrpcContext = {
  user: null | {
    id: number;
    role: string;
  };
};

export async function createContext() {
  return { user: null };
}

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
