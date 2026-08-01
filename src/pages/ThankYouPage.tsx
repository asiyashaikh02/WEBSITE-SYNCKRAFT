import React from 'react';
import { PageId } from '../types';
import { CheckCircle2, Home, ArrowRight, Calendar } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  onNavigate,
  onOpenBookModal,
}) => {
  return (
    <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
      <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
        <CheckCircle2 className="w-12 h-12" />
      </div>

      <div className="space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
          Request Received
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Thank You for Reaching Out!
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-normal leading-relaxed">
          We have received your message. A Synckraft solutions architect will review your project details and respond within 24 hours.
        </p>
      </div>

      <div className="p-6 bg-white border border-slate-200/80 rounded-2xl max-w-md mx-auto text-left space-y-3 shadow-2xs">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Next Steps
        </h3>
        <ul className="space-y-2 text-xs text-slate-600 font-medium">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D63FF]" />
            Check your inbox for a confirmation receipt.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D63FF]" />
            Our team prepares custom technical research for your requirements.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D63FF]" />
            We connect via Google Meet or Phone for a 30-minute roadmap review.
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="bg-[#1D63FF] hover:bg-[#0052FF] text-white px-8 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <button
          onClick={() => onOpenBookModal()}
          className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-8 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-blue-600" />
          <span>Schedule Directly on Calendar</span>
        </button>
      </div>
    </div>
  );
};
