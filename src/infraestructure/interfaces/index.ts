import { Router } from "express";

export interface ServerOpt {
  port: number;
  router: Router
}