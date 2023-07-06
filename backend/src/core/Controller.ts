import { Router } from "express";
import { IRepository } from "../services/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEnvelope } from "../shared/types/IEnvelope";

export abstract class Controller<T extends IEntity> {
  private version: Date = new Date();
  readonly router = Router();

  constructor(
    private readonly path: string,
    private readonly repository: IRepository<T>
  ) {
    this.delete();
    this.get();
    this.post();
    this.put();
    this.lastVersion();
  }

  private delete() {
    this.router.delete(`${this.path}/:id`, async (req, res) => {
      const success = await this.repository.deleteById(parseInt(req.params.id));
      this.updateVersion();
      res.status(200).send(success);
    });
  }

  private get() {
    this.router.get(this.path, async (req, res) => {
      const data = await this.repository.findAll();
      res.status(200).send(this.createEnvelope(data));
    });
  }

  private post() {
    this.router.post(this.path, async (req, res) => {
      const body: IEntityDetails<T> = req.body;
      const item = await this.repository.add(body);
      this.updateVersion();
      res.status(200).send(item);
    });
  }

  private put() {
    this.router.put(`${this.path}/:id`, async (req, res) => {
      const body: IEntityDetails<T> = req.body;
      const item = await this.repository.updateById(
        parseInt(req.params.id),
        body
      );
      this.updateVersion();
      res.status(200).send(item);
    });
  }

  private lastVersion() {
    this.router.get(`${this.path}/version`, (req, res) => {
      res.status(200).send(this.version);
    });
  }

  private updateVersion() {
    this.version = new Date();
  }

  private createEnvelope<T>(data: T): IEnvelope<T> {
    return { version: this.version, data };
  }
}
