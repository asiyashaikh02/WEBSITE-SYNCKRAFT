export type PageId =
  | 'home'
  | 'products'
  | 'services'
  | 'work'
  | 'company'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'refund'
  | 'disclaimer'
  | '404'
  | 'thank-you'
  | 'blog'
  | 'careers'
  | 'admin';

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  subCategories?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown / HTML formatted
  coverImage: string;
  category: string;
  subCategory?: string;
  tags: string[];
  author: BlogAuthor;
  publishDate: string;
  readTime: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl?: string;
    keywords: string[];
    ogImage?: string;
  };
  faqs?: { question: string; answer: string }[];
  relatedPostIds?: string[];
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experienceLevel: string;
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  salaryRange?: string;
  isHot?: boolean;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  preferredSkills: string[];
  benefits: string[];
  departmentIcon?: string;
  status?: 'open' | 'closed';
  applyLink?: string;
}

export interface JobApplicationFormData {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  portfolioUrl?: string;
  yearsOfExperience: string;
  currentNoticePeriod?: string;
  coverLetter?: string;
  resumeUrlOrNotes: string;
}

export interface ProductItem {
  id: string;
  name: string;
  logoUrl?: string;
  tagline: string;
  description: string;
  category: string;
  iconName: string;
  brandColor: string;
  accentBg: string;
  badgeText?: string;
  website?: string;
  features: string[];
  ctaText: string;
  overview?: string;
  metrics?: { label: string; value: string }[];
  useCases?: string[];
  targetAudience?: string;
  primaryOutcome?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  benefits?: string[];
  problemSolved?: string;
  typicalClients?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  client: string;
  gradientBg: string;
  features: string[];
  results: { metric: string; label: string }[];
  techStack: string[];
  imagePlaceholderText: string;
  problemStatement?: string;
  solutionDelivered?: string;
}

export interface SuccessStoryMetric {
  label: string;
  value: string;
}

export interface SuccessStory {
  id: string;
  company: string;
  companyLogo?: string;
  industry: string;
  clientName: string;
  designation: string;
  avatar: string;
  rating: number;
  review: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: SuccessStoryMetric[];
  project?: string;
  images?: string[];
  videoUrl?: string;
  beforeAfter?: { before: string; after: string };
  techStack?: string[];
  timeline?: string;
  projectValue?: string;
  businessKpis?: string[];
  pdfCaseStudyUrl?: string;
  source?: 'Google Business Profile' | 'Internal Case Study' | 'Direct Client Review' | 'Verified Partner';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  review: string;
  rating: number;
  avatarUrl?: string;
  companyLogoText?: string;
}

export interface WhatWeBuildItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  businessOutcome: string;
  iconName: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  image?: string;
  linkedIn?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  service: string;
  projectDetails: string;
  agreeToPrivacy: boolean;
}

export interface OfficeLocation {
  city: string;
  title: string;
  badge: string;
  companyName?: string;
  address: string;
  country: string;
  mapUrl: string;
}
