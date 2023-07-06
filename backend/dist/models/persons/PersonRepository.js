"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRepository = void 0;
const Repository_1 = require("../../services/Repository");
class PersonRepository extends Repository_1.Repository {
    constructor() {
        super("persons");
    }
}
exports.PersonRepository = PersonRepository;
//# sourceMappingURL=PersonRepository.js.map