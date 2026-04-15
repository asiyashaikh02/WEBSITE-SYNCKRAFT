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
const RealEstateOS = React.lazy(() => import('./pages/products/RealEstateOS'));
const RestaurantOS = React.lazy(() => import('./pages/products/RestaurantOS'));
const HealthcareOS = React.lazy(() => import('./pages/products/HealthcareOS'));
const RetailOS = React.lazy(() => import('./pages/products/RetailOS'));
const ManufacturingOS = React.lazy(() => import('./pages/products/ManufacturingOS'));
const BusinessOS = React.lazy(() => import('./pages/products/BusinessOS'));

const ProductsPage = React.lazy(() => import('./pages/Products'));
const BlogPage = React.lazy(() => import('./pages/blog/Blog'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPost'));
const CaseStudiesPage = React.lazy(() => import('./pages/case-studies/CaseStudies'));
const CaseStudyDetailPage = React.lazy(() => import('./pages/case-studies/CaseStudyDetail'));
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
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      });

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect(); // ✅ FIX
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);
};

// Landing Page
const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <main>
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

            {/* Industry Routes */}
            <Route path="/industries/automobile" element={<Automobile />} />
            <Route path="/industries/beauty" element={<Beauty />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/fashion" element={<Fashion />} />
            <Route path="/industries/furniture" element={<Furniture />} />
            <Route path="/industries/gym" element={<Gym />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/jewellery" element={<Jewelry />} />
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