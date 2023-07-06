import { Repository } from "../../services/Repository";
import { IBoard } from "../../shared/model/IBoard";

export class BoardRepository extends Repository<IBoard> {
  constructor() {
    super("boards");
  }
}
