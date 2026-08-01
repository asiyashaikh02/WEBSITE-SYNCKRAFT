import { Router } from 'express';
import { handleContactSubmit } from '../controllers/contactController';
import { handleConsultationSubmit } from '../controllers/consultationController';
import { handleNewsletterSubmit, handleNewsletterExport } from '../controllers/newsletterController';
import { handleVisitorTrack } from '../controllers/visitorController';
import { handleEventTrack } from '../controllers/eventController';
import { formLimiter } from '../middleware/rateLimiter';
import {
  handleLogin,
  handleLogout,
  handleForgotPassword,
  handleResetPassword,
  handleChangePassword,
  checkSession,
} from '../controllers/authController';
import {
  getDashboardStats,
  getSettings,
  updateSettings,
  createCrudHandlers,
} from '../controllers/adminController';
import { listMedia, uploadMedia, deleteMedia } from '../controllers/mediaController';
import { requireAuth, requireRoles } from '../middleware/auth';

const router = Router();

// ==================================================
// PHASE 1: PUBLIC VISITOR & FORM SUBMISSIONS APIs
// ==================================================
router.post('/contact', formLimiter, handleContactSubmit);
router.post('/book-consultation', formLimiter, handleConsultationSubmit);
router.post('/newsletter', formLimiter, handleNewsletterSubmit);
router.post('/visitor', handleVisitorTrack);
router.post('/events', handleEventTrack);

// ==================================================
// AUTHENTICATION APIs
// ==================================================
router.post('/auth/login', handleLogin);
router.post('/auth/logout', handleLogout);
router.post('/auth/forgot-password', handleForgotPassword);
router.post('/auth/reset-password', handleResetPassword);

// Protected Auth operations
router.post('/auth/change-password', requireAuth, handleChangePassword);
router.get('/auth/session', requireAuth, checkSession);

// ==================================================
// ADMIN & DASHBOARD STATS
// ==================================================
router.get(
  '/admin/dashboard-stats',
  requireAuth,
  requireRoles(['Super Admin', 'Admin', 'Sales', 'HR', 'Content Manager', 'Marketing']),
  getDashboardStats
);

// Settings endpoint (single record)
router.get(
  '/admin/settings',
  requireAuth,
  requireRoles(['Super Admin', 'Admin', 'Content Manager']),
  getSettings
);
router.put(
  '/admin/settings',
  requireAuth,
  requireRoles(['Super Admin', 'Admin']),
  updateSettings
);

// Newsletter Export (Lightweight backup list)
router.get(
  '/admin/newsletter/export',
  requireAuth,
  requireRoles(['Super Admin', 'Admin', 'Marketing']),
  handleNewsletterExport
);

// ==================================================
// MEDIA LIBRARY APIs
// ==================================================
router.get(
  '/media',
  requireAuth,
  requireRoles(['Super Admin', 'Admin', 'Content Manager', 'Marketing']),
  listMedia
);
router.post(
  '/media',
  requireAuth,
  requireRoles(['Super Admin', 'Admin', 'Content Manager', 'Marketing']),
  uploadMedia
);
router.delete(
  '/media/:id',
  requireAuth,
  requireRoles(['Super Admin', 'Admin']),
  deleteMedia
);

// ==================================================
// CONTENT CRUD MODULES
// ==================================================
const generateCrudRoutes = (collectionName: string, allowedRoles: { read: string[]; write: string[]; delete: string[] }) => {
  const handlers = createCrudHandlers(collectionName);
  
  router.get(
    `/admin/${collectionName}`,
    requireAuth,
    requireRoles(allowedRoles.read),
    handlers.list
  );
  
  router.get(
    `/admin/${collectionName}/:id`,
    requireAuth,
    requireRoles(allowedRoles.read),
    handlers.get
  );
  
  router.post(
    `/admin/${collectionName}`,
    requireAuth,
    requireRoles(allowedRoles.write),
    handlers.create
  );
  
  router.put(
    `/admin/${collectionName}/:id`,
    requireAuth,
    requireRoles(allowedRoles.write),
    handlers.update
  );
  
  router.delete(
    `/admin/${collectionName}/:id`,
    requireAuth,
    requireRoles(allowedRoles.delete),
    handlers.delete
  );
};

// 1. Team Members
// 1. Blogs
generateCrudRoutes('blogs', {
  read: ['Super Admin', 'Admin', 'Content Manager', 'Marketing', 'Sales'],
  write: ['Super Admin', 'Admin', 'Content Manager', 'Marketing'],
  delete: ['Super Admin', 'Admin'],
});

// 2. Careers
generateCrudRoutes('careers', {
  read: ['Super Admin', 'Admin', 'HR', 'Content Manager', 'Marketing', 'Sales'],
  write: ['Super Admin', 'Admin', 'HR'],
  delete: ['Super Admin', 'Admin'],
});

export default router;
