import { ServiceInstanceType } from "./ServiceInstanceType";
export interface IServiceDefinition<T> {
    concreteServiceType?: new () => T;
    serviceInstanceType: ServiceInstanceType;
    service?: T;
}
