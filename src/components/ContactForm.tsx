import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { submitToHubspot } from '../utils/hubspot';

const inputCls = 'form-input';
const labelCls = 'block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-2 ml-0.5';

export const ContactForm: React.FC = () => {
  const formRef    = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [status,  setStatus]  = useState<'idle' | 'submitting' | 'success'>('idle');
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (status === 'idle' && sectionRef.current) {
      const t = setTimeout(() => {
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      }, 50);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !formRef.current) return;
    setStatus('submitting');
    const fd = new FormData(formRef.current);

    try {
      const [res] = await Promise.all([
        fetch('https://n8n.clario.in/webhook/synckraft-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name:        fd.get('from_name') as string,
            phone:       fd.get('phone')     as string,
            lead_source: 'contact_form',
          }),
        }).catch(() => null),
        submitToHubspot(
          fd.get('from_name')  as string,
          fd.get('from_email') as string,
          fd.get('phone')      as string,
          'contact_form',
          {
            business: fd.get('business') as string,
            subject:  fd.get('subject')  as string,
            message:  fd.get('message')  as string,
          }
        ).catch(() => {}),
      ]);

      if (res?.ok) {
        const waLink = await res.text();
        if (waLink) window.open(waLink, '_blank', 'noopener,noreferrer');
      }

      setStatus('success');
      if (sectionRef.current) {
        window.scrollTo({ top: sectionRef.current.offsetTop - 80, behavior: 'smooth' });
      }
    } catch {
      setStatus('idle');
    }
  };

  /* ── Success state ── */
  if (status === 'success') {
    return (
      <section
        ref={sectionRef}
        className="py-20 flex items-center justify-center rounded-3xl bg-slate-50 border border-slate-200"
      >
        <div className="max-w-md w-full px-8 text-center">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-600 mb-8">
            <span className="absolute w-full h-full rounded-full bg-blue-100 animate-ping opacity-30" />
            <CheckCircle2 size={40} strokeWidth={1.5} className="relative" />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Message Received</h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            A Synckraft representative will review your query and respond within 24 hours.
          </p>
          <button
            onClick={() => { setStatus('idle'); setConsent(false); }}
            className="px-7 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  /* ── Form ── */
  return (
    <section ref={sectionRef} id="contact-form-section" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div className="reveal pt-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-6">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-7 tracking-tight leading-[1.1] text-slate-900">
              Partner With<br />
              <span className="text-blue-600 font-light italic">Synckraft.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-sm font-medium text-slate-500">
              Have a strategic proposal or high-potential project? Let's discuss how Synckraft can provide the execution framework you need.
            </p>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/80">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 mb-2">Response Time</p>
              <p className="text-slate-700 font-medium text-sm">Strategic queries receive a response within 24 hours.</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="p-7 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>Full Name</label>
                  <input
                    id="cf-name" name="from_name" type="text"
                    placeholder="Your name" required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelCls}>Email</label>
                  <input
                    id="cf-email" name="from_email" type="email"
                    placeholder="name@company.com" required
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="cf-phone" className={labelCls}>Phone</label>
                  <input
                    id="cf-phone" name="phone" type="tel"
                    placeholder="+91 98765 43210" required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cf-business" className={labelCls}>Business Type</label>
                  <input
                    id="cf-business" name="business" type="text"
                    placeholder="e.g. Technology, Energy" required
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="cf-subject" className={labelCls}>Subject</label>
                <div className="relative">
                  <select
                    id="cf-subject" name="subject"
                    className={`${inputCls} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="venture">Venture Proposal</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="other">Other Query</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="cf-message" className={labelCls}>Message</label>
                <textarea
                  id="cf-message" name="message" rows={4}
                  placeholder="Describe your proposal or query…" required
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 mb-7 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox" required
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-150 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-150" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span className="text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-150">
                  I agree to the{' '}
                  <a href="/privacy-policy" className="text-blue-600 underline underline-offset-2 hover:text-blue-700 transition-colors duration-150">
                    Privacy Policy
                  </a>{' '}
                  and consent to Synckraft Technologies processing my data.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting' || !consent}
                className="w-full py-4 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold text-[15px] flex items-center justify-center gap-2.5 transition-all duration-200 hover:from-blue-400 hover:to-blue-600 hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:-translate-y-px active:translate-y-0 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-[0_2px_8px_rgba(37,99,235,0.28)]"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing…
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
