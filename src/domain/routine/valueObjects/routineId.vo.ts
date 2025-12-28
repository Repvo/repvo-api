import DataError from "@/domain/core/errors/DataError";

export default class RoutineId {
  static MAX_LENGTH = 200;
  private constructor(private readonly _value: string) {}

  static create(value: string): RoutineId {
    // Add validation logic here if needed
    if (!value || value.trim().length === 0) {
      throw new DataError("RoutineId cannot be empty");
    }
    if (value.length > 100) {
      throw new DataError(`RoutineId cannot exceed ${this.MAX_LENGTH} characters`);
    }

    return new RoutineId(value);
  }

  get value(): string {
    return this._value;
  }

}
