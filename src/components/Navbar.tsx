import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/Button";

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
    { name: 'About', href: '/about', external: false },
    { name: 'Contact', href: '/contact', external: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 backdrop-blur-xl ${
          scrolled
            ? 'bg-white/90 border-b border-slate-200 py-3 shadow-xl shadow-slate-900/5'
            : 'bg-white/80 py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Synckraft Technologies Homepage"
            className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md group"
          >
            <div className="w-[160px] sm:w-[180px] md:w-[200px] h-auto flex items-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logos/synckraft-light.png"
                alt="Synckraft Technologies Logo"
                className="w-full h-auto object-contain block"
                loading="eager"
                width="200"
                height="50"
              />
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[15px] font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 hover:-translate-y-0.5 ${
                    location.pathname === link.href
                      ? 'text-blue-600 scale-105'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Premium CTA Button */}
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:flex shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              aria-label="Contact us to partner with Synckraft"
            >
              Partner With Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[80px]" aria-hidden="true" />

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] lg:hidden flex flex-col pt-24 px-8 bg-white/95 backdrop-blur-xl text-slate-900 overflow-y-auto border-t border-slate-200"
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-100 pb-4">
                <Link
                  to={link.href}
                  className="text-2xl font-bold block text-slate-900 hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="mt-4 mb-12">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                onClick={() => setIsOpen(false)}
                aria-label="Contact us to partner with Synckraft"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

