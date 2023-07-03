import { IEntity } from "./IEntity";
export declare type IEntityProps<T extends IEntity> = Omit<T, "id" | "createdAt" | "changedAt">;
