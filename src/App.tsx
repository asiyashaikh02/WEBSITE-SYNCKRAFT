import React, { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { initAnalytics, trackPageView } from './utils/analytics';

// Components
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About as AboutSection } from './components/About'; 
import { Pillars } from './components/Pillars';
import { IndustrySolutions } from './components/IndustrySolutions';
import { BusinessSolutions } from './components/BusinessSolutions';
import { IndustriesFOMO } from './components/IndustriesFOMO';
import { ProductOSSection } from './components/ProductOSSection';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { CaseStudiesPreview } from './components/CaseStudiesPreview';
import { TrustSection } from './components/TrustSection';
import { Loader } from './components/Loader';

// Lazy Pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

// New Phase 2 Pages
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

const ProductsPage = React.lazy(() => import('./pages/Products'));
const BlogPage = React.lazy(() => import('./pages/blog/Blog'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPost'));
const CaseStudiesPage = React.lazy(() => import('./pages/case-studies/CaseStudies'));
const CaseStudyDetailPage = React.lazy(() => import('./pages/case-studies/CaseStudyDetail'));
const CompanyPage = React.lazy(() => import('./pages/Company'));

// Product OS Pages
const RealEstateOS = React.lazy(() => import('./pages/products/RealEstateOS').then(m => ({ default: m.RealEstateOS })));
const RestaurantOS = React.lazy(() => import('./pages/products/RestaurantOS').then(m => ({ default: m.RestaurantOS })));
const HealthcareOS = React.lazy(() => import('./pages/products/HealthcareOS').then(m => ({ default: m.HealthcareOS })));
const RetailOS = React.lazy(() => import('./pages/products/RetailOS').then(m => ({ default: m.RetailOS })));
const ManufacturingOS = React.lazy(() => import('./pages/products/ManufacturingOS').then(m => ({ default: m.ManufacturingOS })));
const BusinessOS = React.lazy(() => import('./pages/products/BusinessOS').then(m => ({ default: m.BusinessOS })));

// New Product Pages
const RealEstateProduct = React.lazy(() => import('./pages/products/RealEstate'));
const RestaurantProduct = React.lazy(() => import('./pages/products/Restaurant'));
const HealthcareProduct = React.lazy(() => import('./pages/products/Healthcare'));
const BusinessOSPage = React.lazy(() => import('./pages/products/BusinessOS'));
const AutomationProduct = React.lazy(() => import('./pages/products/Automation'));

// Phase 6 SEO Pages
const RealEstateAutomation = React.lazy(() => import('./pages/seo/RealEstateAutomation'));
const RestaurantAutomation = React.lazy(() => import('./pages/seo/RestaurantAutomation'));
const HealthcareAutomation = React.lazy(() => import('./pages/seo/HealthcareAutomation'));

// Phase 8 Funnel Pages
const BookDemo = React.lazy(() => import('./pages/funnel/BookDemo'));
const FreeAudit = React.lazy(() => import('./pages/funnel/FreeAudit'));
const ContactSales = React.lazy(() => import('./pages/funnel/ContactSales'));
const ThankYou = React.lazy(() => import('./pages/funnel/ThankYou'));

// Error Pages
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Hook for scroll animations
const useRevealAnimations = () => {
  const location = useLocation();
  useEffect(() => {
    // Thoda delay taaki DOM poori tarah load ho jaye
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((element) => observer.observe(element));

      // Jo elements pehle se view me hain unhe turant trigger karne ke liye
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('active');
        }
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);
};

// Home/Landing Component
const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <main role="main">
      <Hero />
      <ProductOSSection theme={theme} />
      <BusinessSolutions theme={theme} />
      <IndustrySolutions theme={theme} />
      <IndustriesFOMO theme={theme} />
      <BlogSection theme={theme} />
      <Testimonials theme={theme} />
      <CaseStudiesPreview theme={theme} />
      <TrustSection theme={theme} />
      <CTA theme={theme} />
    </main>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      if (typeof window === 'undefined') return 'dark';
      return (localStorage.getItem('theme') || 'dark') as 'dark' | 'light';
    } catch (event) { return 'dark'; }
  });

  const location = useLocation();
  const canonicalUrl = `https://synckraft.in${location.pathname === '/' ? '' : location.pathname}`;

  // Call analytics & reveal animations hook here so it works on all routes
  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useRevealAnimations();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    if (document.body) document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(previous => previous === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Helmet>
        <title>Synckraft Technologies | AI & Web Development</title>
        <meta name="description" content="Synckraft Technologies builds AI-powered websites and scalable digital platforms." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <ScrollToTop />
      <div className="min-h-full bg-slate-950 text-slate-100 selection:bg-blue-600/20 relative overflow-hidden">
        {/* Global Background Layer */}
        <div className="absolute inset-0 bg-slate-950/95" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.08), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.06), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.04), transparent 35%)",
            mixBlendMode: "screen",
            opacity: 0.6,
          }}
        />
        <div className="hero-glow" />
        <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-[10%] bottom-16 h-44 w-44 rounded-full bg-sky-500/8 blur-3xl" />
        <div className="absolute right-[12%] bottom-20 h-64 w-64 rounded-full bg-violet-500/8 blur-3xl" />
        
        <div className="relative z-10">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <Suspense fallback={<Loader />}>
            <AnimatePresence mode="wait">
              <Routes>
            <Route path="/" element={<MainLanding theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} />} />
            <Route path="/terms-of-service" element={<TermsOfService theme={theme} />} />
            <Route path="/refund-policy" element={<RefundPolicy theme={theme} />} />
            <Route path="/disclaimer" element={<Disclaimer theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
            
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Industry Routes */}
            <Route path="/industries/automobile" element={<Automobile />} />
            <Route path="/industries/salon" element={<Beauty />} />
            <Route path="/industries/beauty" element={<Beauty />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/fashion" element={<Fashion />} />
            <Route path="/industries/furniture" element={<Furniture />} />
            <Route path="/industries/gym" element={<Gym />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/hotel" element={<Hospitality />} />
            <Route path="/industries/jewellery" element={<Jewelry />} />
            <Route path="/industries/jewelry" element={<Jewelry />} />
            <Route path="/industries/enterprise" element={<Obsidian />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/restaurant" element={<Restaurant />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/supermarket" element={<Supermarket />} />

            <Route path="/products" element={<ProductsPage />} />

            {/* Product OS Routes */}
            <Route path="/products/real-estate-os" element={<RealEstateOS />} />
            <Route path="/products/restaurant-os" element={<RestaurantOS />} />
            <Route path="/products/healthcare-os" element={<HealthcareOS />} />
            <Route path="/products/retail-os" element={<RetailOS />} />
            <Route path="/products/manufacturing-os" element={<ManufacturingOS />} />
            <Route path="/products/business-os" element={<BusinessOS />} />
            <Route path="/products/RealEstate" element={<RealEstateProduct />} />
            <Route path="/products/Restaurant" element={<RestaurantProduct />} />
            <Route path="/products/Healthcare" element={<HealthcareProduct />} />
            <Route path="/products/BusinessOS" element={<BusinessOSPage />} />
            <Route path="/products/Automation" element={<AutomationProduct />} />

            <Route path="/blog" element={<BlogPage theme={theme} />} />
            <Route path="/blog/:id" element={<BlogPostPage theme={theme} />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
            <Route path="/company" element={<CompanyPage />} />

            <Route path="/real-estate-automation" element={<RealEstateAutomation theme={theme} />} />
            <Route path="/restaurant-automation" element={<RestaurantAutomation theme={theme} />} />
            <Route path="/healthcare-automation" element={<HealthcareAutomation theme={theme} />} />

            {/* Funnel Routes */}
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Error Route */}
            <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>

        <Footer theme={theme} />

        <FloatingCTA />
        </div>
      </div>
    </>
  );
}
