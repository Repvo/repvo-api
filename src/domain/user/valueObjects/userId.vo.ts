import DataError from "@/domain/core/errors/DataError";

export default class UserId {
  static MAX_LENGTH = 200;
  private constructor(private readonly _value: string) {}

  static create(value: string): UserId {
    // Add validation logic here if needed
    if (!value || value.trim().length === 0) {
      throw new DataError("UserId cannot be empty");
    }
    if (value.length > 100) {
      throw new DataError(`UserId cannot exceed ${this.MAX_LENGTH} characters`);
    }

    return new UserId(value);
  }

  get value(): string {
    return this._value;
  }

}
