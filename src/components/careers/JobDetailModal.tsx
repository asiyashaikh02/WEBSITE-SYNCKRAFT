import React from 'react';
import { JobListing } from '../../types';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import { useLeadModal } from '../../context/LeadModalContext';
import {
  X,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Building2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface JobDetailModalProps {
  job: JobListing | null;
  isOpen: boolean;
  onClose: () => void;
  onApply?: (job: JobListing) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  isOpen,
  onClose,
  onApply,
}) => {
  const { openLeadModal } = useLeadModal();

  if (!isOpen || !job) return null;

  const handleApplyClick = () => {
    onClose();
    if (onApply) onApply(job);
    openLeadModal({
      ctaName: `Apply for ${job.title}`,
      formVariant: 'careers',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto my-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8 border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D63FF] border border-blue-100">
              {job.department}
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              {job.employmentType}
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              {job.workType}
            </span>
            {job.isHot && (
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Urgent Hiring</span>
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {job.title}
          </h2>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 flex-wrap pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Exp: {job.experienceLevel}</span>
            </div>
            {job.salaryRange && (
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                <span>{job.salaryRange}</span>
              </div>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Role Overview
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {job.overview}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Key Responsibilities
          </h3>
          <ul className="space-y-2">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1D63FF] shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Requirements & Qualifications
          </h3>
          <ul className="space-y-2">
            {job.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preferred Skills */}
        {job.preferredSkills && job.preferredSkills.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Bonus / Preferred Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.preferredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                >
                  + {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Benefits specific to role */}
        {job.benefits && job.benefits.length > 0 && (
          <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Role Specific Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {job.benefits.map((ben, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#1D63FF]">✓</span> {ben}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-900">Ready to build at scale?</p>
            <p className="text-[11px] text-slate-500">Fast 24-hour application turnaround</p>
          </div>

          <div className="flex items-center gap-3">
            <SecondaryButton onClick={onClose} size="sm">
              Close
            </SecondaryButton>
            <PrimaryButton onClick={handleApplyClick} size="sm">
              Apply Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
