import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Beauty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🔥 HERO
      badge="Next-Gen Beauty Intelligence"
      title="Beauty Intelligence System"
      subtitle="AI-Powered Personalization for Modern Beauty Brands"
      description="Deliver hyper-personalized beauty experiences powered by AI. From virtual try-ons to skin diagnostics and intelligent product recommendations — build deeper emotional connections and drive higher conversions across your beauty ecosystem."

      // 🔴 FOMO + TRUST
      liveStats={{
        viewers: 31,
        bookings: "18 consultations booked today",
        growth: "+240% customer engagement"
      }}

      // 📊 AUTHORITY METRICS
      metrics={[
        { value: "+240%", label: "Engagement Growth" },
        { value: "3.2x", label: "Conversion Rate" },
        { value: "92%", label: "Customer Satisfaction" },
      ]}

      // 💎 FEATURES (OUTCOME FOCUSED)
      features={[
        {
          title: "Virtual Try-On",
          description:
            "Hyper-realistic AR experiences allowing customers to test makeup shades, styles, and looks instantly.",
          icon: "face_retouching_natural",
          outcome: "Increase purchase confidence & reduce returns"
        },
        {
          title: "AI Skin Analytics",
          description:
            "Advanced facial scanning detects skin type, concerns, and patterns to generate personalized routines.",
          icon: "science",
          outcome: "Deliver highly personalized recommendations"
        },
        {
          title: "Product Recommendation Engine",
          description:
            "AI suggests the perfect products based on skin data, preferences, and behavior patterns.",
          icon: "auto_awesome",
          outcome: "Boost average order value"
        },
        {
          title: "Customer Retention Automation",
          description:
            "Automated reminders, refill nudges, and skincare routines sent via WhatsApp & email.",
          icon: "autorenew",
          outcome: "Increase repeat purchases"
        },
        {
          title: "Influencer & Content Integration",
          description:
            "Seamlessly integrate UGC, tutorials, and influencer-led experiences into your platform.",
          icon: "campaign",
          outcome: "Drive trust & social proof"
        },
        {
          title: "Omnichannel Beauty CRM",
          description:
            "Track every customer journey from discovery → trial → purchase → retention.",
          icon: "hub",
          outcome: "Build long-term customer loyalty"
        }
      ]}

      // 💬 TESTIMONIAL
      testimonial={{
        quote:
          "Our beauty platform saw an instant lift in engagement. Customers loved the personalization and we saw a huge jump in conversions.",
        author: "Founder, Premium Beauty Brand"
      }}

      // 🧲 CTA SYSTEM
      cta={{
        primary: "Book Beauty Demo",
        secondary: "Explore Experience",
        note: "Limited onboarding for premium brands"
      }}

      // 🎨 THEME
      theme="beauty"
    />
  );
}