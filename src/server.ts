import express from "express";

import CorsMiddleware from "@Middlewares/Cors";

import Router from "@Routes/index";

class App {
  public express: express.Express;

  public constructor() {
    this.express = express();

    // MiddleWares
    this.middewares();

    // Routes
    new Router(this.express);

    // Start Server
    this.express.listen(8080);
  }

  private middewares() {
    this.express.use(express.json());

    // Set CORS headers
    this.express.use(new CorsMiddleware().Cors);
  }
}

new App();
