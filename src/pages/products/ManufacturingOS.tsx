import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const ManufacturingOS = () => {
  return (
    <ProductTemplate
      seoTitle="Manufacturing Operating System | Synckraft"
      seoDescription="Synckraft Manufacturing OS tracks floor output, IoT visualizations, and supply chain health."
      title="Manufacturing OS"
      subtitle="Synckraft Ecosystem Product"
      industryName="Manufacturing"
      industryLink="/industries/manufacturing"
      problems={[
        "No real-time tracking of machine health and output variance",
        "Disjointed supplier interactions and raw material procurement",
        "Manual quality control metrics leaving massive error margins"
      ]}
      features={[
         { title: "Floor Dashboard", desc: "Live-feed architecture monitoring machine performance and yield." },
         { title: "Vendor CRM", desc: "Consolidate supplier communications and component histories." },
         { title: "IoT Automation", desc: "Predictive alerts for maintenance routing before downtime occurs." },
         { title: "Supply Chain Analytics", desc: "Detect logistical bottlenecks and optimize procurement timing." },
         { title: "Compliance Reports", desc: "Automate safety incident logs and ISO compliance tracking." }
      ]}
      useCases={["Heavy Industry Floors", "Automotive Plants", "Textile Mills", "Electronics Assemblers"]}
    />
  );
};
