import fs from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');

// Ensure log directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const logToFile = (level: string, message: string, meta?: unknown) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message} ${meta ? JSON.stringify(meta) : ''}\n`;
  const dateStr = new Date().toISOString().split('T')[0];
  const logFile = path.join(LOG_DIR, `${dateStr}.log`);

  fs.appendFileSync(logFile, logMessage);
};

export const logger = {
  info: (message: string, meta?: unknown) => {
    const timestamp = new Date().toISOString();
    console.log(`\x1b[32m[${timestamp}] [INFO]:\x1b[0m ${message}`, meta || '');
    logToFile('info', message, meta);
  },
  warn: (message: string, meta?: unknown) => {
    const timestamp = new Date().toISOString();
    console.warn(`\x1b[33m[${timestamp}] [WARN]:\x1b[0m ${message}`, meta || '');
    logToFile('warn', message, meta);
  },
  error: (message: string, meta?: unknown) => {
    const timestamp = new Date().toISOString();
    console.error(`\x1b[31m[${timestamp}] [ERROR]:\x1b[0m ${message}`, meta || '');
    logToFile('error', message, meta);
  }
};
