// import React from 'react';

// const services = [
//   { id: "ai-solutions", title: "AI Solutions", icon: "neurology", desc: "Custom cognitive models securely trained on your business data to predict trends, automate logic, and drive intelligent workflows." },
//   { id: "automation", title: "Automation", icon: "auto_mode", desc: "Remove manual bottlenecks. Connect disparate software tools and let algorithms handle repetitive backend processes efficiently." },
//   { id: "digital-menu", title: "Digital Menu", icon: "qr_code_2", desc: "Immersive AR and dynamic web-based catalog formats that elevate offline interactions directly into active analytics hubs." },
//   { id: "business-growth", title: "Business Growth System", icon: "trending_up", desc: "Turnkey digital strategies paired with high-conversion frameworks to exponentially scale user acquisition and LTV." },
//   { id: "analytics", title: "Analytics Dashboard", icon: "monitoring", desc: "Real-time, actionable insights. Transform complex data streams into clean visual intelligence for executive decisions." },
//   { id: "website", title: "Website Development", icon: "web", desc: "Blazing fast, SEO-optimized, visually stunning React & Next.js architectures built for premium user experiences." },
//   { id: "mobile-app", title: "Mobile Apps", icon: "smartphone", desc: "Native iOS and Android implementations focusing on fluid interactions and offline-capable edge performance." },
//   { id: "crm", title: "CRM Solutions", icon: "handshake", desc: "Tailored customer relationship infrastructure orchestrating multi-channel leads safely into predictable closed wins." },
//   { id: "ai-agents", title: "AI Agents", icon: "support_agent", desc: "Autonomous digital agents for intelligent customer support, internal querying, and proactive lead nurturing 24/7." },
//   { id: "custom-software", title: "Custom Software", icon: "code_blocks", desc: "Bespoke engineering for unique operational architectures that off-the-shelf software cannot adequately solve." }
// ];

// export default function Services() {
//   return (
//     <main className="pt-32 min-h-screen">
//       <section className="px-8 max-w-7xl mx-auto mb-20 text-center">
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
//           <span className="material-symbols-outlined text-sm">memory</span> Core Infrastructure
//         </div>
//         <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">
//           Premium Engineering Services
//         </h1>
//         <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
//           We architect digital ecosystems. Every service integrates seamlessly to form a robust cognitive foundation for your business.
//         </p>
//       </section>

//       <section className="px-8 max-w-5xl mx-auto pb-32">
//         <div className="space-y-6">
//           {services.map(service => (
//             <div id={service.id} key={service.id} className="scroll-mt-32 p-8 md:p-12 bg-surface-container-low rounded-[2rem] border border-outline-variant/10 flex flex-col md:flex-row gap-8 items-start group hover:bg-surface-container transition-colors">
//               <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex shrink-0 items-center justify-center border border-outline-variant/20 group-hover:border-primary/30 transition-all">
//                 <span className="material-symbols-outlined text-3xl text-primary">{service.icon}</span>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-lg text-on-surface-variant leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    icon: "neurology",
    desc: "Custom AI models trained on your business data to automate workflows and predict growth opportunities."
  },
  {
    id: "automation",
    title: "Automation",
    icon: "auto_mode",
    desc: "Remove manual work and automate backend processes across your business ecosystem."
  },
  {
    id: "digital-menu",
    title: "Digital Menu",
    icon: "qr_code_2",
    desc: "Interactive digital catalog and smart QR menu with analytics and conversion tracking."
  },
  {
    id: "business-growth",
    title: "Business Growth",
    icon: "trending_up",
    desc: "Growth systems designed to scale your revenue and customer acquisition."
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    icon: "monitoring",
    desc: "Real-time dashboards with actionable business intelligence."
  },
  {
    id: "website",
    title: "Website Development",
    icon: "web",
    desc: "Premium fast websites built with modern architecture."
  },
  {
    id: "mobile-app",
    title: "Mobile Apps",
    icon: "smartphone",
    desc: "Native mobile apps designed for performance and scalability."
  },
  {
    id: "crm",
    title: "CRM Solutions",
    icon: "handshake",
    desc: "Lead management and customer lifecycle automation."
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    icon: "support_agent",
    desc: "AI assistants for support, operations, and lead nurturing."
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: "code_blocks",
    desc: "Tailored software built for your unique workflows."
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We map your operations and identify the highest-value automation opportunities."
  },
  {
    title: "Strategy",
    description: "Our team builds a practical roadmap that connects AI, automation, and your business goals."
  },
  {
    title: "Delivery",
    description: "We implement end-to-end systems that reduce manual work and improve operational visibility."
  },
  {
    title: "Growth",
    description: "You gain predictable customer experiences, faster execution, and measurable ROI."
  }
];

