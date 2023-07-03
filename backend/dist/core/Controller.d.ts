import { IHaveId } from "../model/types/IHaveId";
export declare abstract class Controller<T extends IHaveId> {
    private readonly path;
    private readonly data;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, data?: T[]);
    private delete;
    private get;
    private post;
    private put;
    private findIndexByReq;
}
