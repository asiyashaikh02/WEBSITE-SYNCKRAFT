import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Supermarket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🛒 HERO (CLEAR + STRONG)
      badge="Smart Supermarket System"
      title="Supermarket Growth System"
      subtitle="Run Your Store Faster, Smarter & More Profitable"
      description="Manage inventory, billing, customers, and online orders in one system. Reduce waste, improve speed, and increase profit with automation."

      // 🔴 FOMO + TRUST
      liveStats={{
        viewers: 28,
        bookings: "14 stores onboarded this week",
        growth: "+170% operational efficiency"
      }}

      // 📊 METRICS (BUSINESS FOCUSED)
      metrics={[
        { value: "+170%", label: "Efficiency Increase" },
        { value: "30%", label: "Waste Reduction" },
        { value: "2x", label: "Checkout Speed" },
      ]}

      // 📦 FEATURES (VERY SIMPLE + PRACTICAL)
      features={[
        {
          title: "Billing & Checkout",
          description:
            "Fast billing system with barcode scanning and all payment options.",
          icon: "point_of_sale",
          outcome: "Serve customers faster"
        },
        {
          title: "Inventory Tracking",
          description:
            "Track stock in real-time and get alerts for low or expiring items.",
          icon: "inventory_2",
          outcome: "Avoid stock loss"
        },
        {
          title: "Smart Shelf Monitoring",
          description:
            "Know which products are running low automatically.",
          icon: "kitchen",
          outcome: "Never run out of stock"
        },
        {
          title: "Perishables Management",
          description:
            "Track expiry and reduce food waste with smart alerts.",
          icon: "local_florist",
          outcome: "Save cost on wastage"
        },
        {
          title: "Customer CRM",
          description:
            "Track customer purchases and send offers automatically.",
          icon: "diversity_3",
          outcome: "Increase repeat customers"
        },
        {
          title: "Online Orders",
          description:
            "Accept and manage online grocery orders easily.",
          icon: "shopping_cart",
          outcome: "Increase sales channels"
        }
      ]}

      // 💬 TESTIMONIAL
      testimonial={{
        quote:
          "Our supermarket became much more efficient. Billing is faster and wastage reduced significantly.",
        author: "Supermarket Owner"
      }}

      // 🧲 CTA
      cta={{
        primary: "Book Supermarket Demo",
        secondary: "See System in Action",
        note: "Limited onboarding for stores"
      }}

      // 🎨 THEME
      theme="supermarket"
    />
  );
}