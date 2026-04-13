import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, User, Building2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';


export default function ContactSales() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('Form Submission', 'Contact Sales', 'Lead Capture');
    
    const submissionData = {
      ...formData,
      type: 'Sales Inquiry',
      timestamp: new Date().toISOString()
    };

    try {
      await fetch("https://n8n.clario.in/webhook/synckraft-contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });

      const msg = encodeURIComponent(`New Lead From Synckraft\n\nType: Contact Sales\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
      const whatsappUrl = `https://wa.me/919867799655?text=${msg}`;
      window.open(whatsappUrl, "_blank");

      navigate("/thank-you");
    } catch (error) {
      console.error("Submission failed:", error);
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Sales | Synckraft</title>
        <meta name="description" content="Talk directly with our sales team about implementing Synckraft's business automation solutions." />
      </Helmet>

      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col justify-center bg-slate-50 dark:bg-black transition-colors duration-300">
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-5 w-full relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800">
              <ShieldCheck size={16} /> Enterprise Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 dark:text-white text-slate-900 leading-tight">
              Talk to <span className="text-blue-600">Sales</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Ready to scale? Tell us about your operations, and we'll connect you with the right expert.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F0F11] border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      placeholder="Your Business"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+91..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">How can we help?</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Inquiry...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
