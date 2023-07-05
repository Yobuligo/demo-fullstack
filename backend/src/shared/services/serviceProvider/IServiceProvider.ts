import { Service } from "./Service";
import { ServiceInstanceType } from "./ServiceInstanceType";

export interface IServiceProvider {
  fetch<T>(abstractServiceType: new () => Service<T>): T;
  fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined;
  put<T>(abstractServiceType: new () => Service<T>, service: T): void;
  register<T>(
    abstractServiceType: new () => Service<T>,
    concreteServiceType: new () => T,
    serviceInstanceType?: ServiceInstanceType
  ): void;
}
