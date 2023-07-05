import { IEntity } from "../shared/types/IEntity";
export declare abstract class Controller<T extends IEntity> {
    private readonly path;
    private readonly data;
    private version;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, data?: T[]);
    private delete;
    private get;
    private post;
    private put;
    private lastVersion;
    private findIndexByReq;
    private updateVersion;
    private createEnvelope;
}
