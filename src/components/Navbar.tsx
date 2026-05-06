import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', external: false },
    { name: 'Ecosystem', href: '/ecosystem', external: false },
    { name: 'Company', href: '/company', external: false },
    { name: 'Industries', href: '/industries', external: false },
    { name: 'Contact', href: '/contact', external: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? 'bg-white/80 border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Homepage" className="block focus:outline-none">
            <div className="w-[160px] sm:w-[180px] md:w-[200px] h-auto flex items-center">
              <img
                src="/logos/synckraft-light.png"
                alt="Synckraft Logo"
                className="w-full h-auto object-contain block"
                loading="eager"
              />
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[15px] font-semibold transition-colors ${
                    location.pathname === link.href 
                      ? 'text-blue-600' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
            >
              Partner With Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[80px]" aria-hidden="true" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden flex flex-col pt-24 px-8 bg-white text-slate-900 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100 pb-4">
                <Link
                  to={link.href}
                  className="text-2xl font-bold block text-slate-900 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <Link
              to="/contact"
              className="w-full py-4 rounded-xl bg-slate-900 text-white text-center text-lg font-bold mt-4 mb-12 hover:bg-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

