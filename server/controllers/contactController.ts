import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { validateContactInput } from '../validators';
import { logger } from '../utils/logger';
import { NotificationService } from '../services/notificationService';

export const handleContactSubmit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { errors, sanitized } = validateContactInput(req.body);

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
    const emailSubject = `[Synckraft Contact Alert] New Enquiry from ${sanitized.name}`;
    const emailBody = `
      <h3>New Enquiry Received</h3>
      <p><strong>Name:</strong> ${sanitized.name}</p>
      <p><strong>Company:</strong> ${sanitized.company || 'N/A'}</p>
      <p><strong>Email:</strong> ${sanitized.email}</p>
      <p><strong>Phone:</strong> ${sanitized.phone || 'N/A'}</p>
      <p><strong>Industry:</strong> ${sanitized.industry || 'N/A'}</p>
      <p><strong>Service:</strong> ${sanitized.service || 'N/A'}</p>
      <p><strong>Message:</strong> ${sanitized.message || 'N/A'}</p>
    `;
    await NotificationService.sendEmailNotification(adminEmail, emailSubject, emailBody);

    // 2. Trigger WhatsApp alert (to all registered numbers)
    const whatsAppMessage = `🚨 *New Synckraft Enquiry* 🚨\n\n👤 *Name:* ${sanitized.name}\n🏢 *Company:* ${sanitized.company || 'N/A'}\n✉️ *Email:* ${sanitized.email}\n📞 *Phone:* ${sanitized.phone || 'N/A'}\n💬 *Message:* ${sanitized.message || 'N/A'}`;
    for (const phone of alertPhones) {
      await NotificationService.sendWhatsAppNotification(phone, whatsAppMessage);
    }

    // 3. Webhook Integration point for the future Universal Synckraft Platform
    await NotificationService.triggerUniversalPlatformWebhook('contact.enquiry', sanitized);

    res.status(201).json({
      success: true,
      message: 'Contact enquiry submitted successfully. We will reach out to you shortly.',
    });
  } catch (error) {
    next(error);
  }
};
