import { IProp } from "./IProp";
export interface IPropIterator<T> {
    setSeparator(separator: string): IPropIterator<T>;
    forEach(block: (prop: IProp<T>, code: string) => string | undefined): string;
}
