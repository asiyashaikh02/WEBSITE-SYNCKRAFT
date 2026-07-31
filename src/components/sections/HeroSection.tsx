import React from 'react';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  badgeText?: string;
  badgeItems?: string[];
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  primaryCtaText?: string;
  onPrimaryCta?: () => void;
  secondaryCtaText?: string;
  onSecondaryCta?: () => void;
  showSocialProof?: boolean;
  socialProofText?: string;
  onScrollClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badgeText,
  badgeItems,
  title,
  subtitle,
  description,
  primaryCtaText = 'Book a Strategy Call',
  onPrimaryCta,
  secondaryCtaText,
  onSecondaryCta,
  showSocialProof = false,
  socialProofText = 'Trusted by ambitious teams worldwide',
  onScrollClick,
}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6 pt-6">
      {/* Top Badge */}
      {badgeItems ? (
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#1D63FF] text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#1D63FF] inline-block opacity-80" />
          {badgeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < badgeItems.length - 1 && <span className="text-blue-300">•</span>}
            </React.Fragment>
          ))}
          <span className="w-2 h-2 rounded-full bg-[#1D63FF] inline-block opacity-80" />
        </div>
      ) : badgeText ? (
        <Badge variant="blue">{badgeText}</Badge>
      ) : null}

      {/* Main Title */}
      <div className="max-w-5xl mx-auto space-y-3">
        <h1 className="font-black text-slate-900 tracking-tight leading-none flex flex-col items-center justify-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-700 tracking-tight">
            {subtitle}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
        {description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        {onPrimaryCta && (
          <PrimaryButton onClick={onPrimaryCta}>{primaryCtaText}</PrimaryButton>
        )}
        {secondaryCtaText && onSecondaryCta && (
          <SecondaryButton onClick={onSecondaryCta}>{secondaryCtaText}</SecondaryButton>
        )}
      </div>

      {/* Optional Social Proof */}
      {showSocialProof && (
        <div className="pt-6 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center -space-x-2">
            <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              CA
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-white bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              DR
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-white bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              TH
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-white bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              TG
            </div>
            <div className="w-9 h-9 rounded-full border-2 border-white bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
              AL
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-500">{socialProofText}</p>
          <button
            onClick={onScrollClick}
            className="mt-2 cursor-pointer focus:outline-hidden rounded-full p-1 hover:bg-slate-100 transition-colors"
            aria-label="Scroll to services"
          >
            <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
          </button>
        </div>
      )}
    </section>
  );
};
