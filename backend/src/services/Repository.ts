import { pool } from "../db/dbConnection";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "./IRepository";

export abstract class Repository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly table: string) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return new Promise(async (resolve) => {
      const query = `INSERT INTO ${this.table}(${this.getDataObjectProps(
        dataObject
      )}) VALUES(${this.getDataObjectPlaceholders(dataObject)}) RETURNING *`;
      const data = await pool.query(
        query,
        this.getDataObjectValues(dataObject)
      );
      resolve(data.rows[0]);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      resolve(await this.deleteById(parseInt(dataObject.id)));
    });
  }

  deleteById(id: number): Promise<boolean> {
    return new Promise(async (resolve) => {
      const query = `DELETE FROM ${this.table} WHERE id = $1`;
      await pool.query(query, [id]);
      resolve(true);
    });
  }

  findAll(): Promise<T[]> {
    return new Promise(async (resolve) => {
      const data = await pool.query(`SELECT * FROM ${this.table}`);
      resolve(data.rows);
    });
  }

  findById(id: number): Promise<T | undefined> {
    return new Promise(async (resolve) => {
      const query = `SELECT * FROM ${this.table} WHERE id = $1`;
      const data = await pool.query(query, [id]);
      resolve(data.rows[0]);
    });
  }

  update(dataObject: T): Promise<T> {
    return new Promise(async (resolve) => {
      const query = `UPDATE ${this.table} SET ${this.getUpdateProps(
        dataObject
      )} WHERE id = $1 RETURNING *`;
      const data = await pool.query(query, [
        dataObject.id,
        ...this.getUpdateValues(dataObject),
      ]);
      resolve(data.rows[0]);
    });
  }

  updateById(id: number, dataObject: IEntityDetails<T>): Promise<T> {
    return new Promise(async (resolve) => {
      const query = `UPDATE ${this.table} SET ${this.getUpdateProps(
        dataObject
      )} WHERE id = $1 RETURNING *`;
      const data = await pool.query(query, [
        id,
        ...this.getUpdateValues(dataObject),
      ]);
      resolve(data.rows[0]);
    });
  }

  private getUpdateProps(dataObject: IEntityDetails<T>): string {
    let code = "";
    let count = 1;
    for (const key in dataObject) {
      if (key === "id") {
        continue;
      }
      count++;
      if (code.length > 0) {
        code += `,`;
      }
      code += `${key}=$${count}`;
    }
    return code;
  }

  private getUpdateValues(dataObject: IEntityDetails<T>): T[keyof T][] {
    const values = [];
    for (const key in dataObject) {
      if (key === "id") {
        continue;
      }
      values.push((dataObject as any)[key]);
    }
    return values;
  }

  private getDataObjectProps(dataObject: IEntityDetails<T>): string {
    let code = "";
    for (const key in dataObject) {
      if (key === "id") {
        continue;
      }
      if (code === "") {
        code += key;
      } else {
        code += `,${key}`;
      }
    }
    return code;
  }

  private getDataObjectPlaceholders(dataObject: IEntityDetails<T>): string {
    let code = "";
    let count = 0;
    for (const key in dataObject) {
      if (key === "id") {
        continue;
      }
      count++;
      if (code.length > 0) {
        code += `,`;
      }
      code += `$${count}`;
    }
    return code;
  }

  private getDataObjectValues(dataObject: IEntityDetails<T>): T[keyof T][] {
    let values = [];
    for (const key in dataObject) {
      if (key === "id") {
        continue;
      }

      values.push((dataObject as any)[key]);
    }
    return values;
  }
}
