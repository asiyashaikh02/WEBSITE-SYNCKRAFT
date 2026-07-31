import { BusinessFormData, CareersFormData, DemoFormData, LeadModalOptions } from '../types/lead';

export const WHATSAPP_PHONE_NUMBER = '919867799655';

export function formatBusinessEnquiryWhatsApp(
  data: BusinessFormData,
  options: LeadModalOptions
): string {
  const page = options.sourcePage || 'Synckraft Website';
  const cta = options.ctaName || 'Get Started';

  return `New Website Enquiry

Lead Source:
${page}

Page:
${page}

CTA Clicked:
${cta}

━━━━━━━━━━━━━━━━━━

Name:
${data.fullName || 'N/A'}

Company:
${data.companyName || 'N/A'}

Email:
${data.email || 'N/A'}

Phone:
${data.mobile || 'N/A'}

Industry:
${data.industry || 'N/A'}

City:
${data.city || 'N/A'}

Website:
${data.website || 'N/A'}

Budget:
${data.budget || 'N/A'}

Timeline:
${data.timeline || 'N/A'}

Requirement:
${data.requirement || 'N/A'}

Message:
${data.message || 'N/A'}`;
}

export function formatCareersWhatsApp(
  data: CareersFormData,
  options: LeadModalOptions
): string {
  const page = options.sourcePage || 'Careers Page';
  const cta = options.ctaName || 'Join Our Team';

  return `New Career Application

Position Applied:
${data.position || 'General Application'}

Page:
${page}

CTA Clicked:
${cta}

━━━━━━━━━━━━━━━━━━

Name:
${data.fullName || 'N/A'}

Email:
${data.email || 'N/A'}

Phone:
${data.mobile || 'N/A'}

City:
${data.city || 'N/A'}

College:
${data.college || 'N/A'}

Qualification:
${data.qualification || 'N/A'}

Experience:
${data.experience || 'N/A'}

Portfolio:
${data.portfolioUrl || 'N/A'}

Resume Uploaded:
${data.resumeUrl || 'N/A'}

Motivation:
${data.motivation || 'N/A'}`;
}

export function formatDemoWhatsApp(
  data: DemoFormData,
  options: LeadModalOptions
): string {
  const page = options.sourcePage || 'Products';
  const cta = options.ctaName || 'Request Demo';

  return `New Product Demo Request

Lead Source:
${page}

Page:
${page}

CTA Clicked:
${cta}

━━━━━━━━━━━━━━━━━━

Product:
${data.interestedProduct || 'Synckraft Software Suite'}

Name:
${data.fullName || 'N/A'}

Company:
${data.companyName || 'N/A'}

Business Size:
${data.businessSize || 'N/A'}

Current Software:
${data.currentSoftware || 'N/A'}

Preferred Demo Time:
${data.preferredTime || 'As soon as possible'}

Phone:
${data.mobile || 'N/A'}

Email:
${data.email || 'N/A'}

Message / Notes:
${data.notes || 'N/A'}`;
}

export function getWhatsAppUrl(messageText: string): string {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;
}

export function openWhatsAppLink(messageText: string): void {
  const url = getWhatsAppUrl(messageText);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
