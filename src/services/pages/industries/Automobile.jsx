import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Automobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🔥 HERO OPTIMIZATION
      badge="Next-Gen Dealership Intelligence"
      title="Automobile Intelligence System"
      subtitle="AI-Powered Dealership & Vehicle Lifecycle Management"
      description="Transform your dealership into a high-performance sales machine. From immersive virtual showrooms to automated follow-ups and predictive servicing — Synckraft builds a complete automobile operating system designed for scale, speed, and premium customer experience."

      // 🔥 FOMO + TRUST
      liveStats={{
        viewers: 23,
        bookings: "12 booked this week",
        growth: "+287% dealership efficiency"
      }}

      // 💎 STATS (AUTHORITY)
      metrics={[
        { value: "+287%", label: "Sales Conversion Growth" },
        { value: "3.5x", label: "Test Drive Bookings" },
        { value: "24/7", label: "Lead Automation" },
      ]}

      // 📦 SERVICES (OUTCOME-DRIVEN)
      features={[
        {
          title: "Virtual Showrooms",
          description:
            "Immersive 3D & AR-powered vehicle experiences allowing customers to explore, customize, and emotionally connect before stepping into your dealership.",
          icon: "directions_car",
          outcome: "Increase showroom footfall by 2–3x"
        },
        {
          title: "Dealership CRM",
          description:
            "Track every lead from inquiry → test drive → financing → delivery in one intelligent pipeline.",
          icon: "handshake",
          outcome: "Never lose a high-value buyer again"
        },
        {
          title: "Servicing Automation",
          description:
            "Predictive maintenance alerts, automated reminders, and service lifecycle tracking.",
          icon: "build",
          outcome: "Boost repeat customers & retention"
        },
        {
          title: "Inventory Intelligence",
          description:
            "Real-time sync between warehouse, showroom, and online listings with demand forecasting.",
          icon: "inventory_2",
          outcome: "Reduce dead stock & increase turnover"
        },
        {
          title: "Digital Financing",
          description:
            "Seamless loan processing, approvals, and documentation integrated into your sales flow.",
          icon: "account_balance",
          outcome: "Faster deal closures"
        },
        {
          title: "Aftermarket Upselling",
          description:
            "AI-driven recommendations for accessories, warranties, and upgrades.",
          icon: "workspace_premium",
          outcome: "Increase revenue per customer"
        }
      ]}

      // 💬 TESTIMONIAL (TRUST)
      testimonial={{
        quote:
          "We transformed our dealership into a fully automated system. Test drives doubled and closing time reduced drastically.",
        author: "Director, Premium Auto Dealership"
      }}

      // 🧲 CTA SYSTEM
      cta={{
        primary: "Book Dealership Demo",
        secondary: "View System Flow",
        note: "Limited onboarding slots this month"
      }}

      // 🎨 VISUAL THEME (OPTIONAL CONTROL)
      theme="automobile"
    />
  );
}