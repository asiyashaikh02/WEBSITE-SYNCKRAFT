export interface UtmParameters {
  source?: string;
  medium?: string;
  campaign?: string;
}

export interface Contact {
  id?: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  industry?: string;
  service?: string;
  message?: string;
  source?: string;
  utm?: UtmParameters;
  createdAt?: string;
}

export interface Consultation {
  id?: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  preferredDate: string;
  preferredTime: string;
  businessType?: string;
  message?: string;
  createdAt?: string;
}

export interface Newsletter {
  id?: string;
  email: string;
  createdAt?: string;
}

export interface Visitor {
  id?: string;
  visitorId: string;
  sessionId: string;
  referrer?: string;
  utm?: UtmParameters;
  landingPage?: string;
  device?: string;
  browser?: string;
  country?: string;
  city?: string;
  timestamp?: string;
}

export interface Event {
  id?: string;
  visitorId: string;
  sessionId: string;
  eventType: 'PageView' | 'CTAClick' | 'WhatsAppClick' | 'PhoneClick' | 'EmailClick' | 'Scroll' | 'FormStarted' | 'FormSubmitted' | 'ProductClick' | 'IndustryClick';
  eventData?: Record<string, any>;
  timestamp?: string;
}
