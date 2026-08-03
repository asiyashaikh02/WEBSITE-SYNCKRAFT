import { PageId, BlogPost, JobListing } from '../types';

interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
}

const SEO_CONFIGS: Record<PageId, PageSeoConfig> = {
  home: {
    title: 'Synckraft Technologies – Enterprise Software, CRM Systems & AI Automation',
    description: 'Synckraft Technologies engineers high-performance custom ERP/CRM platforms, AI voice agents, and workflow automation solutions. Build systems that scale your operations.',
    keywords: 'Synckraft, Synckraft Technologies, custom ERP, CRM system, AI automation, software engineering, AI voice agents, enterprise software',
  },
  products: {
    title: 'Synckraft Products – Custom CRM, ERP, and AI Voice Agent Systems',
    description: "Explore Synckraft's suite of production-ready business software, including lead qualification systems, AI Voice Agents, CRM platforms, and custom ERP software.",
    keywords: 'Synckraft CRM, custom ERP, AI voice agents, real estate automation, software products',
  },
  services: {
    title: 'Enterprise Software Engineering & AI Consulting Services | Synckraft',
    description: 'We provide custom software development, cloud infrastructure setup, AI automation consulting, system architecture design, and ongoing software support.',
    keywords: 'custom software services, AI consulting, cloud infrastructure, DevOps, system architecture, India software developers',
  },
  work: {
    title: 'Case Studies & Client Success Stories | Synckraft Technologies',
    description: 'See how Synckraft built scalable business software, automated real estate sales, and streamlined manufacturing workflows for enterprises across India.',
    keywords: 'case studies, client success, ERP implementations, sales automation, manufacturing software',
  },
  company: {
    title: 'About Synckraft – Meet the Team Building Enterprise Automation',
    description: "Learn about Synckraft's mission, values, and the experienced engineering team building state-of-the-art enterprise software and automation infrastructure.",
    keywords: 'Synckraft team, about Synckraft, software company Amravati, tech leaders',
  },
  contact: {
    title: 'Contact Synckraft – Start Your Automation & Software Project',
    description: 'Get in touch with Synckraft Technologies for custom ERP, CRM, and AI automation inquiries. Book a free discovery call or visit our offices in Amravati.',
    keywords: 'contact Synckraft, hire developers, AI discovery call, software offices Amravati',
  },
  blog: {
    title: 'Synckraft Blog – Engineering Insights, AI Benchmarks & Tech Trends',
    description: 'Read technical guides, software architecture teardowns, AI automation benchmarks, and digital transformation strategy from our engineering leads.',
    keywords: 'engineering blog, tech benchmarks, software architecture, AI voice bots, developer guides',
  },
  careers: {
    title: 'Careers at Synckraft – Join Our Fast-Growing Engineering Team',
    description: 'Build software products that real businesses use. View open positions for software developers, interns, and sales associates at Synckraft.',
    keywords: 'jobs at Synckraft, internship Amravati, software engineering careers, hiring software developers',
  },
  privacy: {
    title: 'Privacy Policy | Synckraft Technologies',
    description: 'Review the privacy policy, data practices, security compliance, and user rights of Synckraft Technologies.',
    keywords: 'privacy policy, data security, compliance',
  },
  terms: {
    title: 'Terms of Service | Synckraft Technologies',
    description: 'Read the official terms and conditions for using the services, products, and platforms of Synckraft Technologies.',
    keywords: 'terms of service, legal conditions, agreement',
  },
  refund: {
    title: 'Refund Policy | Synckraft Technologies',
    description: "Read Synckraft's refund policy regarding custom software services, discovery phases, and SLA agreements.",
    keywords: 'refund policy, software SLA, service cancellation',
  },
  disclaimer: {
    title: 'Disclaimer | Synckraft Technologies',
    description: 'Read the legal disclaimer and limitation of liability of Synckraft Technologies.',
    keywords: 'legal disclaimer, liability limitations',
  },
  'thank-you': {
    title: 'Thank You – Synckraft Technologies',
    description: 'Thank you for contacting Synckraft. Our engineering team will review your requirements and reach out to you within 24 hours.',
    keywords: 'thank you, request submitted',
  },
  '404': {
    title: 'Page Not Found | Synckraft Technologies',
    description: 'The page you are looking for does not exist. Return to the Synckraft homepage.',
    keywords: 'page not found, 404 error',
  },
  admin: {
    title: 'Synckraft Admin Panel – Internal CMS & CRM',
    description: 'Internal content management system and business operations dashboard for Synckraft Technologies.',
    keywords: 'admin, cms, internal dashboard',
  },
};

