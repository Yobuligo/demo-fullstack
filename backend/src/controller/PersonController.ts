import { Controller } from "../core/Controller";
import { IPerson } from "../shared/model/IPerson";

export class PersonController extends Controller<IPerson> {
  constructor() {
    super("/persons");
  }
}
