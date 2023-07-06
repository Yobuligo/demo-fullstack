import { Controller } from "../../core/Controller";
import { IPerson } from "../../shared/model/IPerson";
import { PersonRepository } from "./PersonRepository";

export class PersonController extends Controller<IPerson> {
  constructor() {
    super("/persons", new PersonRepository());
  }
}
