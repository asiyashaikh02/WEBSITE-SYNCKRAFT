import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      setIsOpen(false);
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home',      href: '/' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'About',     href: '/about' },
    { name: 'Contact',   href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header
        className={`navbar-enter fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/[0.04]'
            : 'bg-white/80 backdrop-blur-xl py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          <Link
            to="/"
            aria-label="Synckraft Technologies — Home"
            className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
          >
            <img
              src="/logos/synckraft-light.png"
              alt="Synckraft Technologies"
              className="w-[148px] sm:w-[168px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              loading="eager"
              width="168"
              height="44"
            />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`relative px-4 py-2 text-[14px] font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isActive(link.href)
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-600" />
                  )}
                </Link>
              ))}
            </nav>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:flex"
              aria-label="Partner with Synckraft"
            >
              Partner With Us
            </Button>

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 hover:bg-slate-100"
              onClick={() => setIsOpen(v => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu
                size={24}
                aria-hidden="true"
                className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
              />
              <X
                size={24}
                aria-hidden="true"
                className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div className="h-[72px]" aria-hidden="true" />

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[90] lg:hidden bg-white/98 backdrop-blur-2xl transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <div className="flex flex-col px-8 pt-6 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-2xl font-bold py-4 border-b border-slate-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 ${
                isActive(link.href)
                  ? 'text-blue-600'
                  : 'text-slate-800 hover:text-blue-600 hover:pl-4'
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 pb-8">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
