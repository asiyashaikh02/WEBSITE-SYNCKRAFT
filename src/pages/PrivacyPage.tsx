import React from 'react';
import { PageId } from '../types';
import { Shield } from 'lucide-react';
import { LegalPageLayout } from '../components/sections/LegalPageLayout';

interface LegalPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="Last Updated: January 1, 2025"
      icon={<Shield className="w-6 h-6" />}
      onNavigate={onNavigate}
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
        <p>
          Synckraft Technologies Private Limited ("Synckraft", "we", "us", or "our") respects your privacy. We collect information that you directly provide when filling out forms, booking strategy sessions, or communicating with us. This includes your name, business email, phone number, company details, and project notes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Data</h2>
        <p>
          Your information is exclusively utilized to deliver engineering consultations, build custom software solutions, respond to inquiries, send administrative updates, and fulfill statutory compliance obligations.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">3. Data Sharing & Security</h2>
        <p>
          We do NOT sell, rent, or trade personal or enterprise data to third-party advertisers. Data is encrypted both in transit (TLS 1.3) and at rest (AES-256) within secure cloud infrastructure (AWS/GCP).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">4. Cookies & Analytics</h2>
        <p>
          We utilize essential operational cookies and anonymized website performance telemetry to evaluate traffic patterns and improve interface responsiveness.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">5. Your Privacy Rights</h2>
        <p>
          You maintain full rights to request access, modification, or complete deletion of your personal data stored in our records. Contact our Data Privacy Officer at{' '}
          <a href="mailto:grow@synckraft.in" className="text-[#1D63FF] font-semibold underline">
            grow@synckraft.in
          </a>.
        </p>
      </section>
    </LegalPageLayout>
  );
};
