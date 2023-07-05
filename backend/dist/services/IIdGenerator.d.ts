import { Service } from "../shared/services/serviceProvider/Service";
export interface IIdGenerator {
    next(): string;
}
export declare class IdGeneratorService extends Service<IIdGenerator> {
}
