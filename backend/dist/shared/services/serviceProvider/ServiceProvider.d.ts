import { IServiceProvider } from "./IServiceProvider";
import { Service } from "./Service";
import { ServiceInstanceType } from "./ServiceInstanceType";
declare class ServiceProvider implements IServiceProvider {
    private serviceDefinition;
    fetch<T>(abstractServiceType: new () => Service<T>): T;
    fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined;
    put<T>(abstractServiceType: new () => Service<T>, service: T): void;
    register<T>(abstractServiceType: new () => Service<T>, concreteServiceType: new () => T, serviceInstanceType?: ServiceInstanceType): void;
    private handleSingleInstantiable;
    private createServiceByDefinition;
}
export declare const SP: ServiceProvider;
export {};
