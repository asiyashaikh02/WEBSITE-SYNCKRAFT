import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const RealEstateOS = () => {
  return (
    <ProductTemplate
      seoTitle="Real Estate Operating System | Synckraft"
      seoDescription="Synckraft Real Estate OS helps automate property management, CRM, and lead nurturing."
      title="Real Estate OS"
      subtitle="Synckraft Ecosystem Product"
      industryName="Real Estate"
      industryLink="/industries/real-estate"
      problems={[
        "Manual lead qualification and disjointed follow-ups",
        "No centralized automation connecting CRM and inventory",
        "Lack of predictive analytics for assessing buyer intent"
      ]}
      features={[
         { title: "Unified Dashboard", desc: "Complete eagle-eye view for agents, leads, and property pipelines." },
         { title: "Predictive CRM", desc: "Automated lead nurturing, intent tracking, and task delegation." },
         { title: "Process Automation", desc: "Algorithmic matching of high-intent leads to active inventory." },
         { title: "Advanced Analytics", desc: "Real-time insights on sales velocity and team performance." },
         { title: "Dynamic Reports", desc: "Automated executive summaries and conversion matrices." }
      ]}
      useCases={["Real Estate Agencies", "Property Developers", "Commercial Brokerages", "Property Management Firms"]}
    />
  );
};
