import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, MessageCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Synckraft, I just submitted a form and would like to talk right now.");
    window.open(`https://wa.me/919867799655?text=${msg}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Thank You | Synckraft</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-5 bg-slate-50 dark:bg-[#0A0A0B] transition-colors duration-300">
        <div className="max-w-md w-full text-center">
          
          <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping" />
            <CheckCircle size={48} className="text-blue-600 dark:text-blue-500 relative z-10" />
          </div>

          <h1 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">
            Thank You!
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            We've received your request. Our team will contact you shortly to discuss next steps.
          </p>

          <div className="space-y-4">
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-[#25D366]/20 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp Now
            </button>

            <Link 
              to="/"
              className="w-full bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-white/5"
            >
              <Home size={20} />
              Return to Homepage
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
