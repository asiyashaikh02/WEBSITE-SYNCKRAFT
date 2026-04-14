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
    <footer id="footer" className={`pt-24 md:pt-40 pb-12 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080809] text-white' : 'bg-[#1E40AF] text-white'
    }`}>
      {/* Decorative Blur */}
      <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none ${
        theme === 'dark' ? 'bg-blue-600/5' : 'bg-blue-500/10'
      }`} />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-5 mb-8">
              <h3 className="text-3xl font-black tracking-tighter text-white">
                Synckraft<span className="text-blue-500">.</span>
              </h3>
            </div> 
            
            <p className="text-blue-50 text-xl leading-relaxed max-w-lg mb-14 font-light opacity-70">
              Architecting the future through institutional execution. We build, launch, and scale the technology platforms that define tomorrow's digital infrastructure.
            </p>
            
            <div className="flex flex-col gap-4">
              <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Direct Correspondence</span>
              <a href="mailto:grow@synckraft.in" className="text-white hover:text-blue-300 transition-all font-bold text-2xl flex items-center gap-3 group">
                grow@synckraft.in <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Services</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/industries/real-estate" className="hover:text-blue-400 transition-colors">Real Estate Automation</Link></li>
              <li><Link to="/industries/restaurant" className="hover:text-blue-400 transition-colors">Restaurant Automation</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-blue-400 transition-colors">Healthcare Automation</Link></li>
              <li><Link to="/industries/gym" className="hover:text-blue-400 transition-colors">Gym Automation</Link></li>
              <li><Link to="/industries/salon" className="hover:text-blue-400 transition-colors">Salon Automation</Link></li>
              <li><Link to="/industries/hotel" className="hover:text-blue-400 transition-colors">Hotel Automation</Link></li>
              <li><Link to="/industries/retail" className="hover:text-blue-400 transition-colors">Retail Automation</Link></li>
              <li><Link to="/industries/jewellery" className="hover:text-blue-400 transition-colors">Jewellery Automation</Link></li>
              <li><Link to="/industries/furniture" className="hover:text-blue-400 transition-colors">Furniture Automation</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-blue-400 transition-colors">Manufacturing Automation</Link></li>
              <li><Link to="/industries/education" className="hover:text-blue-400 transition-colors">Education Automation</Link></li>
              <li><Link to="/industries/enterprise" className="hover:text-blue-400 transition-colors">Enterprise Automation</Link></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Products</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Real Estate OS</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Restaurant OS</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Healthcare OS</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Business Operating System</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">AI Automation Platform</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">CRM Automation</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Analytics Dashboard</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Company</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/book-demo" className="hover:text-blue-400 transition-colors">Book Demo</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-12 opacity-40">Legal & Corporate</h4>
            <ul className="space-y-4 text-blue-100 font-bold text-sm tracking-wide">
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
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
            Synckraft provides AI automation and Business Operating Systems for Real Estate, Restaurants, Healthcare, Retail, Manufacturing, Hospitality and multiple industries globally.
          </p>
          <p className="text-white/5 text-[10px] select-none text-justify">
            Business Automation Software, Restaurant Automation, Real Estate CRM Automation, Healthcare Automation Software, Business Operating System, AI Automation Platform, Digital Transformation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};