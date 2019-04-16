export class BaseModel<T> {
  constructor(opts?: Partial<T>) {
    Object.assign(this, opts);
  }
  update(opts: Partial<T>) {
    return Object.assign(this, opts);
  }
}
