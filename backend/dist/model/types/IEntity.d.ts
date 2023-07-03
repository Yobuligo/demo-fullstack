import { IHaveChangedAt } from "./IHaveChangedAt";
import { IHaveCreatedAt } from "./IHaveCreatedAt";
import { IHaveId } from "./IHaveId";
export interface IEntity extends IHaveId, IHaveCreatedAt, IHaveChangedAt {
}
