import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, FileText, Search } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { trackButtonClick } from '../utils/analytics';

export const FloatingCTA: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getWhatsAppMessage = () => {
    const path = location.pathname;
    if (path.includes('real-estate') || path === '/industries') {
      return "Hi Synckraft, I'm interested in Real Estate Automation.";
    }
    if (path.includes('restaurant')) {
      return "Hi Synckraft, I'm interested in Restaurant OS.";
    }
    if (path === '/products') {
      return "Hi Synckraft, I'm interested in your Business OS products.";
    }
    return "Hi Synckraft, I'd like to learn more about your AI Automation services.";
  };

  const openWhatsApp = () => {
    trackButtonClick('WhatsApp Chat', 'Floating CTA');
    const msg = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/919867799655?text=${msg}`, '_blank');
  };

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 p-4 flex justify-around items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <Link 
          to="/services" 
          onClick={() => trackButtonClick('Explore Services', 'Floating CTA Mobile')}
          className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase hover:text-blue-600 transition-colors"
        >
          <Search size={20} />
          Services
        </Link>
        <Link 
          to="/book-demo" 
          onClick={() => trackButtonClick('Book Demo', 'Floating CTA Mobile')}
          className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase hover:text-blue-600 transition-colors"
        >
          <Calendar size={20} />
          Book Demo
        </Link>
        <button 
          onClick={openWhatsApp} 
          className="flex flex-col items-center gap-1 text-green-500 text-[10px] font-bold uppercase transition-transform hover:scale-110 active:scale-95"
        >
          <MessageCircle size={28} className="drop-shadow-lg" />
          WhatsApp
        </button>
        <Link 
          to="/free-audit" 
          onClick={() => trackButtonClick('Free Audit', 'Floating CTA Mobile')}
          className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase hover:text-emerald-600 transition-colors"
        >
          <FileText size={20} />
          Free Audit
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <Link 
        to="/services" 
        onClick={() => trackButtonClick('Explore Services', 'Floating CTA Desktop')}
        className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:-translate-y-1"
      >
        <Search size={20} /> Explore Services
      </Link>
      <Link 
        to="/book-demo" 
        onClick={() => trackButtonClick('Book Demo', 'Floating CTA Desktop')}
        className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:-translate-y-1"
      >
        <Calendar size={20} /> Book Demo
      </Link>
      <Link 
        to="/free-audit" 
        onClick={() => trackButtonClick('Free Audit', 'Floating CTA Desktop')}
        className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/20 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:-translate-y-1"
      >
        <FileText size={20} /> Free Audit
      </Link>
      <button 
        onClick={openWhatsApp} 
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/20 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-transform hover:-translate-y-1"
      >
        <MessageCircle size={20} /> WhatsApp Us
      </button>
    </div>
  );
};
