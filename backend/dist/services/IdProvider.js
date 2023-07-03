"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdProvider = void 0;
class IdProviderDefault {
    constructor() {
        this.cursor = 0;
    }
    next() {
        this.cursor++;
        return this.cursor.toString();
    }
}
exports.IdProvider = new IdProviderDefault();
//# sourceMappingURL=IdProvider.js.map