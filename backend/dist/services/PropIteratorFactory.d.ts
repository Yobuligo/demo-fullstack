import { IPropertyIterator } from "./IPropIterator";
import { IPropIteratorFactory } from "./IPropIteratorFactory";
export declare class PropIteratorFactory implements IPropIteratorFactory {
    create<T>(object: T): IPropertyIterator<T>;
}
