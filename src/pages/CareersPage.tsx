import React, { useState, useMemo, useEffect } from 'react';
import { PageId, JobListing } from '../types';
import { useLeadModal } from '../context/LeadModalContext';
import { updateJobPostingSeo, updatePageSeo } from '../utils/seo';
import {
  CAREER_DEPARTMENTS,
  LIFE_AT_SYNCKRAFT_HIGHLIGHTS,
  COMPANY_BENEFITS,
  HIRING_PROCESS,
  JOB_LISTINGS,
  EMPLOYEE_TESTIMONIALS,
  CAREER_FAQS,
} from '../data/careersData';
import { JobDetailModal } from '../components/careers/JobDetailModal';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Sparkles,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  GraduationCap,
  Laptop,
  BookOpen,
  Zap,
  CheckCircle2,
  HelpCircle,
  Search,
  Code,
  TrendingUp,
  Layers,
  Rocket,
  Award,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal?: (ctaName?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const { openLeadModal } = useLeadModal();
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedWorkType, setSelectedWorkType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeJobForDetail, setActiveJobForDetail] = useState<JobListing | null>(null);

  useEffect(() => {
    if (activeJobForDetail) {
      updateJobPostingSeo(activeJobForDetail);
    } else {
      updatePageSeo('careers');
    }
  }, [activeJobForDetail]);

  // Auto-rotating testimonials state
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isTestimonialsHovered, setIsTestimonialsHovered] = useState(false);

  useEffect(() => {
    if (isTestimonialsHovered) return;
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % EMPLOYEE_TESTIMONIALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isTestimonialsHovered]);

  // Dynamic icon helper for benefits and highlights
  const renderDynamicIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Layers':
        return <Layers className={`${className} text-[#1D63FF]`} />;
      case 'Zap':
        return <Zap className={`${className} text-amber-500`} />;
      case 'Code':
        return <Code className={`${className} text-blue-600`} />;
      case 'Rocket':
        return <Rocket className={`${className} text-indigo-600`} />;
      case 'Users':
        return <Users className={`${className} text-emerald-600`} />;
      case 'Sparkles':
        return <Sparkles className={`${className} text-[#1D63FF]`} />;
      case 'BookOpen':
        return <BookOpen className={`${className} text-purple-600`} />;
      case 'TrendingUp':
        return <TrendingUp className={`${className} text-emerald-600`} />;
      case 'Award':
        return <Award className={`${className} text-amber-600`} />;
      case 'Laptop':
        return <Laptop className={`${className} text-blue-600`} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={`${className} text-emerald-600`} />;
      case 'GraduationCap':
        return <GraduationCap className={`${className} text-[#1D63FF]`} />;
      default:
        return <Sparkles className={`${className} text-[#1D63FF]`} />;
    }
  };

  // Filter job listings dynamically by Title, Skills, Department, Employment Type, Location
  const filteredJobs = useMemo(() => {
    return JOB_LISTINGS.filter((job) => {
      // 1. Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(q);
        const matchDept = job.department.toLowerCase().includes(q);
        const matchLoc = job.location.toLowerCase().includes(q);
        const matchType =
          job.employmentType.toLowerCase().includes(q) ||
          job.workType.toLowerCase().includes(q);
        const matchSkills =
          (job.preferredSkills || []).some((s) => s.toLowerCase().includes(q)) ||
          (job.requirements || []).some((r) => r.toLowerCase().includes(q));

        if (!matchTitle && !matchDept && !matchLoc && !matchType && !matchSkills) {
          return false;
        }
      }

      // 2. Department
      if (selectedDepartment !== 'All' && job.department !== selectedDepartment) {
        return false;
      }

      // 3. Work Type
      if (selectedWorkType !== 'All' && job.workType !== selectedWorkType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedDepartment, selectedWorkType]);

  const activeTestimonial = EMPLOYEE_TESTIMONIALS[activeTestimonialIndex];

  return (
    <div className="space-y-16 sm:space-y-24 py-12">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#1D63FF] animate-pulse"></span>
            <span className="font-extrabold uppercase tracking-wider">Now Hiring</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-700">Software Developers & Sales & Marketing Interns</span>
          </div>

          <a
            href="https://www.linkedin.com/company/synckraft-technologies-private-limited/jobs/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>View All Jobs on LinkedIn</span>
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Build Products That Real Businesses Use
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Join Synckraft and work on AI Automation, CRM Platforms, SaaS Products and Business Software used by growing businesses across India.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
          <a
            href="#open-positions"
            className="px-6 py-3.5 rounded-xl bg-[#1D63FF] hover:bg-blue-600 text-white font-bold text-sm transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>View Open Positions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() =>
              openLeadModal({
                ctaName: 'Apply for Internship',
                formVariant: 'careers',
              })
            }
            className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer border border-slate-200 inline-flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-[#1D63FF]" />
            <span>Apply for Internship</span>
          </button>
        </div>
      </section>

      {/* 2. Life at Synckraft Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
            Startup Culture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Life at Synckraft
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At Synckraft, every team member works on real products, real clients and real business problems. You'll have the opportunity to learn quickly, take ownership and grow alongside a fast-moving technology company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE_AT_SYNCKRAFT_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {renderDynamicIcon(item.iconName, 'w-6 h-6')}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Realistic Perks & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
            What We Offer
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Practical Growth & Startup Exposure
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Realistic benefits focused on practical learning, mentorship, and career acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_BENEFITS.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-xs hover:border-blue-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {renderDynamicIcon(b.iconName)}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{b.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Hiring Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
            Hiring Process
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Simple 4-Step Hiring Process</h2>
          <p className="text-sm text-slate-600">
            Fast, transparent, and focused on real-world capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HIRING_PROCESS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-3 relative shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#1D63FF] text-white font-extrabold text-xs flex items-center justify-center">
                  0{step.step}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Open Positions Section */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
              Careers Board
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-3xl font-extrabold text-slate-900">Current Openings</h2>
              <a
                href="https://www.linkedin.com/company/synckraft-technologies-private-limited/jobs/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>View All Jobs on LinkedIn</span>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Select a position to view detailed requirements or apply directly via email.
            </p>
          </div>

          {/* Department filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
            <button
              onClick={() => setSelectedDepartment('All')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedDepartment === 'All'
                  ? 'bg-[#1D63FF] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Roles
            </button>
            {CAREER_DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.name)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDepartment === dept.name
                    ? 'bg-[#1D63FF] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Location Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search role title, skill, department, type or location..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-3 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedWorkType}
              onChange={(e) => setSelectedWorkType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-3 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-bold"
            >
              <option value="All">All Work Types</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site (Amravati)</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        {/* Job Listing Cards */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200/80 hover:border-blue-300 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1D63FF] border border-blue-100">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {job.employmentType}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {job.workType}
                    </span>
                    {job.isHot && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" /> Active Hiring
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#1D63FF] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Exp: {job.experienceLevel}</span>
                    </div>
                    {job.salaryRange && (
                      <div className="flex items-center gap-1 text-slate-900 font-bold">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{job.salaryRange}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setActiveJobForDetail(job)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer border border-slate-200"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      openLeadModal({
                        ctaName: `Apply for ${job.title}`,
                        formVariant: 'careers',
                      })
                    }
                    className="px-5 py-2.5 rounded-xl bg-[#1D63FF] hover:bg-blue-600 text-white text-xs font-bold transition-all cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-10 text-center space-y-4">
            <p className="text-base font-bold text-slate-900">
              No matching openings found.
            </p>
            <p className="text-xs text-slate-600 font-medium">
              Send us your resume anyway.
            </p>
            <button
              type="button"
              onClick={() =>
                openLeadModal({
                  ctaName: 'Submit Resume',
                  formVariant: 'careers',
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1D63FF] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Submit Resume</span>
            </button>
          </div>
        )}
      </section>

      {/* 6. Synckraft Internship Program */}
      <section id="internship-program" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30 inline-flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Synckraft Internship Program
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Synckraft Internship Program
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Gain practical experience by working on real-world software products, AI automation systems, CRM platforms and client projects while learning from an experienced startup team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Hands-on Experience</h4>
              <p className="text-[11px] text-slate-300">Work directly on software codebases & tools.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Real Product Dev</h4>
              <p className="text-[11px] text-slate-300">Build features for active clients & platforms.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Mentorship</h4>
              <p className="text-[11px] text-slate-300">Direct 1-on-1 guidance from team lead & founder.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">Internship Certificate</h4>
              <p className="text-[11px] text-slate-300">Official certificate & recommendation letter.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
              <h4 className="text-xs font-bold text-white">PPO Opportunity</h4>
              <p className="text-[11px] text-slate-300">Performance-based full-time offer conversion.</p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() =>
                openLeadModal({
                  ctaName: 'Apply for Internship',
                  formVariant: 'careers',
                })
              }
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Apply for Internship</span>
              <ArrowRight className="w-4 h-4 text-[#1D63FF]" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Employee & Team Testimonials (Auto-rotating every 3s, pause on hover) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
            Team Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Hear from Our Team Members & Interns</h2>
        </div>

        <div
          onMouseEnter={() => setIsTestimonialsHovered(true)}
          onMouseLeave={() => setIsTestimonialsHovered(false)}
          className="space-y-6"
        >
          {/* Featured Auto-Rotating Testimonial Card */}
          <div className="max-w-3xl mx-auto bg-white border border-blue-100 rounded-3xl p-8 sm:p-10 shadow-lg relative min-h-[220px] flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal italic">
                  "{activeTestimonial.quote}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0052FF] via-[#1D63FF] to-[#3B82F6] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 border border-blue-400/30">
                      {(() => {
                        const words = (activeTestimonial.name || '').trim().split(/\s+/);
                        return words.length >= 2
                          ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
                          : (activeTestimonial.name || '').slice(0, 2).toUpperCase();
                      })()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{activeTestimonial.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {activeTestimonial.role} • {activeTestimonial.joinYear}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {EMPLOYEE_TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonialIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          activeTestimonialIndex === idx
                            ? 'w-8 bg-[#1D63FF]'
                            : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Grid View of All Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EMPLOYEE_TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                onClick={() => setActiveTestimonialIndex(idx)}
                className={`bg-white border ${
                  activeTestimonialIndex === idx
                    ? 'border-[#1D63FF] shadow-md ring-2 ring-blue-100'
                    : t.isPlaceholder
                    ? 'border-dashed border-slate-300 bg-slate-50/50'
                    : 'border-slate-200/80 hover:border-slate-300'
                } rounded-3xl p-6 space-y-4 transition-all cursor-pointer flex flex-col justify-between`}
              >
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic line-clamp-4">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052FF] via-[#1D63FF] to-[#3B82F6] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 border border-blue-400/30">
                    {(() => {
                      const words = (t.name || '').trim().split(/\s+/);
                      return words.length >= 2
                        ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
                        : (t.name || '').slice(0, 2).toUpperCase();
                    })()}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t.role} • {t.joinYear}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D63FF]">
            Careers & Internship FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {CAREER_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-1.5"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1D63FF] shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      <JobDetailModal
        job={activeJobForDetail}
        isOpen={!!activeJobForDetail}
        onClose={() => setActiveJobForDetail(null)}
        onApply={() => {}}
      />
    </div>
  );
};
