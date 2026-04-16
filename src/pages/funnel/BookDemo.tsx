import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bot, ArrowRight, Building2, Users, Briefcase, Mail, Phone, User, CheckCircle2 } from 'lucide-react';
import { trackFunnelStep, trackEvent } from '../../utils/analytics';
import { useTheme } from '../../components/ThemeProvider';
import { submitToHubspot } from '../../utils/hubspot';

export default function BookDemo() {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    businessType: '',
    industry: searchParams.get('industry') || '',
    company: '',
    teamSize: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) return formData.businessType && formData.industry;
    if (currentStep === 2) return formData.company && formData.teamSize;
    if (currentStep === 3) return formData.name && formData.email && formData.phone;
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      trackFunnelStep('Book Demo Funnel', step, 'Step Completed');
      setStep(prev => prev + 1);
    }
  };
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    trackEvent('Form Submission', 'Book Demo Form', 'Success');

    setIsSubmitting(true);
    const submissionData = {
      ...formData,
      message: 'Book Demo Request',
      timestamp: new Date().toISOString()
    };

    try {
      const [res] = await Promise.all([
        fetch("https://n8n.clario.in/webhook/synckraft-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            lead_source: "book_demo"
          })
        }).catch(err => {
          console.error("n8n webhook failed:", err);
          return null;
        }),
        submitToHubspot(
          formData.name,
          formData.email,
          formData.phone,
          "book_demo",
          {
            businessType: formData.businessType,
            industry: formData.industry,
            company: formData.company,
            teamSize: formData.teamSize
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

      navigate("/thank-you");
    } catch (error) {
      console.error("Submission failed:", error);
      // Still redirect on error to ensure user flow completes via WhatsApp mechanism if possible
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Demo | Synckraft</title>
        <meta name="description" content="Book a demo to see how Synckraft can automate your business operations." />
      </Helmet>

      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden flex flex-col justify-center bg-surface text-on-surface transition-colors duration-300">
        
        {/* Background elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-5 w-full relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-200 dark:border-blue-800">
              <Bot size={16} /> Strategy Session
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 dark:text-white text-slate-900">
              Book Your Free <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Demo</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Let's tailor an AI automation roadmap for your specific business needs.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F0F11] border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl">
            {/* Process Tracker */}
            <div className="flex justify-between items-center mb-10 relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 -z-10 bg-slate-200 dark:bg-white/10 -translate-y-1/2"></div>
              {[1, 2, 3].map((num) => (
                <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 ${
                  step === num ? 'bg-blue-600 border-blue-100 dark:border-blue-900/50 text-white' :
                  step > num ? 'bg-blue-600 border-blue-600 text-white' : 'bg-surface border-surface-container text-on-surface'
                } transition-all duration-300`}>
                  {step > num ? <CheckCircle2 size={16} /> : num}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold dark:text-white mb-6">Business Details</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Business Type</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <select 
                        name="businessType" 
                        value={formData.businessType} 
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none"
                        required
                      >
                        <option value="">Select Business Type</option>
                        <option value="B2B Setup">B2B Setup</option>
                        <option value="B2C Setup">B2C Setup</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="SaaS / Tech">SaaS / Tech</option>
                        <option value="Agency">Agency</option>
                        <option value="Other">Other</option>
                      </select>
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
                        placeholder="e.g. Real Estate, Restaurant, Healthcare"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold dark:text-white mb-6">Company Info</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Team Size</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <select 
                        name="teamSize" 
                        value={formData.teamSize} 
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none"
                        required
                      >
                        <option value="">Select Team Size</option>
                        <option value="1-10">1 - 10 Employees</option>
                        <option value="11-50">11 - 50 Employees</option>
                        <option value="51-200">51 - 200 Employees</option>
                        <option value="200+">200+ Employees</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold dark:text-white mb-6">Contact Information</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
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
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1E] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6 mt-8 border-t border-slate-200 dark:border-white/10">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="px-6 py-4 rounded-xl font-bold border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>
                )}
                
                {step < 3 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!validateStep(step)}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    Continue <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !validateStep(3)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Book Strategy Call <ArrowRight size={20} />
                      </span>
                    )}
                  </button>
                )}
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
