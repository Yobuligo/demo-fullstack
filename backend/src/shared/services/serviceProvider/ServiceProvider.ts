import { error } from "../../utils/error";
import { IServiceDefinition } from "./IServiceDefinition";
import { IServiceProvider } from "./IServiceProvider";
import { Service } from "./Service";
import { ServiceInstanceType } from "./ServiceInstanceType";

class ServiceProvider implements IServiceProvider {
  private serviceDefinition: Map<
    new () => Service<unknown>,
    IServiceDefinition<unknown>
  > = new Map();

  fetch<T>(abstractServiceType: new () => Service<T>): T {
    return this.fetchOrNull(abstractServiceType) ?? error();
  }

  fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined {
    const serviceDefinition = this.serviceDefinition.get(abstractServiceType);
    if (!serviceDefinition) {
      return undefined;
    }

    if (
      serviceDefinition.serviceInstanceType ===
      ServiceInstanceType.SINGLE_INSTANTIABLE
    ) {
      return this.handleSingleInstantiable(serviceDefinition) as T;
    } else {
      return this.createServiceByDefinition(serviceDefinition) as T;
    }
  }

  put<T>(abstractServiceType: new () => Service<T>, service: T): void {
    this.serviceDefinition.set(abstractServiceType, {
      serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
      service: service,
    });
  }

  register<T>(
    abstractServiceType: new () => Service<T>,
    concreteServiceType: new () => T,
    serviceInstanceType?: ServiceInstanceType
  ): void {
    this.serviceDefinition.set(abstractServiceType, {
      concreteServiceType,
      serviceInstanceType:
        serviceInstanceType ?? ServiceInstanceType.SINGLE_INSTANTIABLE,
    });
  }

  private handleSingleInstantiable<T>(
    serviceDefinition: IServiceDefinition<T>
  ): T {
    if (serviceDefinition.service) {
      return serviceDefinition.service;
    }

    serviceDefinition.service =
      this.createServiceByDefinition(serviceDefinition);
    return serviceDefinition.service;
  }

  private createServiceByDefinition<T>(
    serviceDefinition: IServiceDefinition<T>
  ): T {
    const concreteServiceType =
      serviceDefinition.concreteServiceType ?? error("must not be occur");
    return new concreteServiceType();
  }
}

export const SP = new ServiceProvider();
