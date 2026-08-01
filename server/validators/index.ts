export const sanitizeString = (str: any): string => {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const isValidEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  // Allow empty or formatted phone numbers (e.g. +91 99999-99999 or 9999999999)
  if (!phone) return true;
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  return /^\+?[0-9]{10,15}$/.test(cleanPhone);
};

export const validateContactInput = (body: any) => {
  const errors: string[] = [];

  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
    errors.push('Name is required and must be a valid string.');
  }

  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email)) {
    errors.push('A valid Email address is required.');
  }

  if (body.phone && (typeof body.phone !== 'string' || !isValidPhone(body.phone))) {
    errors.push('Phone number is invalid.');
  }

  const sanitized = {
    name: sanitizeString(body.name),
    company: sanitizeString(body.company),
    email: body.email ? body.email.trim().toLowerCase() : '',
    phone: body.phone ? body.phone.trim() : undefined,
    industry: sanitizeString(body.industry) || undefined,
    service: sanitizeString(body.service) || undefined,
    message: sanitizeString(body.message) || undefined,
    source: sanitizeString(body.source) || undefined,
    utm: {
      source: body.utm?.source ? sanitizeString(body.utm.source) : undefined,
      medium: body.utm?.medium ? sanitizeString(body.utm.medium) : undefined,
      campaign: body.utm?.campaign ? sanitizeString(body.utm.campaign) : undefined,
    }
  };

  return { errors, sanitized };
};

export const validateConsultationInput = (body: any) => {
  const errors: string[] = [];

  if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
    errors.push('Name is required.');
  }

  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email)) {
    errors.push('A valid Email address is required.');
  }

  if (!body.preferredDate || typeof body.preferredDate !== 'string' || !body.preferredDate.trim()) {
    errors.push('Preferred Date is required.');
  }

  if (!body.preferredTime || typeof body.preferredTime !== 'string' || !body.preferredTime.trim()) {
    errors.push('Preferred Time is required.');
  }

  if (body.phone && (typeof body.phone !== 'string' || !isValidPhone(body.phone))) {
    errors.push('Phone number is invalid.');
  }

  const sanitized = {
    name: sanitizeString(body.name),
    company: sanitizeString(body.company),
    email: body.email ? body.email.trim().toLowerCase() : '',
    phone: body.phone ? body.phone.trim() : undefined,
    preferredDate: sanitizeString(body.preferredDate),
    preferredTime: sanitizeString(body.preferredTime),
    businessType: sanitizeString(body.businessType) || undefined,
    message: sanitizeString(body.message) || undefined,
  };

  return { errors, sanitized };
};

export const validateNewsletterInput = (body: any) => {
  const errors: string[] = [];

  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email)) {
    errors.push('A valid Email address is required.');
  }

  const sanitized = {
    email: body.email ? body.email.trim().toLowerCase() : '',
  };

  return { errors, sanitized };
};

export const validateVisitorInput = (body: any) => {
  const errors: string[] = [];

  if (!body.visitorId || typeof body.visitorId !== 'string') {
    errors.push('Visitor ID is required.');
  }

  if (!body.sessionId || typeof body.sessionId !== 'string') {
    errors.push('Session ID is required.');
  }

  const sanitized = {
    visitorId: sanitizeString(body.visitorId),
    sessionId: sanitizeString(body.sessionId),
    referrer: sanitizeString(body.referrer) || undefined,
    utm: {
      source: body.utm?.source ? sanitizeString(body.utm.source) : undefined,
      medium: body.utm?.medium ? sanitizeString(body.utm.medium) : undefined,
      campaign: body.utm?.campaign ? sanitizeString(body.utm.campaign) : undefined,
    },
    landingPage: sanitizeString(body.landingPage) || undefined,
    device: sanitizeString(body.device) || undefined,
    browser: sanitizeString(body.browser) || undefined,
    country: sanitizeString(body.country) || undefined,
    city: sanitizeString(body.city) || undefined,
  };

  return { errors, sanitized };
};

export const validateEventInput = (body: any) => {
  const errors: string[] = [];

  if (!body.visitorId || typeof body.visitorId !== 'string') {
    errors.push('Visitor ID is required.');
  }

  if (!body.sessionId || typeof body.sessionId !== 'string') {
    errors.push('Session ID is required.');
  }

  const validTypes = [
    'PageView',
    'CTAClick',
    'WhatsAppClick',
    'PhoneClick',
    'EmailClick',
    'Scroll',
    'FormStarted',
    'FormSubmitted',
    'ProductClick',
    'IndustryClick',
  ];

  if (!body.eventType || !validTypes.includes(body.eventType)) {
    errors.push(`Event Type must be one of: ${validTypes.join(', ')}`);
  }

  const sanitized = {
    visitorId: sanitizeString(body.visitorId),
    sessionId: sanitizeString(body.sessionId),
    eventType: body.eventType,
    eventData: typeof body.eventData === 'object' ? body.eventData : {},
  };

  return { errors, sanitized };
};
