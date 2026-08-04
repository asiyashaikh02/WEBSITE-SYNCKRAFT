import { Request, Response, NextFunction } from 'express';
import { DbService } from '../services/dbService';
import { logger } from '../utils/logger';

// Standardized CRUD Handler Generator
export const createCrudHandlers = (collection: string) => {
  return {
    list: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const items = await DbService.read(collection);
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        next(error);
      }
    },
    
    get: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { id } = req.params;
        const item = await DbService.findOne(collection, (x: any) => x.id === id);
        if (!item) {
          res.status(404).json({ success: false, message: 'Item not found.' });
          return;
        }
        res.status(200).json({ success: true, data: item });
      } catch (error) {
        next(error);
      }
    },

    create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const newItem = await DbService.insert(collection, req.body);
        logger.info(`Admin created new item in collection ${collection} (ID: ${(newItem as any).id})`);
        res.status(201).json({ success: true, message: 'Item created successfully.', data: newItem });
      } catch (error) {
        next(error);
      }
    },

    update: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { id } = req.params;
        const items = await DbService.read<any>(collection);
        const idx = items.findIndex((x: any) => x.id === id);
        if (idx === -1) {
          res.status(404).json({ success: false, message: 'Item not found.' });
          return;
        }

        items[idx] = {
          ...items[idx],
          ...req.body,
          updatedAt: new Date().toISOString()
        };

        await DbService.write(collection, items);
        logger.info(`Admin updated item in collection ${collection} (ID: ${id})`);
        res.status(200).json({ success: true, message: 'Item updated successfully.', data: items[idx] });
      } catch (error) {
        next(error);
      }
    },

    delete: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const { id } = req.params;
        const items = await DbService.read(collection);
        const idx = items.findIndex((x: any) => x.id === id);
        if (idx === -1) {
          res.status(404).json({ success: false, message: 'Item not found.' });
          return;
        }

        items.splice(idx, 1);
        await DbService.write(collection, items);
        logger.info(`Admin deleted item from collection ${collection} (ID: ${id})`);
        res.status(200).json({ success: true, message: 'Item deleted successfully.' });
      } catch (error) {
        next(error);
      }
    }
  };
};

// Settings CRUD is special (single record storage)
export const getSettings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const list = await DbService.read('settings');
    const settings = list[0] || {
      companyName: 'Synckraft Technologies Private Limited',
      email: 'grow@synckraft.in',
      phoneNumbers: ['+91-98677-99655'],
      address: 'Synckraft Technologies Private Limited, Daga Plaza, In Front of D-Mart, Biyani Square Camp, Amravati, Maharashtra – 444602, India',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/synckraft-technologies-private-limited/',
        facebook: 'https://www.facebook.com/SynckraftTechnologies/',
        instagram: 'https://www.instagram.com/synckraft_technologies/?__pwa=1#'
      },
      seoDefaults: {
        title: 'Synckraft Technologies – Enterprise Software, CRM Systems & AI Automation',
        description: 'Synckraft Technologies engineers high-performance custom ERP/CRM platforms, AI voice agents, and workflow automation solutions.'
      }
    };
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
};

export const updateSettings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const list = await DbService.read<any>('settings');
    const existing = list[0] || {};
    const updated = {
      ...existing,
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    await DbService.write('settings', [updated]);
    logger.info('Admin updated global settings configuration.');
    res.status(200).json({ success: true, message: 'Settings updated successfully.', data: updated });
  } catch (error) {
    next(error);
  }
};

// Dashboard Stats & Analytics Aggregation
export const getDashboardStats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const contacts = await DbService.read('contacts');
    const consultations = await DbService.read('consultations');
    const subscribers = await DbService.read('newsletters');
    const visitors = await DbService.read('visitors');
    const events = await DbService.read('events');

    // Aggregate visitor analytics
    const totalVisitors = visitors.length;
    const totalLeads = contacts.length + consultations.length;

    // Popular Pages
    const pageViewEvents = events.filter((e: any) => e.eventType === 'PageView');
    const pageCounts: Record<string, number> = {};
    pageViewEvents.forEach((e: any) => {
      const page = e.eventData?.path || '/';
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    const popularPages = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);

    // CTA Click counts
    const ctaClickEvents = events.filter((e: any) => e.eventType === 'CTAClick');
    const ctaCounts: Record<string, number> = {};
    ctaClickEvents.forEach((e: any) => {
      const ctaName = e.eventData?.ctaName || 'Unknown CTA';
      ctaCounts[ctaName] = (ctaCounts[ctaName] || 0) + 1;
    });
    const ctaClicks = Object.entries(ctaCounts)
      .map(([cta, clicks]) => ({ cta, clicks }))
      .sort((a, b) => b.clicks - a.clicks);

    // Recent Activity Feed
    const recentActivities = [
      ...contacts.map((c: any) => ({
        type: 'contact',
        user: c.name,
        email: c.email,
        timestamp: c.createdAt,
        message: 'Submitted a contact request form.'
      })),
      ...consultations.map((c: any) => ({
        type: 'consultation',
        user: c.name,
        email: c.email,
        timestamp: c.createdAt,
        message: `Booked strategy consultation on ${c.preferredDate} at ${c.preferredTime}.`
      })),
      ...subscribers.map((s: any) => ({
        type: 'newsletter',
        user: 'Subscriber',
        email: s.email,
        timestamp: s.createdAt,
        message: 'Subscribed to insights newsletter.'
      }))
    ]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10);

    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        contactRequestsCount: contacts.length,
        strategyCallsCount: consultations.length,
        newsletterSubscribersCount: subscribers.length,
        websiteVisitorsCount: totalVisitors,
        popularPages,
        ctaClicks,
        recentActivities
      }
    });
  } catch (error) {
    next(error);
  }
};
