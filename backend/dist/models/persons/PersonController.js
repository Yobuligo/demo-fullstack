"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const Controller_1 = require("../../core/Controller");
const PersonRepository_1 = require("./PersonRepository");
class PersonController extends Controller_1.Controller {
    constructor() {
        super("/persons", new PersonRepository_1.PersonRepository());
    }
}
exports.PersonController = PersonController;
//# sourceMappingURL=PersonController.js.map