export const updatePageSeo = (pageId: PageId) => {
  const config = SEO_CONFIGS[pageId] || SEO_CONFIGS.home;
  const canonicalUrl = pageId === 'home' ? 'https://synckraft.in' : `https://synckraft.in/#${pageId}`;

  // 1. Title
  document.title = config.title;

  // 2. Meta Tags (Description, Keywords, Robots)
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('name', 'keywords', config.keywords);
  updateMetaTag('name', 'robots', pageId === 'admin' ? 'noindex, nofollow' : 'index, follow');

  // 3. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 4. Open Graph
  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateMetaTag('property', 'og:type', 'website');
  updateMetaTag('property', 'og:image', 'https://synckraft.in/synckraft-logo.png');

  // 5. Twitter Card
  updateMetaTag('property', 'twitter:card', 'summary_large_image');
  updateMetaTag('property', 'twitter:url', canonicalUrl);
  updateMetaTag('property', 'twitter:title', config.title);
  updateMetaTag('property', 'twitter:description', config.description);
  updateMetaTag('property', 'twitter:image', 'https://synckraft.in/synckraft-logo.png');

  // 6. JSON-LD Structured Data
  updateJsonLd(pageId);
};

export const updateBlogPostSeo = (post: BlogPost) => {
  const canonicalUrl = `https://synckraft.in/#blog`;
  const title = `${post.title} | Synckraft Technologies`;
  document.title = title;

  updateMetaTag('name', 'description', post.excerpt);
  updateMetaTag('name', 'keywords', post.tags.join(', '));
  updateMetaTag('name', 'robots', 'index, follow');

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // Open Graph
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', post.excerpt);
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateMetaTag('property', 'og:type', 'article');
  updateMetaTag('property', 'og:image', post.coverImage || 'https://synckraft.in/synckraft-logo.png');

  // Twitter
  updateMetaTag('property', 'twitter:card', 'summary_large_image');
  updateMetaTag('property', 'twitter:url', canonicalUrl);
  updateMetaTag('property', 'twitter:title', title);
  updateMetaTag('property', 'twitter:description', post.excerpt);
  updateMetaTag('property', 'twitter:image', post.coverImage || 'https://synckraft.in/synckraft-logo.png');

  // JSON-LD dynamic injection: Article/BlogPosting
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'image': post.coverImage,
      'datePublished': post.publishDate,
      'author': {
        '@type': 'Person',
        'name': post.author.name,
        'jobTitle': post.author.role
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Synckraft Technologies Private Limited',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://synckraft.in/synckraft-logo.png'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl
      }
    }
  ];

  let script = document.getElementById('synckraft-ld-json') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = 'synckraft-ld-json';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas, null, 2);
};

