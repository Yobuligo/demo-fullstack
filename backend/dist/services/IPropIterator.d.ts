import { IProp } from "./IProp";
export interface IPropIterator<T> {
    forEach(block: (prop: IProp<T>, code: string) => void): string;
}
