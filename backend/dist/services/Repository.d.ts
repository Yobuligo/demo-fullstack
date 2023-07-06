import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "./IRepository";
export declare abstract class Repository<T extends IEntity> implements IRepository<T> {
    private readonly table;
    constructor(table: string);
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | undefined>;
    update(dataObject: T): Promise<T>;
    updateById(id: number, dataObject: IEntityDetails<T>): Promise<T>;
    private getUpdateProps;
    private getUpdateValues;
    private getDataObjectProps;
    private getDataObjectPlaceholders;
    private getDataObjectValues;
}
