import { logger } from '../utils/logger';
import { DbService } from './dbService';

export class NotificationService {
  /**
   * Send WhatsApp notification (Simulation / API callback).
   */
  static async sendWhatsAppNotification(to: string, message: string): Promise<boolean> {
    try {
      const timestamp = new Date().toISOString();
      
      // Simulation Log
      logger.info(`WHATSAPP NOTIFICATION SENT TO ${to}: "${message}"`);

      // Future Gateway Integration Point:
      // const response = await fetch('https://api.twilio.com/...', { method: 'POST', body: ... });
      
      // Log notification in audit logs
      await DbService.insert<any>('audit_logs', {
        action: 'whatsapp_notification_sent',
        details: { to, messageLength: message.length },
        timestamp
      });

      return true;
    } catch (err) {
      logger.error('Failed to send WhatsApp notification', err);
      return false;
    }
  }

  /**
   * Send Email notification (Simulation / SMTP callback).
   */
  static async sendEmailNotification(to: string, subject: string, htmlContent: string): Promise<boolean> {
    try {
      const timestamp = new Date().toISOString();
      
      // Simulation Log
      logger.info(`EMAIL NOTIFICATION SENT TO ${to} | Subject: "${subject}"`);

      // Future SMTP Gateway (e.g. nodemailer, Mailgun):
      // transporter.sendMail({ to, subject, html: htmlContent });

      // Log notification in audit logs
      await DbService.insert<any>('audit_logs', {
        action: 'email_notification_sent',
        details: { to, subject },
        timestamp
      });

      return true;
    } catch (err) {
      logger.error('Failed to send email notification', err);
      return false;
    }
  }

  /**
   * Forward payload to the Universal Synckraft Platform webhook.
   */
  static async triggerUniversalPlatformWebhook(event: string, payload: Record<string, any>): Promise<void> {
    try {
      const list = await DbService.read<any>('settings');
      const settings = list[0] || {};
      const webhookUrl = settings.universalPlatformWebhookUrl;

      if (!webhookUrl) {
        logger.info(`Universal Platform Webhook skipped: No URL configured in settings.`);
        return;
      }

      logger.info(`Triggering Universal Platform Webhook for event: ${event} -> ${webhookUrl}`);

      // Perform non-blocking webhook request
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Synckraft-Signature': 'synckraft_hmac_secret_placeholder',
          'X-Synckraft-Event': event,
        },
        body: JSON.stringify({
          event,
          timestamp: new Date().toISOString(),
          data: payload,
        }),
      }).catch((err) => {
        logger.error(`Webhook network delivery failed for URL: ${webhookUrl}`, err);
      });
    } catch (err) {
      logger.error('Error in webhook forwarder', err);
    }
  }
}
