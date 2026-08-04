import { PageId, BlogPost, JobListing } from '../types';
import { PAGE_PATHS } from './routes';

interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
}

const SITE_URL = 'https://synckraft.in';
const BRAND_IMAGE = `${SITE_URL}/synckraft-logo.png`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SEO_CONFIGS: Record<PageId, PageSeoConfig> = {
  home: {
    title: 'Synckraft Technologies – Enterprise Software, CRM Systems & AI Automation',
    description: 'Synckraft Technologies engineers high-performance custom ERP/CRM platforms, AI voice agents, and workflow automation solutions. Build systems that scale your operations.',
    keywords: 'Synckraft, Synckraft Technologies, custom ERP, CRM system, AI automation, software engineering, AI voice agents, enterprise software',
  },
  products: {
    title: 'Synckraft Products – CRM, ERP & AI Automation Software',
    description: "Explore Synckraft's business software suite, including AI voice agents, CRM platforms, restaurant POS, solar ERP, compliance and gym management systems.",
    keywords: 'Synckraft CRM, custom ERP, AI voice agents, business software products, automation software',
  },
  services: {
    title: 'Enterprise Software Engineering & AI Consulting | Synckraft',
    description: 'Custom software development, CRM and ERP platforms, cloud infrastructure, AI automation consulting, system architecture and ongoing software support.',
    keywords: 'custom software services, AI consulting, cloud infrastructure, DevOps, system architecture, India software developers',
  },
  work: {
    title: 'Software Case Studies & Client Success | Synckraft',
    description: 'See how Synckraft delivers scalable business software, sales automation, custom ERP platforms and streamlined operational workflows for growing companies.',
    keywords: 'software case studies, client success, ERP implementations, sales automation, manufacturing software',
  },
  company: {
    title: 'About Synckraft Technologies – Company, Mission & Team',
    description: "Learn about Synckraft Technologies, our mission, values and engineering team building enterprise software and intelligent automation systems.",
    keywords: 'Synckraft team, about Synckraft, software company Amravati, technology company Maharashtra',
  },
  contact: {
    title: 'Contact Synckraft – Start Your Software & Automation Project',
    description: 'Contact Synckraft Technologies for custom ERP, CRM and AI automation. Book a discovery call or visit our Amravati, Maharashtra office.',
    keywords: 'contact Synckraft, software company Amravati, AI automation consultation, custom software enquiry',
  },
  blog: {
    title: 'Synckraft Blog – Software Engineering & AI Automation Insights',
    description: 'Read technical guides about software architecture, AI automation, voice agents, CRM, ERP and digital transformation from Synckraft engineers.',
    keywords: 'engineering blog, AI automation insights, software architecture, AI voice agents, developer guides',
  },
  careers: {
    title: 'Careers at Synckraft – Software & Technology Jobs',
    description: 'Explore software development, technology, sales and internship opportunities at Synckraft Technologies in Amravati, Maharashtra.',
    keywords: 'Synckraft careers, software jobs Amravati, technology internships, software developer jobs Maharashtra',
  },
  privacy: {
    title: 'Privacy Policy | Synckraft Technologies',
    description: 'Review how Synckraft Technologies collects, uses, protects and manages personal information and your privacy rights.',
    keywords: 'Synckraft privacy policy, data protection, privacy rights',
  },
  terms: {
    title: 'Terms of Service | Synckraft Technologies',
    description: 'Read the terms and conditions governing Synckraft Technologies software products, professional services and website use.',
    keywords: 'Synckraft terms of service, software service terms, legal conditions',
  },
  refund: {
    title: 'Refund Policy | Synckraft Technologies',
    description: 'Review the Synckraft Technologies refund policy for custom software projects, product subscriptions and service agreements.',
    keywords: 'Synckraft refund policy, software project refunds, subscription refunds',
  },
  disclaimer: {
    title: 'Disclaimer | Synckraft Technologies',
    description: 'Read the website, third-party integration and limitation of liability disclaimer for Synckraft Technologies.',
    keywords: 'Synckraft disclaimer, website disclaimer, liability limitations',
  },
  'thank-you': {
    title: 'Thank You | Synckraft Technologies',
    description: 'Your request has been received by Synckraft Technologies.',
    keywords: 'Synckraft enquiry confirmation',
  },
  '404': {
    title: 'Page Not Found | Synckraft Technologies',
    description: 'The requested page could not be found on the Synckraft Technologies website.',
    keywords: 'page not found',
  },
  admin: {
    title: 'Synckraft Admin Panel',
    description: 'Private Synckraft Technologies administration area.',
    keywords: 'Synckraft admin',
  },
};

const PAGE_NAMES: Record<PageId, string> = {
  home: 'Home', products: 'Products', services: 'Services', work: 'Work & Case Studies',
  company: 'Company', contact: 'Contact', blog: 'Blog', careers: 'Careers',
  privacy: 'Privacy Policy', terms: 'Terms of Service', refund: 'Refund Policy',
  disclaimer: 'Disclaimer', 'thank-you': 'Thank You', admin: 'Admin', '404': 'Page Not Found',
};

