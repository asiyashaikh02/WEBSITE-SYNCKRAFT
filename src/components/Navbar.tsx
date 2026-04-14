import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/', external: false },
    { 
      name: 'Services', 
      href: '/services', 
      external: false,
      subLinks: [
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Restaurant', href: '/industries/restaurant' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Manufacturing', href: '/industries/manufacturing' }
      ]
    },
    { 
      name: 'Products', 
      href: '/products', 
      external: false,
      subLinks: [
        { name: 'Real Estate OS', href: '/products/real-estate-os' },
        { name: 'Restaurant OS', href: '/products/restaurant-os' },
        { name: 'Healthcare OS', href: '/products/healthcare-os' },
        { name: 'Business OS', href: '/products/business-os' }
      ]
    },
    { name: 'Blog', href: '/blog', external: false },
    { name: 'Case Studies', href: '/case-studies', external: false },
    { name: 'Company', href: '/company', external: false },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-black/95 border-b border-white/10 py-2'
              : 'bg-white/95 border-b border-slate-200 py-2 shadow-sm'
            : 'bg-transparent py-4'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <a href="/" aria-label="Homepage" className="block focus:outline-none">
            <div
              className="
                w-[170px]
                sm:w-[190px]
                md:w-[210px]
                lg:w-[230px]
                h-auto
                flex
                items-center
              "
            >
              {/* Light logo */}
              <img
                src="/logos/synckraft-light.png"
                alt="Synckraft Logo"
                className={`w-full h-auto object-contain ${
                  theme === 'dark' ? 'hidden' : 'block'
                }`}
                loading="eager"
              />

              {/* Dark logo */}
              <img
                src="/logos/synckraft-dark.png"
                alt="Synckraft Logo"
                className={`w-full h-auto object-contain ${
                  theme === 'dark' ? 'block' : 'hidden'
                }`}
                loading="eager"
              />
            </div>
          </a>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 md:gap-5">

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 mr-4">
              {navLinks.map(link => (
                <div key={link.name} className="relative group p-2">
                  {link.external ? (
                    <a
                      href={link.href}
                      className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                        theme === 'dark'
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                        theme === 'dark'
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {link.subLinks && (
                    <div className={`absolute top-full left-0 w-48 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border ${theme === 'dark' ? 'bg-[#111112] border-white/10' : 'bg-white border-slate-100'}`}>
                      <div className="py-2">
                        {link.subLinks.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className={`block px-5 py-2.5 text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all active:scale-95 ${
                theme === 'dark'
                  ? 'bg-white/5 text-slate-300'
                  : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA */}
            <Link
              to="/book-demo"
              className="hidden sm:block px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
            >
              Book Demo
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 ml-1 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= SPACER ================= */}
      <div className="h-[80px] md:h-[96px]" aria-hidden="true" />

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[90] lg:hidden flex flex-col justify-center px-8 gap-8 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'
          }`}
        >
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/10 pb-4">
              {link.external ? (
                <a
                  href={link.href}
                  className="text-3xl font-black block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-3xl font-black block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
              {link.subLinks && (
                <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-blue-500/30">
                  {link.subLinks.map(sub => (
                     <Link
                       key={sub.name}
                       to={sub.href}
                       className="text-xl font-bold opacity-80"
                       onClick={() => setIsOpen(false)}
                     >
                       {sub.name}
                     </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/book-demo"
            className="w-full py-5 rounded-2xl bg-blue-600 text-white text-center text-xl font-black mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Demo
          </Link>
        </div>
      )}
    </>
  );
};
