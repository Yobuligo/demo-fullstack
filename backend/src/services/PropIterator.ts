import { IProp } from "./IProp";
import { IPropIterator } from "./IPropIterator";

class PropIterator<T> implements IPropIterator<T> {
  constructor(private readonly object: T) {}

  forEach(block: (prop: IProp<T>, code: string) => void): string {
    let code = "";
    let propCount = 0;
    for (const key in this.object) {
      propCount++;
      block({ name: key, value: this.object[key], count: propCount }, code);
    }
    return code;
  }
}

export const createPropIterator = <T>(object: T): IPropIterator<T> => {
  return new PropIterator(object);
};
