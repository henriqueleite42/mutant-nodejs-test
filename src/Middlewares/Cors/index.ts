import { Request, Response, NextFunction } from "express";

class CorsMiddleware {
  get Cors() {
    return (req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
      );

      next();
    };
  }
}

export default CorsMiddleware;
