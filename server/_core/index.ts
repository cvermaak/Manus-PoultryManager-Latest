// imports
import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

// start function
async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  if (process.env.OAUTH_SERVER_URL) {
    registerOAuthRoutes(app);
  } else {
    console.warn("OAuth disabled: OAUTH_SERVER_URL not set");
  }

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = Number(process.env.PORT);
  if (!port) throw new Error("PORT environment variable is required");

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
}

// invoke it ONCE
startServer().catch(err => {
  console.error("Fatal startup error:", err);
  process.exit(1);
});
