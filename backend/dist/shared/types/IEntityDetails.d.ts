import { IEntity } from "./IEntity";
export declare type IEntityDetails<T extends IEntity> = Omit<T, "id" | "createdAt" | "changedAt">;
