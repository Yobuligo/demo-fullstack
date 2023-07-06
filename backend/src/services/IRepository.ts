import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export interface IRepository<T extends IEntity> {
  add(dataObject: IEntityDetails<T>): Promise<T>;
  delete(dataObject: T): Promise<boolean>;
  deleteById(id: number): Promise<boolean>;
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  update(dataObject: T): Promise<T>;
  updateById(id: number, dataObject: IEntityDetails<T>): Promise<T>;
}
