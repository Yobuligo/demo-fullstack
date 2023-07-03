export interface IEnvelope<T> {
  version: Date;
  data: T;
}
