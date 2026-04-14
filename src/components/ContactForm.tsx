import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- EMAILJS CONFIGURATION ---
const EMAILJS_SERVICE_ID = "service_99w1d82"; 
const EMAILJS_TEMPLATE_ID = "template_t1n1w5k";
const EMAILJS_PUBLIC_KEY = "HV8AMo450102CgRnv";

interface ContactFormProps {
  theme: 'dark' | 'light';
}

export const ContactForm: React.FC<ContactFormProps> = ({ theme }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [consent, setConsent] = useState(false);

  // Re-trigger reveal animations when status resets
  useEffect(() => {
    if (status === 'idle' && sectionRef.current) {
      const timeout = setTimeout(() => {
        const reveals = sectionRef.current?.querySelectorAll('.reveal');
        reveals?.forEach(el => el.classList.add('active'));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !formRef.current) return;
    
    setStatus('submitting');
    console.log('Attempting to send email via EmailJS...', {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID
    });

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('EmailJS Success:', result.text);
      setStatus('success');
      if (sectionRef.current) {
        window.scrollTo({ top: sectionRef.current.offsetTop - 100, behavior: 'smooth' });
      }
    }).catch((error) => {
      console.error('EmailJS Detailed Error:', error);
      alert(`Email Error: ${error.text || 'Check your EmailJS Public Key or Template/Service IDs.'}`);
      setStatus('idle');
    });
  };

  if (status === 'success') {
    return (
      <section ref={sectionRef} className={`py-20 flex items-center justify-center rounded-[3rem] mt-10 ${theme === 'dark' ? 'bg-[#111112]' : 'bg-blue-50/50'}`}>
        <div className="max-w-xl w-full px-8 text-center reveal active">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/10 text-blue-500 mb-8">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-400 opacity-20"></span>
            <CheckCircle2 size={48} className="relative" />
          </div>
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Message Received</h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Thank you for reaching out. A Synckraft representative will review your query and respond shortly.
          </p>
          <button 
            onClick={() => { setStatus('idle'); setConsent(false); }}
            className="mt-8 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact-form-section" className={`py-20 md:py-32 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Get In Touch</h4>
            <h2 className={`text-4xl md:text-6xl font-extrabold mb-10 tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Partner With <br />
              <span className="text-blue-600 font-light italic">Synckraft</span>
            </h2>
            <p className={`text-xl leading-relaxed mb-12 max-w-md font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a high-potential project or a strategic proposal? Let's discuss how Synckraft can provide the execution framework you need.
            </p>
            
            <div className={`p-8 rounded-3xl border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-blue-50 border-blue-100'}`}>
              <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Quick Response</p>
              <p className={`text-lg font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Our average response time for strategic queries is under 24 hours.</p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className={`p-6 sm:p-10 rounded-[3rem] border shadow-2xl ${
              theme === 'dark' ? 'bg-[#111112] border-white/5 shadow-blue-900/10' : 'bg-white border-slate-100'
            }`}>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Full Name</label>
                  <input required name="from_name" type="text" id="name" placeholder="Enter your name" className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'}`} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Email Address</label>
                  <input required name="from_email" type="email" id="email" placeholder="name@company.com" className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'}`} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Phone Number</label>
                  <input required name="phone" type="tel" id="phone" placeholder="+91 9876543210" className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'}`} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Business Type</label>
                  <input required name="business" type="text" id="business" placeholder="Restaurant, Real Estate, etc." className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'}`} />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="subject" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Subject</label>
                <div className="relative">
                  <select name="subject" id="subject" className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border appearance-none cursor-pointer ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600'}`}>
                    <option value="venture" className={theme === 'dark' ? 'bg-[#111112] text-white' : 'bg-white text-slate-900'}>Venture Proposal</option>
                    <option value="partnership" className={theme === 'dark' ? 'bg-[#111112] text-white' : 'bg-white text-slate-900'}>Strategic Partnership</option>
                    <option value="investment" className={theme === 'dark' ? 'bg-[#111112] text-white' : 'bg-white text-slate-900'}>Investment Inquiry</option>
                    <option value="other" className={theme === 'dark' ? 'bg-[#111112] text-white' : 'bg-white text-slate-900'}>Other Query</option>
                  </select>
                  <div className={`absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className={`text-xs font-bold uppercase tracking-widest ml-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Your Message</label>
                <textarea required name="message" id="message" rows={4} placeholder="Describe your proposal or query..." className={`w-full px-6 py-4 rounded-2xl outline-none transition-all border resize-none ${theme === 'dark' ? 'bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600 focus:bg-white'}`} />
              </div>

              <div className="flex items-start gap-3 mb-10 ml-1">
                <input 
                  type="checkbox" 
                  id="consent" 
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                />
                <label htmlFor="consent" className={`text-[11px] leading-relaxed cursor-pointer ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  I agree to the <a href="/privacy-policy" className="text-blue-500 underline hover:text-blue-400">Privacy Policy</a> and consent to Synckraft technologies processing my data.
                </label>
              </div>

              <button 
                disabled={status === 'submitting' || !consent}
                type="submit" 
                className={`w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-900/20 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed touchable`}
              >
                {status === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                <Send size={20} className={status === 'submitting' ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

