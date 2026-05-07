import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { submitToHubspot } from '../utils/hubspot';

// --- EMAILJS CONFIGURATION ---
const EMAILJS_SERVICE_ID = "service_99w1d82"; 
const EMAILJS_TEMPLATE_ID = "template_t1n1w5k";
const EMAILJS_PUBLIC_KEY = "HV8AMo450102CgRnv";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !formRef.current) return;
    
    setStatus('submitting');
    const fd = new FormData(formRef.current);
    
    try {
      const [res] = await Promise.all([
        fetch("https://n8n.clario.in/webhook/synckraft-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fd.get('from_name') as string,
            phone: fd.get('phone') as string,
            lead_source: "contact_form"
          })
        }).catch(err => {
          console.error("n8n webhook failed:", err);
          return null;
        }),
        submitToHubspot(
          fd.get('from_name') as string,
          fd.get('from_email') as string,
          fd.get('phone') as string,
          "contact_form",
          {
            business: fd.get('business') as string,
            subject: fd.get('subject') as string,
            message: fd.get('message') as string
          }
        ).catch(err => {
          console.error("HubSpot submission failed:", err);
        })
      ]);

      if (res && res.ok) {
        const waLink = await res.text();
        if (waLink) {
          window.open(waLink, "_blank");
        }
      }

      setStatus('success');
      if (sectionRef.current) {
        window.scrollTo({ top: sectionRef.current.offsetTop - 100, behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <section ref={sectionRef} className="py-20 flex items-center justify-center rounded-[3rem] mt-10 bg-slate-50 border border-slate-200">
        <div className="max-w-xl w-full px-8 text-center reveal active">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-600 mb-8 relative">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-400 opacity-20"></span>
            <CheckCircle2 size={48} className="relative" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Message Received</h2>
          <p className="text-lg text-slate-500">
            Thank you for reaching out. A Synckraft representative will review your query and respond shortly.
          </p>
          <button 
            onClick={() => { setStatus('idle'); setConsent(false); }}
            className="mt-8 px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact-form-section" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Get In Touch</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight leading-tight text-slate-900">
              Partner With <br />
              <span className="text-blue-600 font-light italic">Synckraft</span>
            </h2>
            <p className="text-xl leading-relaxed mb-12 max-w-md font-light text-slate-500">
              Have a high-potential project or a strategic proposal? Let's discuss how Synckraft can provide the execution framework you need.
            </p>
            
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50">
              <p className="text-blue-600 font-bold uppercase tracking-widest mb-2 text-sm">Quick Response</p>
              <p className="text-slate-700 font-medium">Our average response time for strategic queries is under 24 hours.</p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-[3rem] border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Full Name</label>
                  <input required name="from_name" type="text" id="name" placeholder="Enter your name" className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Email Address</label>
                  <input required name="from_email" type="email" id="email" placeholder="name@company.com" className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Phone Number</label>
                  <input required name="phone" type="tel" id="phone" placeholder="+91 9876543210" className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Business Type</label>
                  <input required name="business" type="text" id="business" placeholder="e.g. Technology, Energy" className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Subject</label>
                <div className="relative">
                  <select name="subject" id="subject" className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 appearance-none cursor-pointer">
                    <option value="venture">Venture Proposal</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="other">Other Query</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest ml-1 text-slate-500">Your Message</label>
                <textarea required name="message" id="message" rows={4} placeholder="Describe your proposal or query..." className="w-full px-6 py-4 rounded-2xl outline-none transition-all border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none" />
              </div>

              <div className="flex items-start gap-3 mb-10 ml-1">
                <input 
                  type="checkbox" 
                  id="consent" 
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                />
                <label htmlFor="consent" className="text-[11px] leading-relaxed cursor-pointer text-slate-500">
                  I agree to the <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</a> and consent to Synckraft Technologies processing my data.
                </label>
              </div>

              <button 
                disabled={status === 'submitting' || !consent}
                type="submit" 
                className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
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

