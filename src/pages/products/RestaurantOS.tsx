import React from 'react';
import { ProductTemplate } from '../../components/ProductTemplate';

export const RestaurantOS = () => {
  return (
    <ProductTemplate
      seoTitle="Restaurant Operating System | Synckraft"
      seoDescription="Synckraft Restaurant OS helps automate restaurant operations, POS, and inventory intelligence."
      title="Restaurant OS"
      subtitle="Synckraft Ecosystem Product"
      industryName="Restaurant"
      industryLink="/industries/restaurant"
      problems={[
        "Manual operations causing slow table turnover and order chaos",
        "No automation bridging kitchen, front-of-house, and delivery layers",
        "Fragmented CRM blocking effective customer retention strategies"
      ]}
      features={[
         { title: "Omnichannel Dashboard", desc: "Sync physical tables, delivery aggregators, and takeouts in one screen." },
         { title: "Guest CRM", desc: "Capture diner data and trigger automated loyalty campaigns natively." },
         { title: "Kitchen Automation", desc: "Smart KDS routing to eliminate paper tickets and bottlenecks." },
         { title: "Inventory Analytics", desc: "Predictive tracking that signals waste and low-stock conditions." },
         { title: "Financial Reports", desc: "Instant visibility into food costs, margins, and branch P&L." }
      ]}
      useCases={["Restaurants & Fine Dining", "Cafes & Bistros", "Cloud Kitchens", "QSR Chains"]}
    />
  );
};
