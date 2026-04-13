import React from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Supermarket() {
  return (
    <IndustryTemplate
      title="Supermarket AI"
      subtitle="Advanced Retail Orchestration"
      description="Automate grocery supply chains, manage perishables through IoT sensors, and streamline the checkout process using vision AI."
      features={[
        {
          title: "Smart Shelf Tracking",
          description: "Automated low-stock alerts powered by on-shelf cameras.",
          icon: "kitchen"
        },
        {
          title: "Perishables AI",
          description: "Predictive markdown algorithms to reduce food waste dramatically.",
          icon: "local_florist"
        }
      ]}
    />
  );
}
