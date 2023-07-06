import { Controller } from "../../core/Controller";
import { INote } from "../../shared/model/INote";
import { NoteRepository } from "./NoteRepository";

export class NoteController extends Controller<INote> {
  constructor() {
    super("/notes", new NoteRepository());
  }
}
