import React from 'react';
import { Linkedin, Instagram, Facebook, MapPin, ChevronRight, Twitter, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

export const Footer: React.FC<ThemeProps> = ({ theme }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/synckraft-technologies/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/synckrafttech" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/synckraft_technologies/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578472749598" },
  ];

  return (
    <footer id="footer" className="py-24 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Global Background Layer */}
      <div className="absolute inset-0 bg-slate-950/95" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 12%, rgba(56,189,248,0.04), transparent 28%), radial-gradient(circle at 82% 18%, rgba(168,85,247,0.03), transparent 26%), radial-gradient(circle at 55% 85%, rgba(14,165,233,0.02), transparent 35%)",
          mixBlendMode: "screen",
          opacity: 0.4,
        }}
      />
      <div className="hero-glow opacity-30" />
      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute right-8 top-40 h-56 w-56 rounded-full bg-fuchsia-500/5 blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-8">
              <h3 className="text-3xl font-black tracking-tighter text-white">
                Synckraft<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">.</span>
              </h3>
            </div> 
            
            <p className="text-slate-300 text-xl leading-relaxed max-w-lg mb-14 font-light opacity-80">
              Architecting the future through institutional execution. We build, launch, and scale the technology platforms that define tomorrow's digital infrastructure.
            </p>
            
            <div className="flex flex-col gap-4">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Direct Correspondence</span>
              <a href="mailto:grow@synckraft.in" className="text-white hover:text-cyan-300 transition-all font-bold text-2xl flex items-center gap-3 group">
                grow@synckraft.in <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Services</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/industries/restaurant" className="hover:text-blue-400 transition-colors">Restaurant</Link></li>
              <li><Link to="/industries/real-estate" className="hover:text-blue-400 transition-colors">Real Estate</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-blue-400 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/retail" className="hover:text-blue-400 transition-colors">Retail</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-blue-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/hospitality" className="hover:text-blue-400 transition-colors">Hospitality</Link></li>
              <li><Link to="/industries/gym" className="hover:text-blue-400 transition-colors">Gym</Link></li>
              <li><Link to="/industries/beauty" className="hover:text-blue-400 transition-colors">Beauty</Link></li>
              <li><Link to="/industries/education" className="hover:text-blue-400 transition-colors">Education</Link></li>
              <li><Link to="/industries/jewelry" className="hover:text-blue-400 transition-colors">Jewelry</Link></li>
              <li><Link to="/industries/furniture" className="hover:text-blue-400 transition-colors">Furniture</Link></li>
              <li><Link to="/industries/automobile" className="hover:text-blue-400 transition-colors">Automobile</Link></li>
              <li><Link to="/industries/supermarket" className="hover:text-blue-400 transition-colors">Supermarket</Link></li>
              <li><Link to="/industries/fashion" className="hover:text-blue-400 transition-colors">Fashion</Link></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Products</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/products/RealEstate" className="hover:text-blue-400 transition-colors">Real Estate Platform</Link></li>
              <li><Link to="/products/Restaurant" className="hover:text-blue-400 transition-colors">Restaurant Platform</Link></li>
              <li><Link to="/products/Healthcare" className="hover:text-blue-400 transition-colors">Healthcare Platform</Link></li>
              <li><Link to="/products/BusinessOS" className="hover:text-blue-400 transition-colors">Business OS</Link></li>
              <li><Link to="/products/Automation" className="hover:text-blue-400 transition-colors">Automation Platform</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Company</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Contact</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><a href="mailto:grow@synckraft.in" className="hover:text-blue-400 transition-colors">Email</a></li>
              <li><a href="https://wa.me/919867799655" className="hover:text-blue-400 transition-colors">WhatsApp</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Location</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Presence Layer */}
        <div className="flex flex-wrap items-center justify-between gap-10 py-12 border-y border-white/5 mb-20">
          <div className="flex items-center gap-10">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-blue-200 hover:text-white transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center p-3 rounded-lg"
              >
                <social.icon size={30} strokeWidth={1.5} />
              </a>
            ))}
            <a href="/contact" className="text-blue-200 hover:text-white transition-all transform hover:-translate-y-1 p-3 rounded-lg">
              <MapPin size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className="text-white text-[10px] font-black uppercase tracking-[0.6em] hidden lg:block">
            Venture Standard v1.02.2026
          </div>
        </div>

        {/* Executive Bottom Layer */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-16 text-blue-200">
          <div className="max-w-xs">
            <div className="text-[12px] font-bold uppercase tracking-[0.25em] mb-2 text-white">
              Synckraft Technologies Private Limited
            </div>
            <div className="text-white text-[10px] font-medium leading-relaxed">
              CIN: U62020MH2026PTC467409<br />
              All concepts, code, and frameworks are the intellectual property of Synckraft Technologies © 2026.
            </div>
          </div>
        </div>

        {/* SEO Text Layers */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-white/40 text-xs leading-relaxed max-w-4xl font-light mb-4 text-justify">
            Synckraft builds Business Operating Systems and AI Automation Platforms for Real Estate, Restaurants, Healthcare, Retail and multiple industries globally.
          </p>
          <p className="text-white/5 text-[10px] select-none text-justify">
            Business Automation Software, Restaurant Automation, Real Estate CRM Automation, Healthcare Automation Software, Business Operating System, AI Automation Platform, Digital Transformation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};