import { Service } from "../shared/services/serviceProvider/Service";

export interface IIdGenerator {
  next(): string;
}

export class IdGeneratorService extends Service<IIdGenerator> {}
