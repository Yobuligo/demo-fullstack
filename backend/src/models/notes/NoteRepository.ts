import { Repository } from "../../services/Repository";
import { INote } from "../../shared/model/INote";

export class NoteRepository extends Repository<INote> {
  constructor() {
    super("notes");
  }
}
