import React, { useState } from 'react';
import { JobListing, JobApplicationFormData } from '../../types';
import { PrimaryButton, SecondaryButton } from '../ui/Button';
import { X, CheckCircle2, Upload, Send, Briefcase, User, Mail, Phone, Link2, FileText } from 'lucide-react';

interface JobApplicationModalProps {
  job: JobListing | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<JobApplicationFormData>({
    jobId: job?.id || '',
    jobTitle: job?.title || '',
    fullName: '',
    email: '',
    phone: '',
    linkedInUrl: '',
    portfolioUrl: '',
    yearsOfExperience: '1-3 years',
    currentNoticePeriod: 'Immediate / 15 days',
    coverLetter: '',
    resumeUrlOrNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Application Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for applying for the <span className="font-bold text-slate-900">{job.title}</span> role at Synckraft. Our talent team will review your application and respond within 24–48 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 rounded-xl bg-[#1D63FF] text-white font-bold text-sm hover:bg-blue-600 transition-all cursor-pointer shadow-xs"
            >
              Close & Continue Browsing
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1 pr-8">
              <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#1D63FF] border border-blue-100 inline-block">
                {job.department}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 pt-1">
                Apply for {job.title}
              </h2>
              <p className="text-xs text-slate-500">
                {job.location} • {job.employmentType} ({job.workType})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@domain.com"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    LinkedIn Profile URL *
                  </label>
                  <div className="relative">
                    <Link2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="url"
                      required
                      value={formData.linkedInUrl}
                      onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Years of Experience *
                  </label>
                  <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                  >
                    <option value="0-1 years (College / Fresher)">0-1 years (College / Fresher)</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    GitHub / Portfolio / Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Resume / CV (Google Drive URL or Drop PDF Link) *
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.resumeUrlOrNotes}
                    onChange={(e) => setFormData({ ...formData, resumeUrlOrNotes: e.target.value })}
                    placeholder="Link to Google Drive / Notion CV or paste highlights..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs pl-9 pr-3 py-2.5 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Why Synckraft? (Short Cover Note)
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us about the coolest system or project you've built recently..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs p-3 rounded-xl focus:outline-hidden focus:border-[#1D63FF] font-medium resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <SecondaryButton type="button" onClick={onClose} size="sm">
                  Cancel
                </SecondaryButton>
                <PrimaryButton
                  type="submit"
                  isLoading={isSubmitting}
                  size="sm"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Submit Application
                </PrimaryButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
