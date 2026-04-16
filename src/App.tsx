import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { initAnalytics, trackPageView } from './utils/analytics';
import { useTheme } from './components/ThemeProvider';

// Components
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { IndustrySolutions } from './components/IndustrySolutions';
import { BusinessSolutions } from './components/BusinessSolutions';
import { IndustriesFOMO } from './components/IndustriesFOMO';
import { ProductOSSection } from './components/ProductOSSection';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { CaseStudiesPreview } from './components/CaseStudiesPreview';
import { TrustSection } from './components/TrustSection';
import { Loader } from './components/Loader';
import { Pillars } from './components/Pillars';

// Lazy Pages (✅ FIXED)
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const IndustriesPage = React.lazy(() => import('./pages/Industries'));
const ServicesPage = React.lazy(() => import('./services/pages/Services'));

// Industry Pages
const Automobile = React.lazy(() => import('./services/pages/industries/Automobile'));
const Beauty = React.lazy(() => import('./services/pages/industries/Beauty'));
const Education = React.lazy(() => import('./services/pages/industries/Education'));
const Fashion = React.lazy(() => import('./services/pages/industries/Fashion'));
const Furniture = React.lazy(() => import('./services/pages/industries/Furniture'));
const Gym = React.lazy(() => import('./services/pages/industries/Gym'));
const Healthcare = React.lazy(() => import('./services/pages/industries/Healthcare'));
const Hospitality = React.lazy(() => import('./services/pages/industries/Hospitality'));
const Jewelry = React.lazy(() => import('./services/pages/industries/Jewelry'));
const Obsidian = React.lazy(() => import('./services/pages/industries/Obsidian'));
const RealEstate = React.lazy(() => import('./services/pages/industries/RealEstate'));
const Restaurant = React.lazy(() => import('./services/pages/industries/Restaurant'));
const Retail = React.lazy(() => import('./services/pages/industries/Retail'));
const Supermarket = React.lazy(() => import('./services/pages/industries/Supermarket'));

// Product Pages (✅ FIXED LAZY)
const RealEstateOS = React.lazy(() =>
  import('./pages/products/RealEstateOS').then((module) => ({ default: module.RealEstateOS }))
);
const RestaurantOS = React.lazy(() =>
  import('./pages/products/RestaurantOS').then((module) => ({ default: module.RestaurantOS }))
);
const HealthcareOS = React.lazy(() =>
  import('./pages/products/HealthcareOS').then((module) => ({ default: module.HealthcareOS }))
);
const RetailOS = React.lazy(() =>
  import('./pages/products/RetailOS').then((module) => ({ default: module.RetailOS }))
);
const ManufacturingOS = React.lazy(() =>
  import('./pages/products/ManufacturingOS').then((module) => ({ default: module.ManufacturingOS }))
);
const BusinessOS = React.lazy(() =>
  import('./pages/products/BusinessOS').then((module) => ({ default: module.BusinessOS }))
);

const ProductsPage = React.lazy(() => import('./pages/Products'));
const BlogPage = React.lazy(() => import('./pages/blog/Blog'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPost'));
const CaseStudiesPage = React.lazy(() => import('./pages/case-studies/CaseStudies'));
const CaseStudyDetailPage = React.lazy(() => import('./pages/case-studies/CaseStudyDetail'));
const BookDemoPage = React.lazy(() => import('./pages/funnel/BookDemo'));
const ContactSalesPage = React.lazy(() => import('./pages/funnel/ContactSales'));
const FreeAuditPage = React.lazy(() => import('./pages/funnel/FreeAudit'));
const ThankYouPage = React.lazy(() => import('./pages/funnel/ThankYou'));
const CompanyPage = React.lazy(() => import('./pages/Company'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Scroll Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Reveal Animations FIXED
const useRevealAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timeoutId = window.setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply stagger delay dynamically based on sibling index if inside a grid/flex
            const target = entry.target as HTMLElement;
            if (target.parentElement) {
              const children = Array.from(target.parentElement.children);
              const index = children.indexOf(target);
              if (index > 0 && target.parentElement.childElementCount > 1 && !target.style.transitionDelay) {
                target.style.transitionDelay = `${Math.min(index * 100, 500)}ms`;
              }
            }
            target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        // Reset state for route changes
        el.classList.remove('active');
        (el as HTMLElement).style.transitionDelay = '';
        observer?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [location]);
};

// Landing Page
const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <main>
      <Hero />
      <TrustSection />
      <BusinessSolutions theme={theme} />
      <Pillars theme={theme} />
      <IndustrySolutions theme={theme} />
      <ProductOSSection theme={theme} />
      <Testimonials theme={theme} />
      <CTA theme={theme} />
    </main>
  );
};

export default function App() {
  const { theme, toggleTheme } = useTheme() as {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
  };

  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useRevealAnimations();

  return (
    <>
      <Helmet>
        <title>Synckraft Technologies</title>
      </Helmet>

      <ScrollToTop />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainLanding theme={theme} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
            <Route path="/free-audit" element={<FreeAuditPage />} />
            <Route path="/contact-sales" element={<ContactSalesPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* Industry Routes */}
            <Route path="/industries/automobile" element={<Automobile />} />
            <Route path="/industries/beauty" element={<Beauty />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/fashion" element={<Fashion />} />
            <Route path="/industries/furniture" element={<Furniture />} />
            <Route path="/industries/gym" element={<Gym />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/jewelry" element={<Jewelry />} />
            <Route path="/industries/enterprise" element={<Obsidian />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/restaurant" element={<Restaurant />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/supermarket" element={<Supermarket />} />

            {/* Products */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/real-estate-os" element={<RealEstateOS />} />
            <Route path="/products/restaurant-os" element={<RestaurantOS />} />
            <Route path="/products/healthcare-os" element={<HealthcareOS />} />
            <Route path="/products/retail-os" element={<RetailOS />} />
            <Route path="/products/manufacturing-os" element={<ManufacturingOS />} />
            <Route path="/products/business-os" element={<BusinessOS />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />

            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />

            <Route path="/company" element={<CompanyPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer theme={theme} />
      <FloatingCTA />
    </>
  );
}