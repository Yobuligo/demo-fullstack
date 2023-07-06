"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepository = void 0;
const Repository_1 = require("../../services/Repository");
class NoteRepository extends Repository_1.Repository {
    constructor() {
        super("notes");
    }
}
exports.NoteRepository = NoteRepository;
//# sourceMappingURL=NoteRepository.js.map