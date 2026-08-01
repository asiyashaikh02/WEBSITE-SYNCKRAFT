import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export interface AppError extends Error {
  statusCode?: number;
  errors?: string[];
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  // Log the detailed error
  logger.error(`${req.method} ${req.originalUrl} - Error: ${message}`, {
    stack: err.stack,
    errors: err.errors,
    statusCode,
  });

  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || undefined,
  });
};
