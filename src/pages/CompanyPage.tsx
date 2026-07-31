import React from 'react';
import { PageId } from '../types';
import {
  ENGINEERING_MEMBERS,
  MARKETING_MEMBERS,
  HR_MEMBERS,
  SALES_MEMBERS,
} from '../data/websiteData';
import { TeamMemberCard } from '../components/cards/TeamMemberCard';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TeamCultureCarousel } from '../components/carousel/TeamCultureCarousel';
import { PrimaryButton, SecondaryButton } from '../components/ui/Button';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Code2,
  Megaphone,
  Handshake,
} from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({
  onOpenBookModal,
}) => {
  const companyValues = [
    {
      title: 'Integrity',
      description: 'We do the right thing, always.',
      icon: <Shield className="w-6 h-6 text-[#1D63FF]" />,
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas to create better solutions.',
      icon: <Zap className="w-6 h-6 text-[#1D63FF]" />,
    },
    {
      title: 'Collaboration',
      description: 'We believe the best results come together.',
      icon: <Users className="w-6 h-6 text-[#1D63FF]" />,
    },
    {
      title: 'Excellence',
      description: 'We are committed to quality in everything we do.',
      icon: <Award className="w-6 h-6 text-[#1D63FF]" />,
    },
    {
      title: 'Impact',
      description: 'We build solutions that create real impact.',
      icon: <TrendingUp className="w-6 h-6 text-[#1D63FF]" />,
    },
  ];

  return (
    <div className="relative z-10 space-y-24 pt-8 pb-16">
      {/* Hero Section */}
      <SectionContainer className="text-center space-y-6 pt-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          About Synckraft
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          We Build Systems. <br />
          <span className="text-[#1D63FF]">We Drive Growth.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Synckraft is a technology company on a mission to help businesses
          streamline operations, automate processes and scale with confidence.
        </p>

        <div className="pt-2">
          <PrimaryButton onClick={() => onOpenBookModal('Book a Strategy Call')}>
            Book a Strategy Call
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* Stats Bar */}
      <SectionContainer>
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                17+
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                Projects Delivered
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                20+
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                Team Members
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                12+
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                Industries Served
              </div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                99%
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Story Section */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header & Description */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D63FF]">
              OUR STORY
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              From A Simple Idea <br />
              To <span className="text-[#1D63FF]">Real Impact.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Synckraft was founded with a simple belief — technology should
              simplify business, not complicate it.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              What started as a small team of passionate problem solvers has grown
              into a full-scale product and engineering company trusted by
              businesses across industries.
            </p>
          </div>

          {/* Mission, Vision, Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Our Mission</h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                  To empower businesses with intelligent systems that drive
                  efficiency, growth and innovation.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Our Vision</h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                  To become a global leader in building impactful software
                  solutions for a better tomorrow.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Our Purpose</h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed mt-0.5">
                  To create technology that makes a real difference in people's
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Values, Our Promise */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          badge="WHAT WE STAND FOR"
          title={
            <>
              Our Values, <span className="text-[#1D63FF]">Our Promise.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {companyValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* People of Synckraft Section (Large Group Photo) */}
      <SectionContainer className="space-y-8">
        <SectionHeading
          badge="OUR PEOPLE"
          title="The People of Synckraft"
          subtitle={
            <>
              The passionate builders, innovators, designers and problem-solvers who turned a vision into reality.
              <br className="hidden sm:inline" /> Every product we build, every system we engineer and every client we serve is powered by this incredible team.
            </>
          }
        />

        <TeamCultureCarousel />

        <p className="text-center text-xs sm:text-sm text-slate-500 font-medium italic">
          &ldquo;Building technology together, one solution at a time.&rdquo;
        </p>
      </SectionContainer>

      {/* Meet Our Team */}
      <SectionContainer className="space-y-16">
        {/* 3. ENGINEERING TEAM */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Engineering Team
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Designing, building and scaling software products.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} variant="standard" />
            ))}
          </div>
        </div>

        {/* 4. MARKETING TEAM & HR TEAM (SIDE BY SIDE ON DESKTOP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Marketing Team */}
          <div className="flex flex-col h-full space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Marketing Team
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Growing brands through creative marketing and communication.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              {MARKETING_MEMBERS.map((member) => (
                <TeamMemberCard key={member.id} member={member} variant="standard" />
              ))}
            </div>
          </div>

          {/* Right Column: HR Team */}
          <div className="flex flex-col h-full space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  HR Team
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Connecting exceptional talent with meaningful opportunities.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              {HR_MEMBERS.map((member) => (
                <TeamMemberCard key={member.id} member={member} variant="standard" />
              ))}
            </div>
          </div>
        </div>

        {/* 5. SALES TEAM */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Sales Team
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Helping businesses discover technology that drives growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SALES_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} variant="standard" />
            ))}
          </div>
        </div>

        <div className="text-center pt-2">
          <SecondaryButton size="sm" onClick={() => onOpenBookModal('Join Our Team')}>
            Join Our Team
          </SecondaryButton>
        </div>
      </SectionContainer>
    </div>
  );
};
