import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { PageId, ProductItem, ProjectItem } from './types';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CTABanner } from './components/CTABanner';
import { StrategyCallModal } from './components/StrategyCallModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { GlobalLeadModal } from './components/modals/GlobalLeadModal';
import { LeadModalProvider, useLeadModal } from './context/LeadModalContext';
import { FormVariant } from './types/lead';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then((module) => ({ default: module.WorkPage })));
const CompanyPage = lazy(() => import('./pages/CompanyPage').then((module) => ({ default: module.CompanyPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then((module) => ({ default: module.CareersPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((module) => ({ default: module.TermsPage })));
const RefundPage = lazy(() => import('./pages/RefundPage').then((module) => ({ default: module.RefundPage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then((module) => ({ default: module.DisclaimerPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage').then((module) => ({ default: module.ThankYouPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then((module) => ({ default: module.AdminPage })));

import { motion, AnimatePresence } from 'motion/react';
import { updatePageSeo } from './utils/seo';
import { analytics } from './utils/analytics/analytics';
import { trackPageView } from './utils/analytics/events';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { openLeadModal, setCurrentPageName } = useLeadModal();

  // Load settings configurations and configure analytics engine
  useEffect(() => {
    const initAnalytics = async () => {
      try {
        const res = await fetch('/api/admin/settings');
        const json = await res.json();
        if (json.success && json.data) {
          analytics.configure({
            gtmId: json.data.gtmId,
            ga4Id: json.data.googleAnalyticsId || json.data.ga4Id,
            metaPixelId: json.data.metaPixelId,
            linkedinInsightId: json.data.linkedinInsightId,
            clarityProjectId: json.data.clarityProjectId,
            debugMode: process.env.NODE_ENV !== 'production',
          });
        }
      } catch (err) {
        console.error('Failed to configure analytics', err);
      }
    };
    initAnalytics();
  }, []);

  // Sync hash routing & page name
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (
        [
          'home',
          'products',
          'services',
          'work',
          'company',
          'contact',
          'blog',
          'careers',
          'privacy',
          'terms',
          'refund',
          'disclaimer',
          '404',
          'thank-you',
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const pageNameMap: Record<PageId, string> = {
      home: 'Homepage',
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
    if (pageNameMap[currentPage]) {
      setCurrentPageName(pageNameMap[currentPage]);
    }
    // Dynamically update page SEO and JSON-LD Structured Data
    updatePageSeo(currentPage);

    // Dynamic Analytics PageView Tracking
    trackPageView(window.location.hash || '#home', document.title);
  }, [currentPage, setCurrentPageName]);

  const handleNavigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, []);

  const handleOpenBookModal = useCallback((
    ctaName?: unknown,
    variant?: FormVariant,
    defaultProduct?: string
  ) => {
    const safeCta = typeof ctaName === 'string' && ctaName ? ctaName : undefined;
    openLeadModal({
      ctaName: safeCta || 'Book Strategy Call',
      formVariant: typeof variant === 'string' ? variant : undefined,
      defaultProduct: typeof defaultProduct === 'string' ? defaultProduct : undefined,
    });
  }, [openLeadModal]);

  const renderPage = useMemo(() => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Book Strategy Call')}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Schedule Product Demo', 'demo')}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Book Consultation', 'business')}
          />
        );
      case 'work':
        return (
          <WorkPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Start Project', 'business')}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
      case 'company':
        return (
          <CompanyPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Talk To Us', 'business')}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Contact Sales', 'business')}
            onSuccessRedirect={() => handleNavigate('thank-you')}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Talk To Us', 'business')}
          />
        );
      case 'careers':
        return (
          <CareersPage
            onNavigate={handleNavigate}
            onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Apply Now', 'careers')}
          />
        );
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'refund':
        return <RefundPage onNavigate={handleNavigate} />;
      case 'disclaimer':
        return <DisclaimerPage onNavigate={handleNavigate} />;
      case 'thank-you':
        return (
          <ThankYouPage
            onNavigate={handleNavigate}
            onOpenBookModal={() => handleOpenBookModal('Schedule Call')}
          />
        );
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  }, [currentPage, handleNavigate, handleOpenBookModal]);

  const showCTABanner = [
    'home',
    'products',
    'services',
    'work',
    'company',
    'contact',
    'blog',
    'careers',
  ].includes(currentPage);

  if (currentPage === 'admin') {
    return (
      <Suspense fallback={null}>
        <AdminPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-transparent text-slate-900 selection:bg-blue-100 selection:text-blue-700 relative overflow-x-hidden flex flex-col justify-between">
      {/* Scroll depth progress bar at top of viewport */}
      <ScrollProgress />

      {/* Background system: Wave, Particles, Dotted Grid, Soft Glow */}
      <BackgroundEffects />

      {/* Main Layout Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Book Strategy Call')}
        />

        {/* Dynamic Page Views with Smooth Motion Fade */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Suspense fallback={null}>{renderPage}</Suspense>
            </motion.div>
          </AnimatePresence>

          {/* Persistent CTA Banner for main pages */}
          {showCTABanner && (
            <CTABanner
              onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Book Strategy Call')}
            />
          )}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Unified Global Lead Capture Modal */}
      <GlobalLeadModal />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Schedule Product Demo', 'demo')}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBookModal={(cta) => handleOpenBookModal(typeof cta === 'string' ? cta : 'Start Project', 'business')}
      />
    </div>
  );
}

export default function App() {
  return (
    <LeadModalProvider>
      <AppContent />
    </LeadModalProvider>
  );
}

