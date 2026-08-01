import React, { useState } from 'react';
import { PageId } from '../types';
import { trackNewsletterSignup } from '../utils/analytics/events';
import {
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Shield,
} from 'lucide-react';
import { SynckraftLogo } from './ui/SynckraftLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        // Trigger analytics
        trackNewsletterSignup(email);

        // Notify backend database
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim().toLowerCase() }),
        });
      } catch {
        // Ignore local/offline failures so the footer remains quiet in development.
      }

      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-50/80 border-t border-slate-200/80 pt-16 pb-8 text-slate-600 relative z-10">
      <button
        type="button"
        onClick={() => onNavigate('admin')}
        title="Admin Login"
        aria-label="Admin Login"
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 shadow-xs transition-all hover:text-[#1D63FF] hover:border-blue-300 hover:shadow-sm"
      >
        <Shield className="h-4 w-4" />
      </button>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="lg:col-span-3 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="flex flex-col items-start gap-3 focus:outline-hidden group cursor-pointer text-left"
              aria-label="Synckraft Home"
            >
              <SynckraftLogo size="lg" imageClassName="h-16 sm:h-20 md:h-24 w-auto max-w-[380px]" />
            </button>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Engineering business systems that drive growth, automation and
              digital transformation.
            </p>

            <div className="space-y-2.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Recognized By
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <img
                  src="/DPIIT-header.png"
                  alt="DPIIT Recognition"
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[112px] object-contain"
                />
                <img
                  src="/startupindia-logo.jpeg"
                  alt="Startup India"
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[112px] object-contain"
                />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/synckraft-technologies-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1D63FF] hover:border-blue-300 hover:shadow-xs transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/SynckraftTechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1D63FF] hover:border-blue-300 hover:shadow-xs transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/synckraft_technologies/?__pwa=1#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1D63FF] hover:border-blue-300 hover:shadow-xs transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1D63FF] hover:border-blue-300 hover:shadow-xs transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Industries
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#1D63FF] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</span>
                  <a href="mailto:grow@synckraft.in" className="text-slate-700 hover:text-[#1D63FF] transition-colors font-semibold">
                    grow@synckraft.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">General Contact</span>
                  <a href="tel:+919867799655" className="text-slate-700 hover:text-[#1D63FF] transition-colors font-semibold">
                    +91 98677 99655
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Enquiries</span>
                  <a href="tel:+919987155988" className="text-slate-700 hover:text-[#1D63FF] transition-colors font-semibold">
                    +91 99871 55988
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Location</span>
                  <a
                    href="https://share.google/3kEA43BAadSyiyNvB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-[#1D63FF] transition-colors font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Amravati, Maharashtra, India
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('refund')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="hover:text-[#1D63FF] transition-colors"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Subscribe to get our latest insights and updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-[#1D63FF] focus:ring-1 focus:ring-[#1D63FF] transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white p-2.5 rounded-lg transition-all duration-200 cursor-pointer shrink-0 shadow-xs hover:scale-105 active:scale-95"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2025 Synckraft Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <SynckraftLogo imageClassName="h-10 sm:h-12 w-auto max-w-[260px]" />
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
