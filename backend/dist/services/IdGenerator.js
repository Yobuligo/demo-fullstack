"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
class IdGenerator {
    constructor() {
        this.cursor = 0;
    }
    next() {
        this.cursor++;
        return this.cursor.toString();
    }
}
exports.IdGenerator = IdGenerator;
//# sourceMappingURL=IdGenerator.js.map