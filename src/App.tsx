import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { initAnalytics, trackPageView } from './utils/analytics';
import { injectPremiumAnimations } from './utils/premiumAnimations';
import { useTheme } from './components/ThemeProvider';

// Components
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { About } from './components/About';
import { VisionSection } from './components/VisionSection';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { Loader } from './components/Loader';

// Lazy Pages - Core Only
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const EcosystemPage = React.lazy(() => import('./pages/EcosystemPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Scroll Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <main className="bg-white">
      <Hero />
      <Ecosystem theme={theme} />
      <About theme={theme} />
      <VisionSection theme={theme} />
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
    injectPremiumAnimations();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useRevealAnimations();

  return (
    <>
      <Helmet>
        <title>Synckraft Technologies | Enterprise AI & Infrastructure Solutions</title>
        <meta name="description" content="Synckraft Technologies builds enterprise-grade AI infrastructure, automation systems, and digital platforms. Parent company of UNSTOPR, SOLVEIT INDIA, and SOLAROFT ecosystems." />
        <meta name="keywords" content="AI development, enterprise software, digital transformation, automation, web development, infrastructure, India tech company" />
        <meta name="author" content="Synckraft Technologies" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://synckraft.in${location.pathname}`} />

        {/* Open Graph */}
        <meta property="og:title" content="Synckraft Technologies | Enterprise AI & Infrastructure Solutions" />
        <meta property="og:description" content="Synckraft Technologies builds enterprise-grade AI infrastructure, automation systems, and digital platforms. Parent company of UNSTOPR, SOLVEIT INDIA, and SOLAROFT ecosystems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://synckraft.in${location.pathname}`} />
        <meta property="og:image" content="https://synckraft.in/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Synckraft Technologies" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Synckraft Technologies | Enterprise AI & Infrastructure Solutions" />
        <meta name="twitter:description" content="Synckraft Technologies builds enterprise-grade AI infrastructure, automation systems, and digital platforms." />
        <meta name="twitter:image" content="https://synckraft.in/og-image.png" />
        <meta name="twitter:site" content="@synckraft" />
        <meta name="twitter:creator" content="@synckraft" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Synckraft Technologies",
            "url": "https://synckraft.in",
            "logo": "https://synckraft.in/logo.png",
            "description": "Enterprise AI infrastructure and digital transformation company",
            "foundingDate": "2020",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "email": "grow@synckraft.in"
            },
            "sameAs": [
              "https://www.linkedin.com/company/synckraft",
              "https://twitter.com/synckraft",
              "https://www.unstopr.com/in",
              "https://www.solveitindia.com",
              "https://www.solaroft.com"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "Maharashtra",
              "addressLocality": "Mumbai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Synckraft Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development",
                    "description": "Enterprise AI infrastructure and automation systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Scalable digital platforms and modern web solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                  "name": "Digital Transformation",
                  "description": "Complete business automation and infrastructure solutions"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <ScrollToTop />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainLanding theme={theme} />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer theme={theme} />
      <FloatingCTA />
    </>
  );
}