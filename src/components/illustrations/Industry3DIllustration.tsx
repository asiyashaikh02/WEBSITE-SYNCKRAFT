import React from 'react';

interface Industry3DIllustrationProps {
  industry: string;
  className?: string;
}

export const Industry3DIllustration: React.FC<Industry3DIllustrationProps> = ({
  industry,
  className = '',
}) => {
  const norm = industry.toLowerCase();

  if (norm.includes('health')) {
    // Healthcare 3D Isometric Pulse & Prescription Vault
    return (
      <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
        <div className="absolute w-24 h-24 bg-purple-400/15 rounded-full blur-xl animate-pulse" />
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="50" ry="10" fill="#9333EA" fillOpacity="0.12" />
          {/* Medical Glass Card */}
          <rect x="55" y="25" width="90" height="65" rx="12" fill="url(#healthGrad)" stroke="#A855F7" strokeWidth="1.5" />
          {/* Pulse Line */}
          <path d="M68 58 L82 58 L88 44 L96 70 L104 50 L110 62 L116 58 L132 58" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Floating Cross Badge */}
          <circle cx="140" cy="30" r="14" fill="#9333EA" />
          <path d="M140 22 V38 M132 30 H148" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="healthGrad" x1="55" y1="25" x2="145" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FAF5FF" />
              <stop offset="1" stopColor="#F3E8FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (norm.includes('real') || norm.includes('estate')) {
    // Real Estate 3D Modern Glass Tower
    return (
      <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
        <div className="absolute w-24 h-24 bg-blue-400/15 rounded-full blur-xl animate-pulse" />
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="105" rx="55" ry="10" fill="#1D63FF" fillOpacity="0.12" />
          {/* Main Tower (3D) */}
          <path d="M80 20 L120 20 L120 95 L80 95 Z" fill="url(#estateGrad)" stroke="#1D63FF" strokeWidth="1.5" />
          <path d="M120 20 L140 32 L140 95 L120 95 Z" fill="#2563EB" opacity="0.8" />
          {/* Glass Windows */}
          <rect x="87" y="30" width="10" height="12" rx="2" fill="#93C5FD" />
          <rect x="103" y="30" width="10" height="12" rx="2" fill="#93C5FD" />
          <rect x="87" y="50" width="10" height="12" rx="2" fill="#93C5FD" />
          <rect x="103" y="50" width="10" height="12" rx="2" fill="#93C5FD" />
          <rect x="87" y="70" width="10" height="12" rx="2" fill="#93C5FD" />
          <rect x="103" y="70" width="10" height="12" rx="2" fill="#93C5FD" />
          {/* Floating Key Badge */}
          <circle cx="65" cy="40" r="14" fill="#1D63FF" />
          <path d="M60 40 A5 5 0 1 1 70 40 A5 5 0 0 1 60 40 Z M67 43 L72 48 M70 46 L73 44" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="estateGrad" x1="80" y1="20" x2="120" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EFF6FF" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (norm.includes('edu')) {
    // Education 3D Mortarboard & Digital Screen
    return (
      <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
        <div className="absolute w-24 h-24 bg-amber-400/15 rounded-full blur-xl animate-pulse" />
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="50" ry="10" fill="#D97706" fillOpacity="0.12" />
          {/* Tablet Screen */}
          <rect x="55" y="30" width="90" height="60" rx="10" fill="url(#eduGrad)" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="70" y1="48" x2="110" y2="48" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="58" x2="125" y2="58" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="68" x2="100" y2="68" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          {/* 3D Mortarboard */}
          <path d="M100 15 L145 30 L100 42 L55 30 Z" fill="#D97706" />
          <path d="M75 36 L75 52 C75 57 125 57 125 52 L125 36" stroke="#B45309" strokeWidth="2" fill="none" />
          <path d="M135 32 L135 55" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="eduGrad" x1="55" y1="30" x2="145" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFBEB" />
              <stop offset="1" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (norm.includes('logis') || norm.includes('truck')) {
    // Logistics 3D Truck & Route Node
    return (
      <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
        <div className="absolute w-24 h-24 bg-emerald-400/15 rounded-full blur-xl animate-pulse" />
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="55" ry="10" fill="#059669" fillOpacity="0.12" />
          {/* Truck Body */}
          <path d="M50 45 L115 45 L115 85 L50 85 Z" fill="url(#logiGrad)" stroke="#10B981" strokeWidth="1.5" />
          <path d="M115 55 L138 55 L150 70 L150 85 L115 85 Z" fill="#059669" />
          <path d="M122 60 L135 60 L142 70 L122 70 Z" fill="#A7F3D0" />
          {/* Wheels */}
          <circle cx="70" cy="88" r="8" fill="#1F2937" />
          <circle cx="70" cy="88" r="3" fill="#9CA3AF" />
          <circle cx="132" cy="88" r="8" fill="#1F2937" />
          <circle cx="132" cy="88" r="3" fill="#9CA3AF" />
          {/* Route Pins */}
          <circle cx="150" cy="32" r="10" fill="#10B981" />
          <path d="M150 27 V37 M145 32 H155" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="logiGrad" x1="50" y1="45" x2="115" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ECFDF5" />
              <stop offset="1" stopColor="#D1FAE5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (norm.includes('finan') || norm.includes('bank') || norm.includes('land')) {
    // Finance 3D Secure Vault & CA Chart
    return (
      <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
        <div className="absolute w-24 h-24 bg-indigo-400/15 rounded-full blur-xl animate-pulse" />
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="50" ry="10" fill="#4F46E5" fillOpacity="0.12" />
          {/* Vault Base */}
          <rect x="55" y="30" width="90" height="65" rx="12" fill="url(#finGrad)" stroke="#6366F1" strokeWidth="1.5" />
          {/* Vault Door Dial */}
          <circle cx="100" cy="62" r="18" fill="#4F46E5" />
          <circle cx="100" cy="62" r="12" fill="#818CF8" />
          <circle cx="100" cy="62" r="5" fill="white" />
          {/* Trend Line */}
          <path d="M68 42 L82 38 L98 48 L122 32" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="finGrad" x1="55" y1="30" x2="145" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEF2FF" />
              <stop offset="1" stopColor="#E0E7FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Retail 3D POS & Shopping Bag
  return (
    <div className={`relative w-full h-28 sm:h-32 flex items-center justify-center ${className}`}>
      <div className="absolute w-24 h-24 bg-rose-400/15 rounded-full blur-xl animate-pulse" />
      <svg
        viewBox="0 0 200 120"
        className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="100" rx="50" ry="10" fill="#E11D48" fillOpacity="0.12" />
        {/* Shopping Bag */}
        <path d="M65 42 L135 42 L142 90 L58 90 Z" fill="url(#retGrad)" stroke="#F43F5E" strokeWidth="1.5" />
        <path d="M85 42 C85 30 115 30 115 42" stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* QR Badge */}
        <rect x="88" y="58" width="24" height="24" rx="4" fill="white" stroke="#F43F5E" strokeWidth="1" />
        <rect x="93" y="63" width="6" height="6" fill="#E11D48" />
        <rect x="101" y="63" width="6" height="6" fill="#E11D48" />
        <rect x="93" y="71" width="6" height="6" fill="#E11D48" />
        <defs>
          <linearGradient id="retGrad" x1="65" y1="42" x2="135" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF1F2" />
            <stop offset="1" stopColor="#FFE4E6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