const HUBSPOT_SUBMISSION_URL = import.meta.env.VITE_HUBSPOT_SUBMISSION_URL;

export default function Services() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      source: "Services Page",
      submittedAt: new Date().toISOString()
    };

    try {
      if (HUBSPOT_SUBMISSION_URL) {
        await fetch(HUBSPOT_SUBMISSION_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "email", value: payload.email },
              { name: "firstname", value: payload.name },
              { name: "company", value: payload.company },
              { name: "phone", value: payload.phone },
              { name: "industry", value: payload.industry },
              { name: "message", value: payload.message }
            ],
            context: {
              pageUri: window.location.href,
              pageName: "Services Page"
            }
          })
        });
      }

      await fetch("https://n8n.clario.in/webhook/synckraft-book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const whatsappMessage = encodeURIComponent(
        `Book Demo Request from Synckraft\nName: ${payload.name}\nCompany: ${payload.company}\nIndustry: ${payload.industry}\nPhone: ${payload.phone}\nMessage: ${payload.message}`
      );
      window.open(`https://wa.me/919867799655?text=${whatsappMessage}`, "_blank");
      setIsModalOpen(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Booking request failed:", error);
      setIsModalOpen(false);
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 min-h-screen bg-surface text-on-surface">
      <section className="text-center px-6 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-sm">memory</span>
            Synckraft Services
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-6 text-on-surface">
            Build Your Business Operating System
          </h1>

          <p className="text-lg text-on-surface/70 max-w-2xl mx-auto">
            Synckraft delivers AI-powered digital infrastructure to automate, scale, and optimize your entire business ecosystem.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-surface-container p-8 shadow-sm transition-all duration-300 hover:border-primary/40"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-surface-container-highest border border-outline-variant/20 mb-6 transition-all group-hover:border-primary/40">
                <span className="material-symbols-outlined text-2xl text-primary">{service.icon}</span>
              </div>
              <h3 className="relative z-10 text-xl font-semibold text-on-surface mb-3">{service.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-on-surface/70">{service.desc}</p>
              <div className="relative z-10 mt-6 flex items-center gap-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium">Learn More</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="rounded-[2rem] border border-outline-variant/20 bg-surface-container p-7"
            >
              <div className="inline-flex rounded-full bg-surface text-primary px-3 py-2 text-sm font-semibold mb-4">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface/70">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="text-center pb-32 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Build Your Digital Operating System</h2>
          <p className="text-on-surface/70 mb-8">Let Synckraft design your intelligent business infrastructure with a modern conversion and execution workflow.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition hover:opacity-90"
            >
              Book Demo
            </button>
            <button
              type="button"
              onClick={() => navigate('/free-audit')}
              className="inline-flex items-center justify-center rounded-xl border border-outline-variant px-6 py-3 text-sm font-semibold text-on-surface transition hover:bg-surface-container"
            >
              Free Audit
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            key="services-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-surface-container p-8 shadow-2xl"
            >
              <div className="flex flex-col gap-4 border-b border-outline-variant/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">Request a Demo</p>
                  <h2 className="text-3xl font-bold text-on-surface">Book your strategy call</h2>
                  <p className="mt-2 text-sm text-on-surface/70">Share your priorities and we’ll build a tailored automation proposal.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/30 bg-surface text-on-surface transition hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2 mt-8">
                <label className="space-y-2 text-sm text-on-surface/80">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-on-surface/80">
                  Company
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-on-surface/80">
                  Email
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-on-surface/80">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm text-on-surface/80 sm:col-span-2">
                  Industry
                  <input
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="e.g. Retail, Restaurant, Healthcare"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-on-surface/80 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What would you like to automate first?"
                    className="w-full rounded-3xl border border-outline-variant/20 bg-surface px-4 py-4 text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-3xl bg-primary px-6 py-4 text-sm font-semibold text-on-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending request..." : "Submit and Book Demo"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
