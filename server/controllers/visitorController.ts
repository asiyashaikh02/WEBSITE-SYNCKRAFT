import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { validateVisitorInput } from '../validators';
import { Visitor } from '../models/types';

export const handleVisitorTrack = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { errors, sanitized } = validateVisitorInput(req.body);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors,
      });
      return;
    }

    const savedVisitor = await DbService.insert<Visitor>('visitors', sanitized);

    res.status(201).json({
      success: true,
      message: 'Visitor tracking session recorded.',
      data: savedVisitor,
    });
  } catch (error) {
    next(error);
  }
};
