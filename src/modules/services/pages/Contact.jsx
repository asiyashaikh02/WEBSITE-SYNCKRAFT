import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const industryOptions = [
  "Restaurant",
  "Real Estate",
  "Fashion",
  "Education",
  "Automobile",
  "Medical & Hospital",
  "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    domain: '',
    industry: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message
    const formattedMessage = `New Inquiry — Synckraft%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Business:* ${formData.business}%0A` +
      `*Domain:* ${formData.domain}%0A` +
      `*Industry:* ${formData.industry}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919867799655?text=${formattedMessage}`;
    
    // Set success state
    setIsSubmitted(true);
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="pt-32 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[100px] -z-10 translate-y-1/3 -translate-x-1/3"></div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-8 max-w-7xl mx-auto text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Connect With Architects
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Migration</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Scale your enterprise with our cognitive frameworks. Submit your business requirements below to initiate integration.
        </p>
      </motion.section>

      <section className="px-8 max-w-3xl mx-auto pb-32">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface-container-low/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-outline-variant/20 shadow-2xl shadow-black/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Name</label>
                    <input 
                      required type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Business Name</label>
                    <input 
                      required type="text" name="business" value={formData.business} onChange={handleChange}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Domain</label>
                    <input 
                      required type="text" name="domain" value={formData.domain} onChange={handleChange}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
                      placeholder="E-commerce, B2B, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Industry</label>
                    <select 
                      required name="industry" value={formData.industry} onChange={handleChange}
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="" disabled>Select an industry</option>
                      {industryOptions.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                  <input 
                    required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" 
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Message</label>
                  <textarea 
                    required name="message" value={formData.message} onChange={handleChange} rows="4"
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" 
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-br from-[#89ceff] to-[#0089c3] text-[#00344d] rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(137,206,255,0.4)] transition-all">
                  Submit via WhatsApp
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-surface-container-high/60 backdrop-blur-xl p-12 rounded-[2rem] border border-primary/30 text-center shadow-[0_0_50px_rgba(137,206,255,0.1)]"
            >
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Transmission Successful</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Your request has been sent. Our team will contact you shortly to begin the engineering phase.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
