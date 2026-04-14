import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      title="Cognitive Education"
      subtitle="Smart Institutional Management"
      description="Automate administrative burdens, provide a centralized digital campus for students, and use analytics to predict student performance and optimize curriculum delivery. Modernize the educational lifecycle from admission to alumni relations."
      features={[
        {
          title: "Unified Student Portal",
          description: "One-stop seamless access for assignments, syllabus tracking, digital billing, and real-time campus notifications.",
          icon: "school"
        },
        {
          title: "Administrative Automation",
          description: "Massively reduce staff workload with automated enrollment workflows, seamless fee collection systems, and dynamic room scheduling.",
          icon: "admin_panel_settings"
        },
        {
          title: "Performance AI & Risk Models",
          description: "Identify at-risk students securely using predictive grade and attendance data patterns, triggering early counselor intervention.",
          icon: "insights"
        },
        {
          title: "Digital Admissions",
          description: "End-to-end paperless pipeline for processing student applications, reviewing credentials, and issuing automated acceptance notices.",
          icon: "how_to_reg"
        },
        {
          title: "Alumni CRM",
          description: "Maintain lifelong engagement post-graduation with targeted donation campaigns, event invites, and career network tracking.",
          icon: "diversity_1"
        },
        {
          title: "Compliance & Reporting",
          description: "Generate highly accurate, instantly exportable demographic and performance reports to fulfill stringent government accreditation standards.",
          icon: "assured_workload"
        }
      ]}
    />
  );
}
