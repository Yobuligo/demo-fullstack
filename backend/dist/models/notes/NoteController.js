"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const Controller_1 = require("../../core/Controller");
const NoteRepository_1 = require("./NoteRepository");
class NoteController extends Controller_1.Controller {
    constructor() {
        super("/notes", new NoteRepository_1.NoteRepository());
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=NoteController.js.map