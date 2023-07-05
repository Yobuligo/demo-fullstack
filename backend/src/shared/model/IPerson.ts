import { IEntity } from "../types/IEntity";

export interface IPerson extends IEntity {
  firstname: string;
  lastname: string;
}
