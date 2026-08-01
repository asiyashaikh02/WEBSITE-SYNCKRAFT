import { analytics } from './analytics';

export const trackPageView = (path: string, title: string) => {
  analytics.track('PageView', { path, title });
};

export const trackCtaClick = (ctaName: string, location: string) => {
  analytics.track('CTAClick', { ctaName, location });
};

export const trackHeroCtaClick = (ctaName: string) => {
  analytics.track('HeroCTAClick', { ctaName });
};

export const trackFooterCtaClick = (ctaName: string) => {
  analytics.track('FooterCTAClick', { ctaName });
};

export const trackBookConsultation = (slotDate: string, slotTime: string) => {
  analytics.track('BookConsultation', { slotDate, slotTime });
};

export const trackContactFormSubmitted = (service: string, company: string) => {
  analytics.track('ContactFormSubmitted', { service, company });
};

export const trackNewsletterSignup = (email: string) => {
  analytics.track('NewsletterSignup', { email });
};

export const trackPhoneClick = (phoneNumber: string) => {
  analytics.track('PhoneClick', { phoneNumber });
};

export const trackEmailClick = (email: string) => {
  analytics.track('EmailClick', { email });
};

export const trackWhatsAppClick = (phoneNumber: string) => {
  analytics.track('WhatsAppClick', { phoneNumber });
};

export const trackProductClick = (productId: string, productName: string) => {
  analytics.track('ProductClick', { productId, productName });
};

export const trackIndustryClick = (industryId: string, industryName: string) => {
  analytics.track('IndustryClick', { industryId, industryName });
};

export const trackBlogClick = (blogId: string, blogTitle: string) => {
  analytics.track('BlogClick', { blogId, blogTitle });
};

export const trackJobClick = (jobId: string, jobTitle: string) => {
  analytics.track('JobClick', { jobId, jobTitle });
};

export const trackDownload = (fileName: string, fileType: string) => {
  analytics.track('Download', { fileName, fileType });
};
