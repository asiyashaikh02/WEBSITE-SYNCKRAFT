import React from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Automobile() {
  return (
    <IndustryTemplate
      title="Automobile OS"
      subtitle="Vehicle & Dealership Management"
      description="Streamline dealership operations, automate customer servicing reminders, and digitize the showroom experience with cutting edge AR vehicle visualization and automated lead follow-ups. Centralize your auto operations into one system."
      features={[
        {
          title: "Virtual Showrooms",
          description: "High-fidelity 3D visualization allowing customers to configure vehicle trims, paint, and accessories in AR before arriving at the dealership.",
          icon: "directions_car"
        },
        {
          title: "Dealership CRM",
          description: "End-to-end sales pipelines tracking from first test drive to final auto financing and vehicle delivery.",
          icon: "handshake"
        },
        {
          title: "Servicing Automation",
          description: "Predictive maintenance scheduling and automated customer text reminders synced flawlessly with your parts inventory.",
          icon: "build"
        },
        {
          title: "Fleet Inventory Sync",
          description: "Real-time synchronization across manufacturer allocation, on-lot inventory, and digital marketplace listings.",
          icon: "inventory_2"
        },
        {
          title: "Digital Financing",
          description: "Secure, automated credit application workflows bridging the gap between sales floors and external lending institutions.",
          icon: "account_balance"
        },
        {
          title: "Aftermarket Upselling",
          description: "Algorithmic recommendations for warranty extensions and accessories based on primary vehicle profiles.",
          icon: "workspace_premium"
        }
      ]}
    />
  );
}
