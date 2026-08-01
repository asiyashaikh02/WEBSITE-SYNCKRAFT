import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const ip = req.ip || req.headers['x-forwarded-for']?.toString() || 'unknown';
    const logStr = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms (IP: ${ip})`;

    if (res.statusCode >= 500) {
      logger.error(logStr);
    } else if (res.statusCode >= 400) {
      logger.warn(logStr);
    } else {
      logger.info(logStr);
    }
  });

  next();
};
