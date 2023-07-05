import { Service } from "./Service";
export interface IServiceProvider {
    fetch<T>(abstractServiceType: new () => Service<T>): T;
    fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined;
    put<T>(abstractServiceType: new () => Service<T>, service: T): void;
}
