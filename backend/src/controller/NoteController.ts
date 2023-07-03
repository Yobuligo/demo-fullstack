import { Controller } from "../core/Controller";
import { INote } from "../model/INote";
import { IdProvider } from "../services/IdProvider";

export class NoteController extends Controller<INote> {
  constructor() {
    super("/notes", [
      { id: IdProvider.next(), text: "first" },
      { id: IdProvider.next(), text: "second" },
    ]);
  }
}
