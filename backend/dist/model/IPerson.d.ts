import { IEntity } from "../shared/types/IEntity";
export interface IPerson extends IEntity {
    firstname: string;
    lastname: string;
}
