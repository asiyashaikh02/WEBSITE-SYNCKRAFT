import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    trackButtonClick('WhatsApp Chat', 'Floating CTA');
    const msg = encodeURIComponent("Hi Synckraft, I'd like to learn more about your ecosystem.");
    window.open(`https://wa.me/919867799655?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 rounded-2xl font-bold text-sm shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-400 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transition: 'opacity 0.4s ease, transform 0.4s ease, background-color 0.2s ease, box-shadow 0.2s ease' }}
    >
      <MessageCircle size={20} />
      WhatsApp Us
    </button>
  );
};
