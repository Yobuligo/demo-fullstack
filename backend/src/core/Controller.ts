import { Router } from "express";
import { IHaveId } from "../model/types/IHaveId";
import { IdProvider } from "../services/IdProvider";

export abstract class Controller<T extends IHaveId> {
  readonly router = Router();

  constructor(private readonly path: string, private readonly data: T[] = []) {
    this.delete();
    this.get();
    this.post();
    this.put();
  }

  private delete() {
    this.router.delete(`${this.path}/:id`, (req, res) => {
      const index = this.findIndexByReq(req.params.id);
      if (index === -1) {
        return res.status(404).send();
      }

      const item = this.data[index];
      this.data.splice(index, 1);
      res.status(200).send(item);
    });
  }

  private get() {
    this.router.get(this.path, (req, res) => {
      res.status(200).send(this.data);
    });
  }

  private post() {
    this.router.post(this.path, (req, res) => {
      const body: Omit<T, "id"> = req.body;
      console.log(body);
      const item: T = { id: IdProvider.next(), ...body } as unknown as T;
      this.data.push(item);
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

      const body: Omit<T, "id"> = req.body;
      const item = { ...this.data[index], ...body };
      this.data[index] = item;
      res.status(200).send(item);
    });
  }

  private findIndexByReq(id: string): number {
    console.log(this.data);
    return this.data.findIndex((item) => item.id === id);
  }
}
