import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { validateConsultationInput } from '../validators';
import { logger } from '../utils/logger';
import { NotificationService } from '../services/notificationService';

export const handleConsultationSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { errors, sanitized } = validateConsultationInput(req.body);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed.',
        errors,
      });
      return;
    }

    // Retrieve active settings configuration
    const settingsList = await DbService.read<any>('settings');
    const settings = settingsList[0] || {};
    const adminEmail = settings.email || 'grow@synckraft.in';
    const alertPhones = settings.phoneNumbers || ['+91-98677-99655'];

    // 1. Trigger Email alert
    const emailSubject = `[Synckraft Consultation Booking] Request from ${sanitized.name}`;
    const emailBody = `
      <h3>Strategy Consultation Requested</h3>
      <p><strong>Name:</strong> ${sanitized.name}</p>
      <p><strong>Company:</strong> ${sanitized.company || 'N/A'}</p>
      <p><strong>Email:</strong> ${sanitized.email}</p>
      <p><strong>Phone:</strong> ${sanitized.phone || 'N/A'}</p>
      <p><strong>Date Preferred:</strong> ${sanitized.preferredDate}</p>
      <p><strong>Time Preferred:</strong> ${sanitized.preferredTime}</p>
      <p><strong>Business Type:</strong> ${sanitized.businessType || 'N/A'}</p>
      <p><strong>Message:</strong> ${sanitized.message || 'N/A'}</p>
    `;
    await NotificationService.sendEmailNotification(adminEmail, emailSubject, emailBody);

    // 2. Trigger WhatsApp alert
    const whatsAppMessage = `📅 *New Strategy Consultation Booking* 📅\n\n👤 *Name:* ${sanitized.name}\n🏢 *Company:* ${sanitized.company || 'N/A'}\n✉️ *Email:* ${sanitized.email}\n📞 *Phone:* ${sanitized.phone || 'N/A'}\n🕒 *Schedule:* ${sanitized.preferredDate} at ${sanitized.preferredTime}\n💼 *Business Type:* ${sanitized.businessType || 'N/A'}`;
    for (const phone of alertPhones) {
      await NotificationService.sendWhatsAppNotification(phone, whatsAppMessage);
    }

    // 3. Webhook integration point for future Universal Synckraft Platform
    await NotificationService.triggerUniversalPlatformWebhook('consultation.booking', sanitized);

    res.status(201).json({
      success: true,
      message: 'Consultation booking submitted successfully. We will confirm your slot shortly.',
    });
  } catch (error) {
    next(error);
  }
};
