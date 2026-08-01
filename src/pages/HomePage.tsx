import React from 'react';
import { PageId, ProductItem, ProjectItem } from '../types';
import {
  SERVICES_DATA,
} from '../data/websiteData';
import { HeroSection } from '../components/sections/HeroSection';
import { TypewriterHeroTitle } from '../components/common/TypewriterHeroTitle';
import { WhatWeBuildSection } from '../components/sections/WhatWeBuildSection';
import { SuccessStoriesSection } from '../components/sections/SuccessStoriesSection';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductMarquee } from '../components/sections/ProductMarquee';
import { ServicesHorizontalScroll } from '../components/sections/ServicesHorizontalScroll';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookModal,
  onSelectProduct,
  onSelectProject,
}) => {
  return (
    <div className="relative z-10 space-y-20 pt-8 pb-16">
      {/* 1. Hero Section */}
      <HeroSection
        badgeItems={['PARENT ECOSYSTEM COMPANY']}
        title={<TypewriterHeroTitle />}
        description="Synckraft engineers enterprise-grade software, custom CRM/ERP platforms, and intelligent workflow automation. We build clean, scalable systems tailored to your exact operational processes."
        primaryCtaText="Schedule Strategy Consultation"
        onPrimaryCta={onOpenBookModal}
        secondaryCtaText="Explore Products & Specs"
        onSecondaryCta={() => onNavigate('products')}
        showSocialProof={true}
        socialProofText="Dedicated Engineering Teams • 99.9% Operational Reliability • 50+ Deployments"
        onScrollClick={() => onNavigate('services')}
      />

      {/* 2. What We Build Section */}
      <WhatWeBuildSection
        onNavigateProducts={() => onNavigate('products')}
        onNavigateServices={() => onNavigate('services')}
        onOpenBookModal={onOpenBookModal}
      />

      {/* 3. Products & Platforms */}
      <SectionContainer className="space-y-8">
        <ProductMarquee onNavigateProducts={() => onNavigate('products')} />
      </SectionContainer>

      {/* 4. Services */}
      <SectionContainer className="space-y-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-4">
          <SectionHeading
            align="left"
            badge="OUR SERVICES"
            title={
              <>
                End-to-End Engineering & <br />
                <span className="text-[#1D63FF]">Digital Transformation.</span>
              </>
            }
            subtitle="From architecture design to cloud deployment, we build custom systems that eliminate operational bottlenecks."
          />
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-[#1D63FF] hover:text-[#0052FF] flex items-center gap-1.5 cursor-pointer shrink-0 pb-1"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <ServicesHorizontalScroll
          services={SERVICES_DATA}
          onOpenBookModal={onOpenBookModal}
        />
      </SectionContainer>

      {/* 6. Success Stories (Combines Case Studies + Client Testimonials) */}
      <SuccessStoriesSection
        title="Success Stories"
        subtitle="Real businesses. Real software. Real business outcomes."
        onOpenBookModal={onOpenBookModal}
      />
    </div>
  );
};
