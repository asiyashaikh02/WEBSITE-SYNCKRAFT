import React from 'react';
import { ProjectItem } from '../../types';
import { MicroAnimatedCard } from '../MicroAnimatedCard';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectProject,
}) => {
  return (
    <MicroAnimatedCard
      index={index}
      className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
      onClick={() => onSelectProject(project)}
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradientBg || 'from-blue-50 to-indigo-50'} flex flex-col justify-between p-5 border-b border-slate-100`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-[#1D63FF] shadow-2xs">
            {project.category}
          </span>
          <span className="text-[10px] font-semibold text-slate-500 bg-white/80 px-2.5 py-0.5 rounded-full">
            {project.client}
          </span>
        </div>
        <div className="z-10 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-white/60">
          <p className="text-[11px] font-mono font-bold text-slate-700 truncate">
            {project.imagePlaceholderText}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#1D63FF] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs font-extrabold text-[#1D63FF]">
            {project.results && project.results[0] ? (
              <span>{project.results[0].metric} {project.results[0].label}</span>
            ) : (
              <span>Verified Business Impact</span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProject(project);
            }}
            className="text-xs font-bold text-slate-700 group-hover:text-[#1D63FF] inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View Case Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </MicroAnimatedCard>
  );
};
