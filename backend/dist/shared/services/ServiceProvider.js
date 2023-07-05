"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
const error_1 = require("../utils/error");
class ServiceProvider {
    constructor() {
        this.serviceDefinition = new Map();
    }
    fetch(abstractServiceType) {
        var _a;
        return (_a = this.fetchOrNull(abstractServiceType)) !== null && _a !== void 0 ? _a : (0, error_1.error)();
    }
    fetchOrNull(abstractServiceType) {
        return this.serviceDefinition.get(abstractServiceType);
    }
    put(abstractServiceType, service) {
        this.serviceDefinition.set(abstractServiceType, service);
    }
}
exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=ServiceProvider.js.map