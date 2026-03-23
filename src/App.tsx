import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About as AboutSection } from './components/About'; 
import { Pillars } from './components/Pillars';
import { Ecosystem } from './components/Ecosystem';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import ContactPage from './pages/Contact';
import AboutPage from './pages/AboutPage';
import Disclaimer from './pages/Disclaimer';

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
      <Ecosystem theme={theme} />
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
        
        <Routes>
          <Route path="/" element={<MainLanding theme={theme} />} />
          <Route path="/about" element={<AboutPage theme={theme} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} />} />
          <Route path="/terms-of-service" element={<TermsOfService theme={theme} />} />
          <Route path="/refund-policy" element={<RefundPolicy theme={theme} />} />
          <Route path="/disclaimer" element={<Disclaimer theme={theme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} />} />
        </Routes>

        <Footer theme={theme} />

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919867799655" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        </a>
      </div>
    </>
  );
}