const NOINDEX_PAGES = new Set<PageId>(['admin', 'thank-you', '404']);

function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function setCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function updateMetaTag(attribute: 'name' | 'property', value: string, content: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setJsonLd(schemas: Record<string, unknown>[]): void {
  let script = document.getElementById('synckraft-ld-json') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'synckraft-ld-json';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas });
}

function applySocialMeta(title: string, description: string, url: string, type = 'website', image = BRAND_IMAGE): void {
  updateMetaTag('property', 'og:site_name', 'Synckraft Technologies');
  updateMetaTag('property', 'og:locale', 'en_IN');
  updateMetaTag('property', 'og:type', type);
  updateMetaTag('property', 'og:url', url);
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('property', 'og:image', image);
  updateMetaTag('property', 'og:image:alt', 'Synckraft Technologies');
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:url', url);
  updateMetaTag('name', 'twitter:title', title);
  updateMetaTag('name', 'twitter:description', description);
  updateMetaTag('name', 'twitter:image', image);
  updateMetaTag('name', 'twitter:image:alt', 'Synckraft Technologies');
}

function baseSchemas(pageId: PageId, canonicalUrl: string): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    {
      '@type': 'Organization', '@id': ORGANIZATION_ID,
      name: 'Synckraft Technologies Private Limited', alternateName: 'Synckraft Technologies',
      url: `${SITE_URL}/`, logo: { '@type': 'ImageObject', url: BRAND_IMAGE, width: 781, height: 312 },
      email: 'grow@synckraft.in', telephone: '+91-98677-99655',
      address: { '@type': 'PostalAddress', streetAddress: 'Daga Plaza, In Front of D-Mart, Biyani Square Camp', addressLocality: 'Amravati', addressRegion: 'Maharashtra', postalCode: '444602', addressCountry: 'IN' },
      contactPoint: [
        { '@type': 'ContactPoint', telephone: '+91-98677-99655', email: 'grow@synckraft.in', contactType: 'customer support', areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Marathi'] },
        { '@type': 'ContactPoint', telephone: '+91-99871-55988', contactType: 'sales', areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Marathi'] },
      ],
      sameAs: ['https://www.linkedin.com/company/synckraft-technologies-private-limited/', 'https://www.facebook.com/SynckraftTechnologies/', 'https://www.instagram.com/synckraft_technologies/'],
    },
    { '@type': 'WebSite', '@id': WEBSITE_ID, name: 'Synckraft Technologies', url: `${SITE_URL}/`, publisher: { '@id': ORGANIZATION_ID }, inLanguage: 'en-IN' },
    { '@type': 'WebPage', '@id': `${canonicalUrl}#webpage`, url: canonicalUrl, name: SEO_CONFIGS[pageId].title, description: SEO_CONFIGS[pageId].description, isPartOf: { '@id': WEBSITE_ID }, about: { '@id': ORGANIZATION_ID }, inLanguage: 'en-IN' },
  ];

  if (pageId !== 'home' && !NOINDEX_PAGES.has(pageId)) {
    schemas.push({
      '@type': 'BreadcrumbList', '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: PAGE_NAMES[pageId], item: canonicalUrl },
      ],
    });
  }
  return schemas;
}

async function pageSpecificSchemas(pageId: PageId, canonicalUrl: string): Promise<Record<string, unknown>[]> {
  if (pageId === 'blog') {
    return [{ '@type': 'Blog', '@id': `${canonicalUrl}#blog`, name: 'Synckraft Blog', url: canonicalUrl, publisher: { '@id': ORGANIZATION_ID }, inLanguage: 'en-IN' }];
  }
  if (!['home', 'contact', 'services', 'products', 'work', 'company'].includes(pageId)) return [];
  const { FAQS_DATA, PRODUCTS_DATA, SERVICES_DATA, PROJECTS_DATA, TEAM_MEMBERS } = await import('../data/websiteData');
  if (pageId === 'home' || pageId === 'contact') {
    return [{
      '@type': 'LocalBusiness', '@id': `${SITE_URL}/#localbusiness`,
      name: 'Synckraft Technologies Private Limited', url: `${SITE_URL}/`, image: BRAND_IMAGE,
      email: 'grow@synckraft.in', telephone: '+91-98677-99655', priceRange: '$$',
      parentOrganization: { '@id': ORGANIZATION_ID },
      address: { '@type': 'PostalAddress', streetAddress: 'Daga Plaza, In Front of D-Mart, Biyani Square Camp', addressLocality: 'Amravati', addressRegion: 'Maharashtra', postalCode: '444602', addressCountry: 'IN' },
      geo: { '@type': 'GeoCoordinates', latitude: 20.932, longitude: 77.7523 },
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '19:00' },
    }, ...(pageId === 'contact' ? [{
      '@type': 'FAQPage', '@id': `${canonicalUrl}#faq`,
      mainEntity: FAQS_DATA.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    }] : [])];
  }
  if (pageId === 'services') {
    return [{ '@type': 'ItemList', name: 'Synckraft Software Engineering Services', itemListElement: SERVICES_DATA.map((service, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Service', name: service.title, description: service.description, provider: { '@id': ORGANIZATION_ID }, areaServed: 'IN', url: `${canonicalUrl}#${service.id}` } })) }];
  }
  if (pageId === 'products') {
    return [{ '@type': 'ItemList', name: 'Synckraft Software Products', itemListElement: PRODUCTS_DATA.map((product, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': ['Product', 'SoftwareApplication'], name: product.name, description: product.description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', brand: { '@id': ORGANIZATION_ID }, url: product.website || `${canonicalUrl}#${product.id}` } })) }];
  }
  if (pageId === 'work') {
    return [{ '@type': 'ItemList', name: 'Synckraft Case Studies', itemListElement: PROJECTS_DATA.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title, description: project.description, creator: { '@id': ORGANIZATION_ID } } })) }];
  }
  if (pageId === 'company') {
    return TEAM_MEMBERS.map((member) => ({ '@type': 'Person', name: member.name, jobTitle: member.role, worksFor: { '@id': ORGANIZATION_ID }, image: member.image ? absoluteUrl(member.image) : undefined }));
  }
  return [];
}

