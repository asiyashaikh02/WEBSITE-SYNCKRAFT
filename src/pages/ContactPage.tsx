import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { trackContactFormSubmitted } from '../utils/analytics/events';
import { FAQS_DATA, OFFICE_LOCATIONS } from '../data/websiteData';
import { OfficeLocationCard } from '../components/cards/OfficeLocationCard';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { SectionContainer } from '../components/ui/SectionContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PrimaryButton } from '../components/ui/Button';
import { FormInput, FormTextarea, FormSelect } from '../components/ui/FormField';
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBookModal: (ctaName?: string) => void;
  onSuccessRedirect?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBookModal,
  onSuccessRedirect,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    service: '',
    projectDetails: '',
    agreeToPrivacy: false,
  });

  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreeToPrivacy) {
      try {
        // Dispatch analytics
        trackContactFormSubmitted(formData.service, formData.companyName);

        // Notify backend notifications endpoint
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.companyName,
            phone: formData.phoneNumber,
            service: formData.service,
            message: formData.projectDetails,
            source: 'Contact Page Form'
          })
        });
      } catch (err) {
        console.error(err);
      }

      setSubmitted(true);
      setTimeout(() => {
        if (onSuccessRedirect) onSuccessRedirect();
      }, 1500);
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const serviceOptions = [
    { value: '', label: 'Select Service' },
    { value: 'software-dev', label: 'Software Development' },
    { value: 'crm-erp', label: 'CRM & ERP Solutions' },
    { value: 'ai-automation', label: 'AI Automation' },
    { value: 'cloud-devops', label: 'Cloud & DevOps' },
    { value: 'consulting', label: 'Business Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
  ];

  return (
    <div className="relative z-10 space-y-24 pt-8 pb-16">
      {/* Hero Section */}
      <SectionContainer className="text-center space-y-6 pt-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D63FF] text-xs font-semibold tracking-wide shadow-2xs">
          Contact Us
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Let's Build Something <br />
          <span className="text-[#1D63FF]">Amazing Together.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Have a project in mind or want to explore how we can help your business
          grow? We'd love to hear from you.
        </p>

        <div className="pt-2">
          <PrimaryButton onClick={() => onOpenBookModal()}>
            Book a Strategy Call
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* Main Grid: Send Message + Get In Touch */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 font-normal mt-1">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you for reaching out, {formData.name}. Our technical team is reviewing your details and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <FormInput
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />

                  <FormInput
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                  />
                </div>

                <FormSelect
                  options={serviceOptions}
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                />

                <FormTextarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectDetails: e.target.value,
                    })
                  }
                />

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacyCheck"
                    required
                    checked={formData.agreeToPrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        agreeToPrivacy: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-[#1D63FF] rounded-md border-slate-300 focus:ring-[#1D63FF]"
                  />
                  <label htmlFor="privacyCheck" className="text-xs text-slate-600">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy')}
                      className="text-[#1D63FF] underline font-semibold cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>

                <div className="pt-2">
                  <PrimaryButton type="submit" size="sm">
                    Send Message
                  </PrimaryButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Get In Touch */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Get In Touch
              </h2>
              <p className="text-xs text-slate-500 font-normal mt-1">
                Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
                  <a
                    href="mailto:grow@synckraft.in"
                    className="text-xs font-semibold text-slate-600 hover:text-[#1D63FF] transition-colors"
                  >
                    grow@synckraft.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">General Enquiries</h3>
                  <a
                    href="tel:+919867799655"
                    className="text-xs font-semibold text-slate-600 hover:text-[#1D63FF] transition-colors"
                  >
                    +91 98677 99655
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Business & Sales</h3>
                  <a
                    href="tel:+919987155988"
                    className="text-xs font-semibold text-slate-600 hover:text-[#1D63FF] transition-colors"
                  >
                    +91 99871 55988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">WhatsApp</h3>
                  <a
                    href="https://wa.me/919867799655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-600 hover:text-[#1D63FF] transition-colors"
                  >
                    +91 98677 99655
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Work Hours</h3>
                  <p className="text-xs font-semibold text-slate-600">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Office Section */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          badge="OUR OFFICE"
          title={
            <>
              India <span className="text-[#1D63FF]">Headquarters</span>
            </>
          }
        />

        <div className="max-w-2xl mx-auto">
          {OFFICE_LOCATIONS.map((office, idx) => (
            <OfficeLocationCard key={idx} office={office} />
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="space-y-10">
        <SectionHeading
          badge="FAQ"
          title={
            <>
              Quick Answers to <span className="text-[#1D63FF]">Common Questions</span>
            </>
          }
        />

        <FaqAccordion
          faqs={FAQS_DATA}
          openFaqId={openFaq}
          onToggle={toggleFaq}
        />
      </SectionContainer>
    </div>
  );
};
