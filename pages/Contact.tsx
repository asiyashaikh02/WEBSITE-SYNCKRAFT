import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

interface ContactPageProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ theme, toggleTheme }) => {
  
  // Page load hote hi top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-white'
    }`}>
      {/* Navbar section */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-20">
        {/* Header Section for Meta Trust */}
        <section className="max-w-7xl mx-auto px-8 pt-20 pb-10">
          <div className="reveal">
            <h1 className={`text-5xl md:text-7xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Connect with <span className="text-blue-600">Synckraft.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
              Whether you're looking to scale a venture or discuss institutional-grade strategy, 
              our correspondence team is ready to assist.
            </p>
          </div>

          {/* Business Details Grid - VERY IMPORTANT FOR META VERIFICATION */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <MapPin className="text-blue-600 mb-6" size={32} />
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Registered Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                [Aapka Official Address Yahan Likhein]<br />
                Amravati, Maharashtra, India
              </p>
            </div>

            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <Mail className="text-blue-600 mb-6" size={32} />
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Email Us</h3>
              <p className="text-slate-500 text-sm">grow@synckraft.in</p>
              <p className="text-slate-500 text-sm">support@synckraft.in</p>
            </div>

            <div className={`p-8 rounded-3xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <Clock className="text-blue-600 mb-6" size={32} />
              <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Response Time</h3>
              <p className="text-slate-500 text-sm italic">Standard response under 24 hours.</p>
              <p className="text-slate-500 text-sm mt-1">Monday – Friday: 9 AM - 6 PM IST</p>
            </div>
          </div>
        </section>

        {/* Existing Contact Form Component */}
        <ContactForm theme={theme} />
      </main>

      {/* Footer section */}
      <Footer theme={theme} />
    </div>
  );
};

// Default export jo App.tsx dhoond raha tha
export default ContactPage;