import React from 'react';

interface Product3DIllustrationProps {
  productId: string;
  className?: string;
  brandColor?: string;
}

export const Product3DIllustration: React.FC<Product3DIllustrationProps> = ({
  productId,
  className = '',
  brandColor = '#1D63FF',
}) => {
  const id = productId.toLowerCase();

  switch (id) {
    case 'unstopr':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-blue-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D AI Robot + Voice Soundwaves + WhatsApp Chat */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Isometric Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#0080FF" fillOpacity="0.14" />

            {/* Central 3D AI Voice Head / Bot */}
            <g className="animate-float-slow">
              <rect x="70" y="25" width="60" height="50" rx="14" fill="url(#unstoprBotGrad)" stroke="#0080FF" strokeWidth="2" />
              {/* Bot Visor Screen */}
              <rect x="76" y="33" width="48" height="24" rx="8" fill="#0F172A" />

              {/* Glowing AI Eyes */}
              <circle cx="88" cy="45" r="4" fill="#60A5FA" />
              <circle cx="112" cy="45" r="4" fill="#60A5FA" />

              {/* Voice Wave Mouth */}
              <path d="M92 50 Q 100 54 108 50" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />

              {/* Robot Antenna with Glowing Top */}
              <line x1="100" y1="25" x2="100" y2="15" stroke="#0080FF" strokeWidth="2" />
              <circle cx="100" cy="13" r="4" fill="#60A5FA" className="animate-pulse" />
            </g>

            {/* Left WhatsApp Green Chat Bubble */}
            <g className="animate-float-slow" style={{ animationDelay: '1s' }}>
              <rect x="22" y="35" width="42" height="30" rx="8" fill="#10B981" />
              <path d="M30 65 L22 72 L32 65 Z" fill="#10B981" />
              <path d="M32 50 H54 M32 56 H46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Right Soundwave Audio Node */}
            <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
              <rect x="138" y="32" width="42" height="42" rx="10" fill="#EFF6FF" stroke="#0080FF" strokeWidth="1.5" />
              <line x1="148" y1="53" x2="148" y2="53" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" />
              <line x1="154" y1="45" x2="154" y2="61" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" />
              <line x1="160" y1="40" x2="160" y2="66" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" />
              <line x1="166" y1="47" x2="166" y2="59" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" />
              <line x1="172" y1="53" x2="172" y2="53" stroke="#0080FF" strokeWidth="3" strokeLinecap="round" />
            </g>

            <defs>
              <linearGradient id="unstoprBotGrad" x1="70" y1="25" x2="130" y2="75" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#DBEAFE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'runtilldone':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-emerald-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D Real Estate Towers + Broker Commission Pipeline */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#10B981" fillOpacity="0.14" />

            {/* Tower 1 (Left - Small) */}
            <path
              d="M35 55 L70 42 L70 95 L35 95 Z"
              fill="#A7F3D0"
              stroke="#059669"
              strokeWidth="1"
            />
            <path d="M70 42 L88 48 L88 95 L70 95 Z" fill="#34D399" />
            {/* Windows */}
            <rect x="42" y="60" width="8" height="6" fill="#047857" rx="1" />
            <rect x="54" y="60" width="8" height="6" fill="#047857" rx="1" />
            <rect x="42" y="72" width="8" height="6" fill="#047857" rx="1" />
            <rect x="54" y="72" width="8" height="6" fill="#047857" rx="1" />

            {/* Tower 2 (Center - High-Rise 3D Glass) */}
            <g className="animate-float-slow">
              <path
                d="M85 22 L130 10 L130 95 L85 95 Z"
                fill="url(#buildingGrad)"
                stroke="#059669"
                strokeWidth="1.5"
              />
              <path d="M130 10 L155 18 L155 95 L130 95 Z" fill="#059669" />

              {/* Windows Grid */}
              <line x1="95" y1="20" x2="95" y2="90" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="110" y1="18" x2="110" y2="90" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="122" y1="15" x2="122" y2="90" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
            </g>

            {/* Floating Sold / Deal Closed Badge */}
            <g className="animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <rect x="120" y="25" width="55" height="24" rx="6" fill="#10B981" />
              <text x="126" y="41" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                ✓ BOOKED
              </text>
            </g>

            {/* Floating GPS Location Pin */}
            <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
              <circle cx="35" cy="30" r="12" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
              <circle cx="35" cy="30" r="5" fill="#10B981" />
            </g>

            <defs>
              <linearGradient id="buildingGrad" x1="85" y1="10" x2="130" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ECFDF5" />
                <stop offset="1" stopColor="#6EE7B7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'ordrji':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-orange-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D Restaurant POS Terminal + Kitchen Display Screen */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#F97316" fillOpacity="0.14" />

            {/* 3D POS Terminal Screen (Center Left) */}
            <g className="animate-float-slow">
              <rect x="30" y="25" width="85" height="58" rx="8" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
              <rect x="30" y="25" width="85" height="14" rx="8" fill="#F97316" />
              <text x="36" y="35" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif">
                ORDRJI POS
              </text>

              {/* Menu Grid Items */}
              <rect x="36" y="44" width="22" height="14" rx="3" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
              <rect x="62" y="44" width="22" height="14" rx="3" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
              <rect x="88" y="44" width="22" height="14" rx="3" fill="#EA580C" />

              <rect x="36" y="62" width="22" height="14" rx="3" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
              <rect x="62" y="62" width="22" height="14" rx="3" fill="#F97316" />
              <rect x="88" y="62" width="22" height="14" rx="3" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />

              {/* POS Stand Base */}
              <path d="M60 83 L85 83 L90 98 L55 98 Z" fill="#475569" />
            </g>

            {/* Floating Kitchen Display System (KDS) Screen */}
            <g className="animate-float-slow" style={{ animationDelay: '1.5s' }}>
              <rect x="120" y="20" width="55" height="42" rx="6" fill="#0F172A" stroke="#FB923C" strokeWidth="1.5" />
              <rect x="125" y="26" width="20" height="4" rx="2" fill="#F97316" />
              <rect x="125" y="33" width="30" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="125" y="38" width="25" height="3" rx="1.5" fill="#CBD5E1" />
              {/* Ready Badge */}
              <rect x="125" y="48" width="28" height="8" rx="2" fill="#22C55E" />
              <text x="127" y="54" fill="#FFFFFF" fontSize="6" fontWeight="800" fontFamily="sans-serif">
                READY
              </text>
            </g>

            {/* Floating Order Chef Hat / Dish Icon */}
            <g className="animate-float-slow" style={{ animationDelay: '2.2s' }}>
              <circle cx="150" cy="80" r="14" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5" />
              <path d="M142 84 H158 M144 80 C144 75 147 72 150 72 C153 72 156 75 156 80 Z" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );

    case 'solaroft':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse" />

          {/* 3D Solar Panel Grid + Sun Energy Core + Technician AMC */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#EAB308" fillOpacity="0.14" />

            {/* 3D Solar Panel Grid (Angled Plane) */}
            <g className="animate-float-slow">
              <path
                d="M35 55 L135 35 L160 85 L60 100 Z"
                fill="url(#solarGridGrad)"
                stroke="#CA8A04"
                strokeWidth="1.5"
              />
              {/* Grid Lines */}
              <line x1="72" y1="48" x2="97" y2="94" stroke="#FEF08A" strokeWidth="1" />
              <line x1="108" y1="40" x2="133" y2="88" stroke="#FEF08A" strokeWidth="1" />

              <line x1="45" y1="67" x2="145" y2="48" stroke="#FEF08A" strokeWidth="1" />
              <line x1="52" y1="81" x2="152" y2="61" stroke="#FEF08A" strokeWidth="1" />
            </g>

            {/* Floating 3D Glowing Sun Core */}
            <g className="animate-float-slow" style={{ animationDelay: '1s' }}>
              <circle cx="155" cy="25" r="16" fill="#FACC15" />
              <circle cx="155" cy="25" r="22" fill="none" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="4 2" />
            </g>

            {/* Floating Field Duty / AMC Wrench Badge */}
            <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
              <rect x="22" y="25" width="46" height="26" rx="8" fill="#1E293B" stroke="#FACC15" strokeWidth="1.5" />
              <text x="28" y="41" fill="#FACC15" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                AMC 100%
              </text>
            </g>

            <defs>
              <linearGradient id="solarGridGrad" x1="35" y1="35" x2="160" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E293B" />
                <stop offset="0.5" stopColor="#0F172A" />
                <stop offset="1" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'solveit-india':
    case 'solveit':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-indigo-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D CA Legal Document Vault + Tax Stamp + Reports */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#4F46E5" fillOpacity="0.14" />

            {/* Document Folder (Background) */}
            <rect x="35" y="35" width="110" height="60" rx="8" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="1.5" />

            {/* Main CA Legal Tax Document (Foreground) */}
            <g className="animate-float-slow">
              <rect x="50" y="20" width="70" height="80" rx="8" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />

              {/* Header Lines */}
              <rect x="60" y="30" width="30" height="4" rx="2" fill="#4F46E5" />
              <rect x="94" y="30" width="16" height="4" rx="2" fill="#A5B4FC" />

              <rect x="60" y="38" width="50" height="2" rx="1" fill="#94A3B8" />
              <rect x="60" y="44" width="42" height="2" rx="1" fill="#94A3B8" />
              <rect x="60" y="50" width="46" height="2" rx="1" fill="#94A3B8" />

              {/* Tax / Audit Report Bar Chart */}
              <rect x="60" y="62" width="8" height="20" rx="1" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1" />
              <rect x="72" y="58" width="8" height="24" rx="1" fill="#818CF8" />
              <rect x="84" y="54" width="8" height="28" rx="1" fill="#4F46E5" />

              {/* Certified Official Stamp */}
              <circle cx="102" cy="80" r="10" fill="#22C55E" />
              <path d="M98 80 L101 83 L107 77" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Floating Legal Scales / Compliance Badge */}
            <g className="animate-float-slow" style={{ animationDelay: '1.5s' }}>
              <circle cx="150" cy="35" r="18" fill="#4F46E5" />
              <text x="138" y="39" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif">
                GST OK
              </text>
            </g>
          </svg>
        </div>
      );

    case 'syncfyre':
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-rose-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D Gym Dumbbell + Biometric Access Badge */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#E11D48" fillOpacity="0.14" />

            {/* 3D Dumbbell */}
            <g className="animate-float-slow">
              {/* Handle */}
              <rect x="65" y="52" width="70" height="12" rx="6" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
              <rect x="85" y="50" width="30" height="16" rx="3" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />

              {/* Left Weight Plates */}
              <rect x="52" y="32" width="14" height="52" rx="4" fill="#E11D48" />
              <rect x="42" y="38" width="10" height="40" rx="3" fill="#BE123C" />

              {/* Right Weight Plates */}
              <rect x="134" y="32" width="14" height="52" rx="4" fill="#E11D48" />
              <rect x="148" y="38" width="10" height="40" rx="3" fill="#BE123C" />
            </g>

            {/* Biometric Access Shield Badge */}
            <g className="animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <rect x="22" y="22" width="48" height="26" rx="8" fill="#FFF1F2" stroke="#E11D48" strokeWidth="1.5" />
              <text x="27" y="38" fill="#E11D48" fontSize="8" fontWeight="900" fontFamily="sans-serif">
                BIOMETRIC
              </text>
            </g>

            {/* Floating Workout Activity Flame */}
            <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
              <circle cx="162" cy="28" r="14" fill="#E11D48" />
              <path d="M162 20 C162 20 156 26 156 30 C156 33.3 158.7 36 162 36 C165.3 36 168 33.3 168 30 C168 26 162 20 162 20 Z" fill="#FDE047" />
            </g>
          </svg>
        </div>
      );

    case 'coming-soon':
    case 'placeholder':
    default:
      return (
        <div className={`relative w-full h-28 flex items-center justify-center ${className}`}>
          {/* Ambient Glow */}
          <div className="absolute w-24 h-24 bg-blue-500/15 rounded-full blur-xl animate-pulse" />

          {/* 3D Floating Connected Blocks + Blueprint + Spark Rocket */}
          <svg
            viewBox="0 0 200 120"
            className="w-full h-full max-w-[180px] filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Isometric Shadow */}
            <ellipse cx="100" cy="105" rx="55" ry="10" fill="#1D63FF" fillOpacity="0.14" />

            {/* Central 3D Cube / Modular Software Block */}
            <g className="animate-float-slow">
              {/* Top Face */}
              <path d="M100 22 L136 38 L100 54 L64 38 Z" fill="#EFF6FF" stroke="#1D63FF" strokeWidth="1.5" />
              {/* Left Face */}
              <path d="M64 38 L100 54 L100 90 L64 74 Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.5" />
              {/* Right Face */}
              <path d="M136 38 L100 54 L100 90 L136 74 Z" fill="#1D63FF" stroke="#1E40AF" strokeWidth="1.5" />

              {/* Plus / Innovation Symbol on Top Face */}
              <path d="M100 33 L100 43 M95 38 L105 38" stroke="#1D63FF" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Top-Right Floating Satellite Node */}
            <g className="animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <path d="M145 20 L165 28 L145 36 L125 28 Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
              <path d="M125 28 L145 36 L145 52 L125 44 Z" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
              <path d="M165 28 L145 36 L145 52 L165 44 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
            </g>

            {/* Floating Spark Rocket / Innovation Stars */}
            <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
              <circle cx="45" cy="30" r="12" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
              <path d="M45 23 L47 28 L52 30 L47 32 L45 37 L43 32 L38 30 L43 28 Z" fill="#1D63FF" />
            </g>

            {/* Connecting Blueprint Dotted Line */}
            <path
              d="M57 32 Q 80 15 125 28"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              fill="none"
            />
          </svg>
        </div>
      );
  }
};
