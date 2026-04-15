import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Healthcare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      // 🏥 PREMIUM POSITIONING
      badge="Next-Gen Healthcare Intelligence"
      title="Healthcare Intelligence System"
      subtitle="Smart Hospital & Clinic Management Platform"
      description="Digitize your healthcare operations with a secure, AI-powered system. Manage patients, appointments, records, and billing in one place while improving patient experience and operational efficiency."

      // 🔴 TRUST + FOMO
      liveStats={{
        viewers: 14,
        bookings: "5 clinics onboarded this week",
        growth: "+200% operational efficiency"
      }}

      // 📊 AUTHORITY METRICS
      metrics={[
        { value: "+200%", label: "Efficiency Increase" },
        { value: "60%", label: "Admin Work Reduced" },
        { value: "99%", label: "Data Accuracy" },
      ]}

      // 📦 FEATURES (CLEAR + PROFESSIONAL)
      features={[
        {
          title: "Smart Patient Records",
          description:
            "Store and access all patient data digitally in one secure system.",
          icon: "folder_shared",
          outcome: "No more lost or manual records"
        },
        {
          title: "Appointment Management",
          description:
            "Book, reschedule, and manage appointments automatically with reminders.",
          icon: "calendar_month",
          outcome: "Reduce missed appointments"
        },
        {
          title: "AI Health Insights",
          description:
            "Analyze patient data to detect risks and support better diagnosis.",
          icon: "vital_signs",
          outcome: "Improve patient care quality"
        },
        {
          title: "Telemedicine",
          description:
            "Consult patients online with secure video and digital prescriptions.",
          icon: "video_camera_front",
          outcome: "Expand your reach"
        },
        {
          title: "Pharmacy Integration",
          description:
            "Send prescriptions directly to pharmacies with one click.",
          icon: "local_pharmacy",
          outcome: "Faster patient service"
        },
        {
          title: "Billing & Insurance",
          description:
            "Automate billing, invoices, and insurance claim processing.",
          icon: "request_quote",
          outcome: "Save time and reduce errors"
        }
      ]}

      // 💬 TRUST (VERY IMPORTANT FOR HEALTHCARE)
      testimonial={{
        quote:
          "Our hospital operations became faster and more organized. Patient handling improved significantly.",
        author: "Hospital Administrator"
      }}

      // 🧲 CTA (HIGH-TICKET FEEL)
      cta={{
        primary: "Book Healthcare Demo",
        secondary: "View System Overview",
        note: "Limited onboarding for healthcare partners"
      }}

      // 🎨 THEME
      theme="healthcare"
    />
  );
}