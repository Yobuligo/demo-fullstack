import { Router } from "express";
import { IEntity } from "../shared/types/IEntity";

export class LongPollingController<T extends IEntity> {
  private handlers: any[] = [];
  readonly router = Router();

  constructor(private readonly path: string, private readonly data: T[] = []) {
    this.get();
  }

  private get() {
    this.router.get(this.path, (req, res) => {
      this.handlers.push(res);
    });
  }
}
