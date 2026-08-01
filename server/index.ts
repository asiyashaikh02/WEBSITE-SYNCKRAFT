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

// Serve static React production build files
const DIST_PATH = path.join(process.cwd(), 'dist');
app.use(express.static(DIST_PATH));

// Serve virtual uploads folder statically
const UPLOADS_PATH = path.join(process.cwd(), 'public', 'uploads');
app.use('/uploads', express.static(UPLOADS_PATH));

// HTML5 routing fallback (any unmatched route renders index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
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
