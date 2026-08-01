import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { validateEventInput } from '../validators';
import { Event } from '../models/types';

export const handleEventTrack = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { errors, sanitized } = validateEventInput(req.body);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors,
      });
      return;
    }

    const savedEvent = await DbService.insert<Event>('events', {
      ...sanitized,
      timestamp: new Date().toISOString(),
    });

    res.status(201).json({
      success: true,
      message: 'Event tracked successfully.',
      data: savedEvent,
    });
  } catch (error) {
    next(error);
  }
};
