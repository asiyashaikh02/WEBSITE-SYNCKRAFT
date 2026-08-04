// server/index.ts
import express from "express";
import path4 from "path";
import dotenv from "dotenv";

// server/routes/api.ts
import { Router } from "express";

// server/services/dbService.ts
import fs2 from "fs/promises";
import path2 from "path";

// server/utils/logger.ts
import fs from "fs";
import path from "path";
var LOG_DIR = path.join(process.cwd(), "logs");
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}
var logToFile = (level, message, meta) => {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message} ${meta ? JSON.stringify(meta) : ""}
`;
  const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const logFile = path.join(LOG_DIR, `${dateStr}.log`);
  fs.appendFileSync(logFile, logMessage);
};
var logger = {
  info: (message, meta) => {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    console.log(`\x1B[32m[${timestamp}] [INFO]:\x1B[0m ${message}`, meta || "");
    logToFile("info", message, meta);
  },
  warn: (message, meta) => {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    console.warn(`\x1B[33m[${timestamp}] [WARN]:\x1B[0m ${message}`, meta || "");
    logToFile("warn", message, meta);
  },
  error: (message, meta) => {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    console.error(`\x1B[31m[${timestamp}] [ERROR]:\x1B[0m ${message}`, meta || "");
    logToFile("error", message, meta);
  }
};

// server/services/dbService.ts
var DB_DIR = path2.join(process.cwd(), "data-store");
var writeLocks = {};
var DbService = class {
  static async ensureDbDir() {
    try {
      await fs2.mkdir(DB_DIR, { recursive: true });
    } catch (err) {
      logger.error("Failed to create data-store directory", err);
    }
  }
  static getCollectionPath(collection) {
    return path2.join(DB_DIR, `${collection}.json`);
  }
  static getTempCollectionPath(collection) {
    return path2.join(DB_DIR, `${collection}.tmp.json`);
  }
  /**
   * Read all items from a collection.
   */
  static async read(collection) {
    await this.ensureDbDir();
    const filePath = this.getCollectionPath(collection);
    try {
      const data = await fs2.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      if (err.code === "ENOENT") {
        return [];
      }
      logger.error(`Error reading collection: ${collection}`, err);
      throw err;
    }
  }
  /**
   * Save items to a collection using atomic write.
   */
  static async write(collection, data) {
    await this.ensureDbDir();
    const filePath = this.getCollectionPath(collection);
    const tempPath = this.getTempCollectionPath(collection);
    const currentLock = writeLocks[collection] || Promise.resolve();
    const nextLock = currentLock.then(async () => {
      try {
        const jsonString = JSON.stringify(data, null, 2);
        await fs2.writeFile(tempPath, jsonString, "utf-8");
        await fs2.rename(tempPath, filePath);
      } catch (err) {
        logger.error(`Atomic write failed for collection: ${collection}`, err);
        try {
          await fs2.unlink(tempPath);
        } catch {
        }
        throw err;
      }
    });
    writeLocks[collection] = nextLock.catch(() => {
    });
    return nextLock;
  }
  /**
   * Insert a single item into a collection.
   */
  static async insert(collection, item) {
    const items = await this.read(collection);
    const newItem = {
      id: item.id || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      createdAt: item.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      ...item
    };
    items.push(newItem);
    await this.write(collection, items);
    return newItem;
  }
  /**
   * Find items matching a query.
   */
  static async find(collection, predicate) {
    const items = await this.read(collection);
    return items.filter(predicate);
  }
  /**
   * Find a single item matching a query.
   */
  static async findOne(collection, predicate) {
    const items = await this.read(collection);
    return items.find(predicate) || null;
  }
};

// server/validators/index.ts
var sanitizeString = (str) => {
  if (typeof str !== "string") return "";
  return str.trim().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;").slice(0, 4e3);
};
var isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};
var isValidPhone = (phone) => {
  if (!phone) return true;
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  return /^\+?[0-9]{10,15}$/.test(cleanPhone);
};
var validateContactInput = (body) => {
  const errors = [];
  if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
    errors.push("Name is required and must be a valid string.");
  }
  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    errors.push("A valid Email address is required.");
  }
  if (body.phone && (typeof body.phone !== "string" || !isValidPhone(body.phone))) {
    errors.push("Phone number is invalid.");
  }
  const sanitized = {
    name: sanitizeString(body.name),
    company: sanitizeString(body.company),
    email: body.email ? body.email.trim().toLowerCase() : "",
    phone: body.phone ? body.phone.trim() : void 0,
    industry: sanitizeString(body.industry) || void 0,
    service: sanitizeString(body.service) || void 0,
    message: sanitizeString(body.message) || void 0,
    source: sanitizeString(body.source) || void 0,
    utm: {
      source: body.utm?.source ? sanitizeString(body.utm.source) : void 0,
      medium: body.utm?.medium ? sanitizeString(body.utm.medium) : void 0,
      campaign: body.utm?.campaign ? sanitizeString(body.utm.campaign) : void 0
    }
  };
  return { errors, sanitized };
};
var validateConsultationInput = (body) => {
  const errors = [];
  if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
    errors.push("Name is required.");
  }
  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    errors.push("A valid Email address is required.");
  }
  if (!body.preferredDate || typeof body.preferredDate !== "string" || !body.preferredDate.trim()) {
    errors.push("Preferred Date is required.");
  }
  if (!body.preferredTime || typeof body.preferredTime !== "string" || !body.preferredTime.trim()) {
    errors.push("Preferred Time is required.");
  }
  if (body.phone && (typeof body.phone !== "string" || !isValidPhone(body.phone))) {
    errors.push("Phone number is invalid.");
  }
  const sanitized = {
    name: sanitizeString(body.name),
    company: sanitizeString(body.company),
    email: body.email ? body.email.trim().toLowerCase() : "",
    phone: body.phone ? body.phone.trim() : void 0,
    preferredDate: sanitizeString(body.preferredDate),
    preferredTime: sanitizeString(body.preferredTime),
    businessType: sanitizeString(body.businessType) || void 0,
    message: sanitizeString(body.message) || void 0
  };
  return { errors, sanitized };
};
var validateNewsletterInput = (body) => {
  const errors = [];
  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    errors.push("A valid Email address is required.");
  }
  const sanitized = {
    email: body.email ? body.email.trim().toLowerCase() : ""
  };
  return { errors, sanitized };
};
var validateVisitorInput = (body) => {
  const errors = [];
  if (!body.visitorId || typeof body.visitorId !== "string") {
    errors.push("Visitor ID is required.");
  }
  if (!body.sessionId || typeof body.sessionId !== "string") {
    errors.push("Session ID is required.");
  }
  const sanitized = {
    visitorId: sanitizeString(body.visitorId),
    sessionId: sanitizeString(body.sessionId),
    referrer: sanitizeString(body.referrer) || void 0,
    utm: {
      source: body.utm?.source ? sanitizeString(body.utm.source) : void 0,
      medium: body.utm?.medium ? sanitizeString(body.utm.medium) : void 0,
      campaign: body.utm?.campaign ? sanitizeString(body.utm.campaign) : void 0
    },
    landingPage: sanitizeString(body.landingPage) || void 0,
    device: sanitizeString(body.device) || void 0,
    browser: sanitizeString(body.browser) || void 0,
    country: sanitizeString(body.country) || void 0,
    city: sanitizeString(body.city) || void 0
  };
  return { errors, sanitized };
};
var validateEventInput = (body) => {
  const errors = [];
  if (!body.visitorId || typeof body.visitorId !== "string") {
    errors.push("Visitor ID is required.");
  }
  if (!body.sessionId || typeof body.sessionId !== "string") {
    errors.push("Session ID is required.");
  }
  const validTypes = [
    "PageView",
    "CTAClick",
    "WhatsAppClick",
    "PhoneClick",
    "EmailClick",
    "Scroll",
    "FormStarted",
    "FormSubmitted",
    "ProductClick",
    "IndustryClick"
  ];
  if (!body.eventType || !validTypes.includes(body.eventType)) {
    errors.push(`Event Type must be one of: ${validTypes.join(", ")}`);
  }
  const sanitized = {
    visitorId: sanitizeString(body.visitorId),
    sessionId: sanitizeString(body.sessionId),
    eventType: body.eventType,
    eventData: typeof body.eventData === "object" ? body.eventData : {}
  };
  return { errors, sanitized };
};

// server/services/notificationService.ts
var NotificationService = class {
  /**
   * Send WhatsApp notification (Simulation / API callback).
   */
  static async sendWhatsAppNotification(to, message) {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      logger.info(`WHATSAPP NOTIFICATION SENT TO ${to}: "${message}"`);
      await DbService.insert("audit_logs", {
        action: "whatsapp_notification_sent",
        details: { to, messageLength: message.length },
        timestamp
      });
      return true;
    } catch (err) {
      logger.error("Failed to send WhatsApp notification", err);
      return false;
    }
  }
  /**
   * Send Email notification (Simulation / SMTP callback).
   */
  static async sendEmailNotification(to, subject, htmlContent) {
    try {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      logger.info(`EMAIL NOTIFICATION SENT TO ${to} | Subject: "${subject}"`);
      await DbService.insert("audit_logs", {
        action: "email_notification_sent",
        details: { to, subject },
        timestamp
      });
      return true;
    } catch (err) {
      logger.error("Failed to send email notification", err);
      return false;
    }
  }
  /**
   * Forward payload to the Universal Synckraft Platform webhook.
   */
  static async triggerUniversalPlatformWebhook(event, payload) {
    try {
      const list = await DbService.read("settings");
      const settings = list[0] || {};
      const webhookUrl = settings.universalPlatformWebhookUrl;
      if (!webhookUrl) {
        logger.info(`Universal Platform Webhook skipped: No URL configured in settings.`);
        return;
      }
      logger.info(`Triggering Universal Platform Webhook for event: ${event} -> ${webhookUrl}`);
      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Synckraft-Signature": "synckraft_hmac_secret_placeholder",
          "X-Synckraft-Event": event
        },
        body: JSON.stringify({
          event,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          data: payload
        })
      }).catch((err) => {
        logger.error(`Webhook network delivery failed for URL: ${webhookUrl}`, err);
      });
    } catch (err) {
      logger.error("Error in webhook forwarder", err);
    }
  }
};

// server/controllers/contactController.ts
var handleContactSubmit = async (req, res, next) => {
  try {
    const { errors, sanitized } = validateContactInput(req.body);
    const safeName = sanitized.name.replace(/<[^>]*>/g, "").trim();
    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
      return;
    }
    const settingsList = await DbService.read("settings");
    const settings = settingsList[0] || {};
    const adminEmail = settings.email || "grow@synckraft.in";
    const alertPhones = settings.phoneNumbers || ["+91-98677-99655"];
    const emailSubject = `[Synckraft Contact Alert] New Enquiry from ${safeName}`;
    const emailBody = `
      <h3>New Enquiry Received</h3>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Company:</strong> ${sanitized.company || "N/A"}</p>
      <p><strong>Email:</strong> ${sanitized.email}</p>
      <p><strong>Phone:</strong> ${sanitized.phone || "N/A"}</p>
      <p><strong>Industry:</strong> ${sanitized.industry || "N/A"}</p>
      <p><strong>Service:</strong> ${sanitized.service || "N/A"}</p>
      <p><strong>Message:</strong> ${sanitized.message || "N/A"}</p>
    `;
    await NotificationService.sendEmailNotification(adminEmail, emailSubject, emailBody);
    const whatsAppMessage = `\u{1F6A8} *New Synckraft Enquiry* \u{1F6A8}

\u{1F464} *Name:* ${safeName}
\u{1F3E2} *Company:* ${sanitized.company || "N/A"}
\u2709\uFE0F *Email:* ${sanitized.email}
\u{1F4DE} *Phone:* ${sanitized.phone || "N/A"}
\u{1F4AC} *Message:* ${sanitized.message || "N/A"}`;
    for (const phone of alertPhones) {
      await NotificationService.sendWhatsAppNotification(phone, whatsAppMessage);
    }
    await NotificationService.triggerUniversalPlatformWebhook("contact.enquiry", sanitized);
    res.status(201).json({
      success: true,
      message: "Contact enquiry submitted successfully. We will reach out to you shortly."
    });
  } catch (error) {
    next(error);
  }
};

// server/controllers/consultationController.ts
var handleConsultationSubmit = async (req, res, next) => {
  try {
    const { errors, sanitized } = validateConsultationInput(req.body);
    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
      return;
    }
    const settingsList = await DbService.read("settings");
    const settings = settingsList[0] || {};
    const adminEmail = settings.email || "grow@synckraft.in";
    const alertPhones = settings.phoneNumbers || ["+91-98677-99655"];
    const emailSubject = `[Synckraft Consultation Booking] Request from ${sanitized.name}`;
    const emailBody = `
      <h3>Strategy Consultation Requested</h3>
      <p><strong>Name:</strong> ${sanitized.name}</p>
      <p><strong>Company:</strong> ${sanitized.company || "N/A"}</p>
      <p><strong>Email:</strong> ${sanitized.email}</p>
      <p><strong>Phone:</strong> ${sanitized.phone || "N/A"}</p>
      <p><strong>Date Preferred:</strong> ${sanitized.preferredDate}</p>
      <p><strong>Time Preferred:</strong> ${sanitized.preferredTime}</p>
      <p><strong>Business Type:</strong> ${sanitized.businessType || "N/A"}</p>
      <p><strong>Message:</strong> ${sanitized.message || "N/A"}</p>
    `;
    await NotificationService.sendEmailNotification(adminEmail, emailSubject, emailBody);
    const whatsAppMessage = `\u{1F4C5} *New Strategy Consultation Booking* \u{1F4C5}

\u{1F464} *Name:* ${sanitized.name}
\u{1F3E2} *Company:* ${sanitized.company || "N/A"}
\u2709\uFE0F *Email:* ${sanitized.email}
\u{1F4DE} *Phone:* ${sanitized.phone || "N/A"}
\u{1F552} *Schedule:* ${sanitized.preferredDate} at ${sanitized.preferredTime}
\u{1F4BC} *Business Type:* ${sanitized.businessType || "N/A"}`;
    for (const phone of alertPhones) {
      await NotificationService.sendWhatsAppNotification(phone, whatsAppMessage);
    }
    await NotificationService.triggerUniversalPlatformWebhook("consultation.booking", sanitized);
    res.status(201).json({
      success: true,
      message: "Consultation booking submitted successfully. We will confirm your slot shortly."
    });
  } catch (error) {
    next(error);
  }
};

// server/controllers/newsletterController.ts
var handleNewsletterSubmit = async (req, res, next) => {
  try {
    const { errors, sanitized } = validateNewsletterInput(req.body);
    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
      return;
    }
    const existing = await DbService.findOne("newsletters", (item) => item.email === sanitized.email);
    if (existing) {
      res.status(200).json({
        success: true,
        message: "You have already subscribed to our newsletter.",
        data: existing
      });
      return;
    }
    const savedNewsletter = await DbService.insert("newsletters", sanitized);
    logger.info(`New newsletter subscriber: ${savedNewsletter.email} (ID: ${savedNewsletter.id})`);
    await NotificationService.triggerUniversalPlatformWebhook("newsletter.subscribe", sanitized);
    res.status(201).json({
      success: true,
      message: "Subscribed to newsletter successfully.",
      data: savedNewsletter
    });
  } catch (error) {
    next(error);
  }
};
var handleNewsletterExport = async (req, res, next) => {
  try {
    const subscribers = await DbService.read("newsletters");
    const csvHeaders = "ID,Email,SubscribedAt\n";
    const csvRows = subscribers.map((sub) => `"${sub.id || ""}","${sub.email}","${sub.createdAt || ""}"`).join("\n");
    const csvContent = csvHeaders + csvRows;
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=newsletter_subscribers.csv");
    res.status(200).send(csvContent);
  } catch (error) {
    next(error);
  }
};

// server/controllers/visitorController.ts
var handleVisitorTrack = async (req, res, next) => {
  try {
    const { errors, sanitized } = validateVisitorInput(req.body);
    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
      return;
    }
    const savedVisitor = await DbService.insert("visitors", sanitized);
    res.status(201).json({
      success: true,
      message: "Visitor tracking session recorded.",
      data: savedVisitor
    });
  } catch (error) {
    next(error);
  }
};

// server/controllers/eventController.ts
var handleEventTrack = async (req, res, next) => {
  try {
    const { errors, sanitized } = validateEventInput(req.body);
    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors
      });
      return;
    }
    const savedEvent = await DbService.insert("events", {
      ...sanitized,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    res.status(201).json({
      success: true,
      message: "Event tracked successfully.",
      data: savedEvent
    });
  } catch (error) {
    next(error);
  }
};

// server/middleware/rateLimiter.ts
var rateLimitStore = {};
var createRateLimiter = (options) => {
  const { windowMs, max, message } = options;
  return (req, res, next) => {
    const ip = req.ip || req.headers["x-forwarded-for"]?.toString() || "unknown";
    const currentTime = Date.now();
    if (!rateLimitStore[ip] || currentTime > rateLimitStore[ip].resetTime) {
      rateLimitStore[ip] = {
        count: 1,
        resetTime: currentTime + windowMs
      };
      return next();
    }
    rateLimitStore[ip].count += 1;
    if (rateLimitStore[ip].count > max) {
      logger.warn(`Rate limit exceeded for IP: ${ip} on route: ${req.originalUrl}`);
      res.status(429).json({
        success: false,
        message
      });
      return;
    }
    next();
  };
};
var apiLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1e3,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes."
});
var formLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1e3,
  max: 10,
  message: "Too many form submissions. Please try again after 10 minutes."
});

// server/utils/crypto.ts
import crypto2 from "crypto";
var JWT_SECRET = process.env.JWT_SECRET || "synckraft_secret_key_change_in_production";
var hashPassword = (password) => {
  const salt = crypto2.randomBytes(16).toString("hex");
  const hash = crypto2.pbkdf2Sync(password, salt, 1e3, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
};
var verifyPassword = (password, storedHash) => {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verifyHash = crypto2.pbkdf2Sync(password, salt, 1e3, 64, "sha512").toString("hex");
  return hash === verifyHash;
};
var base64url = {
  encode: (str) => {
    return Buffer.from(str).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  },
  decode: (str) => {
    let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }
    return Buffer.from(base64, "base64").toString("utf8");
  }
};
var signJwt = (payload, expiresInSeconds = 36e3) => {
  const header = { alg: "HS256", typ: "JWT" };
  const exp = Math.floor(Date.now() / 1e3) + expiresInSeconds;
  const fullPayload = { ...payload, exp };
  const encodedHeader = base64url.encode(JSON.stringify(header));
  const encodedPayload = base64url.encode(JSON.stringify(fullPayload));
  const signatureInput = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto2.createHmac("sha256", JWT_SECRET).update(signatureInput).digest("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  return `${signatureInput}.${signature}`;
};
var verifyJwt = (token) => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const signatureInput = `${header}.${payload}`;
    const expectedSignature = crypto2.createHmac("sha256", JWT_SECRET).update(signatureInput).digest("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    if (signature !== expectedSignature) {
      return null;
    }
    const decodedPayload = JSON.parse(base64url.decode(payload));
    if (decodedPayload.exp && Date.now() / 1e3 > decodedPayload.exp) {
      return null;
    }
    return decodedPayload;
  } catch {
    return null;
  }
};

// server/controllers/authController.ts
var MAX_LOGIN_ATTEMPTS = 5;
var LOCK_TIME = 15 * 60 * 1e3;
var handleLogin = async (req, res, next) => {
  try {
    const { email, password, rememberMe } = req.body;
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required."
      });
      return;
    }
    const cleanEmail = email.trim().toLowerCase();
    const user = await DbService.findOne("users", (u) => u.email === cleanEmail);
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid credentials."
      });
      return;
    }
    const currentTime = Date.now();
    if (user.lockUntil && user.lockUntil > currentTime) {
      const waitTime = Math.ceil((user.lockUntil - currentTime) / 6e4);
      res.status(423).json({
        success: false,
        message: `Account is temporarily locked. Try again in ${waitTime} minutes.`
      });
      return;
    }
    const isMatch = verifyPassword(password, user.passwordHash);
    const users = await DbService.read("users");
    const userIdx = users.findIndex((u) => u.id === user.id);
    if (!isMatch) {
      const attempts = (user.loginAttempts || 0) + 1;
      let lockUntil = user.lockUntil;
      if (attempts >= MAX_LOGIN_ATTEMPTS) {
        lockUntil = currentTime + LOCK_TIME;
        logger.warn(`Account locked due to consecutive failures: ${cleanEmail}`);
      }
      users[userIdx] = {
        ...user,
        loginAttempts: attempts,
        lockUntil
      };
      await DbService.write("users", users);
      res.status(401).json({
        success: false,
        message: "Invalid credentials."
      });
      return;
    }
    users[userIdx] = {
      ...user,
      loginAttempts: 0,
      lockUntil: void 0
    };
    await DbService.write("users", users);
    const expiresIn = rememberMe ? 30 * 24 * 3600 : 10 * 3600;
    const token = signJwt(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name
      },
      expiresIn
    );
    logger.info(`User logged in: ${cleanEmail} (${user.role})`);
    res.status(200).json({
      success: true,
      message: "Login successful.",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
var handleLogout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logout successful."
  });
};
var handleForgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ success: false, message: "Email is required." });
      return;
    }
    const cleanEmail = email.trim().toLowerCase();
    const user = await DbService.findOne("users", (u) => u.email === cleanEmail);
    if (!user) {
      res.status(200).json({
        success: true,
        message: "If the email exists, a password reset link has been generated."
      });
      return;
    }
    const resetToken = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    const resetTokenExpiry = Date.now() + 36e5;
    const users = await DbService.read("users");
    const userIdx = users.findIndex((u) => u.id === user.id);
    users[userIdx] = {
      ...user,
      resetToken,
      resetTokenExpiry
    };
    await DbService.write("users", users);
    logger.info(`Password reset token generated for user: ${cleanEmail}`);
    const appUrl = (process.env.APP_URL || "https://synckraft.in").replace(/\/$/, "");
    res.status(200).json({
      success: true,
      message: "Password reset token generated.",
      data: {
        resetToken,
        resetLink: `${appUrl}/admin?resetToken=${encodeURIComponent(resetToken)}`
      }
    });
  } catch (error) {
    next(error);
  }
};
var handleResetPassword = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword || newPassword.length < 8) {
      res.status(400).json({
        success: false,
        message: "Valid token and new password (min 8 chars) are required."
      });
      return;
    }
    const user = await DbService.findOne(
      "users",
      (u) => u.resetToken === token && !!u.resetTokenExpiry && u.resetTokenExpiry > Date.now()
    );
    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid or expired reset token."
      });
      return;
    }
    const users = await DbService.read("users");
    const userIdx = users.findIndex((u) => u.id === user.id);
    users[userIdx] = {
      ...user,
      passwordHash: hashPassword(newPassword),
      resetToken: void 0,
      resetTokenExpiry: void 0,
      loginAttempts: 0,
      lockUntil: void 0
    };
    await DbService.write("users", users);
    logger.info(`Password successfully reset for: ${user.email}`);
    res.status(200).json({
      success: true,
      message: "Password reset successful. You can now login with your new password."
    });
  } catch (error) {
    next(error);
  }
};
var handleChangePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 8) {
      res.status(400).json({
        success: false,
        message: "Current password and new password (min 8 chars) are required."
      });
      return;
    }
    const user = await DbService.findOne("users", (u) => u.id === req.user?.id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }
    if (!verifyPassword(currentPassword, user.passwordHash)) {
      res.status(400).json({ success: false, message: "Incorrect current password." });
      return;
    }
    const users = await DbService.read("users");
    const userIdx = users.findIndex((u) => u.id === user.id);
    users[userIdx] = {
      ...user,
      passwordHash: hashPassword(newPassword)
    };
    await DbService.write("users", users);
    logger.info(`Password changed by user: ${user.email}`);
    res.status(200).json({
      success: true,
      message: "Password changed successfully."
    });
  } catch (error) {
    next(error);
  }
};
var checkSession = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Session is active.",
    data: {
      user: req.user
    }
  });
};
var seedDefaultAdmin = async () => {
  const users = await DbService.read("users");
  if (users.length === 0) {
    const defaultAdmin = {
      name: "Synckraft Super Admin",
      email: "admin@synckraft.in",
      passwordHash: hashPassword("SynckraftPassword2026!"),
      role: "Super Admin",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await DbService.insert("users", defaultAdmin);
    logger.info("DATABASE SEED: Default Super Admin user created (admin@synckraft.in / SynckraftPassword2026!)");
  }
};

// server/controllers/adminController.ts
var createCrudHandlers = (collection) => {
  return {
    list: async (req, res, next) => {
      try {
        const items = await DbService.read(collection);
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        next(error);
      }
    },
    get: async (req, res, next) => {
      try {
        const { id } = req.params;
        const item = await DbService.findOne(collection, (x) => x.id === id);
        if (!item) {
          res.status(404).json({ success: false, message: "Item not found." });
          return;
        }
        res.status(200).json({ success: true, data: item });
      } catch (error) {
        next(error);
      }
    },
    create: async (req, res, next) => {
      try {
        const newItem = await DbService.insert(collection, req.body);
        logger.info(`Admin created new item in collection ${collection} (ID: ${newItem.id})`);
        res.status(201).json({ success: true, message: "Item created successfully.", data: newItem });
      } catch (error) {
        next(error);
      }
    },
    update: async (req, res, next) => {
      try {
        const { id } = req.params;
        const items = await DbService.read(collection);
        const idx = items.findIndex((x) => x.id === id);
        if (idx === -1) {
          res.status(404).json({ success: false, message: "Item not found." });
          return;
        }
        items[idx] = {
          ...items[idx],
          ...req.body,
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        await DbService.write(collection, items);
        logger.info(`Admin updated item in collection ${collection} (ID: ${id})`);
        res.status(200).json({ success: true, message: "Item updated successfully.", data: items[idx] });
      } catch (error) {
        next(error);
      }
    },
    delete: async (req, res, next) => {
      try {
        const { id } = req.params;
        const items = await DbService.read(collection);
        const idx = items.findIndex((x) => x.id === id);
        if (idx === -1) {
          res.status(404).json({ success: false, message: "Item not found." });
          return;
        }
        items.splice(idx, 1);
        await DbService.write(collection, items);
        logger.info(`Admin deleted item from collection ${collection} (ID: ${id})`);
        res.status(200).json({ success: true, message: "Item deleted successfully." });
      } catch (error) {
        next(error);
      }
    }
  };
};
var getSettings = async (req, res, next) => {
  try {
    const list = await DbService.read("settings");
    const settings = list[0] || {
      companyName: "Synckraft Technologies Private Limited",
      email: "grow@synckraft.in",
      phoneNumbers: ["+91-98677-99655"],
      address: "Synckraft Technologies Private Limited, Daga Plaza, In Front of D-Mart, Biyani Square Camp, Amravati, Maharashtra \u2013 444602, India",
      socialLinks: {
        linkedin: "https://www.linkedin.com/company/synckraft-technologies-private-limited/",
        facebook: "https://www.facebook.com/SynckraftTechnologies/",
        instagram: "https://www.instagram.com/synckraft_technologies/?__pwa=1#"
      },
      seoDefaults: {
        title: "Synckraft Technologies \u2013 Enterprise Software, CRM Systems & AI Automation",
        description: "Synckraft Technologies engineers high-performance custom ERP/CRM platforms, AI voice agents, and workflow automation solutions."
      }
    };
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
};
var updateSettings = async (req, res, next) => {
  try {
    const list = await DbService.read("settings");
    const existing = list[0] || {};
    const updated = {
      ...existing,
      ...req.body,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await DbService.write("settings", [updated]);
    logger.info("Admin updated global settings configuration.");
    res.status(200).json({ success: true, message: "Settings updated successfully.", data: updated });
  } catch (error) {
    next(error);
  }
};
var getDashboardStats = async (req, res, next) => {
  try {
    const contacts = await DbService.read("contacts");
    const consultations = await DbService.read("consultations");
    const subscribers = await DbService.read("newsletters");
    const visitors = await DbService.read("visitors");
    const events = await DbService.read("events");
    const totalVisitors = visitors.length;
    const totalLeads = contacts.length + consultations.length;
    const pageViewEvents = events.filter((e) => e.eventType === "PageView");
    const pageCounts = {};
    pageViewEvents.forEach((e) => {
      const page = e.eventData?.path || "/";
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    const popularPages = Object.entries(pageCounts).map(([page, views]) => ({ page, views })).sort((a, b) => b.views - a.views).slice(0, 5);
    const ctaClickEvents = events.filter((e) => e.eventType === "CTAClick");
    const ctaCounts = {};
    ctaClickEvents.forEach((e) => {
      const ctaName = e.eventData?.ctaName || "Unknown CTA";
      ctaCounts[ctaName] = (ctaCounts[ctaName] || 0) + 1;
    });
    const ctaClicks = Object.entries(ctaCounts).map(([cta, clicks]) => ({ cta, clicks })).sort((a, b) => b.clicks - a.clicks);
    const recentActivities = [
      ...contacts.map((c) => ({
        type: "contact",
        user: c.name,
        email: c.email,
        timestamp: c.createdAt,
        message: "Submitted a contact request form."
      })),
      ...consultations.map((c) => ({
        type: "consultation",
        user: c.name,
        email: c.email,
        timestamp: c.createdAt,
        message: `Booked strategy consultation on ${c.preferredDate} at ${c.preferredTime}.`
      })),
      ...subscribers.map((s) => ({
        type: "newsletter",
        user: "Subscriber",
        email: s.email,
        timestamp: s.createdAt,
        message: "Subscribed to insights newsletter."
      }))
    ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);
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

// server/controllers/mediaController.ts
import fs3 from "fs/promises";
import path3 from "path";
var UPLOADS_DIR = path3.join(process.cwd(), "public", "uploads");
var ensureUploadsDir = async () => {
  try {
    await fs3.mkdir(UPLOADS_DIR, { recursive: true });
  } catch (err) {
    logger.error("Failed to create uploads directory", err);
  }
};
var listMedia = async (req, res, next) => {
  try {
    await ensureUploadsDir();
    const search = req.query.search?.toString().toLowerCase();
    const folder = req.query.folder?.toString();
    let items = await DbService.read("media");
    if (search) {
      items = items.filter((m) => m.filename.toLowerCase().includes(search));
    }
    if (folder) {
      items = items.filter((m) => m.folder === folder);
    }
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};
var uploadMedia = async (req, res, next) => {
  try {
    await ensureUploadsDir();
    const { filename, contentType, base64Data, folder } = req.body;
    if (!filename || !base64Data) {
      res.status(400).json({
        success: false,
        message: "Filename and base64Data are required."
      });
      return;
    }
    const safeFilename = path3.basename(filename).replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const targetPath = path3.join(UPLOADS_DIR, safeFilename);
    const buffer = Buffer.from(base64Data, "base64");
    await fs3.writeFile(targetPath, buffer);
    const mediaRecord = {
      filename: safeFilename,
      url: `/uploads/${safeFilename}`,
      sizeBytes: buffer.length,
      mimeType: contentType || "application/octet-stream",
      folder: folder || "general",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const savedMedia = await DbService.insert("media", mediaRecord);
    logger.info(`Media uploaded by admin: ${safeFilename} (Size: ${buffer.length} bytes)`);
    res.status(201).json({
      success: true,
      message: "Media uploaded successfully.",
      data: savedMedia
    });
  } catch (error) {
    next(error);
  }
};
var deleteMedia = async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await DbService.read("media");
    const idx = items.findIndex((m) => m.id === id);
    if (idx === -1) {
      res.status(404).json({
        success: false,
        message: "Media file not found in database."
      });
      return;
    }
    const record = items[idx];
    const filePath = path3.join(UPLOADS_DIR, record.filename);
    try {
      await fs3.unlink(filePath);
    } catch (err) {
      logger.warn(`Failed to delete physical file: ${filePath}. It may have been already deleted.`, err);
    }
    items.splice(idx, 1);
    await DbService.write("media", items);
    logger.info(`Media deleted by admin: ${record.filename}`);
    res.status(200).json({
      success: true,
      message: "Media deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};

// server/middleware/auth.ts
var requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Access denied. No token provided."
    });
    return;
  }
  const token = authHeader.split(" ")[1];
  const payload = verifyJwt(token);
  if (!payload) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token."
    });
    return;
  }
  req.user = {
    id: payload.id,
    email: payload.email,
    role: payload.role,
    name: payload.name
  };
  next();
};
var requireRoles = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Authentication required."
      });
      return;
    }
    if (!allowedRoles.includes(req.user.role)) {
      logger.warn(`Unauthorized role access attempt: User ${req.user.email} (${req.user.role}) tried to access route restricted to: ${allowedRoles.join(", ")}`);
      res.status(403).json({
        success: false,
        message: "Forbidden. You do not have the required permissions to perform this action."
      });
      return;
    }
    next();
  };
};

// server/routes/api.ts
var router = Router();
router.post("/contact", formLimiter, handleContactSubmit);
router.post("/book-consultation", formLimiter, handleConsultationSubmit);
router.post("/newsletter", formLimiter, handleNewsletterSubmit);
router.post("/visitor", handleVisitorTrack);
router.post("/events", handleEventTrack);
router.post("/auth/login", handleLogin);
router.post("/auth/logout", handleLogout);
router.post("/auth/forgot-password", handleForgotPassword);
router.post("/auth/reset-password", handleResetPassword);
router.post("/auth/change-password", requireAuth, handleChangePassword);
router.get("/auth/session", requireAuth, checkSession);
router.get(
  "/admin/dashboard-stats",
  requireAuth,
  requireRoles(["Super Admin", "Admin", "Sales", "HR", "Content Manager", "Marketing"]),
  getDashboardStats
);
router.get(
  "/admin/settings",
  requireAuth,
  requireRoles(["Super Admin", "Admin", "Content Manager"]),
  getSettings
);
router.put(
  "/admin/settings",
  requireAuth,
  requireRoles(["Super Admin", "Admin"]),
  updateSettings
);
router.get(
  "/admin/newsletter/export",
  requireAuth,
  requireRoles(["Super Admin", "Admin", "Marketing"]),
  handleNewsletterExport
);
router.get(
  "/media",
  requireAuth,
  requireRoles(["Super Admin", "Admin", "Content Manager", "Marketing"]),
  listMedia
);
router.post(
  "/media",
  requireAuth,
  requireRoles(["Super Admin", "Admin", "Content Manager", "Marketing"]),
  uploadMedia
);
router.delete(
  "/media/:id",
  requireAuth,
  requireRoles(["Super Admin", "Admin"]),
  deleteMedia
);
var generateCrudRoutes = (collectionName, allowedRoles) => {
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
generateCrudRoutes("blogs", {
  read: ["Super Admin", "Admin", "Content Manager", "Marketing", "Sales"],
  write: ["Super Admin", "Admin", "Content Manager", "Marketing"],
  delete: ["Super Admin", "Admin"]
});
generateCrudRoutes("careers", {
  read: ["Super Admin", "Admin", "HR", "Content Manager", "Marketing", "Sales"],
  write: ["Super Admin", "Admin", "HR"],
  delete: ["Super Admin", "Admin"]
});
var api_default = router;

// server/middleware/requestLogger.ts
var requestLogger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    const ip = req.ip || req.headers["x-forwarded-for"]?.toString() || "unknown";
    const logStr = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms (IP: ${ip})`;
    if (res.statusCode >= 500) {
      logger.error(logStr);
    } else if (res.statusCode >= 400) {
      logger.warn(logStr);
    } else {
      logger.info(logStr);
    }
  });
  next();
};

// server/middleware/security.ts
var securityHeaders = (req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://connect.facebook.net https://snap.licdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://synckraft.in https://images.unsplash.com https://*.googleusercontent.com https://www.facebook.com https://px.ads.linkedin.com https://www.google-analytics.com; connect-src 'self' ws://localhost:* wss://localhost:* https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://graph.facebook.com https://px.ads.linkedin.com; frame-src 'self';"
  );
  if (process.env.NODE_ENV === "production") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  next();
};
var corsMiddleware = (req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003",
    "https://synckraft.in"
  ];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "https://synckraft.in");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
};

