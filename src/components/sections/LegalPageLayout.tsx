import React from 'react';
import { PageId } from '../../types';
import { ArrowLeft, Shield } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  icon?: React.ReactNode;
  onNavigate: (page: PageId) => void;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  lastUpdated,
  icon = <Shield className="w-6 h-6" />,
  onNavigate,
  children,
}) => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#1D63FF] hover:underline cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{title}</h1>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              {lastUpdated} | Synckraft Technologies Pvt. Ltd.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};
