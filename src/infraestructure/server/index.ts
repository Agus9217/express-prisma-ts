import express from "express";
import { ServerOpt } from "../interfaces";

export class Server {

  private app = express();
  private port : number;

  constructor({ port }: ServerOpt) {
    this.port = port;
  }

  start() {
    this.app.use(express.json())

    this.app.listen(this.port, () => {
      console.log(`Server is running on: http://localhost:${this.port}`)
    })
  }


}