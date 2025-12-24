export default class DomainError extends Error {
  public statusCode: number = 403;
  public status:string;
  public isOperational: boolean = true;

  constructor(message: string, statusCode: number = 403) {
    super(message);
    this.name = "DomainError";
    this.stack = new Error().stack;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
  }
}