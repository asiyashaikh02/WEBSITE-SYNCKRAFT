import { useEffect } from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Hospitality() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <IndustryTemplate
      title="Hospitality Management System"
      subtitle="Unified Guest Experience"
      description="Elevate your hotel or resort operations with intelligent booking engines, contactless guest services, and centralized housekeeping management. Deliver a five-star digital experience tightly integrated with your property management stack."
      features={[
        {
          title: "Intelligent Booking Engine",
          description: "Maximize occupancy and revenue with dynamic predictive pricing models and direct integration to global distribution systems.",
          icon: "event_seat"
        },
        {
          title: "Contactless Check-in & Keys",
          description: "Allow guests to bypass the front desk using robust mobile apps for ID verification and encrypted digital room keys via NFC.",
          icon: "vpn_key"
        },
        {
          title: "Smart Room Operations",
          description: "IoT integrations granting guests control over room lighting, climate, and concierge requests directly from their personal devices.",
          icon: "living"
        },
        {
          title: "Housekeeping Routing",
          description: "Algorithmic task assignment optimizing housekeeping staff routes in real-time based on live guest checkout statuses.",
          icon: "cleaning_services"
        },
        {
          title: "Integrated CRM",
          description: "Track deep guest preferences, past stays, and spending patterns to trigger highly personalized pre-arrival marketing sequences.",
          icon: "diversity_3"
        },
        {
          title: "F&B POS Synchronization",
          description: "Seamless synchronization between bars, restaurants, and room service requests directly to the guest folio ledger.",
          icon: "room_service"
        }
      ]}
    />
  );
}
