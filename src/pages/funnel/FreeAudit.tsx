import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bot, ArrowRight, Building2, User, Mail, Phone, Settings, Activity, Target } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import { useTheme } from '../../components/ThemeProvider';


export default function FreeAudit() {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: searchParams.get('industry') || '',
    currentSystem: '',
    biggestProblem: '',
    budgetRange: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('Form Submission', 'Free Audit', 'Lead Capture');

    
    const submissionData = {
      ...formData,
      message: 'Free Audit Request',
      timestamp: new Date().toISOString()
    };

    try {
      await fetch("https://n8n.clario.in/webhook/synckraft-free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });

      const msg = encodeURIComponent(`New Lead From Synckraft\n\nType: Free Audit\nName: ${formData.name}\nIndustry: ${formData.industry}\nProblem: ${formData.biggestProblem}\nPhone: ${formData.phone}`);
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
        <title>Get a Free Business Audit | Synckraft</title>
        <meta name="description" content="Discover inefficiencies and automation opportunities in your workflows with our free business audit." />
      </Helmet>

      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col justify-center bg-surface text-on-surface transition-colors duration-300">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 dark:bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 w-full relative z-10 grid md:grid-cols-5 gap-12 items-start">
          
          <div className="md:col-span-2 space-y-6 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 font-medium text-sm border border-emerald-200 dark:border-emerald-800/50">
              <Activity size={16} /> Free Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 dark:text-white text-slate-900 leading-tight">
              Get Free Business <span className="text-emerald-500">Automation Audit</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We'll analyze your current operations, identify bottlenecks, and show you exactly where AI and automation can save you hours of manual work.
            </p>

            <ul className="space-y-4 pt-6">
              {[
                "Uncover hidden operational costs",
                "Identify high-ROI automation areas",
                "Custom roadmap for AI integration",
                "No obligations, completely free"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0">
                    <Target size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 bg-white dark:bg-[#0F0F11] border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-xl dark:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+91..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Industry</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      name="industry" 
                      value={formData.industry} 
                      onChange={handleChange}
                      placeholder="Your Sector"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Current System / Software Used</label>
                <div className="relative">
                  <Settings className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    name="currentSystem" 
                    value={formData.currentSystem} 
                    onChange={handleChange}
                    placeholder="e.g. Sheets, Salesforce, Manual Docs"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Biggest Problem to Solve</label>
                <textarea 
                  name="biggestProblem" 
                  value={formData.biggestProblem} 
                  onChange={handleChange}
                  placeholder="What is slowing down your business?"
                  rows={3}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Budget Range</label>
                <select 
                  name="budgetRange" 
                  value={formData.budgetRange} 
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                  required
                >
                  <option value="">Select Range</option>
                  <option value="Under $1,000">Under $1k</option>
                  <option value="$1,000 - $5,000">$1k - $5k</option>
                  <option value="$5,000 - $10,000">$5k - $10k</option>
                  <option value="$10,000+">$10k+</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
