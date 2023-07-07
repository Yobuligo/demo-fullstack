"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropIterator = void 0;
class PropIterator {
    constructor(object) {
        this.object = object;
        this.separator = "";
    }
    setSeparator(separator) {
        this.separator = separator;
        return this;
    }
    forEach(block) {
        let code = "";
        let propCount = 0;
        for (const key in this.object) {
            propCount++;
            if (this.separator.length > 0) {
                code += this.separator;
            }
            const newCode = block({ name: key, value: this.object[key], count: propCount }, code);
            if (newCode) {
                code += newCode;
            }
        }
        return code;
    }
}
const createPropIterator = (object) => {
    return new PropIterator(object);
};
exports.createPropIterator = createPropIterator;
//# sourceMappingURL=PropIterator.js.map