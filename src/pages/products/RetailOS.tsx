import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const RetailOS = () => {
  return (
    <ProductTemplate
      seoTitle="Retail Operating System | Synckraft"
      seoDescription="Synckraft Retail OS transforms supply chain logic, POS integrity, and omnichannel growth."
      title="Retail OS"
      subtitle="Synckraft Ecosystem Product"
      industryName="Retail"
      industryLink="/industries/retail"
      problems={[
        "Manual inventory counting and rampant stockouts",
        "No automation connecting e-commerce with physical stores",
        "Obsolete CRM logic resulting in zero customer personalization"
      ]}
      features={[
         { title: "Unified POS Dashboard", desc: "Connect multiple brick-and-mortar locations to your central command." },
         { title: "Retail CRM", desc: "Track customer purchase history to deploy targeted retention offers." },
         { title: "Inventory Automation", desc: "Auto-generate purchase orders based on AI predictive demand." },
         { title: "Sales Analytics", desc: "Identify top-moving SKUs, stagnant inventory, and margin leaks." },
         { title: "Chain Reports", desc: "Branch-level comparisons and real-time revenue visualization." }
      ]}
      useCases={["Departmental Stores", "Supermarkets", "Fashion Boutiques", "Electronics Chains"]}
    />
  );
};
