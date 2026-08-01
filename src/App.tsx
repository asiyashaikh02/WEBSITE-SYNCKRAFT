import React, { useState, useEffect } from 'react';
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

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPage } from './pages/RefundPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { AdminPage } from './pages/AdminPage';

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

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookModal = (
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
  };

  const renderPage = () => {
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
  };

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
    return <AdminPage onNavigate={handleNavigate} />;
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
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {renderPage()}
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

