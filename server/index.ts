import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { requestLogger } from './middleware/requestLogger';
import { securityHeaders, corsMiddleware } from './middleware/security';
import { apiLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';
import { seedDefaultAdmin } from './controllers/authController';
import { logger } from './utils/logger';

// Load Environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Header Middlewares
app.use(securityHeaders);
app.use(corsMiddleware);

// Request parsing (Limit increased to 10MB to accommodate base64 image uploads)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logger Middleware
app.use(requestLogger);

// Global API rate limiting
app.use('/api', apiLimiter);

// Bind API routing
app.use('/api', apiRoutes);

// React production build location
const DIST_PATH = path.join(process.cwd(), 'dist');

// Preserve authority from historical URLs with single-hop permanent redirects.
const LEGACY_REDIRECTS: Record<string, string> = {
  '/industries/index.html': '/services',
  '/industries/manufacturing': '/services',
  '/industries/real-estate': '/services',
  '/industries/furniture': '/services',
  '/book-demo': '/contact',
  '/index.html': '/',
};
for (const [source, destination] of Object.entries(LEGACY_REDIRECTS)) {
  app.get(source, (_req, res) => res.redirect(301, destination));
}

// Serve virtual uploads folder statically
const UPLOADS_PATH = path.join(process.cwd(), 'public', 'uploads');
app.use('/uploads', express.static(UPLOADS_PATH));

// Serve the build-time SEO document for each clean public URL without a
// directory redirect, preserving canonical URL consistency.
const SEO_ROUTES = [
  'products', 'services', 'work', 'company', 'contact', 'blog', 'careers',
  'privacy-policy', 'terms', 'refund-policy', 'disclaimer',
];
for (const route of SEO_ROUTES) {
  app.get(`/${route}`, (_req, res) => {
    res.sendFile(path.join(DIST_PATH, route, 'index.html'));
  });
}

// Serve each generated article document without a trailing-slash redirect.
app.get('/blog/:slug([a-z0-9-]+)', (req, res) => {
  const articleDocument = path.join(DIST_PATH, 'blog', req.params.slug, 'index.html');
  res.sendFile(articleDocument, (error) => {
    if (error && !res.headersSent) res.status(404).sendFile(path.join(DIST_PATH, 'index.html'));
  });
});

// Serve hashed assets and other public build output after exact clean routes.
app.use(express.static(DIST_PATH));

// Unknown document routes render the 404 view with a real 404 HTTP status.
app.get('*', (_req, res) => {
  res.status(404).sendFile(path.join(DIST_PATH, 'index.html'));
});

// Centralized error handler
app.use(errorHandler);

// Start the server and seed default configurations
app.listen(PORT, async () => {
  logger.info(`==================================================`);
  logger.info(`Synckraft Backend Server successfully started.`);
  logger.info(`Port: ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(`==================================================`);

  // Seed default admin
  try {
    await seedDefaultAdmin();
  } catch (err) {
    logger.error('Failed to seed default admin user', err);
  }
});
