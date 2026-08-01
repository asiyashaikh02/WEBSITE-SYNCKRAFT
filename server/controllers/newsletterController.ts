import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { validateNewsletterInput } from '../validators';
import { logger } from '../utils/logger';
import { Newsletter } from '../models/types';
import { NotificationService } from '../services/notificationService';

export const handleNewsletterSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { errors, sanitized } = validateNewsletterInput(req.body);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors,
      });
      return;
    }

    // Check for duplicate subscription
    const existing = await DbService.findOne<Newsletter>('newsletters', (item) => item.email === sanitized.email);
    if (existing) {
      res.status(200).json({
        success: true,
        message: 'You have already subscribed to our newsletter.',
        data: existing,
      });
      return;
    }

    const savedNewsletter = await DbService.insert<Newsletter>('newsletters', sanitized);
    
    logger.info(`New newsletter subscriber: ${savedNewsletter.email} (ID: ${savedNewsletter.id})`);

    // Webhook Integration point for the future Universal Platform
    await NotificationService.triggerUniversalPlatformWebhook('newsletter.subscribe', sanitized);

    res.status(201).json({
      success: true,
      message: 'Subscribed to newsletter successfully.',
      data: savedNewsletter,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Export newsletter list as CSV.
 */
export const handleNewsletterExport = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const subscribers = await DbService.read<Newsletter>('newsletters');

    // Convert array to CSV string
    const csvHeaders = 'ID,Email,SubscribedAt\n';
    const csvRows = subscribers
      .map((sub) => `"${sub.id || ''}","${sub.email}","${sub.createdAt || ''}"`)
      .join('\n');
    
    const csvContent = csvHeaders + csvRows;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=newsletter_subscribers.csv');
    res.status(200).send(csvContent);
  } catch (error) {
    next(error);
  }
};
