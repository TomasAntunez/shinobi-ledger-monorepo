export class Clock {
  private constructor(private readonly date: Date) {}

  static create(): Clock {
    return new Clock(new Date());
  }

  static createTimestamp(): number {
    return Date.now();
  }

  toTimestamp(): number {
    return this.date.getTime();
  }
}
