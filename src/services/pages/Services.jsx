import React from 'react';

const services = [
  { id: "ai-solutions", title: "AI Solutions", icon: "neurology", desc: "Custom cognitive models securely trained on your business data to predict trends, automate logic, and drive intelligent workflows." },
  { id: "automation", title: "Automation", icon: "auto_mode", desc: "Remove manual bottlenecks. Connect disparate software tools and let algorithms handle repetitive backend processes efficiently." },
  { id: "digital-menu", title: "Digital Menu", icon: "qr_code_2", desc: "Immersive AR and dynamic web-based catalog formats that elevate offline interactions directly into active analytics hubs." },
  { id: "business-growth", title: "Business Growth System", icon: "trending_up", desc: "Turnkey digital strategies paired with high-conversion frameworks to exponentially scale user acquisition and LTV." },
  { id: "analytics", title: "Analytics Dashboard", icon: "monitoring", desc: "Real-time, actionable insights. Transform complex data streams into clean visual intelligence for executive decisions." },
  { id: "website", title: "Website Development", icon: "web", desc: "Blazing fast, SEO-optimized, visually stunning React & Next.js architectures built for premium user experiences." },
  { id: "mobile-app", title: "Mobile Apps", icon: "smartphone", desc: "Native iOS and Android implementations focusing on fluid interactions and offline-capable edge performance." },
  { id: "crm", title: "CRM Solutions", icon: "handshake", desc: "Tailored customer relationship infrastructure orchestrating multi-channel leads safely into predictable closed wins." },
  { id: "ai-agents", title: "AI Agents", icon: "support_agent", desc: "Autonomous digital agents for intelligent customer support, internal querying, and proactive lead nurturing 24/7." },
  { id: "custom-software", title: "Custom Software", icon: "code_blocks", desc: "Bespoke engineering for unique operational architectures that off-the-shelf software cannot adequately solve." }
];

export default function Services() {
  return (
    <main className="pt-32 min-h-screen">
      <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          <span className="material-symbols-outlined text-sm">memory</span> Core Infrastructure
        </div>
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
          Premium Engineering Services
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          We architect digital ecosystems. Every service integrates seamlessly to form a robust cognitive foundation for your business.
        </p>
      </section>

      <section className="px-8 max-w-5xl mx-auto pb-32">
        <div className="space-y-6">
          {services.map(service => (
            <div id={service.id} key={service.id} className="scroll-mt-32 p-8 md:p-12 bg-surface-container-low rounded-[2rem] border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-start group hover:bg-surface-container transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex shrink-0 items-center justify-center border border-outline-variant/20 group-hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
