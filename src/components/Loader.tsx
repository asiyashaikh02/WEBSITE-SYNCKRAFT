import React from 'react';

export const Loader = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative">
        <div className="w-14 h-14 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full animate-pulse" />
      </div>
      <p className="mt-8 text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400 animate-pulse">
        {message}
      </p>
    </div>
  );
};
