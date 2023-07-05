import { IIdGenerator } from "./IIdGenerator";
export declare class IdGenerator implements IIdGenerator {
    private cursor;
    next(): string;
}
