import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, MessageSquare, Globe, Briefcase, Target } from 'lucide-react';

interface ContactPageProps {
  theme: 'dark' | 'light';
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'
    }`}>
      <Helmet>
        <title>Contact Us | Synckraft Technologies Private Limited</title>
        <meta name="description" content="Connect with Synckraft Technologies Private Limited for automation solutions, business systems, and technology services." />
      </Helmet>
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <section className="reveal mb-20">
          <h1 className={`text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Us<span className="text-blue-600">.</span>
          </h1>
          <p className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-sm">Synckraft Technologies Private Limited</p>
          <p className={`text-xl font-light leading-relaxed max-w-3xl ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We are here to assist you with automation solutions, business systems, and technology services. 
            Reach out through any of our official channels below.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal" style={{ transitionDelay: '0.1s' }}>
          {/* Quick Contact */}
          <div className={`p-8 rounded-3xl border transition-all hover:border-blue-500/30 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <Mail className="text-blue-600 mb-6" size={28} />
            <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Get in Touch</h3>
            <div className="space-y-2 text-sm text-slate-500">
              <p className="flex items-center gap-2"><Mail size={14} className="opacity-50" /> grow@synckraft.in</p>
              <p className="flex items-center gap-2"><Phone size={14} className="opacity-50" /> +91 9867799655</p>
              <p className="flex items-center gap-2"><Globe size={14} className="opacity-50" /> synckraft.in</p>
            </div>
          </div>

          {/* Office Address */}
          <div className={`p-8 rounded-3xl border transition-all hover:border-blue-500/30 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <MapPin className="text-blue-600 mb-6" size={28} />
            <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Office Address</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              414, 4th Floor, Daga Plazzo, <br />
              Opp. of Dmart, Camp, Biyani Square <br />
              Amravati, 444602, Maharashtra, India
            </p>
          </div>

          {/* Business Hours */}
          <div className={`p-8 rounded-3xl border transition-all hover:border-blue-500/30 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <Clock className="text-blue-600 mb-6" size={28} />
            <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Business Hours</h3>
            <div className="text-slate-500 text-sm space-y-1">
              <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
              <p className="text-red-500 font-medium">Sunday: Closed</p>
            </div>
          </div>

          {/* Response Time */}
          <div className={`p-8 rounded-3xl border transition-all hover:border-blue-500/30 ${
            theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}>
            <Target className="text-blue-600 mb-6" size={28} />
            <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Response Time</h3>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              We aim to respond within <br />
              <span className="font-bold text-blue-500 not-italic">24–48 business hours</span>.
            </p>
          </div>
        </div>

        {/* WhatsApp & Partnerships Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className={`p-10 rounded-[2.5rem] border ${
            theme === 'dark' ? 'bg-[#111112] border-white/5' : 'bg-green-50/30 border-green-100'
          }`}>
            <MessageSquare className="text-green-500 mb-6" size={32} />
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>WhatsApp Communication</h3>
            <p className={`text-slate-500 mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Connect with us via WhatsApp for service inquiries, automation setup, or support assistance.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Consent implied upon contact
            </div>
          </div>

          <div className={`p-10 rounded-[2.5rem] border ${
            theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-blue-50/30 border-blue-100'
          }`}>
            <Briefcase className="text-blue-600 mb-6" size={32} />
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Business & Partnerships</h3>
            <p className={`text-slate-500 mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              For enterprise solutions, collaborations, or partnerships, please email us with the specific subject:
            </p>
            <div className={`inline-block px-4 py-2 rounded-lg font-mono text-sm ${
              theme === 'dark' ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600 text-white'
            }`}>
              "Business Inquiry – Synckraft"
            </div>
          </div>
        </div>

        {/* Contact Form Integration */}
        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Send a Message</h2>
            <p className="text-slate-500">Fill out the form below and our team will get back to you shortly.</p>
          </div>
          <ContactForm theme={theme} />
        </div>

        <div className="mt-40 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.5em] reveal">
          All Rights Reserved © Synckraft Technologies Private Limited
        </div>
      </main>
    </div>
  );
};

export default ContactPage;