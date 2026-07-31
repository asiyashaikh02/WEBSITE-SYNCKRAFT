import React from 'react';
import { WHAT_WE_BUILD_PILLARS } from '../../data/websiteData';
import { UnifiedCapabilityCard } from '../cards/UnifiedCapabilityCard';
import { PrimaryButton } from '../ui/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface WhatWeBuildSectionProps {
  onNavigateProducts?: () => void;
  onNavigateServices?: () => void;
  onOpenBookModal?: () => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({
  onNavigateServices,
  onOpenBookModal,
}) => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-100">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1D63FF]" />
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What We Build
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          We engineer high-impact digital solutions tailored to modern operational challenges — built for speed, security, and measurable enterprise value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {WHAT_WE_BUILD_PILLARS.map((pillar) => (
          <UnifiedCapabilityCard
            key={pillar.id}
            id={pillar.id}
            title={pillar.title}
            description={pillar.description}
            badge={pillar.badge}
            problemSolved={pillar.businessOutcome}
            highlights={pillar.features}
            ctaText="Explore Architecture Specs"
            onOpenBookModal={onOpenBookModal || (() => {})}
          />
        ))}
      </div>

      {/* Contextual Action Banner */}
      <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
        {onOpenBookModal && (
          <PrimaryButton onClick={onOpenBookModal}>
            Discuss Your Project Architecture
          </PrimaryButton>
        )}
        {onNavigateServices && (
          <button
            onClick={onNavigateServices}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:border-blue-400 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <span>Explore All Custom Services</span>
            <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
          </button>
        )}
      </div>
    </section>
  );
};
