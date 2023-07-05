import { IEntity } from "../shared/types/IEntity";
export declare class LongPollingController<T extends IEntity> {
    private readonly path;
    private readonly data;
    private handlers;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, data?: T[]);
    private get;
}
