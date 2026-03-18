    // import React, { useEffect, useState } from 'react';
    // import { Navbar } from './components/Navbar';
    // import { Hero } from './components/Hero';
    // import { About } from './components/About';
    // import { Pillars } from './components/Pillars';
    // import { Ecosystem } from './components/Ecosystem';
    // import { Metrics } from './components/Metrics';
    // import { Testimonials } from './components/Testimonials';
    // import { ContactForm } from './components/ContactForm';
    // import { CTA } from './components/CTA';
    // import { Footer } from './components/Footer';

    // export default function App() {
    //   const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    //     try {
    //       if (typeof window === 'undefined') return 'dark';
    //       return (localStorage.getItem('theme') || localStorage.getItem('synckraft-theme') || 'dark') as 'dark' | 'light';
    //     } catch (e) {
    //       return 'dark';
    //     }
    //   });

    //   useEffect(() => {
    //     // Reveal animation logic via IntersectionObserver (better performance)
    //     const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    //     const reveals = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
    //     if (prefersReduced) {
    //       // Respect reduced motion: activate all reveals immediately
    //       reveals.forEach((el) => el.classList.add('active'));
    //       return;
    //     }

    //     const observer = new IntersectionObserver((entries, obs) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           const el = entry.target as HTMLElement;
    //           el.classList.add('active');
    //           obs.unobserve(el);
    //         }
    //       });
    //     }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

    //     reveals.forEach((el) => observer.observe(el));

    //     // Ensure theme is synced from storage and applied to the root element
    //     try {
    //       const savedTheme = (localStorage.getItem('theme') || localStorage.getItem('synckraft-theme') || 'dark') as 'dark' | 'light';
    //       document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    //       // keep body in sync as some legacy CSS uses body.dark
    //       if (document.body) document.body.classList.toggle('dark', savedTheme === 'dark');
    //       setTheme(savedTheme);
    //     } catch (e) {
    //       document.documentElement.classList.toggle('dark', true);
    //       if (document.body) document.body.classList.toggle('dark', true);
    //       setTheme('dark');
    //     }

    //     // Mobile touch interactions: tap, press & hold for tactile feedback
    //     const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    //     const touchableEls: Array<HTMLElement> = [];
    //     const cardEls: Array<HTMLElement> = [];
    //     const holdTimers = new WeakMap<HTMLElement, number>();

    //     if (supportsTouch && !prefersReduced) {
    //       document.querySelectorAll<HTMLElement>('.touchable').forEach((el) => {
    //         const onStart = () => el.classList.add('pressed');
    //         const onEnd = () => el.classList.remove('pressed');
    //         el.addEventListener('touchstart', onStart, { passive: true });
    //         el.addEventListener('touchend', onEnd);
    //         el.addEventListener('touchcancel', onEnd);
    //         touchableEls.push(el);
    //       });

    //       document.querySelectorAll<HTMLElement>('.card-glow').forEach((el) => {
    //         const onStart = () => {
    //           el.classList.add('pressing');
    //           // if user holds >300ms, add hold state
    //           const t = window.setTimeout(() => el.classList.add('hold'), 300);
    //           holdTimers.set(el, t);
    //         };
    //         const onEnd = () => {
    //           el.classList.remove('pressing');
    //           el.classList.remove('hold');
    //           const t = holdTimers.get(el);
    //           if (t) { window.clearTimeout(t); holdTimers.delete(el); }
    //         };
    //         el.addEventListener('touchstart', onStart, { passive: true });
    //         el.addEventListener('touchend', onEnd);
    //         el.addEventListener('touchcancel', onEnd);
    //         cardEls.push(el);
    //       });
    //     }

    //     return () => {
    //       observer.disconnect();
    //       // clean up touch listeners
    //       touchableEls.forEach((el) => {
    //         el.classList.remove('pressed');
    //         el.replaceWith(el.cloneNode(true) as HTMLElement);
    //       });
    //       cardEls.forEach((el) => {
    //         el.classList.remove('pressing');
    //         el.classList.remove('hold');
    //         el.replaceWith(el.cloneNode(true) as HTMLElement);
    //       });
    //     };
    //   }, []);

    //   const toggleTheme = () => {
    //     const newTheme = theme === 'dark' ? 'light' : 'dark';
    //     setTheme(newTheme);
    //     try {
    //       localStorage.setItem('theme', newTheme);
    //     } catch (e) {}
    //     document.documentElement.classList.toggle('dark', newTheme === 'dark');
    //     if (document.body) document.body.classList.toggle('dark', newTheme === 'dark');
    //   };

    //   return (
    //     <div className={`min-h-full ${theme === 'dark' ? 'bg-[#0A0A0B] text-slate-100' : 'bg-white text-slate-900'} selection:bg-blue-600/20`}>
    //       <Navbar theme={theme} toggleTheme={toggleTheme} />
    //       <main role="main">
    //         <Hero theme={theme} />
    //         <About theme={theme} />
    //         <Pillars theme={theme} />
    //         <Ecosystem theme={theme} />
    //         <Metrics theme={theme} />
    //         <Testimonials />
    //         <ContactForm theme={theme} />
    //         <CTA theme={theme} />
    //       </main>
    //       <Footer theme={theme} />
    //     </div>
    //   );
    // }
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { About } from './components/About';
// import { Pillars } from './components/Pillars';
// import { Ecosystem } from './components/Ecosystem';
// import { Metrics } from './components/Metrics';
// import { Testimonials } from './components/Testimonials';
// import { ContactForm } from './components/ContactForm';
// import { CTA } from './components/CTA';
// import { Footer } from './components/Footer';

