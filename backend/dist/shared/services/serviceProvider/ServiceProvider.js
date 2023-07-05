"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SP = void 0;
const error_1 = require("../../utils/error");
const ServiceInstanceType_1 = require("./ServiceInstanceType");
class ServiceProvider {
    constructor() {
        this.serviceDefinition = new Map();
    }
    fetch(abstractServiceType) {
        var _a;
        return (_a = this.fetchOrNull(abstractServiceType)) !== null && _a !== void 0 ? _a : (0, error_1.error)();
    }
    fetchOrNull(abstractServiceType) {
        const serviceDefinition = this.serviceDefinition.get(abstractServiceType);
        if (!serviceDefinition) {
            return undefined;
        }
        if (serviceDefinition.serviceInstanceType ===
            ServiceInstanceType_1.ServiceInstanceType.SINGLE_INSTANTIABLE) {
            return this.handleSingleInstantiable(serviceDefinition);
        }
        else {
            return this.createServiceByDefinition(serviceDefinition);
        }
    }
    put(abstractServiceType, service) {
        this.serviceDefinition.set(abstractServiceType, {
            serviceInstanceType: ServiceInstanceType_1.ServiceInstanceType.SINGLE_INSTANTIABLE,
            service: service,
        });
    }
    register(abstractServiceType, concreteServiceType, serviceInstanceType) {
        this.serviceDefinition.set(abstractServiceType, {
            concreteServiceType,
            serviceInstanceType: serviceInstanceType !== null && serviceInstanceType !== void 0 ? serviceInstanceType : ServiceInstanceType_1.ServiceInstanceType.SINGLE_INSTANTIABLE,
        });
    }
    handleSingleInstantiable(serviceDefinition) {
        if (serviceDefinition.service) {
            return serviceDefinition.service;
        }
        serviceDefinition.service =
            this.createServiceByDefinition(serviceDefinition);
        return serviceDefinition.service;
    }
    createServiceByDefinition(serviceDefinition) {
        var _a;
        const concreteServiceType = (_a = serviceDefinition.concreteServiceType) !== null && _a !== void 0 ? _a : (0, error_1.error)("must not be occur");
        return new concreteServiceType();
    }
}
exports.SP = new ServiceProvider();
//# sourceMappingURL=ServiceProvider.js.map