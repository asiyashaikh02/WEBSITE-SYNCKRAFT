import React from 'react';
import { PageId } from '../types';
import { FileText } from 'lucide-react';
import { LegalPageLayout } from '../components/sections/LegalPageLayout';

interface LegalPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="Effective Date: January 1, 2025"
      icon={<FileText className="w-6 h-6" />}
      onNavigate={onNavigate}
    >
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          By accessing Synckraft Technologies website or engaging our software engineering services, you agree to comply with and be bound by these Terms and Conditions.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">2. Services & Project Scope</h2>
        <p>
          Synckraft provides custom software engineering, product development, CRM/ERP implementation, AI automation, and cloud management. Specific project deliverables, milestone timelines, and SLAs are governed by signed Master Services Agreements (MSA) and Statements of Work (SOW).
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Rights</h2>
        <p>
          Upon complete settlement of agreed project fees, all bespoke source code, visual design assets, and custom deliverables built for the client belong exclusively to the client. Synckraft retains ownership of pre-existing core frameworks, proprietary product suites (Unstopr, Solvelt, Ordrji, HealSync, Solaroft, RunTillDone), and re-usable code libraries.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">4. Limitation of Liability</h2>
        <p>
          Synckraft Technologies Private Limited shall not be liable for indirect, incidental, or consequential damages resulting from third-party server downtime, data loss caused by unauthorized client credential exposure, or external API outages.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-bold text-slate-900">5. Governing Law & Jurisdiction</h2>
        <p>
          These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.
        </p>
      </section>
    </LegalPageLayout>
  );
};
