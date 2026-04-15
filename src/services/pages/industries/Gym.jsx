import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Gym() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🔥 SIMPLE + STRONG HERO
      badge="Smart Gym Management"
      title="Gym Growth System"
      subtitle="Run Your Gym Smarter, Not Harder"
      description="Manage members, payments, and daily operations from one simple system. Increase retention, reduce manual work, and grow your gym faster with automation."

      // 🔴 FOMO + TRUST (SIMPLE)
      liveStats={{
        viewers: 19,
        bookings: "8 gyms joined this week",
        growth: "+150% member retention"
      }}

      // 📊 EASY METRICS
      metrics={[
        { value: "+150%", label: "Member Retention" },
        { value: "2x", label: "Revenue Growth" },
        { value: "80%", label: "Work Automated" },
      ]}

      // 📦 FEATURES (VERY SIMPLE LANGUAGE)
      features={[
        {
          title: "Member Retention System",
          description:
            "Track which members are not coming regularly and send them reminders automatically.",
          icon: "model_training",
          outcome: "Keep more members active"
        },
        {
          title: "Easy Entry System",
          description:
            "Allow members to enter using QR code, fingerprint, or mobile without manual checking.",
          icon: "sensor_door",
          outcome: "Save time at reception"
        },
        {
          title: "Class Management",
          description:
            "Manage gym classes, bookings, and trainer schedules in one place.",
          icon: "event_available",
          outcome: "Run classes smoothly"
        },
        {
          title: "Automatic Payments",
          description:
            "Collect monthly fees automatically and get alerts for failed payments.",
          icon: "currency_exchange",
          outcome: "No more missed payments"
        },
        {
          title: "Equipment Tracking",
          description:
            "Track machine usage and get reminders for maintenance.",
          icon: "fitness_center",
          outcome: "Avoid breakdowns"
        },
        {
          title: "Gym Insights",
          description:
            "See reports on member activity, busy hours, and revenue.",
          icon: "insights",
          outcome: "Make better decisions"
        }
      ]}

      // 💬 SIMPLE TESTIMONIAL
      testimonial={{
        quote:
          "Managing our gym became so easy. Payments, members, everything is automated now.",
        author: "Gym Owner"
      }}

      // 🧲 CTA (CLEAR + DIRECT)
      cta={{
        primary: "Book Gym Demo",
        secondary: "See How It Works",
        note: "Limited setup slots available"
      }}

      // 🎨 THEME
      theme="gym"
    />
  );
}