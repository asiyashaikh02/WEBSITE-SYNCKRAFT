import React, { useState } from 'react';
import { Building2, Stethoscope, UtensilsCrossed, ArrowUpRight, CheckCircle2, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

const industries = [
  {
    id: 'real-estate',
    title: "Real Estate",
    tag: "Property & Asset Management",
    description: `Automate lead qualification, client follow-ups, and property administration. Transform your brokerage with our AI Business OS.`,
    features: [
      "AI Chatbots for 24/7 Lead Capture",
      "Automated Follow-up Sequences",
      "Smart Property Match Dashboards"
    ],
    status: "Active Platform",
    isLive: true,
    link: "/industries/real-estate",
    icon: Building2
  },
  {
    id: 'healthcare',
    title: "Healthcare",
    tag: "Patient Management",
    description: "Secure, compliant, and highly efficient clinic management systems. Reduce no-shows with smart scheduling and patient communication.",
    status: "Active Platform",
    isLive: true,
    features: [
      "Smart Patient Scheduling",
      "Automated Appointment Reminders",
      "Secure Digital Records"
    ],
    link: "/industries/healthcare",
    icon: Stethoscope
  },
  {
    id: 'gym',
    title: "Gym & Fitness",
    tag: "Fitness Operations",
    description: "Streamline memberships, class bookings, and member engagement with our comprehensive gym management AI platform.",
    status: "Active Platform",
    isLive: true,
    features: [
      "Automated Membership Management",
      "Smart Class Scheduling",
      "Member Retention Analytics"
    ],
    link: "/industries/gym",
    icon: Dumbbell
  },
  {
    id: 'hospitality',
    title: "Hospitality",
    tag: "Hotel & Restaurant Operations",
    description: "Streamline orders, manage inventory intelligently, and drive customer retention through our unified hospitality AI systems.",
    status: "Active Platform",
    isLive: true,
    features: [
      "Automated Order Processing",
      "AI Inventory Forecasting",
      "Loyalty & Retention Engine"
    ],
    link: "/industries/hospitality",
    icon: UtensilsCrossed
  }
];

export const IndustrySolutions: React.FC<ThemeProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  return (
    <section id="industries" className="py-24 md:py-32 relative overflow-hidden section-sep bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 reveal">
          <div className="max-w-2xl">
            <h4 className="text-[#06B6D4] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Personalized By Industry</h4>
            <h2 className="text-4xl md:text-[40px] font-sora font-semibold tracking-tight mb-6 leading-tight text-white">Built For Your Exact Needs</h2>
            <p className="text-lg font-sans leading-relaxed text-[#9CA3AF]">
              We don't do cookie-cutter. Your AI automation system is tailored specifically to your industry's exact workflows and revenue drivers.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-10 pb-4 border-b border-[#1F2937] reveal">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`touchable px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border ${
                activeTab === ind.id 
                  ? 'bg-[#111827] text-white border-[#2563EB]/40 shadow-sm' 
                  : `bg-[#0B0F19] text-[#9CA3AF] border-[#1F2937] hover:bg-[#111827] hover:text-white`
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="relative min-h-[460px] reveal">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                activeTab === ind.id 
                  ? 'opacity-100 z-10 pointer-events-auto' 
                  : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <div className="p-8 sm:p-12 rounded-2xl border flex flex-col h-full bg-[#111827] border-[#1F2937] shadow-sm">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#2563EB]/10 text-[#06B6D4] border border-[#2563EB]/20">
                    <ind.icon size={28} />
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border bg-[#2563EB]/10 text-[#06B6D4] border-[#06B6D4]/20">
                    {ind.status}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-[#06B6D4] uppercase tracking-widest">{ind.tag}</span>
                  <h3 className="text-3xl font-sora font-semibold mt-2 mb-4 text-white">{ind.title}</h3>
                </div>

                <p className="text-[17px] leading-relaxed mb-8 flex-grow font-sans text-[#9CA3AF]">{ind.description}</p>

                <ul className="mb-10 space-y-4 pt-6 border-t border-[#1F2937]">
                  {ind.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-[15px] font-medium text-[#D1D5DB]">
                      <CheckCircle2 size={20} className="text-[#06B6D4] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 mt-auto border-t border-[#1F2937]">
                  <Link to={ind.link} className="btn-feedback inline-flex items-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold text-sm uppercase tracking-wide px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] transition-all">
                    Explore OS <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
