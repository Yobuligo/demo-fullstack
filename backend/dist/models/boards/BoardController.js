"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const Controller_1 = require("../../core/Controller");
const BoardRepository_1 = require("./BoardRepository");
class BoardController extends Controller_1.Controller {
    constructor() {
        super("/boards", new BoardRepository_1.BoardRepository());
    }
}
exports.BoardController = BoardController;
//# sourceMappingURL=BoardController.js.map