"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropIteratorFactory = void 0;
const PropIterator_1 = require("./PropIterator");
class PropIteratorFactory {
    create(object) {
        return new PropIterator_1.PropIterator(object);
    }
}
exports.PropIteratorFactory = PropIteratorFactory;
//# sourceMappingURL=PropIteratorFactory.js.map