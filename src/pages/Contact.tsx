import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, MessageSquare, Globe, Briefcase, Target } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';

const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-surface text-on-surface transition-colors duration-500">
      <Helmet>
        <title>Contact Us | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Connect with Synckraft Technologies Private Limited for automation solutions, business systems, and technology services." />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="reveal mb-20">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none text-on-surface">
            Contact Us<span className="text-primary">.</span>
          </h1>
          <p className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Synckraft Technologies Private Limited</p>
          <p className="text-xl font-light leading-relaxed max-w-3xl text-on-surface/70">
            We are here to assist you with automation solutions, business systems, and technology services. 
            Reach out through any of our official channels below.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Quick Contact */}
          <div className="p-8 rounded-3xl border border-outline-variant bg-surface-container hover:border-primary/30 transition-all">
            <Mail className="text-primary mb-6" size={28} />
            <h3 className="font-bold mb-4 text-on-surface">Get in Touch</h3>
            <div className="space-y-2 text-sm text-on-surface/70">
              <p className="flex items-center gap-2"><Mail size={14} className="opacity-50" /> grow@synckraft.in</p>
              <p className="flex items-center gap-2"><Phone size={14} className="opacity-50" /> +91 9867799655</p>
              <p className="flex items-center gap-2"><Globe size={14} className="opacity-50" /> synckraft.in</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="p-8 rounded-3xl border border-outline-variant bg-surface-container hover:border-primary/30 transition-all">
            <MapPin className="text-primary mb-6" size={28} />
            <h3 className="font-bold mb-4 text-on-surface">Office Address</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed">
              414, 4th Floor, Daga Plazzo, <br />
              Opp. of Dmart, Camp, Biyani Square <br />
              Amravati, 444602, Maharashtra, India
            </p>
          </div>

          {/* Business Hours */}
          <div className="p-8 rounded-3xl border border-outline-variant bg-surface-container hover:border-primary/30 transition-all">
            <Clock className="text-primary mb-6" size={28} />
            <h3 className="font-bold mb-4 text-on-surface">Business Hours</h3>
            <div className="text-on-surface/70 text-sm space-y-1">
              <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
              <p className="text-red-500 font-medium">Sunday: Closed</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="p-8 rounded-3xl border border-outline-variant bg-surface-container hover:border-primary/30 transition-all">
            <Target className="text-primary mb-6" size={28} />
            <h3 className="font-bold mb-4 text-on-surface">Response Time</h3>
            <p className="text-on-surface/70 text-sm italic leading-relaxed">
              We aim to respond within <br />
              <span className="font-bold text-primary not-italic">24–48 business hours</span>.
            </p>
          </div>
        </div>

        {/* WhatsApp & Partnerships Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="p-10 rounded-[2.5rem] border border-outline-variant bg-surface-container-low">
            <MessageSquare className="text-green-500 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-on-surface">WhatsApp Communication</h3>
            <p className="text-on-surface/70 mb-6 leading-relaxed">
              Connect with us via WhatsApp for service inquiries, automation setup, or support assistance.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-on-surface/70 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Consent implied upon contact
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-outline-variant bg-surface-container">
            <Briefcase className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Business & Partnerships</h3>
            <p className="text-on-surface/70 mb-6 leading-relaxed">
              For enterprise solutions, collaborations, or partnerships, please email us with the specific subject:
            </p>
            <div className="inline-block px-4 py-2 rounded-lg font-mono text-sm bg-primary/20 text-primary">
              "Business Inquiry – Synckraft"
            </div>
          </div>
        </div>

        {/* Contact Form Integration */}
        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-on-surface">Send a Message</h2>
            <p className="text-on-surface/70">Fill out the form below and our team will get back to you shortly.</p>
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