// server/middleware/errorHandler.ts
var errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  logger.error(`${req.method} ${req.originalUrl} - Error: ${message}`, {
    stack: err.stack,
    errors: err.errors,
    statusCode
  });
  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || void 0
  });
};

// server/index.ts
dotenv.config();
var app = express();
var PORT = process.env.PORT || 5e3;
app.use(securityHeaders);
app.use(corsMiddleware);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(requestLogger);
app.use("/api", apiLimiter);
app.use("/api", api_default);
var DIST_PATH = path4.join(process.cwd(), "dist");
var LEGACY_REDIRECTS = {
  "/industries/index.html": "/services",
  "/industries/manufacturing": "/services",
  "/industries/real-estate": "/services",
  "/industries/furniture": "/services",
  "/book-demo": "/contact",
  "/index.html": "/"
};
for (const [source, destination] of Object.entries(LEGACY_REDIRECTS)) {
  app.get(source, (_req, res) => res.redirect(301, destination));
}
var UPLOADS_PATH = path4.join(process.cwd(), "public", "uploads");
app.use("/uploads", express.static(UPLOADS_PATH));
var SEO_ROUTES = [
  "products",
  "services",
  "work",
  "company",
  "contact",
  "blog",
  "careers",
  "privacy-policy",
  "terms",
  "refund-policy",
  "disclaimer"
];
for (const route of SEO_ROUTES) {
  app.get(`/${route}`, (_req, res) => {
    res.sendFile(path4.join(DIST_PATH, route, "index.html"));
  });
}
app.get("/blog/:slug([a-z0-9-]+)", (req, res) => {
  const articleDocument = path4.join(DIST_PATH, "blog", req.params.slug, "index.html");
  res.sendFile(articleDocument, (error) => {
    if (error && !res.headersSent) res.status(404).sendFile(path4.join(DIST_PATH, "index.html"));
  });
});
app.use("/assets", express.static(path4.join(DIST_PATH, "assets"), {
  maxAge: "1y",
  immutable: true
}));
app.use(express.static(DIST_PATH));
app.get("*", (_req, res) => {
  res.status(404).sendFile(path4.join(DIST_PATH, "index.html"));
});
app.use(errorHandler);
app.listen(PORT, async () => {
  logger.info(`==================================================`);
  logger.info(`Synckraft Backend Server successfully started.`);
  logger.info(`Port: ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
  logger.info(`==================================================`);
  try {
    await seedDefaultAdmin();
  } catch (err) {
    logger.error("Failed to seed default admin user", err);
  }
});
