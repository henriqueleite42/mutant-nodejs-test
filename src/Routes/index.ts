import { Express } from "express";

import loggerRoutes from "@Routes/Logger";
import userRoutes from "@Routes/User";

import Tutorial from "@Assets/Tutorial/index.json";

/**
 * Responsible for routing
 */
class Router {
  constructor(server: Express) {
    server.get("/", async (req, res) => res.json(Tutorial));

    server.use("/user", userRoutes);

    server.use("/log", loggerRoutes);
  }
}

export default Router;
