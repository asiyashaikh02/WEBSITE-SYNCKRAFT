import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Healthcare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      title="Healthcare OS"
      subtitle="Medical & Hospital Intelligence"
      description="Streamline clinic operations, automate patient onboarding, and secure digital medical records seamlessly. Enhance patient care through integrated AI diagnostics and robust scheduling algorithms."
      features={[
        {
          title: "Predictive Diagnostics",
          description: "Leverage AI-driven medical data analysis to predict patient health risks and generate advanced treatment pathways.",
          icon: "vital_signs"
        },
        {
          title: "Automated Scheduling",
          description: "A centralized appointment management system to reduce no-shows and optimize physician schedules automatically.",
          icon: "calendar_month"
        },
        {
          title: "Electronic Health Records",
          description: "Highly secure, HIPAA-compliant digital vault for instant access and cross-departmental sharing of patient files.",
          icon: "folder_shared"
        },
        {
          title: "Telemedicine Platform",
          description: "Integrated secure video conferring suites enabling safe, remote consultations natively within the platform.",
          icon: "video_camera_front"
        },
        {
          title: "Pharmacy Sync",
          description: "Automated e-prescription workflows coordinating directly with external pharmacies for instant fulfillments.",
          icon: "local_pharmacy"
        },
        {
          title: "Billing Automation",
          description: "Frictionless insurance claims processing and unified patient billing to slash administrative overhead.",
          icon: "request_quote"
        }
      ]}
    />
  );
}
