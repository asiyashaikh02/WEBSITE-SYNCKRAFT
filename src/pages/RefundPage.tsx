import React from 'react';
import { PageId } from '../types';
import { RefreshCw } from 'lucide-react';
import { LegalPageLayout } from '../components/sections/LegalPageLayout';

interface LegalPageProps {
  onNavigate: (page: PageId) => void;
}

export const RefundPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <LegalPageLayout
      title="Refund Policy"
      lastUpdated="Transparent Guidelines"
      icon={<RefreshCw className="w-6 h-6" />}
      onNavigate={onNavigate}
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">1. Custom Development Projects</h2>
        <p>
          Due to the tailored nature of custom software engineering, fees paid for completed milestone deliverables approved by the client are non-refundable. If a project is cancelled prior to milestone execution, unearned advance payments minus incurred research/setup costs will be refunded within 14 business days.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">2. SaaS & Product Subscriptions</h2>
        <p>
          Subscriptions for Synckraft SaaS products (Unstopr, Solvelt, Ordrji, HealSync, Solaroft, RunTillDone) can be cancelled at any time before the next billing cycle. Prorated refunds for unused billing periods are issued upon request if service disruption exceeds agreed SLA thresholds.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">3. Refund Request Process</h2>
        <p>
          To initiate a refund review, email{' '}
          <a href="mailto:grow@synckraft.in" className="text-[#1D63FF] font-semibold underline">
            grow@synckraft.in
          </a>{' '}
          with your invoice number, SOW reference, and detailed grounds for the request.
        </p>
      </section>
    </LegalPageLayout>
  );
};
