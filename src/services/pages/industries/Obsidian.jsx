import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Obsidian() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🧠 HERO (FLAGSHIP POSITIONING)
      badge="Synckraft Core Intelligence"
      title="Obsidian AI Core"
      subtitle="The Brain Behind Your Entire Business"
      description="Obsidian connects all your systems, data, and operations into one intelligent layer. It doesn’t just manage — it thinks, predicts, and executes for your business."

      // 🔴 FOMO + AUTHORITY
      liveStats={{
        viewers: 11,
        bookings: "Enterprise clients onboarding",
        growth: "Powering all Synckraft systems"
      }}

      // 📊 AUTHORITY METRICS
      metrics={[
        { value: "10x", label: "Operational Speed" },
        { value: "24/7", label: "Autonomous Execution" },
        { value: "∞", label: "Scalability" },
      ]}

      // 📦 CORE CAPABILITIES
      features={[
        {
          title: "Unified Business Brain",
          description:
            "Connect all your systems, data, and operations into one intelligent platform.",
          icon: "hub",
          outcome: "One control center for everything"
        },
        {
          title: "AI Decision Engine",
          description:
            "Analyze data in real-time and generate smart business decisions automatically.",
          icon: "insights",
          outcome: "Better decisions, faster"
        },
        {
          title: "Autonomous Execution",
          description:
            "Automate tasks like follow-ups, reporting, and workflows without manual work.",
          icon: "smart_toy",
          outcome: "Save time and scale faster"
        },
        {
          title: "Predictive Intelligence",
          description:
            "Forecast trends, demand, and outcomes before they happen.",
          icon: "timeline",
          outcome: "Stay ahead of competition"
        },
        {
          title: "Cross-System Integration",
          description:
            "Works across CRM, ERP, marketing, operations, and more.",
          icon: "sync",
          outcome: "No more disconnected tools"
        },
        {
          title: "Continuous Learning AI",
          description:
            "System improves itself based on your business data over time.",
          icon: "auto_awesome",
          outcome: "Gets smarter every day"
        }
      ]}

      // 💬 TESTIMONIAL (HIGH LEVEL)
      testimonial={{
        quote:
          "Obsidian changed how we run our business. Everything is connected, automated, and faster than ever.",
        author: "Enterprise Client"
      }}

      // 🧲 CTA (HIGH-TICKET)
      cta={{
        primary: "Request Premium Demo",
        secondary: "Explore Capabilities",
        note: "Available for selected enterprise clients"
      }}

      // 🎨 THEME
      theme="obsidian"
    />
  );
}