export const updatePageSeo = (pageId: PageId): void => {
  const config = SEO_CONFIGS[pageId] || SEO_CONFIGS.home;
  const canonicalUrl = absoluteUrl(PAGE_PATHS[pageId]);
  const robots = NOINDEX_PAGES.has(pageId) ? 'noindex, nofollow, noarchive' : 'index, follow, max-image-preview:large';
  document.title = config.title;
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('name', 'keywords', config.keywords);
  updateMetaTag('name', 'robots', robots);
  updateMetaTag('name', 'googlebot', robots);
  setCanonical(canonicalUrl);
  applySocialMeta(config.title, config.description, canonicalUrl);
  const base = baseSchemas(pageId, canonicalUrl);
  setJsonLd(base);
  void pageSpecificSchemas(pageId, canonicalUrl).then((specific) => {
    const activeCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    if (activeCanonical === canonicalUrl) setJsonLd([...base, ...specific]);
  });
};

export const updateBlogPostSeo = (post: BlogPost): void => {
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const title = post.seo?.metaTitle || `${post.title} | Synckraft Technologies`;
  const description = post.seo?.metaDescription || post.excerpt;
  const image = post.seo?.ogImage || post.coverImage || BRAND_IMAGE;
  document.title = title;
  updateMetaTag('name', 'description', description);
  updateMetaTag('name', 'keywords', (post.seo?.keywords || post.tags).join(', '));
  updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
  updateMetaTag('name', 'googlebot', 'index, follow, max-image-preview:large');
  setCanonical(canonicalUrl);
  applySocialMeta(title, description, canonicalUrl, 'article', image);
  updateMetaTag('property', 'article:published_time', post.publishDate);
  updateMetaTag('property', 'article:section', post.category);
  setJsonLd([{
    '@type': ['BlogPosting', 'Article'], '@id': `${canonicalUrl}#article`, headline: post.title,
    description, image: [image], datePublished: post.publishDate, articleSection: post.category,
    keywords: post.tags.join(', '), timeRequired: `PT${parseInt(post.readTime, 10) || 1}M`,
    author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.role },
    publisher: { '@id': ORGANIZATION_ID }, mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  }, {
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  }, ...(post.faqs?.length ? [{ '@type': 'FAQPage', mainEntity: post.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }] : [])]);
};

export const updateJobPostingSeo = (job: JobListing): void => {
  const canonicalUrl = `${SITE_URL}/careers?job=${encodeURIComponent(job.id)}`;
  const title = `${job.title} in ${job.location} | Synckraft Careers`;
  const description = `Apply for the ${job.title} position with Synckraft Technologies in ${job.location}. ${job.overview}`.slice(0, 160);
  document.title = title;
  updateMetaTag('name', 'description', description);
  updateMetaTag('name', 'robots', 'index, follow');
  setCanonical(canonicalUrl);
  applySocialMeta(title, description, canonicalUrl);
  setJsonLd([{
    '@type': 'JobPosting', title: job.title,
    description: [job.overview, ...job.responsibilities, ...job.requirements].join('\n'),
    datePosted: '2026-07-30', validThrough: '2026-12-31T23:59:59+05:30',
    employmentType: job.employmentType === 'Full-time' ? 'FULL_TIME' : job.employmentType === 'Part-time' ? 'PART_TIME' : job.employmentType === 'Contract' ? 'CONTRACTOR' : 'INTERN',
    hiringOrganization: { '@id': ORGANIZATION_ID },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'Daga Plaza, In Front of D-Mart, Biyani Square Camp', addressLocality: 'Amravati', addressRegion: 'Maharashtra', postalCode: '444602', addressCountry: 'IN' } },
  }]);
};
