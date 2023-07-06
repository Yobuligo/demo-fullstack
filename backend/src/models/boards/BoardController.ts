import { Controller } from "../../core/Controller";
import { IBoard } from "../../shared/model/IBoard";
import { BoardRepository } from "./BoardRepository";

export class BoardController extends Controller<IBoard> {
  constructor() {
    super("/boards", new BoardRepository());
  }
}
