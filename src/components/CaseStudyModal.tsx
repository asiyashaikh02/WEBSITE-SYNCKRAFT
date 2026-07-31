import React from 'react';
import { ProjectItem } from '../types';
import { Modal } from './ui/Modal';
import { PrimaryButton, SecondaryButton } from './ui/Button';
import { useLeadModal } from '../context/LeadModalContext';
import { Check, ArrowRight, Code2, Award, AlertCircle, CheckCircle2, Monitor } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenBookModal: (ctaName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenBookModal,
}) => {
  const { openLeadModal } = useLeadModal();
  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose} maxWidth="max-w-3xl">
      <div className="-m-6 sm:-m-8 flex flex-col overflow-hidden max-h-[85vh]">
        {/* Header Visual */}
        <div className={`p-8 bg-gradient-to-br ${project.gradientBg} relative border-b border-slate-100`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-blue-700 shadow-2xs">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-slate-600">Client: {project.client}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-blue-800 mt-1">{project.subtitle}</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-slate-700 text-sm">
          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Problem Statement */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-1.5">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                The Operational Problem
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {project.problemStatement || project.description}
              </p>
            </div>

            {/* Solution Delivered */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 space-y-1.5">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                The Custom Solution
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                {project.solutionDelivered || 'Designed and deployed custom automated platform tailored to client SLAs.'}
              </p>
            </div>
          </div>

          {/* Screenshot / Preview Placeholder Frame */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-[#1D63FF]" />
              System Dashboard Interface Preview
            </h4>
            <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="font-mono">{project.imagePlaceholderText}</span>
                <span className="bg-blue-600/30 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded">Production Build</span>
              </div>
              <div className="h-32 bg-slate-950/60 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center text-center p-4">
                <p className="text-xs font-bold text-slate-200">{project.title}</p>
                <p className="text-[11px] text-slate-400 mt-1">High-concurrency cloud architecture with automated metrics reporting.</p>
              </div>
            </div>
          </div>

          {/* Results Impact */}
          <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100/80">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              Measurable Business Impact
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-blue-100">
                  <div className="text-2xl font-extrabold text-[#1D63FF]">{res.metric}</div>
                  <div className="text-xs font-semibold text-slate-600">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Key Architecture Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-slate-500" />
              Technology Architecture
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-semibold border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <SecondaryButton onClick={onClose} size="sm">
            Close Blueprint
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              onClose();
              openLeadModal({
                ctaName: `Discuss ${project.title} Architecture`,
                formVariant: 'business',
              });
            }}
            size="sm"
          >
            Discuss Similar Architecture
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

