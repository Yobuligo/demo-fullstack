import { Service } from "../shared/services/serviceProvider/Service";
import { IPropertyIterator } from "./IPropIterator";
export interface IPropIteratorFactory {
    create<T>(object: T): IPropertyIterator<T>;
}
export declare class PropIteratorFactoryService extends Service<IPropIteratorFactory> {
}
