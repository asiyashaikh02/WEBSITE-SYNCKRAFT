import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, MessageSquare, Globe, Briefcase, Target } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 page-enter">
      <Helmet>
        <title>Contact Synckraft Technologies | Enterprise Solutions & Support</title>
        <meta name="description" content="Get in touch with Synckraft Technologies for enterprise AI solutions, automation systems, and digital transformation services. Contact us at grow@synckraft.in or call our Mumbai office." />
        <meta name="keywords" content="contact Synckraft, enterprise support, AI consultation, business automation, digital transformation, Mumbai tech company" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Synckraft Technologies | Enterprise Solutions" />
        <meta property="og:description" content="Connect with our team for enterprise-grade AI infrastructure, automation systems, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synckraft.in/contact" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Contact Synckraft Technologies | Enterprise Support" />
        <meta name="twitter:description" content="Get expert consultation for AI infrastructure and digital transformation solutions." />

        {/* Structured Data - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Synckraft Technologies",
            "description": "Contact information and support channels for Synckraft Technologies",
            "url": "https://synckraft.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Synckraft Technologies Private Limited",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-XXXXXXXXXX",
                  "contactType": "customer service",
                  "email": "grow@synckraft.in",
                  "availableLanguage": "English"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Maharashtra",
                "addressLocality": "Mumbai"
              }
            }
          })}
        </script>
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="reveal mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none text-slate-900">
            Contact Us<span className="text-blue-600">.</span>
          </h1>
          <p className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Synckraft Technologies Private Limited</p>
          <p className="text-xl font-light leading-relaxed max-w-3xl text-slate-500">
            Reach out to discuss partnerships, ecosystem ventures, or strategic collaborations. We respond to every serious inquiry.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Quick Contact */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5">
            <Mail className="text-blue-600 mb-6" size={28} />
            <h3 className="font-bold mb-4 text-slate-900">Get in Touch</h3>
            <div className="space-y-2 text-sm text-slate-500">
              <p className="flex items-center gap-2"><Mail size={14} className="opacity-50" /> grow@synckraft.in</p>
              <p className="flex items-center gap-2"><Phone size={14} className="opacity-50" /> +91 9867799655</p>
              <p className="flex items-center gap-2"><Globe size={14} className="opacity-50" /> synckraft.in</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5">
            <MapPin className="text-blue-600 mb-6" size={28} />
            <h3 className="font-bold mb-4 text-slate-900">Office Address</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              414, 4th Floor, Daga Plazzo, <br />
              Opp. of Dmart, Camp, Biyani Square <br />
              Amravati, 444602, Maharashtra, India
            </p>
          </div>

          {/* Business Hours */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5">
            <Clock className="text-blue-600 mb-6" size={28} />
            <h3 className="font-bold mb-4 text-slate-900">Business Hours</h3>
            <div className="text-slate-500 text-sm space-y-1">
              <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
              <p className="text-red-500 font-medium">Sunday: Closed</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5">
            <Target className="text-blue-600 mb-6" size={28} />
            <h3 className="font-bold mb-4 text-slate-900">Response Time</h3>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              We aim to respond within <br />
              <span className="font-bold text-blue-600 not-italic">24–48 business hours</span>.
            </p>
          </div>
        </div>

        {/* WhatsApp & Partnerships Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="p-10 rounded-[2.5rem] border border-slate-200 bg-slate-50">
            <MessageSquare className="text-green-500 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">WhatsApp Communication</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Connect with us via WhatsApp for service inquiries, automation setup, or support assistance.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Consent implied upon contact
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-slate-200 bg-slate-50">
            <Briefcase className="text-blue-600 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Business & Partnerships</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              For enterprise solutions, collaborations, or partnerships, please email us with the specific subject:
            </p>
            <div className="inline-block px-4 py-2 rounded-lg font-mono text-sm bg-blue-50 text-blue-700 border border-blue-100">
              "Business Inquiry – Synckraft"
            </div>
          </div>
        </div>

        {/* Contact Form Integration */}
        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 tracking-tight">Send a Message</h2>
            <p className="text-slate-500 font-medium">Fill out the form and our team will respond within 24 hours.</p>
          </div>
          <ContactForm />
        </div>

        <div className="mt-40 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.5em] reveal">
          All Rights Reserved © Synckraft Technologies Private Limited
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
