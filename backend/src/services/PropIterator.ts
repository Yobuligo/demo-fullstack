import { IProp } from "./IProp";
import { IPropIterator } from "./IPropIterator";

class PropIterator<T> implements IPropIterator<T> {
  private separator = "";
  constructor(private readonly object: T) {}

  setSeparator(separator: string): IPropIterator<T> {
    this.separator = separator;
    return this;
  }

  forEach(block: (prop: IProp<T>, code: string) => string | undefined): string {
    let code = "";
    let propCount = 0;
    for (const key in this.object) {
      propCount++;
      if (this.separator.length > 0) {
        code += this.separator;
      }
      const newCode = block(
        { name: key, value: this.object[key], count: propCount },
        code
      );
      if (newCode) {
        code += newCode;
      }
    }
    return code;
  }
}

export const createPropIterator = <T>(object: T): IPropIterator<T> => {
  return new PropIterator(object);
};
