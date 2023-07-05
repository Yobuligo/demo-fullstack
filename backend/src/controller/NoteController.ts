import { Controller } from "../core/Controller";
import { INote } from "../shared/model/INote";
import { IdProvider } from "../services/IdProvider";

export class NoteController extends Controller<INote> {
  constructor() {
    super("/notes", [
      {
        id: IdProvider.next(),
        createdAt: new Date(),
        changedAt: new Date(),
        text: "first",
      },
      {
        id: IdProvider.next(),
        createdAt: new Date(),
        changedAt: new Date(),
        text: "second",
      },
    ]);
  }
}
