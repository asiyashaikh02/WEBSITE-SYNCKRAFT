import React from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/websiteData';
import { ProjectCard } from '../components/cards/ProjectCard';
import { SuccessStoriesSection } from '../components/sections/SuccessStoriesSection';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PrimaryButton } from '../components/ui/Button';
import { IndustriesSection } from '../components/sections/IndustriesSection';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onOpenBookModal,
  onSelectProject,
}) => {
  return (
    <div className="relative z-10 space-y-20 pt-8 pb-16">
      {/* Hero Section */}
      <SectionContainer className="text-center space-y-6 pt-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold tracking-wide shadow-2xs">
          Our Work
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Solutions We've Built, <br />
          <span className="text-[#2563EB]">Results We've Delivered.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Explore case studies and real-world software platforms engineered for
          our global clients and internal products.
        </p>

        <div className="pt-2">
          <PrimaryButton onClick={() => onOpenBookModal('Book a Strategy Call')}>
            Book a Strategy Call
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* Featured Platforms */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          title="Engineered Platforms & Systems"
          subtitle="A selection of software platforms engineered for high reliability, scale and seamless user experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              index={idx}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Tailored Solutions for Diverse Sectors - Interactive Expanding Cards Section */}
      <IndustriesSection onOpenBookModal={onOpenBookModal} />

      {/* SUCCESS STORIES SECTION */}
      <SuccessStoriesSection
        title="Success Stories"
        subtitle="Real businesses. Real software. Real business outcomes."
        onOpenBookModal={onOpenBookModal}
      />
    </div>
  );
};

