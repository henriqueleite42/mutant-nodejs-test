import { Router } from "express";

import LoggerController from "@Controllers/Logger";

const router = Router();

/**
 * Create a new log
 */
router.post("/create", async (req, res) => {
  const loggerController = new LoggerController();

  await loggerController.addToElastic(req.body);

  res.status(201).send();
});

export default router;
