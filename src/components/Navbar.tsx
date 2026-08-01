import React from 'react';
import { PageId } from '../types';
import { SynckraftLogo } from './ui/SynckraftLogo';
import { PrimaryButton } from './ui/Button';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({
  currentPage,
  onNavigate,
  onOpenBookModal,
}) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'company', label: 'Company' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-sky-100/60 shadow-xs transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group focus:outline-hidden cursor-pointer"
            aria-label="Synckraft Home"
          >
            <SynckraftLogo size="lg" imageClassName="h-12 sm:h-16 md:h-18 w-auto max-w-[320px]" />
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-1 py-2 text-sm font-semibold transition-colors focus:outline-hidden cursor-pointer ${
                    isActive
                      ? 'text-[#2563EB]'
                      : 'text-slate-700 hover:text-[#2563EB]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <PrimaryButton
              size="sm"
              onClick={() => onOpenBookModal('Talk to Us')}
            >
              Talk to Us
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden border-t border-slate-100 bg-white/95 px-4 py-2.5 flex items-center justify-around overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs font-semibold py-1.5 px-2.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-blue-50 text-[#2563EB]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
});

Navbar.displayName = 'Navbar';


