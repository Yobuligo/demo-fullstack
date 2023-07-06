"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropIterator = void 0;
class PropIterator {
    constructor(object) {
        this.object = object;
    }
    forEach(block) {
        let code = "";
        let propCount = 0;
        for (const key in this.object) {
            propCount++;
            block({ name: key, value: this.object[key], count: propCount }, code);
        }
        return code;
    }
}
const createPropIterator = (object) => {
    return new PropIterator(object);
};
exports.createPropIterator = createPropIterator;
//# sourceMappingURL=PropIterator.js.map