import React from 'react';
import { Building2, Stethoscope, UtensilsCrossed, ArrowUpRight, CheckCircle2, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: 'dark' | 'light';
}

const industries = [
  {
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

  return (
    <section id="industries" className={`py-24 md:py-40 relative overflow-hidden ${theme === 'dark' ? 'bg-surface' : 'bg-surface-container'}`}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 reveal">
          <div className="max-w-2xl">
            <h4 className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Personalized By Industry</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-on-surface">Built For Your <br />Exact Needs</h2>
            <p className="text-xl font-light leading-relaxed text-on-surface/70">
              We don't do cookie-cutter. Your AI automation system is tailored specifically to your industry's exact workflows and revenue drivers.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group p-8 sm:p-12 rounded-[3.5rem] border transition-transform transition-shadow transition-colors duration-200 ease-out flex flex-col reveal card-glow will-change-transform min-h-[460px] h-full ${theme === 'dark' ? 'bg-surface-container border-outline-variant' : 'bg-surface-container-low border-outline-variant'}`}>
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-200 ease-out transform-gpu group-hover:-translate-y-1 group-hover:shadow-xl will-change-transform bg-blue-600 text-on-surface">
                  <industry.icon size={28} />
                </div>
                <div className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border bg-blue-600/10 text-blue-500 border-blue-500/20">
                  {industry.status}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest">{industry.tag}</span>
                <h3 className="text-3xl font-bold mt-1 mb-3 transition-colors text-on-surface">{industry.title}</h3>
              </div>

              <p className="text-lg leading-relaxed mb-8 flex-grow font-light text-on-surface/70">{industry.description}</p>

              <ul className="mb-10 space-y-3 pt-6 border-t border-outline-variant">
                {industry.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-medium text-on-surface/70">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-8 mt-auto border-t border-outline-variant">
                <Link to={industry.link} className="flex items-center gap-3 text-blue-500 font-bold text-sm uppercase tracking-[0.15em] group/link transition-colors cursor-pointer">
                  View Demo <ArrowUpRight size={20} className="transition-transform group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
