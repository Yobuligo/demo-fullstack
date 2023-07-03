"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const Controller_1 = require("../core/Controller");
const IdProvider_1 = require("../services/IdProvider");
class NoteController extends Controller_1.Controller {
    constructor() {
        super("/notes", [
            {
                id: IdProvider_1.IdProvider.next(),
                createdAt: new Date(),
                changedAt: new Date(),
                text: "first",
            },
            {
                id: IdProvider_1.IdProvider.next(),
                createdAt: new Date(),
                changedAt: new Date(),
                text: "second",
            },
        ]);
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=NoteController.js.map