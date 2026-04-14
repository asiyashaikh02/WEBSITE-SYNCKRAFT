import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const BusinessOS = () => {
  return (
    <ProductTemplate
      seoTitle="Business Operating System | Synckraft"
      seoDescription="Synckraft Business OS connects disparate operations into a single scalable platform."
      title="Business OS"
      subtitle="Synckraft Core Architecture"
      industryName="Business Operations"
      industryLink="/services"
      problems={[
        "Disparate software tools causing severe data fragmentation",
        "Manual data entry requiring massive administrative overhead",
        "No single source of truth for executive level decision making"
      ]}
      features={[
         { title: "Unified Command", desc: "A singular dashboard orchestrating every department's output." },
         { title: "Universal CRM", desc: "Manage employees, high-ticket clients, and vendors seamlessly." },
         { title: "Process Automation", desc: "Write custom RPA bots to remove repetitive administrative tasks." },
         { title: "Predictive Analytics", desc: "Harness AI to model financial forecasts and operational velocity." },
         { title: "Executive Reports", desc: "Automate board-ready documentation instantly." }
      ]}
      useCases={["Enterprise Corporations", "Scale-ups", "B2B Agencies", "Consultancy Firms"]}
    />
  );
};
