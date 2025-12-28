export default class InfrastructureError extends Error {
  public statusCode: number = 500;
  public status:string;
  public isOperational: boolean = true;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = "InfrastructureError";
    this.stack = new Error().stack;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
  }
}