import { IEntity } from "./IEntity";

export type IEntityProps<T extends IEntity> = Omit<
  T,
  "id" | "createdAt" | "changedAt"
>;
