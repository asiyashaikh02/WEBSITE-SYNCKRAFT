import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Hospitality() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🏨 HERO (LUXURY EXPERIENCE POSITIONING)
      badge="Luxury Hospitality Intelligence"
      title="Hospitality Experience System"
      subtitle="Smart Hotel & Resort Management Platform"
      description="Deliver a seamless five-star guest experience while increasing bookings and revenue. Manage reservations, guest services, and operations from one intelligent system."

      // 🔴 FOMO + TRUST
      liveStats={{
        viewers: 22,
        bookings: "11 properties onboarded this week",
        growth: "+180% booking efficiency"
      }}

      // 📊 AUTHORITY METRICS
      metrics={[
        { value: "+180%", label: "Booking Efficiency" },
        { value: "2.3x", label: "Guest Satisfaction" },
        { value: "70%", label: "Manual Work Reduced" },
      ]}

      // 📦 FEATURES (CLEAR + OUTCOME-DRIVEN)
      features={[
        {
          title: "Smart Booking System",
          description:
            "Manage bookings, pricing, and availability automatically in one place.",
          icon: "event_seat",
          outcome: "Increase occupancy rates"
        },
        {
          title: "Contactless Check-in",
          description:
            "Allow guests to check-in using mobile and access rooms without waiting.",
          icon: "vpn_key",
          outcome: "Faster and smoother guest experience"
        },
        {
          title: "Smart Room Controls",
          description:
            "Let guests control lights, AC, and services directly from their phone.",
          icon: "living",
          outcome: "Premium guest experience"
        },
        {
          title: "Housekeeping Management",
          description:
            "Assign and track cleaning tasks automatically for staff.",
          icon: "cleaning_services",
          outcome: "Better staff efficiency"
        },
        {
          title: "Guest CRM",
          description:
            "Store guest preferences and history to offer personalized services.",
          icon: "diversity_3",
          outcome: "Improve repeat bookings"
        },
        {
          title: "Restaurant & Room Service Sync",
          description:
            "Connect restaurant, bar, and room service orders in one system.",
          icon: "room_service",
          outcome: "Increase in-house revenue"
        }
      ]}

      // 💬 TESTIMONIAL (TRUST + LUXURY FEEL)
      testimonial={{
        quote:
          "Our guest experience improved drastically. Bookings increased and operations became much smoother.",
        author: "Resort Owner"
      }}

      // 🧲 CTA SYSTEM
      cta={{
        primary: "Book Hospitality Demo",
        secondary: "Explore System",
        note: "Limited onboarding for premium properties"
      }}

      // 🎨 THEME
      theme="hospitality"
    />
  );
}