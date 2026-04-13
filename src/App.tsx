import React, { useEffect, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About as AboutSection } from './components/About'; 
import { Pillars } from './components/Pillars';
import { IndustrySolutions } from './components/IndustrySolutions';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

// Lazy Pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

// New Phase 2 Pages
const ServicesPage = React.lazy(() => import('./pages/Services'));
const IndustriesPage = React.lazy(() => import('./pages/Industries'));
const ProductsPage = React.lazy(() => import('./pages/Products'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudies'));
const CompanyPage = React.lazy(() => import('./pages/Company'));

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
      <Hero theme={theme} />
      <AboutSection theme={theme} />
      <Pillars theme={theme} />
      <IndustrySolutions theme={theme} />
      <Metrics theme={theme} />
      <Testimonials />
      <ContactForm theme={theme} />
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

  // Call reveal animations hook here so it works on all routes
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
      <div className={`min-h-full transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0A0A0B] text-slate-100' : 'bg-white text-slate-900'
      } selection:bg-blue-600/20`}>
        
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0A0A0B]"><div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<MainLanding theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} />} />
            <Route path="/terms-of-service" element={<TermsOfService theme={theme} />} />
            <Route path="/refund-policy" element={<RefundPolicy theme={theme} />} />
            <Route path="/disclaimer" element={<Disclaimer theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
            
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </Suspense>

        <Footer theme={theme} />

        <FloatingCTA />
      </div>
    </>
  );
}
