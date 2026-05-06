import React from 'react';
import { Linkedin, Instagram, Facebook, MapPin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<ThemeProps> = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/synckraft-technologies/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/synckrafttech" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/synckraft_technologies/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578472749598" },
  ];

  return (
    <footer id="footer" className="py-20 bg-slate-50 border-t border-slate-200 text-slate-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
               <img
                src="/logos/synckraft-light.png"
                alt="Synckraft Logo"
                className="w-48 h-auto object-contain block"
                loading="lazy"
              />
            </div> 
            
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm mb-10 font-medium">
              Synckraft is the parent technology and infrastructure company behind specialized modern brands. We build, launch, and scale digital ecosystems.
            </p>
            
            <div className="flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Direct Correspondence</span>
              <a href="mailto:grow@synckraft.in" className="text-slate-900 hover:text-blue-600 transition-colors font-bold text-lg inline-block">
                grow@synckraft.in
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/ecosystem" className="hover:text-blue-600 transition-colors">Our Ecosystem</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-blue-600 transition-colors">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><a href="mailto:grow@synckraft.in" className="hover:text-blue-600 transition-colors">Email</a></li>
              <li><a href="https://wa.me/919867799655" className="hover:text-blue-600 transition-colors">WhatsApp</a></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Office</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Presence Layer */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-slate-200 mb-12">
          <div className="flex items-center gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 hover:text-blue-600 transition-all transform hover:-translate-y-1"
              >
                <social.icon size={24} strokeWidth={1.5} />
              </a>
            ))}
            <Link to="/contact" className="text-slate-400 hover:text-blue-600 transition-all transform hover:-translate-y-1">
              <MapPin size={24} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">
            Institutional Infrastructure
          </div>
        </div>

        {/* Executive Bottom Layer */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="max-w-md">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-900">
              Synckraft Technologies Private Limited
            </div>
            <div className="text-slate-500 text-[11px] font-medium leading-relaxed">
              CIN: U62020MH2026PTC467409<br />
              All concepts, code, and frameworks are the intellectual property of Synckraft Technologies © 2026.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};