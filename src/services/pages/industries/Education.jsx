import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🎓 HERO (UPGRADED POSITIONING)
      badge="Next-Gen Education Intelligence"
      title="Cognitive Education System"
      subtitle="AI-Powered Institutional & Student Lifecycle Management"
      description="Transform your institution into a fully digitized, intelligent ecosystem. From admissions to alumni engagement — automate operations, enhance student performance, and deliver a seamless, future-ready learning experience."

      // 🔴 FOMO + TRUST
      liveStats={{
        viewers: 27,
        bookings: "9 institutions onboarded this week",
        growth: "+180% operational efficiency"
      }}

      // 📊 AUTHORITY METRICS
      metrics={[
        { value: "+180%", label: "Operational Efficiency" },
        { value: "2.5x", label: "Student Engagement" },
        { value: "95%", label: "Process Automation" },
      ]}

      // 📦 FEATURES (OUTCOME-DRIVEN)
      features={[
        {
          title: "Unified Student Portal",
          description:
            "Centralized platform for assignments, attendance, billing, announcements, and academic tracking.",
          icon: "school",
          outcome: "Enhance student experience & engagement"
        },
        {
          title: "Administrative Automation",
          description:
            "Automate admissions, fee collection, scheduling, and internal workflows across departments.",
          icon: "admin_panel_settings",
          outcome: "Reduce operational workload drastically"
        },
        {
          title: "Performance AI & Risk Models",
          description:
            "Predict student performance trends and identify at-risk students using AI-driven analytics.",
          icon: "insights",
          outcome: "Improve academic outcomes proactively"
        },
        {
          title: "Digital Admissions Pipeline",
          description:
            "Fully automated application processing, document verification, and onboarding workflows.",
          icon: "how_to_reg",
          outcome: "Increase admission efficiency & conversion"
        },
        {
          title: "Alumni Relationship CRM",
          description:
            "Engage alumni with events, donations, and career network opportunities.",
          icon: "diversity_1",
          outcome: "Build long-term institutional value"
        },
        {
          title: "Compliance & Reporting",
          description:
            "Generate real-time reports aligned with accreditation and regulatory standards.",
          icon: "assured_workload",
          outcome: "Ensure seamless compliance & audits"
        }
      ]}

      // 💬 TESTIMONIAL (TRUST)
      testimonial={{
        quote:
          "Our institution became fully digital within months. Administrative load reduced drastically and student engagement improved significantly.",
        author: "Director, Private University"
      }}

      // 🧲 CTA SYSTEM
      cta={{
        primary: "Book Institution Demo",
        secondary: "Explore Platform",
        note: "Limited onboarding slots for institutions"
      }}

      // 🎨 THEME
      theme="education"
    />
  );
}