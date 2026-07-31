import React from 'react';

interface Service3DIllustrationProps {
  type: string;
  className?: string;
}

export const Service3DIllustration: React.FC<Service3DIllustrationProps> = ({
  type,
  className = '',
}) => {
  // Normalize type string
  const normalizedType = type.toLowerCase();

  switch (normalizedType) {
    // =========================================================================
    // 1. AI AUTOMATION & WORKFLOW INTEGRATIONS
    // Concept: Document -> OCR Scan -> AI Brain -> Decision Engine -> CRM -> WhatsApp -> Analytics Dashboard
    // =========================================================================
    case 'ai-automation':
    case 'sparkles':
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          {/* Subtle Ambient Studio Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="aiStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="aiBrainGrad" x1="120" y1="35" x2="160" y2="75" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" />
                <stop offset="1" stopColor="#0052FF" />
              </linearGradient>
              <linearGradient id="ocrScanGrad" x1="55" y1="20" x2="55" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" stopOpacity="0.9" />
                <stop offset="1" stopColor="#0080FF" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#F8FAFC" />
              </linearGradient>
            </defs>

            {/* Studio Backdrop Plate */}
            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#aiStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />

            {/* Iso Ground Shadow */}
            <ellipse cx="160" cy="136" rx="130" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* ================= FLOW PIPELINE CONNECTOR LINES ================= */}
            {/* Flow line: Doc -> OCR -> Brain -> Decision -> CRM -> WhatsApp -> Analytics */}
            <path
              d="M 46 62 Q 72 45 105 55 T 140 55 T 185 55 T 225 55 T 272 65"
              stroke="#0080FF"
              strokeWidth="2.5"
              strokeDasharray="5 4"
              className="animate-dash-flow"
              strokeLinecap="round"
            />

            {/* Energy Data Pulse Spheres on Pipeline */}
            <circle cx="82" cy="51" r="3.5" fill="#0080FF" className="animate-pulse" />
            <circle cx="122" cy="55" r="3.5" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <circle cx="162" cy="55" r="3.5" fill="#2563EB" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <circle cx="205" cy="55" r="3.5" fill="#25D366" className="animate-pulse" style={{ animationDelay: '1.2s' }} />

            {/* ================= NODE 1 & 2: DOCUMENT & OCR SCAN ================= */}
            <g transform="translate(18, 30)">
              {/* Paper Document */}
              <rect x="0" y="0" width="36" height="48" rx="6" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" className="shadow-xs" />
              {/* Document Text Lines */}
              <rect x="6" y="8" width="18" height="2.5" rx="1" fill="#0080FF" />
              <rect x="6" y="14" width="24" height="2" rx="1" fill="#93C5FD" />
              <rect x="6" y="19" width="20" height="2" rx="1" fill="#93C5FD" />
              <rect x="6" y="24" width="22" height="2" rx="1" fill="#93C5FD" />
              <rect x="6" y="29" width="16" height="2" rx="1" fill="#60A5FA" />
              {/* Animated Laser OCR Scanning Beam */}
              <rect x="2" y="4" width="32" height="4" rx="2" fill="#0080FF" fillOpacity="0.8" className="animate-ocr-scan" />
              {/* OCR Tag */}
              <rect x="2" y="38" width="32" height="11" rx="3" fill="#0080FF" />
              <text x="5" y="46" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                OCR SCAN
              </text>
            </g>

            {/* ================= NODE 3: AI BRAIN (NEURAL CORE) ================= */}
            <g transform="translate(115, 30)">
              {/* Pulsing Aura Ring */}
              <circle cx="24" cy="24" r="28" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse-ring" />
              {/* Core Sphere */}
              <circle cx="24" cy="24" r="20" fill="url(#aiBrainGrad)" />
              <circle cx="24" cy="24" r="14" fill="#0F172A" />
              {/* AI Synapses & Spark */}
              <path d="M 24 14 L 26 21 L 33 24 L 26 27 L 24 34 L 22 27 L 15 24 L 22 21 Z" fill="#93C5FD" />
              {/* Node Badge */}
              <rect x="2" y="-6" width="44" height="12" rx="4" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1" />
              <text x="8" y="3" fill="#0080FF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                AI BRAIN
              </text>
            </g>

            {/* ================= NODE 4: DECISION ENGINE ================= */}
            <g transform="translate(168, 32)">
              {/* Logic Box */}
              <rect x="0" y="0" width="34" height="34" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
              {/* Branching Diamond Icon */}
              <path d="M 17 8 L 26 17 L 17 26 L 8 17 Z" fill="#EFF6FF" stroke="#0080FF" strokeWidth="1.5" />
              <circle cx="17" cy="17" r="2.5" fill="#0080FF" />
              {/* Rule Check Pill */}
              <rect x="-3" y="28" width="40" height="11" rx="3" fill="#10B981" />
              <text x="2" y="36" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
                RULE MATCH
              </text>
            </g>

            {/* ================= NODE 5: CRM LEAD CARD ================= */}
            <g transform="translate(216, 26)">
              {/* Card Container */}
              <rect x="0" y="0" width="40" height="48" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              {/* Header */}
              <rect x="0" y="0" width="40" height="14" rx="8" fill="#0080FF" />
              <text x="5" y="10" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                CRM LEAD
              </text>
              {/* Status rows */}
              <circle cx="8" cy="22" r="3" fill="#10B981" />
              <rect x="14" y="20" width="20" height="3" rx="1.5" fill="#334155" />
              <rect x="6" y="29" width="28" height="2.5" rx="1" fill="#93C5FD" />
              <rect x="6" y="35" width="22" height="2.5" rx="1" fill="#CBD5E1" />
              <rect x="6" y="41" width="18" height="2" rx="1" fill="#10B981" />
            </g>

            {/* ================= NODE 6: WHATSAPP TRIGGER ================= */}
            <g transform="translate(262, 28)" className="animate-float-slow">
              <rect x="0" y="0" width="46" height="46" rx="10" fill="#25D366" />
              {/* Chat Bubble Icon */}
              <path
                d="M 23 12 C 16.5 12 11 16.8 11 22.8 C 11 25.1 11.8 27.2 13.1 28.9 L 12 34 L 17.3 32.6 C 18.9 33.3 20.9 33.6 23 33.6 C 29.5 33.6 35 28.8 35 22.8 C 35 16.8 29.5 12 23 12 Z"
                fill="#FFFFFF"
              />
              <path
                d="M 18.5 18 C 18 18 17.2 18.2 16.7 18.7 C 16.2 19.2 15 20.3 15 22.5 C 15 24.7 16.6 26.8 16.8 27.1 C 17 27.4 20 32 24.6 33.8 C 28.4 35.3 29.2 34.8 30 34.7 C 30.8 34.6 32.5 33.6 32.9 32.5"
                stroke="#25D366"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* WhatsApp Tag */}
              <rect x="3" y="-8" width="40" height="11" rx="3" fill="#0F172A" />
              <text x="6" y="-1" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">
                WHATSAPP
              </text>
            </g>

            {/* ================= NODE 7: ANALYTICS DASHBOARD (BOTTOM) ================= */}
            <g transform="translate(100, 92)">
              <rect x="0" y="0" width="120" height="42" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              {/* Top Bar */}
              <rect x="0" y="0" width="120" height="12" rx="8" fill="#0F172A" />
              <circle cx="8" cy="6" r="2" fill="#EF4444" />
              <circle cx="14" cy="6" r="2" fill="#F59E0B" />
              <circle cx="20" cy="6" r="2" fill="#10B981" />
              <text x="30" y="9" fill="#93C5FD" fontSize="7" fontWeight="800" fontFamily="sans-serif">
                LIVE METRICS DASHBOARD
              </text>

              {/* Chart line */}
              <path d="M 10 32 L 30 26 L 50 30 L 70 20 L 90 24 L 110 16" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="110" cy="16" r="3" fill="#10B981" />

              {/* Efficiency Pill */}
              <rect x="68" y="26" width="46" height="12" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
              <text x="72" y="34" fill="#0080FF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                80% AUTOMATED
              </text>
            </g>
          </svg>
        </div>
      );

    // =========================================================================
    // 2. CUSTOM SOFTWARE DEVELOPMENT
    // Visual: Floating Glass Terminal + REST/GraphQL API Gateway + Web/Mobile Viewports + 100% IP Verified
    // =========================================================================
    case 'custom-software':
    case 'custom-software-dev':
    case 'software-dev':
    case 'code2':
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="codeStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#codeStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />
            <ellipse cx="160" cy="136" rx="125" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* Connecting Data Flow Lines */}
            <path
              d="M 125 45 Q 160 25 190 40 T 235 55"
              stroke="#0080FF"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-dash-flow"
            />

            {/* Glass IDE Terminal Editor */}
            <g transform="translate(22, 22)" className="shadow-md">
              <rect x="0" y="0" width="125" height="95" rx="10" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
              {/* Header Dots */}
              <rect x="0" y="0" width="125" height="18" rx="10" fill="#1E293B" />
              <circle cx="10" cy="9" r="2.5" fill="#EF4444" />
              <circle cx="18" cy="9" r="2.5" fill="#F59E0B" />
              <circle cx="26" cy="9" r="2.5" fill="#10B981" />
              <text x="36" y="12" fill="#94A3B8" fontSize="7" fontWeight="700" fontFamily="monospace">
                app.synckraft.ts
              </text>

              {/* Code lines */}
              <text x="8" y="32" fill="#60A5FA" fontSize="7.5" fontWeight="700" fontFamily="monospace">
                import <tspan fill="#F472B6">{' { Build } '}</tspan>
              </text>
              <text x="8" y="44" fill="#38BDF8" fontSize="7.5" fontWeight="700" fontFamily="monospace">
                const <tspan fill="#FACC15">app</tspan> = <tspan fill="#34D399">synckraft.dev()</tspan>;
              </text>
              <text x="8" y="56" fill="#94A3B8" fontSize="7" fontWeight="600" fontFamily="monospace">
                await app.deploy({' { scale: true } '});
              </text>
              {/* Terminal Execution Result */}
              <rect x="6" y="66" width="113" height="20" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="1" />
              <circle cx="12" cy="76" r="3" fill="#10B981" />
              <text x="18" y="79" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="monospace">
                STATUS 200 OK • 100% IP
              </text>
            </g>

            {/* REST / GraphQL API Node Badge (Top Right) */}
            <g transform="translate(162, 18)" className="animate-float-slow">
              <rect x="0" y="0" width="70" height="28" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="4" y="4" width="22" height="20" rx="5" fill="#0080FF" />
              <text x="7" y="17" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif">
                API
              </text>
              <text x="30" y="13" fill="#0F172A" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                REST
              </text>
              <text x="30" y="21" fill="#0080FF" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">
                GraphQL
              </text>
            </g>

            {/* Cross-Platform Viewport (Web + Mobile App Frame) */}
            <g transform="translate(170, 52)">
              {/* Desktop Window Frame */}
              <rect x="0" y="0" width="120" height="72" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="120" height="14" rx="8" fill="#0080FF" />
              <circle cx="8" cy="7" r="2" fill="#FFFFFF" opacity="0.8" />
              <circle cx="14" cy="7" r="2" fill="#FFFFFF" opacity="0.6" />
              <text x="24" y="10" fill="#FFFFFF" fontSize="7" fontWeight="800" fontFamily="sans-serif">
                WEB APPLICATION
              </text>

              {/* Viewport UI Components */}
              <rect x="8" y="20" width="32" height="18" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
              <rect x="45" y="20" width="67" height="18" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <rect x="8" y="42" width="104" height="22" rx="4" fill="#0F172A" />
              <path d="M 14 53 L 30 47 L 50 51 L 70 45 L 90 49 L 104 43" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />

              {/* Floating Mobile Phone Frame */}
              <g transform="translate(85, -15)">
                <rect x="0" y="0" width="32" height="54" rx="6" fill="#0F172A" stroke="#0080FF" strokeWidth="1.5" />
                <rect x="10" y="3" width="12" height="2" rx="1" fill="#334155" />
                <rect x="3" y="8" width="26" height="40" rx="3" fill="#FFFFFF" />
                <rect x="6" y="12" width="20" height="12" rx="3" fill="#0080FF" />
                <rect x="6" y="27" width="20" height="3" rx="1.5" fill="#93C5FD" />
                <rect x="6" y="33" width="14" height="3" rx="1.5" fill="#CBD5E1" />
              </g>
            </g>
          </svg>
        </div>
      );

    // =========================================================================
    // 3. CRM & CUSTOM ERP PLATFORMS
    // Visual: Interactive Sales Pipeline + Relational Database Stack + Warehouse Inventory + Cashflow KPI
    // =========================================================================
    case 'crm-erp':
    case 'business-systems':
    case 'users2':
    case 'building2':
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="erpStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#erpStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />
            <ellipse cx="160" cy="136" rx="125" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* Connecting Flow Paths */}
            <path
              d="M 120 60 Q 155 35 190 60 T 260 65"
              stroke="#0080FF"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-dash-flow"
            />

            {/* Kanban Lead Pipeline Stage (Left) */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="115" height="102" rx="10" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="115" height="16" rx="10" fill="#0080FF" />
              <text x="8" y="11" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                CRM SALES PIPELINE
              </text>

              {/* Column 1: Leads */}
              <rect x="6" y="22" width="32" height="72" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <rect x="9" y="26" width="26" height="18" rx="4" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1" />
              <rect x="12" y="30" width="14" height="2.5" rx="1" fill="#0080FF" />
              <rect x="12" y="35" width="20" height="2" rx="1" fill="#93C5FD" />

              {/* Column 2: Quoted */}
              <rect x="42" y="22" width="32" height="72" rx="5" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
              <rect x="45" y="26" width="26" height="22" rx="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1" />
              <rect x="48" y="30" width="16" height="2.5" rx="1" fill="#2563EB" />
              <rect x="48" y="35" width="20" height="2" rx="1" fill="#60A5FA" />
              <rect x="48" y="40" width="12" height="5" rx="2" fill="#10B981" />

              {/* Column 3: Won */}
              <rect x="78" y="22" width="31" height="72" rx="5" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
              <rect x="81" y="26" width="25" height="24" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="1" />
              <text x="84" y="34" fill="#10B981" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
                WON
              </text>
              <text x="84" y="42" fill="#0F172A" fontSize="7" fontWeight="800" fontFamily="sans-serif">
                $45.2k
              </text>
            </g>

            {/* Relational Database Cylinder Stack (Middle Right) */}
            <g transform="translate(150, 24)">
              {/* Disc 3 (Bottom) */}
              <path d="M0 40 C0 32 50 32 50 32 C50 32 100 32 100 40 L100 52 C100 60 50 60 50 60 C50 60 0 60 0 52 Z" fill="#1E293B" />
              <ellipse cx="50" cy="40" rx="50" ry="8" fill="#334155" />

              {/* Disc 2 (Middle) */}
              <path d="M0 20 C0 12 50 12 50 12 C50 12 100 12 100 20 L100 32 C100 40 50 40 50 40 C50 40 0 40 0 32 Z" fill="#2563EB" />
              <ellipse cx="50" cy="20" rx="50" ry="8" fill="#60A5FA" />

              {/* Disc 1 (Top) */}
              <path d="M0 0 C0 -8 50 -8 50 -8 C50 -8 100 -8 100 0 L100 12 C100 20 50 20 50 20 C50 20 0 20 0 12 Z" fill="#0080FF" />
              <ellipse cx="50" cy="0" rx="50" ry="8" fill="#DBEAFE" />

              {/* Database Label */}
              <text x="25" y="3" fill="#0080FF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                CENTRAL ERP DB
              </text>
            </g>

            {/* Multi-Warehouse Inventory & Invoicing Module (Right Bottom) */}
            <g transform="translate(162, 80)" className="shadow-sm">
              <rect x="0" y="0" width="138" height="42" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="138" height="12" rx="8" fill="#0F172A" />
              <text x="8" y="9" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                INVENTORY & CASHFLOW LEDGER
              </text>

              {/* Metric stats */}
              <text x="10" y="24" fill="#64748B" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
                STOCK LEVEL
              </text>
              <text x="10" y="35" fill="#10B981" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                98.4% SYNCED
              </text>

              <rect x="80" y="18" width="50" height="18" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" />
              <text x="84" y="29" fill="#0080FF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                +40% TURN
              </text>
            </g>
          </svg>
        </div>
      );

    // =========================================================================
    // 4. CLOUD INFRASTRUCTURE & DEVOPS
    // Visual: Kubernetes Pod Cluster + Zero-Downtime CI/CD Ribbon + 99.9% Uptime Radar
    // =========================================================================
    case 'cloud-devops':
    case 'cloud':
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#cloudStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />
            <ellipse cx="160" cy="136" rx="125" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* Deployment Flow Line */}
            <path
              d="M 120 45 Q 160 20 200 45 T 270 55"
              stroke="#0080FF"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-dash-flow"
            />

            {/* Server Rack Container Pods (Left) */}
            <g transform="translate(22, 20)">
              {/* Unit 3 */}
              <rect x="0" y="64" width="95" height="26" rx="6" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
              <circle cx="12" cy="77" r="3" fill="#10B981" />
              <circle cx="22" cy="77" r="3" fill="#60A5FA" />
              <rect x="34" y="75" width="48" height="4" rx="2" fill="#3B82F6" />

              {/* Unit 2 */}
              <rect x="0" y="32" width="95" height="26" rx="6" fill="#1E293B" stroke="#2563EB" strokeWidth="1.5" />
              <circle cx="12" cy="45" r="3" fill="#10B981" />
              <circle cx="22" cy="45" r="3" fill="#93C5FD" />
              <rect x="34" y="43" width="48" height="4" rx="2" fill="#60A5FA" />

              {/* Unit 1 */}
              <rect x="0" y="0" width="95" height="26" rx="6" fill="#0080FF" />
              <circle cx="12" cy="13" r="3" fill="#FFFFFF" />
              <circle cx="22" cy="13" r="3" fill="#DBEAFE" />
              <text x="34" y="16" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif">
                KUBERNETES / CLOUD RUN
              </text>
            </g>

            {/* CI/CD Pipeline Badge (Top Middle) */}
            <g transform="translate(130, 16)" className="animate-float-slow">
              <rect x="0" y="0" width="110" height="28" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="4" y="4" width="20" height="20" rx="5" fill="#10B981" />
              <path d="M 10 14 L 13 17 L 19 11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <text x="28" y="13" fill="#0F172A" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                CI/CD PIPELINE
              </text>
              <text x="28" y="21" fill="#10B981" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">
                ZERO-DOWNTIME DEPLOY
              </text>
            </g>

            {/* Cloud Cluster & 99.9% Uptime Radar (Right) */}
            <g transform="translate(175, 52)">
              <rect x="0" y="0" width="125" height="68" rx="10" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="125" height="16" rx="10" fill="#0080FF" />
              <text x="8" y="11" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                99.9% UPTIME MONITOR
              </text>

              {/* Heartbeat pulse */}
              <path d="M 10 42 L 30 42 L 40 28 L 50 54 L 60 36 L 70 42 L 115 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <rect x="8" y="50" width="55" height="12" rx="3" fill="#EFF6FF" />
              <text x="12" y="58" fill="#0080FF" fontSize="7" fontWeight="800" fontFamily="sans-serif">
                AUTO-SCALED
              </text>
            </g>
          </svg>
        </div>
      );

    // =========================================================================
    // 5. DIGITAL STRATEGY & TECH ROADMAP
    // Visual: Architectural Blueprint Grid + Strategic Roadmap + 3D Target Compass + Growth Chart
    // =========================================================================
    case 'business-consulting':
    case 'strategy':
    case 'barchart3':
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="stratStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#stratStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />
            <ellipse cx="160" cy="136" rx="125" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* Blueprint Grid Lines */}
            <g stroke="#93C5FD" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6">
              <line x1="20" y1="35" x2="300" y2="35" />
              <line x1="20" y1="75" x2="300" y2="75" />
              <line x1="20" y1="115" x2="300" y2="115" />
              <line x1="80" y1="15" x2="80" y2="135" />
              <line x1="160" y1="15" x2="160" y2="135" />
              <line x1="240" y1="15" x2="240" y2="135" />
            </g>

            {/* Growth Curve Line */}
            <path
              d="M 35 110 Q 110 95 160 55 T 285 28"
              stroke="#0080FF"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="285" cy="28" r="5" fill="#10B981" />

            {/* Milestone Cards */}
            <g transform="translate(25, 60)">
              <rect x="0" y="0" width="75" height="50" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="75" height="12" rx="8" fill="#0080FF" />
              <text x="6" y="9" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
                PHASE 1: AUDIT
              </text>
              <rect x="6" y="18" width="55" height="3" rx="1.5" fill="#93C5FD" />
              <rect x="6" y="25" width="45" height="3" rx="1.5" fill="#CBD5E1" />
              <text x="6" y="42" fill="#10B981" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                ✔ FEASIBILITY
              </text>
            </g>

            <g transform="translate(120, 45)">
              <rect x="0" y="0" width="80" height="52" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
              <rect x="0" y="0" width="80" height="12" rx="8" fill="#2563EB" />
              <text x="6" y="9" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
                PHASE 2: STACK
              </text>
              <rect x="6" y="18" width="60" height="3" rx="1.5" fill="#60A5FA" />
              <rect x="6" y="25" width="50" height="3" rx="1.5" fill="#93C5FD" />
              <text x="6" y="42" fill="#0080FF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                ARCHITECTURE
              </text>
            </g>

            <g transform="translate(215, 30)">
              <rect x="0" y="0" width="85" height="54" rx="8" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
              <rect x="0" y="0" width="85" height="12" rx="8" fill="#10B981" />
              <text x="6" y="9" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
                PHASE 3: SCALE
              </text>
              <text x="6" y="26" fill="#0F172A" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                AGILE ROADMAP
              </text>
              <text x="6" y="42" fill="#10B981" fontSize="7" fontWeight="900" fontFamily="sans-serif">
                PREDICTABLE ROI
              </text>
            </g>
          </svg>
        </div>
      );

    // =========================================================================
    // 6. ENTERPRISE MAINTENANCE & SUPPORT SLA
    // Visual: 3D Security Shield + 24/7 SLA Telemetry Pulse + Backup Engine + Emergency Standby
    // =========================================================================
    case 'maintenance-support':
    case 'support':
    case 'headphones':
    default:
      return (
        <div className={`relative w-full h-32 sm:h-36 flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-2xl blur-xl" />

          <svg
            viewBox="0 0 320 150"
            className="w-full h-full max-w-[310px] filter drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="slaStudioGlow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" stopOpacity="0.08" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="shieldGrad" x1="120" y1="20" x2="200" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0080FF" />
                <stop offset="1" stopColor="#0052FF" />
              </linearGradient>
            </defs>

            <rect x="10" y="8" width="300" height="134" rx="16" fill="url(#slaStudioGlow)" stroke="#E2E8F0" strokeWidth="1" />
            <ellipse cx="160" cy="136" rx="125" ry="8" fill="#0080FF" fillOpacity="0.08" />

            {/* Central Security Shield */}
            <g transform="translate(125, 18)" className="animate-float-slow">
              <path
                d="M 35 0 L 70 14 C 70 48 50 72 35 80 C 20 72 0 48 0 14 Z"
                fill="url(#shieldGrad)"
                stroke="#60A5FA"
                strokeWidth="2"
              />
              <path d="M 22 38 L 31 47 L 50 28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* 24/7 SLA Telemetry Card (Left) */}
            <g transform="translate(22, 35)">
              <rect x="0" y="0" width="95" height="54" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="95" height="14" rx="8" fill="#0F172A" />
              <text x="6" y="10" fill="#10B981" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                24/7 MONITORING
              </text>

              <text x="6" y="28" fill="#0F172A" fontSize="8" fontWeight="800" fontFamily="sans-serif">
                SLA GUARANTEE
              </text>
              <text x="6" y="42" fill="#0080FF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                &lt; 2 HOUR BUG FIX
              </text>
            </g>

            {/* Automated Security & Backup Cylinder (Right) */}
            <g transform="translate(205, 35)">
              <rect x="0" y="0" width="92" height="54" rx="8" fill="#FFFFFF" stroke="#0080FF" strokeWidth="1.5" />
              <rect x="0" y="0" width="92" height="14" rx="8" fill="#0080FF" />
              <text x="6" y="10" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">
                DAILY BACKUPS
              </text>

              <text x="6" y="28" fill="#10B981" fontSize="8" fontWeight="900" fontFamily="sans-serif">
                ✔ AUTOMATED
              </text>
              <text x="6" y="42" fill="#64748B" fontSize="7" fontWeight="700" fontFamily="sans-serif">
                SECURE ENCRYPTED
              </text>
            </g>
          </svg>
        </div>
      );
  }
};
