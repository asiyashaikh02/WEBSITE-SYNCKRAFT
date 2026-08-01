import React from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/websiteData';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ServicesHorizontalScroll } from '../components/sections/ServicesHorizontalScroll';
import { WhyChooseTimelineSection } from '../components/WhyChooseTimelineSection';
import { AnimatedProcessWorkflow } from '../components/AnimatedProcessWorkflow';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PrimaryButton } from '../components/ui/Button';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBookModal,
}) => {
  return (
    <div className="relative z-10 space-y-24 pt-8 pb-16">
      {/* Hero Section */}
      <SectionContainer className="text-center space-y-6 pt-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          Our Services
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Services That Drive <br />
          <span className="text-[#1D63FF]">Digital Transformation.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          We help businesses automate, optimize and scale with modern technology
          and data-driven solutions.
        </p>

        <div className="pt-2">
          <PrimaryButton onClick={() => onOpenBookModal()}>
            Book a Strategy Call
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* What We Do Section */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          title="What We Do"
          subtitle="End-to-end services to help you build powerful systems, streamline operations and accelerate growth."
        />

        <ServicesHorizontalScroll
          services={SERVICES_DATA}
          onOpenBookModal={onOpenBookModal}
        />
      </SectionContainer>

      {/* Our Process - 5 Simple Steps */}
      <AnimatedProcessWorkflow />

      {/* Why Businesses Choose Synckraft - Premium Timeline */}
      <WhyChooseTimelineSection />
    </div>
  );
};
