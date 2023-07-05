"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongPollingController = void 0;
const express_1 = require("express");
class LongPollingController {
    constructor(path, data = []) {
        this.path = path;
        this.data = data;
        this.handlers = [];
        this.router = (0, express_1.Router)();
        this.get();
    }
    get() {
        this.router.get(this.path, (req, res) => {
            this.handlers.push(res);
        });
    }
}
exports.LongPollingController = LongPollingController;
//# sourceMappingURL=LongPollingController.js.map