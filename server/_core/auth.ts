import { Router } from "express";
import bcrypt from "bcrypt";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const authRouter = Router();

/**
 * POST /api/auth/login
 */
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  req.session.userId = user.id;

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
  });
});

/**
 * POST /api/auth/logout
 */
authRouter.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("poultry.sid");
    res.json({ success: true });
  });
});

/**
 * GET /api/auth/me
 */
authRouter.get("/me", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json(null);
  }

  res.json({ userId: req.session.userId });
});
