import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../industries/industryData';
import { IndustryCard } from '../industries/IndustryCard';
import { ExpandedContent } from '../industries/ExpandedContent';
import { Sparkles, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../ui/Button';
import { IndustryImage } from '../industries/IndustryImage';
import {
  HeartPulse,
  Building2,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenBookModal: (ctaName?: string) => void;
}

const getIcon = (iconName: string, colorClass: string) => {
  const cls = `w-5 h-5 ${colorClass}`;
  switch (iconName) {
    case 'HeartPulse':
      return <HeartPulse className={cls} />;
    case 'Building2':
      return <Building2 className={cls} />;
    case 'GraduationCap':
      return <GraduationCap className={cls} />;
    case 'Truck':
      return <Truck className={cls} />;
    case 'Landmark':
      return <Landmark className={cls} />;
    case 'ShoppingBag':
      return <ShoppingBag className={cls} />;
    default:
      return <Building2 className={cls} />;
  }
};

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenBookModal,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mobileActiveIdx, setMobileActiveIdx] = useState<number>(0);

  // Keyboard Left / Right Navigation for Desktop Horizontal Cards
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIdx((prev) => (prev + 1) % INDUSTRIES_DATA.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIdx((prev) => (prev - 1 + INDUSTRIES_DATA.length) % INDUSTRIES_DATA.length);
    }
  };

  return (
    <section
      onKeyDown={handleKeyDown}
      className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 border-b border-slate-100"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold tracking-wide shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          INDUSTRIES WE TRANSFORM
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Tailored Solutions for Diverse Sectors
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Deep domain expertise building tailored software architectures for compliance-heavy, operational industries.
        </p>
      </div>

      {/* Desktop & Tablet: Horizontal Expanding Cards */}
      <div
        role="region"
        aria-label="Industries expanding cards carousel. Use arrow keys to navigate."
        className="hidden sm:flex flex-row items-stretch gap-3 lg:gap-4 w-full"
      >
        {INDUSTRIES_DATA.map((industry, idx) => {
          const isActive = activeIdx === idx;
          return (
            <IndustryCard
              key={industry.id}
              industry={industry}
              isActive={isActive}
              onSelect={() => setActiveIdx(idx)}
              onOpenBookModal={onOpenBookModal}
            />
          );
        })}
      </div>

      {/* Mobile: Accordion Stack */}
      <div className="block sm:hidden space-y-3">
        {INDUSTRIES_DATA.map((industry, idx) => {
          const isOpen = mobileActiveIdx === idx;

          return (
            <div
              key={industry.id}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? `${industry.accentBg} ${industry.accentBorder} shadow-md p-5`
                  : 'bg-white border-slate-200/90 p-4'
              }`}
            >
              {/* Accordion Header Bar */}
              <button
                type="button"
                onClick={() => setMobileActiveIdx(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl bg-white border ${industry.accentBorder} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    {getIcon(industry.iconName, industry.accentText)}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {industry.name}
                    </h3>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${industry.badgeBg}`}
                    >
                      {industry.badge}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-4 animate-fadeIn">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {industry.description}
                  </p>

                  <IndustryImage
                    src={industry.image}
                    alt={`${industry.name} solutions`}
                    industryName={industry.name}
                    accentBorder={industry.accentBorder}
                  />

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500 block">
                      Key Capabilities:
                    </span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {industry.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white/80 px-2.5 py-1.5 rounded-lg border border-slate-200/60"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${industry.accentText}`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <PrimaryButton
                      fullWidth
                      size="sm"
                      onClick={() => onOpenBookModal(industry.cta)}
                    >
                      {industry.cta}
                    </PrimaryButton>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
