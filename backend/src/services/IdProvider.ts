class IdProviderDefault {
  private cursor = 0;

  next(): string {
    this.cursor++;
    return this.cursor.toString();
  }
}

export const IdProvider = new IdProviderDefault();
