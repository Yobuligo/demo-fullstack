import { Repository } from "../../services/Repository";
import { IPerson } from "../../shared/model/IPerson";

export class PersonRepository extends Repository<IPerson> {
  constructor() {
    super("persons");
  }
}
