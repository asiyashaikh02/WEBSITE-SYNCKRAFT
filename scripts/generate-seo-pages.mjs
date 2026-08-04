import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = 'https://synckraft.in';
const distDir = path.resolve('dist');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const pages = [
  ['products', 'Synckraft Products – CRM, ERP & AI Automation Software', "Explore Synckraft's business software suite, including AI voice agents, CRM platforms, restaurant POS, solar ERP, compliance and gym management systems."],
  ['services', 'Enterprise Software Engineering & AI Consulting | Synckraft', 'Custom software development, CRM and ERP platforms, cloud infrastructure, AI automation consulting, system architecture and ongoing software support.'],
  ['work', 'Software Case Studies & Client Success | Synckraft', 'See how Synckraft delivers scalable business software, sales automation, custom ERP platforms and streamlined operational workflows for growing companies.'],
  ['company', 'About Synckraft Technologies – Company, Mission & Team', 'Learn about Synckraft Technologies, our mission, values and engineering team building enterprise software and intelligent automation systems.'],
  ['contact', 'Contact Synckraft – Start Your Software & Automation Project', 'Contact Synckraft Technologies for custom ERP, CRM and AI automation. Book a discovery call or visit our Amravati, Maharashtra office.'],
  ['blog', 'Synckraft Blog – Software Engineering & AI Automation Insights', 'Read technical guides about software architecture, AI automation, voice agents, CRM, ERP and digital transformation from Synckraft engineers.'],
  ['careers', 'Careers at Synckraft – Software & Technology Jobs', 'Explore software development, technology, sales and internship opportunities at Synckraft Technologies in Amravati, Maharashtra.'],
  ['privacy-policy', 'Privacy Policy | Synckraft Technologies', 'Review how Synckraft Technologies collects, uses, protects and manages personal information and your privacy rights.'],
  ['terms', 'Terms of Service | Synckraft Technologies', 'Read the terms and conditions governing Synckraft Technologies software products, professional services and website use.'],
  ['refund-policy', 'Refund Policy | Synckraft Technologies', 'Review the Synckraft Technologies refund policy for custom software projects, product subscriptions and service agreements.'],
  ['disclaimer', 'Disclaimer | Synckraft Technologies', 'Read the website, third-party integration and limitation of liability disclaimer for Synckraft Technologies.'],
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function replaceMeta(html, attribute, key, value) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

for (const [route, title, description] of pages) {
  const canonical = `${siteUrl}/${route}`;
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = replaceMeta(html, 'name', 'description', description);
  html = replaceMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large');
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:description', description);
  html = replaceMeta(html, 'name', 'twitter:url', canonical);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`);
  const outputDir = path.join(distDir, route);
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), html);
}
console.log(`Generated ${pages.length} crawlable route documents.`);

const blogSource = await readFile(path.resolve('src/data/blogData.ts'), 'utf8');
const postsSource = blogSource.slice(blogSource.indexOf('export const BLOG_POSTS'));
const postPattern = /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?excerpt:\s*'([^']+)'[\s\S]*?coverImage:\s*'([^']+)'[\s\S]*?publishDate:\s*'([^']+)'/g;
const articleUrls = [];
for (const match of postsSource.matchAll(postPattern)) {
  const [, slug, postTitle, excerpt, image, publishDate] = match;
  const route = `blog/${slug}`;
  const canonical = `${siteUrl}/${route}`;
  const title = `${postTitle} | Synckraft Technologies`;
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = replaceMeta(html, 'name', 'description', excerpt);
  html = replaceMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large');
  html = replaceMeta(html, 'property', 'og:type', 'article');
  html = replaceMeta(html, 'property', 'og:title', title);
  html = replaceMeta(html, 'property', 'og:description', excerpt);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'property', 'og:image', image);
  html = replaceMeta(html, 'property', 'article:published_time', publishDate);
  html = replaceMeta(html, 'name', 'twitter:title', title);
  html = replaceMeta(html, 'name', 'twitter:description', excerpt);
  html = replaceMeta(html, 'name', 'twitter:url', canonical);
  html = replaceMeta(html, 'name', 'twitter:image', image);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`);
  const outputDir = path.join(distDir, 'blog', slug);
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), html);
  articleUrls.push([canonical, publishDate]);
}

const sitemapUrls = [
  [`${siteUrl}/`, '2026-08-04'],
  ...pages.map(([route]) => [`${siteUrl}/${route}`, '2026-08-04']),
  ...articleUrls,
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map(([url, lastmod]) => `  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`Generated ${articleUrls.length} article documents and ${sitemapUrls.length} sitemap URLs.`);
