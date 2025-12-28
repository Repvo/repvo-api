import InfrastructureError from "./InfrastructureError";

export default class DatabaseError extends InfrastructureError {
  constructor(message: string, statusCode: number = 500) {
    super(message, statusCode);
    this.name = "DatabaseError";
  }
}