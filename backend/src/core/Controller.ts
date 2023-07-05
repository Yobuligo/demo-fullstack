import { Router } from "express";
import { IEntity } from "../shared/types/IEntity";
import { IEntityProps } from "../shared/types/IEntityProps";
import { IEnvelope } from "../shared/types/IEnvelope";
import { SP } from "../shared/services/serviceProvider/ServiceProvider";
import { IdGeneratorService } from "../services/IIdGenerator";

export abstract class Controller<T extends IEntity> {
  private version: Date = new Date();
  readonly router = Router();

  constructor(private readonly path: string, private readonly data: T[] = []) {
    this.delete();
    this.get();
    this.post();
    this.put();
    this.lastVersion();
  }

  private delete() {
    this.router.delete(`${this.path}/:id`, (req, res) => {
      const index = this.findIndexByReq(req.params.id);
      if (index === -1) {
        return res.status(404).send();
      }

      const item = this.data[index];
      this.data.splice(index, 1);
      this.updateVersion();
      res.status(200).send(item);
    });
  }

  private get() {
    this.router.get(this.path, (req, res) => {
      res.status(200).send(this.createEnvelope(this.data));
    });
  }

  private post() {
    this.router.post(this.path, (req, res) => {
      const body: IEntityProps<T> = req.body;
      console.log(body);
      const item: T = {
        id: SP.fetch(IdGeneratorService).next(),
        createdAt: new Date(),
        changedAt: new Date(),
        ...body,
      } as unknown as T;
      this.data.push(item);
      this.updateVersion();
      res.status(200).send(item);
    });
  }

  private put() {
    this.router.put(`${this.path}/:id`, (req, res) => {
      console.log("Put was called");
      const index = this.findIndexByReq(req.params.id);
      if (index === -1) {
        return res.status(404).send();
      }

      const body: IEntityProps<T> = req.body;
      const item = { ...this.data[index], changedAt: new Date(), ...body };
      this.data[index] = item;
      this.updateVersion();
      res.status(200).send(item);
    });
  }

  private lastVersion() {
    this.router.get(`${this.path}/version`, (req, res) => {
      res.status(200).send(this.version);
    });
  }

  private findIndexByReq(id: string): number {
    console.log(this.data);
    return this.data.findIndex((item) => item.id === id);
  }

  private updateVersion() {
    this.version = new Date();
  }

  private createEnvelope<T>(data: T): IEnvelope<T> {
    return { version: this.version, data };
  }
}
