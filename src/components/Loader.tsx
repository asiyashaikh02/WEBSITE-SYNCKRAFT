import React from 'react';

export const Loader = ({ message = "Loading Synckraft..." }: { message?: string }) => {
  const theme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A0A0B]' : 'bg-slate-50'}`}>
      <div className="relative">
        {/* Outer Ring */}
        <div className={`w-16 h-16 rounded-full border-4 border-t-blue-600 animate-spin ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`} />
        {/* Inner Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full animate-pulse" />
      </div>
      <p className={`mt-8 text-sm font-bold tracking-widest uppercase animate-pulse ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
        {message}
      </p>
    </div>
  );
};
