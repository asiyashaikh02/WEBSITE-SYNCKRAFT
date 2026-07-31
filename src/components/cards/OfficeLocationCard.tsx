import React from 'react';
import { OfficeLocation } from '../../types';
import { Building2, ArrowRight } from 'lucide-react';

interface OfficeLocationCardProps {
  office: OfficeLocation;
}

export const OfficeLocationCard: React.FC<OfficeLocationCardProps> = ({ office }) => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all flex items-start gap-5">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
        <Building2 className="w-7 h-7" />
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-extrabold text-slate-900">{office.title}</h3>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
              office.badge === 'Main Office'
                ? 'bg-blue-100 text-[#1D63FF]'
                : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            {office.badge}
          </span>
        </div>

        {office.companyName && (
          <p className="text-xs font-semibold text-slate-700">{office.companyName}</p>
        )}
        <p className="text-xs text-slate-500 font-normal">
          {office.address} <br />
          {office.country}
        </p>

        <a
          href={office.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D63FF] hover:underline pt-1"
        >
          <span>Get Directions</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
