import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ChevronDown, Menu, X } from 'lucide-react';

const industryLinks = [
  { name: "Restaurant", path: "/industries/restaurant" },
  { name: "Real Estate", path: "/industries/real-estate" },
  { name: "Retail & Supermarket", path: "/industries/retail" },
  { name: "Fashion", path: "/industries/fashion" },
  { name: "Furniture", path: "/industries/furniture" },
  { name: "Jewelry", path: "/industries/jewelry" },
  { name: "Healthcare & Medical", path: "/industries/healthcare" },
  { name: "Automobile", path: "/industries/automobile" },
  { name: "Education", path: "/industries/education" },
  { name: "Hospitality & Hotels", path: "/industries/hospitality" },
  { name: "Gym & Fitness", path: "/industries/gym" }
];

const serviceLinks = [
  { name: "AI Solutions", path: "/services#ai-solutions" },
  { name: "Automation", path: "/services#automation" },
  { name: "Digital Menu", path: "/services#digital-menu" },
  { name: "Business Growth", path: "/services#business-growth" },
  { name: "Analytics", path: "/services#analytics" },
  { name: "Website Development", path: "/services#website" },
  { name: "Mobile Apps", path: "/services#mobile-app" },
  { name: "CRM", path: "/services#crm" },
  { name: "AI Agents", path: "/services#ai-agents" },
  { name: "Custom Software", path: "/services#custom-software" }
];

export default function Navbar({ ctaText = "Get Started" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  const WHATSAPP_URL = "https://wa.me/919867799655?text=Hello%20Synckraft%20Team%2C%0A%0AI'm%20interested%20in%20your%20Specialized%20AI%20systems%20for%20diverse%20industry%20requirements.%0A%0APlease%20help%20me%20with%3A%0A%0A%E2%80%A2%20Healthcare%20AI%20%20%0A%E2%80%A2%20Fashion%20AI%20%20%0A%E2%80%A2%20Beauty%20AI%20%20%0A%E2%80%A2%20Jewellery%20AI%20%20%0A%E2%80%A2%20Supermarket%20AI%20%20%0A%E2%80%A2%20Furniture%20AI%20%20%0A%E2%80%A2%20Gym%20AI%20%20%0A%E2%80%A2%20Retail%20AI%20%20%0A%E2%80%A2%20AI%20%2F%20Obsidian%20Core%20Systems%20%20%0A%0AI%20would%20like%20to%3A%0A%0A%E2%80%A2%20Schedule%20a%20Demo%20%20%0A%E2%80%A2%20Talk%20to%20Sales%20%20%0A%0APlease%20assist%20me%20with%20the%20next%20steps.%0A%0AThank%20you.";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl shadow-2xl shadow-[#000000]/20">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#89ceff] text-3xl">memory</span>
          <span className="text-2xl font-bold tracking-tighter text-[#dae2fd] font-headline">SYNCKRAFT</span>
        </Link>
        
        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10 relative">
          <Link to="/" className={clsx("font-bold text-sm transition-all duration-300", isActive('/') ? "text-[#89ceff] border-b-2 border-[#89ceff] pb-1" : "text-[#dae2fd]/70 hover:text-[#dae2fd]")}>Home</Link>
          
          {/* INDUSTRIES DROPDOWN */}
          <div className="group relative">
            <Link to="/industries" className="flex items-center gap-1 font-bold text-sm text-[#dae2fd]/70 hover:text-[#dae2fd] pb-1 transition-all duration-300">
              Industries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
            </Link>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[400px]">
              <div className="bg-surface-container-high border border-outline-variant/10 rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-2">
                {industryLinks.map(link => (
                  <Link key={link.name} to={link.path} className="px-4 py-2 hover:bg-surface-container-low rounded-lg text-sm transition-colors text-on-surface hover:text-primary">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* SERVICES DROPDOWN */}
          <div className="group relative">
            <Link to="/services" className="flex items-center gap-1 font-bold text-sm text-[#dae2fd]/70 hover:text-[#dae2fd] pb-1 transition-all duration-300">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
            </Link>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[500px]">
              <div className="bg-surface-container-high border border-outline-variant/10 rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-2">
                {serviceLinks.map(link => (
                  <Link key={link.name} to={link.path} className="px-4 py-2 hover:bg-surface-container-low rounded-lg text-sm transition-colors text-on-surface hover:text-primary whitespace-nowrap">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/products" className={clsx("font-bold text-sm transition-all duration-300", isActive('/products') ? "text-[#89ceff] border-b-2 border-[#89ceff] pb-1" : "text-[#dae2fd]/70 hover:text-[#dae2fd]")}>Demo</Link>
          <Link to="/contact" className={clsx("font-bold text-sm transition-all duration-300", isActive('/contact') ? "text-[#89ceff] border-b-2 border-[#89ceff] pb-1" : "text-[#dae2fd]/70 hover:text-[#dae2fd]")}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href={WHATSAPP_URL} className="hidden sm:block bg-gradient-to-br from-primary to-on-primary-container text-on-primary font-bold px-6 py-2.5 rounded-lg hover:brightness-110 active:scale-95 transition-all text-sm">
            {ctaText}
          </a>
          <button className="lg:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-container-highest border-b border-outline-variant/10 p-4 max-h-[80vh] overflow-y-auto shadow-2xl flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold px-4 py-2 hover:bg-surface-container-low rounded-xl">Home</Link>
          
          <div className="px-4 py-2">
            <Link to="/industries" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary mb-2 block">Industries</Link>
            <div className="grid grid-cols-2 gap-2 pl-4 border-l border-primary/20">
              {industryLinks.map(link => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-sm py-2 hover:text-primary text-on-surface-variant">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2">
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-primary mb-2 block">Solutions</Link>
            <div className="grid grid-cols-2 gap-2 pl-4 border-l border-primary/20">
              {serviceLinks.map(link => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-sm py-2 hover:text-primary text-on-surface-variant">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold px-4 py-2 hover:bg-surface-container-low rounded-xl">Demo</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold px-4 py-2 hover:bg-surface-container-low rounded-xl">Contact</Link>
          
          <a href={WHATSAPP_URL} className="flex justify-center bg-primary text-on-primary font-bold mx-4 py-3 rounded-xl mt-4 active:scale-95 transition-all text-sm">
            {ctaText}
          </a>
        </div>
      )}
    </header>
  );
}
