import { IServiceProvider } from "./IServiceProvider";
import { Service } from "./Service";
export declare class ServiceProvider implements IServiceProvider {
    private serviceDefinition;
    fetch<T>(abstractServiceType: new () => Service<T>): T;
    fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined;
    put<T>(abstractServiceType: new () => Service<T>, service: T): void;
}
