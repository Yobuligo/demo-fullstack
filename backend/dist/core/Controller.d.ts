import { IRepository } from "../services/IRepository";
import { IEntity } from "../shared/types/IEntity";
export declare abstract class Controller<T extends IEntity> {
    private readonly path;
    private readonly repository;
    private version;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, repository: IRepository<T>);
    private delete;
    private get;
    private post;
    private put;
    private lastVersion;
    private updateVersion;
    private createEnvelope;
}
