import { IIdGenerator } from "./IIdGenerator";

export class IdGenerator implements IIdGenerator {
  private cursor = 0;

  next(): string {
    this.cursor++;
    return this.cursor.toString();
  }
}
