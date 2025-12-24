import DataError from "@/domain/core/errors/DataError";

export default class RoutineName {

    static MAX_LENGTH = 100;
    private constructor(private readonly _value: string) {}

    static create(value: string): RoutineName {
        // Add validation logic here if needed
        if (!value || value.trim().length === 0) throw new DataError("Routine name cannot be empty");
        if (value.length > 100) throw new DataError(`Routine name cannot exceed ${this.MAX_LENGTH} characters`);
        
        return new RoutineName(value);
    }


}