export const updateJobPostingSeo = (job: JobListing) => {
  const canonicalUrl = `https://synckraft.in/#careers`;
  const title = `${job.title} Job Opportunity in ${job.location} | Synckraft`;
  document.title = title;

  const desc = `We are hiring a ${job.title} for our ${job.department} team. ${job.overview.substring(0, 150)}...`;
  updateMetaTag('name', 'description', desc);
  updateMetaTag('name', 'keywords', `${job.title}, jobs at synckraft, hire ${job.title}, software engineering careers`);
  updateMetaTag('name', 'robots', 'index, follow');

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // Open Graph
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('property', 'og:description', desc);
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateMetaTag('property', 'og:type', 'website');
  updateMetaTag('property', 'og:image', 'https://synckraft.in/synckraft-logo.png');

  // Twitter
  updateMetaTag('property', 'twitter:card', 'summary_large_image');
  updateMetaTag('property', 'twitter:url', canonicalUrl);
  updateMetaTag('property', 'twitter:title', title);
  updateMetaTag('property', 'twitter:description', desc);
  updateMetaTag('property', 'twitter:image', 'https://synckraft.in/synckraft-logo.png');

  // JSON-LD dynamic injection: JobPosting
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      'title': job.title,
      'description': job.overview + '\n\n' + job.responsibilities.join('\n') + '\n\n' + job.requirements.join('\n'),
      'datePosted': '2026-07-30',
      'validThrough': '2026-12-31',
      'employmentType': job.employmentType === 'Full-time' ? 'FULL_TIME' : job.employmentType === 'Part-time' ? 'PART_TIME' : job.employmentType === 'Contract' ? 'CONTRACTOR' : 'INTERN',
      'hiringOrganization': {
        '@type': 'Organization',
        'name': 'Synckraft Technologies Private Limited',
        'sameAs': 'https://synckraft.in',
        'logo': 'https://synckraft.in/synckraft-logo.png'
      },
      'jobLocation': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Tapadiya City Centre, Amravati',
          'addressLocality': 'Amravati',
          'addressRegion': 'Maharashtra',
          'postalCode': '444601',
          'addressCountry': 'IN'
        }
      }
    }
  ];

  let script = document.getElementById('synckraft-ld-json') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = 'synckraft-ld-json';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas, null, 2);
};

const updateMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateJsonLd = (pageId: PageId) => {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://synckraft.in/#organization',
      'name': 'Synckraft Technologies Private Limited',
      'url': 'https://synckraft.in',
      'logo': 'https://synckraft.in/synckraft-logo.png',
      'sameAs': [
        'https://www.linkedin.com/company/synckraft-technologies-private-limited/',
        'https://www.facebook.com/SynckraftTechnologies/',
        'https://www.instagram.com/synckraft_technologies/?__pwa=1#'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-98677-99655',
        'contactType': 'customer service',
        'email': 'grow@synckraft.in',
        'areaServed': 'IN',
        'availableLanguage': ['English', 'Helvetica', 'Marathi']
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://synckraft.in/#website',
      'name': 'Synckraft Technologies',
      'url': 'https://synckraft.in'
    }
  ];

  if (pageId === 'home' || pageId === 'contact') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://synckraft.in/#localbusiness',
      'name': 'Synckraft Technologies',
      'image': 'https://synckraft.in/synckraft-logo.png',
      'telephone': '+91-98677-99655',
      'email': 'grow@synckraft.in',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Tapadiya City Centre, Amravati',
        'addressLocality': 'Amravati',
        'addressRegion': 'Maharashtra',
        'postalCode': '444601',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '20.9320',
        'longitude': '77.7523'
      },
      'url': 'https://synckraft.in/#contact',
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '09:00',
        'closes': '19:00'
      }
    });
  }

  if (pageId === 'services') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'serviceType': 'Custom Software Development & AI Automation',
      'provider': {
        '@type': 'Organization',
        'name': 'Synckraft Technologies'
      },
      'areaServed': 'IN',
      'description': 'Custom enterprise software engineering, CRM/ERP implementation, AI voice agent development, cloud architecture, and automation consulting.'
    });
  }

  if (pageId !== 'home') {
    const pageNames: Record<PageId, string> = {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      work: 'Work & Case Studies',
      company: 'Company & Team',
      contact: 'Contact Us',
      blog: 'Blog & Insights',
      careers: 'Careers',
      admin: 'Admin Panel',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      refund: 'Refund Policy',
      disclaimer: 'Disclaimer',
      '404': '404 Not Found',
      'thank-you': 'Thank You',
    };

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://synckraft.in'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': pageNames[pageId] || pageId,
          'item': `https://synckraft.in/#${pageId}`
        }
      ]
    });
  }

  let script = document.getElementById('synckraft-ld-json') as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = 'synckraft-ld-json';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas, null, 2);
};
