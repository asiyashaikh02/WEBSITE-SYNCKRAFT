import React from 'react';
import { PageId } from '../types';
import { AlertCircle } from 'lucide-react';
import { LegalPageLayout } from '../components/sections/LegalPageLayout';

interface LegalPageProps {
  onNavigate: (page: PageId) => void;
}

export const DisclaimerPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <LegalPageLayout
      title="Disclaimer"
      lastUpdated="Synckraft Technologies Pvt. Ltd."
      icon={<AlertCircle className="w-6 h-6" />}
      onNavigate={onNavigate}
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">1. Website Information</h2>
        <p>
          The information provided on this website is for general informational and marketing purposes. While we strive to maintain accurate performance metrics and case study results, individual client results depend on enterprise size, implementation speed, and market conditions.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">2. Third-Party Integrations</h2>
        <p>
          Synckraft applications integrate with external cloud providers, payment gateways, and GST/Tax portals. We carry no liability for unexpected downtime or protocol changes initiated by third-party service providers.
        </p>
      </section>
    </LegalPageLayout>
  );
};
