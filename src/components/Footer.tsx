import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme?: 'dark' | 'light';
}

const ventures = [
  { name: 'UNSTOPR',       href: 'https://www.unstopr.com',       color: 'hover:text-blue-600' },
  { name: 'SOLVEIT INDIA', href: 'https://www.solveitindia.com',   color: 'hover:text-emerald-600' },
  { name: 'SOLAROFT',      href: 'https://www.solaroft.com',       color: 'hover:text-amber-600' },
];

const socialLinks = [
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/synckraft-technologies/' },
  { icon: Twitter,   label: 'Twitter',   href: 'https://x.com/synckrafttech' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/synckraft_technologies/' },
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61578472749598' },
];

export const Footer: React.FC<ThemeProps> = () => {
  return (
    <footer id="footer" className="py-20 bg-slate-50 border-t border-slate-200 text-slate-600 relative overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" aria-label="Synckraft Technologies — Home" className="inline-block mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <img
                src="/logos/synckraft-light.png"
                alt="Synckraft Technologies"
                className="w-44 h-auto object-contain"
                loading="lazy"
                width="176"
                height="44"
              />
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm mb-8 font-medium">
              Synckraft is the parent technology and infrastructure company behind specialized modern brands. We build, launch, and scale digital ecosystems.
            </p>
            <div className="flex flex-col gap-1.5">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Direct Correspondence</span>
              <a
                href="mailto:grow@synckraft.in"
                className="text-slate-900 hover:text-blue-600 transition-colors duration-300 font-bold text-lg"
              >
                grow@synckraft.in
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.18em] text-[10px] mb-7">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><Link to="/about"     className="hover:text-blue-600 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/ecosystem" className="hover:text-blue-600 transition-colors duration-300">Our Ecosystem</Link></li>
              <li><Link to="/contact"   className="hover:text-blue-600 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Ecosystem brands */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.18em] text-[10px] mb-7">Ecosystem</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              {ventures.map(v => (
                <li key={v.name}>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 transition-colors duration-300 ${v.color}`}
                  >
                    {v.name}
                    <ArrowUpRight size={12} className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.18em] text-[10px] mb-7">Legal</h4>
            <ul className="space-y-4 text-slate-500 font-medium text-sm">
              <li><Link to="/privacy-policy"  className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/refund-policy"   className="hover:text-blue-600 transition-colors duration-300">Refund Policy</Link></li>
              <li><Link to="/disclaimer"      className="hover:text-blue-600 transition-colors duration-300">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Social row */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-slate-200 mb-10">
          <div className="flex items-center gap-5">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                <s.icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">
            Institutional Infrastructure
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-1.5 text-slate-900">
              Synckraft Technologies Private Limited
            </div>
            <div className="text-slate-400 text-[11px] font-medium leading-relaxed">
              CIN: U62020MH2026PTC467409 &nbsp;·&nbsp; All intellectual property © 2026 Synckraft Technologies.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
