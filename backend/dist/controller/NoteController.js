"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const Controller_1 = require("../core/Controller");
const IIdGenerator_1 = require("../services/IIdGenerator");
const ServiceProvider_1 = require("../shared/services/serviceProvider/ServiceProvider");
class NoteController extends Controller_1.Controller {
    constructor() {
        super("/notes", [
            {
                id: ServiceProvider_1.SP.fetch(IIdGenerator_1.IdGeneratorService).next(),
                createdAt: new Date(),
                changedAt: new Date(),
                text: "first",
            },
            {
                id: ServiceProvider_1.SP.fetch(IIdGenerator_1.IdGeneratorService).next(),
                createdAt: new Date(),
                changedAt: new Date(),
                text: "second",
            },
        ]);
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=NoteController.js.map