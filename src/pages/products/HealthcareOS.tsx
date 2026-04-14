import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const HealthcareOS = () => {
  return (
    <ProductTemplate
      seoTitle="Healthcare Operating System | Synckraft"
      seoDescription="Synckraft Healthcare OS helps secure EMR data flows, telemedicine, and appointment sequencing."
      title="Healthcare OS"
      subtitle="Synckraft Ecosystem Product"
      industryName="Healthcare"
      industryLink="/industries/healthcare"
      problems={[
        "Manual patient onboarding and physical paperwork delays",
        "No automated follow-ups leading to high appointment no-show rates",
        "Fragmented systems making compliance and EMR tracking difficult"
      ]}
      features={[
         { title: "Clinical Dashboard", desc: "Holistic view of daily appointments, patient queues, and physician loads." },
         { title: "Patient CRM", desc: "Securely organized patient histories, prescriptions, and communication logs." },
         { title: "Workflow Automation", desc: "Zero-drop appointment flows, automated reminders, and remote links." },
         { title: "Diagnostic Analytics", desc: "Track resource utilization, clinic efficiency, and patient flow times." },
         { title: "Compliance Reports", desc: "Secure, audit-ready medical reporting built for industry standards." }
      ]}
      useCases={["Multi-Specialty Hospitals", "Private Clinics", "Diagnostic Centers", "Telemedicine Networks"]}
    />
  );
};
