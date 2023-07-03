import { IHaveId } from "./types/IHaveId";
export interface IPerson extends IHaveId {
    firstname: string;
    lastname: string;
}
