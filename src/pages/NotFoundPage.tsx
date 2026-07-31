import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Home, MessageSquare } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 text-[#1D63FF] flex items-center justify-center mx-auto shadow-md">
        <span className="text-4xl font-extrabold">404</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="bg-[#1D63FF] hover:bg-[#0052FF] text-white px-7 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-7 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span>Contact Support</span>
        </button>
      </div>
    </div>
  );
};
