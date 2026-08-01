import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const rateLimitStore: Record<string, RateLimitStore> = {};

export const createRateLimiter = (options: {
  windowMs: number;
  max: number;
  message: string;
}) => {
  const { windowMs, max, message } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    const ip = req.ip || req.headers['x-forwarded-for']?.toString() || 'unknown';
    const currentTime = Date.now();

    // Clean up expired keys periodically (optional, but good for memory)
    // Simply reset if window has passed
    if (!rateLimitStore[ip] || currentTime > rateLimitStore[ip].resetTime) {
      rateLimitStore[ip] = {
        count: 1,
        resetTime: currentTime + windowMs,
      };
      return next();
    }

    rateLimitStore[ip].count += 1;

    if (rateLimitStore[ip].count > max) {
      logger.warn(`Rate limit exceeded for IP: ${ip} on route: ${req.originalUrl}`);
      res.status(429).json({
        success: false,
        message,
      });
      return;
    }

    next();
  };
};

// Global API rate limiter: max 100 requests per 15 minutes
export const apiLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

// Stricter limiter for form submissions (contact, consultation, newsletter): max 10 submissions per 10 minutes
export const formLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: 'Too many form submissions. Please try again after 10 minutes.',
});
