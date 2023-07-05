import { Controller } from "../core/Controller";
import { IdGeneratorService } from "../services/IIdGenerator";
import { INote } from "../shared/model/INote";
import { SP } from "../shared/services/serviceProvider/ServiceProvider";

export class NoteController extends Controller<INote> {
  constructor() {
    super("/notes", [
      {
        id: SP.fetch(IdGeneratorService).next(),
        createdAt: new Date(),
        changedAt: new Date(),
        text: "first",
      },
      {
        id: SP.fetch(IdGeneratorService).next(),
        createdAt: new Date(),
        changedAt: new Date(),
        text: "second",
      },
    ]);
  }
}