// // Import your new manual pages
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfService from './pages/TermsOfService';
// import RefundPolicy from './pages/RefundPolicy';
// import ContactPage from './pages/Contact'; 
// import About from './components/About'; // Make sure to import the AboutPage we discussed

// // Helper component to scroll to top on every route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// // Component for the main landing page sections
// const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => (
//   <main role="main">
//     <Hero theme={theme} />
//     <About theme={theme} />
//     <Pillars theme={theme} />
//     <Ecosystem theme={theme} />
//     <Metrics theme={theme} />
//     <Testimonials />
//     <ContactForm theme={theme} />
//     <CTA theme={theme} />
//   </main>
// );

// export default function App() {
//   const [theme, setTheme] = useState<'dark' | 'light'>(() => {
//     try {
//       if (typeof window === 'undefined') return 'dark';
//       return (localStorage.getItem('theme') || localStorage.getItem('synckraft-theme') || 'dark') as 'dark' | 'light';
//     } catch (e) {
//       return 'dark';
//     }
//   });

//   useEffect(() => {
//     const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const reveals = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
    
//     if (prefersReduced) {
//       reveals.forEach((el) => el.classList.add('active'));
//     } else {
//       const observer = new IntersectionObserver((entries, obs) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const el = entry.target as HTMLElement;
//             el.classList.add('active');
//             obs.unobserve(el);
//           }
//         });
//       }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.06 });

