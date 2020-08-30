import { Request, Response, NextFunction } from "express";

import Fetch from "@Utils/Fetch";

/**
 * Responsible for logging requests made to the API
 */
class RequestLogger {
  get Logger() {
    return (req: Request, res: Response, next: NextFunction) => {
      const start = new Date();

      /**
       * When the request ends, it will send a request
       * for the interaction log to be saved
       */
      res.on("finish", () => {
        const fetch = new Fetch("http://localhost:8080");

        const remoteAddr =
          req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        const responseTime = new Date().getTime() - start.getTime();

        fetch.post("/log/create", {
          method: req.method,
          url: req.originalUrl,
          status: res.statusCode,
          remoteAddr,
          responseTime,
        });
      });

      next();
    };
  }
}

export default RequestLogger;
