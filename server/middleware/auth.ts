import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/crypto';
import { logger } from '../utils/logger';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: 'Super Admin' | 'Admin' | 'Sales' | 'HR' | 'Content Manager' | 'Marketing';
    name: string;
  };
}

/**
 * Authentication check middleware.
 */
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.',
    });
    return;
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyJwt(token);

  if (!payload) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired token.',
    });
    return;
  }

  req.user = {
    id: payload.id,
    email: payload.email,
    role: payload.role,
    name: payload.name,
  };

  next();
};

/**
 * Role-Based Access Control (RBAC) middleware generator.
 */
export const requireRoles = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: 'Authentication required.',
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn(`Unauthorized role access attempt: User ${req.user.email} (${req.user.role}) tried to access route restricted to: ${allowedRoles.join(', ')}`);
      res.status(403).json({
        success: false,
        message: 'Forbidden. You do not have the required permissions to perform this action.',
      });
      return;
    }

    next();
  };
};
