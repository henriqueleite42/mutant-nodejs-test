import { Request, Response } from "express";

export interface ILog {
  method: string;
  url: string;
  status?: number;
  remoteAddr: string;
  responseTime: number;
}
