export type FormVariant = 'business' | 'careers' | 'demo';

export interface LeadModalOptions {
  ctaName: string;
  sourcePage?: string;
  formVariant?: FormVariant;
  defaultProduct?: string;
  customTitle?: string;
  customSubtitle?: string;
}

export interface BusinessFormData {
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  industry: string;
  city: string;
  website: string;
  requirement: string;
  budget: string;
  timeline: string;
  message: string;
  agreeToContact: boolean;
}

export interface CareersFormData {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  college: string;
  qualification: string;
  semester: string;
  experience: string;
  position: string;
  resumeUrl: string;
  portfolioUrl: string;
  motivation: string;
}

export interface DemoFormData {
  fullName: string;
  companyName: string;
  businessSize: string;
  currentSoftware: string;
  interestedProduct: string;
  preferredTime: string;
  mobile: string;
  email: string;
  notes: string;
}
