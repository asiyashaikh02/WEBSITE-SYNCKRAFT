import { PageId } from '../types';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  products: '/products',
  services: '/services',
  work: '/work',
  company: '/company',
  contact: '/contact',
  blog: '/blog',
  careers: '/careers',
  privacy: '/privacy-policy',
  terms: '/terms',
  refund: '/refund-policy',
  disclaimer: '/disclaimer',
  'thank-you': '/thank-you',
  admin: '/admin',
  '404': '/404',
};

const PATH_PAGES = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([page, path]) => [path, page])
) as Record<string, PageId>;

const LEGACY_HASH_PAGES = new Set<PageId>([
  'products', 'services', 'work', 'blog', 'company', 'contact',
]);

export function getLegacyHashPage(): PageId | null {
  if (window.location.pathname !== '/') return null;
  const hashPage = window.location.hash.slice(1) as PageId;
  return LEGACY_HASH_PAGES.has(hashPage) ? hashPage : null;
}

export function getPageFromLocation(): PageId {
  const legacyHashPage = getLegacyHashPage();
  if (legacyHashPage) return legacyHashPage;
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath.startsWith('/blog/')) return 'blog';
  return PATH_PAGES[normalizedPath] || '404';
}