//       reveals.forEach((el) => observer.observe(el));
//       return () => observer.disconnect();
//     }
//   }, [theme]); 

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//     if (document.body) document.body.classList.toggle('dark', theme === 'dark');
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     try {
//       localStorage.setItem('theme', newTheme);
//     } catch (e) {}
//   };

//   return (
//     <Router>
//       <ScrollToTop />
//       <div className={`min-h-full transition-colors duration-300 ${
//         theme === 'dark' ? 'bg-[#0A0A0B] text-slate-100' : 'bg-white text-slate-900'
//       } selection:bg-blue-600/20`}>
        
//         <Navbar theme={theme} toggleTheme={toggleTheme} />
        
//         <Routes>
//           {/* Main Landing Page */}
//           <Route path="/" element={<MainLanding theme={theme} />} />

//           {/* Legal Pages - Passing toggleTheme ensures Navbar works on these pages */}
//           <Route path="/about" element={<AboutPage theme={theme} toggleTheme={toggleTheme} />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} toggleTheme={toggleTheme} />} />
//           <Route path="/terms-of-service" element={<TermsOfService theme={theme} toggleTheme={toggleTheme} />} />
//           <Route path="/refund-policy" element={<RefundPolicy theme={theme} toggleTheme={toggleTheme} />} />
//           <Route path="/contact" element={<ContactPage theme={theme} toggleTheme={toggleTheme} />} />
//         </Routes>

//         <Footer theme={theme} />
//       </div>
//     </Router>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// // Existing Components from 'components' folder
// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { About } from './components/About';
// import { Pillars } from './components/Pillars';
// import { Ecosystem } from './components/Ecosystem';
// import { Metrics } from './components/Metrics';
// import { Testimonials } from './components/Testimonials';
// import { ContactForm } from './components/ContactForm';
// import { CTA } from './components/CTA';
// import { Footer } from './components/Footer';

// // New Legal & Contact Pages from 'pages' folder
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfService from './pages/TermsOfService';
// import RefundPolicy from './pages/RefundPolicy';
// import ContactPage from './pages/Contact'; 

// // Helper component to scroll to top on every route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// // Animation Logic: Iske bina content nahi dikhega!
// const useRevealAnimations = () => {
//   const location = useLocation();
  
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px 0px -10% 0px',
//       threshold: 0.06
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('active');
//         }
//       });
//     }, observerOptions);

//     const reveals = document.querySelectorAll('.reveal');
//     reveals.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [location]); // Har page change par check karega
// };

// // Main Landing Page Sections
// const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => {
//   useRevealAnimations(); // Home page par animations trigger karein
//   return (
//     <main role="main">
//       <Hero theme={theme} />
//       <About theme={theme} />
//       <Pillars theme={theme} />
//       <Ecosystem theme={theme} />
//       <Metrics theme={theme} />
//       <Testimonials />
//       <ContactForm theme={theme} />
//       <CTA theme={theme} />
//     </main>
//   );
// };

// export default function App() {
//   const [theme, setTheme] = useState<'dark' | 'light'>(() => {
//     try {
//       if (typeof window === 'undefined') return 'dark';
//       return (localStorage.getItem('theme') || 'dark') as 'dark' | 'light';
//     } catch (e) {
//       return 'dark';
//     }
//   });

//   // Theme Sync Logic
//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//     if (document.body) document.body.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//   };

//   return (
//     <Router>
//       <ScrollToTop />
//       <div className={`min-h-full transition-colors duration-300 ${
//         theme === 'dark' ? 'bg-[#0A0A0B] text-slate-100' : 'bg-white text-slate-900'
//       } selection:bg-blue-600/20`}>
        
//         <Navbar theme={theme} toggleTheme={toggleTheme} />
        
//         <Routes>
//           {/* Home Route */}
//           <Route path="/" element={<MainLanding theme={theme} />} />

//           {/* About link (Home page par hi redirect karega) */}
//           <Route path="/about" element={<MainLanding theme={theme} />} />

//           {/* Legal Pages with Animation Support */}
//           <Route path="/privacy-policy" element={<div className="reveal-fix"><PrivacyPolicy theme={theme} /></div>} />
//           <Route path="/terms-of-service" element={<div className="reveal-fix"><TermsOfService theme={theme} /></div>} />
//           <Route path="/refund-policy" element={<div className="reveal-fix"><RefundPolicy theme={theme} /></div>} />
//           <Route path="/contact" element={<ContactPage theme={theme} toggleTheme={toggleTheme} />} />
//         </Routes>

//         <Footer theme={theme} />
//       </div>
//     </Router>
//   );
// }

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About as AboutSection } from './components/About'; // Changed name to avoid conflict
import { Pillars } from './components/Pillars';
import { Ecosystem } from './components/Ecosystem';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import ContactPage from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const useRevealAnimations = () => {
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.06 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);
};

const MainLanding = ({ theme }: { theme: 'dark' | 'light' }) => {
  useRevealAnimations();
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
      return (localStorage.getItem('theme') || 'dark') as 'dark' | 'light';
    } catch (e) { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-full transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0A0A0B] text-slate-100' : 'bg-white text-slate-900'
      }`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<MainLanding theme={theme} />} />
          <Route path="/about" element={<MainLanding theme={theme} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/terms-of-service" element={<TermsOfService theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/refund-policy" element={<RefundPolicy theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}