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
        { name: 'Restaurant', href: '/industries/restaurant' },
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Hospitality', href: '/industries/hospitality' },
        { name: 'Gym', href: '/industries/gym' },
        { name: 'Salon', href: '/industries/beauty' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Jewellery', href: '/industries/jewelry' },
        { name: 'Furniture', href: '/industries/furniture' },
        { name: 'Automobile', href: '/industries/automobile' },
        { name: 'Supermarket', href: '/industries/supermarket' },
        { name: 'Fashion', href: '/industries/fashion' }
      ]
    },
    { name: 'Products', href: '/products', external: false },
    { name: 'Contact', href: '/contact', external: false },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? 'bg-slate-900/90 border-b border-white/10 py-2'
            : 'bg-slate-950/80 py-4'
        }`}
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
                    <div className="absolute top-full left-0 w-48 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-slate-900/90 border border-white/10 backdrop-blur-xl">
                      <div className="py-2">
                        {link.subLinks.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
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
              className="hidden sm:block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 text-white text-sm font-bold shadow-[0_24px_80px_rgba(56,189,248,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_90px_rgba(56,189,248,0.35)]"
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
