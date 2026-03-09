export class AppError extends Error {
    constructor(
      public message: string,
      public code: string,
      public statusCode: number = 400
    ) {
      super(message)
    }
  }
  
  export class NotFoundError extends AppError {
    constructor(resource: string) {
      super(`${resource} tidak ditemukan`, 'NOT_FOUND', 404)
    }
  }
  
  export class UnauthorizedError extends AppError {
    constructor() {
      super('Tidak memiliki akses', 'UNAUTHORIZED', 401)
    }
  }