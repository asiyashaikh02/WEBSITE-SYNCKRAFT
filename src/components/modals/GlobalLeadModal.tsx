import React, { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';
import { PrimaryButton } from '../ui/Button';
import { useLeadModal } from '../../context/LeadModalContext';
import { trackBookConsultation } from '../../utils/analytics/events';
import {
  BusinessFormData,
  CareersFormData,
  DemoFormData,
  FormVariant,
} from '../../types/lead';
import {
  formatBusinessEnquiryWhatsApp,
  formatCareersWhatsApp,
  formatDemoWhatsApp,
  openWhatsAppLink,
  WHATSAPP_PHONE_NUMBER,
} from '../../utils/whatsapp';
import {
  CheckCircle2,
  Send,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  MessageSquare,
  FileText,
  Calendar,
  Layers,
  ExternalLink,
} from 'lucide-react';

export const GlobalLeadModal: React.FC = () => {
  const { isOpen, closeLeadModal, modalOptions } = useLeadModal();

  const [activeVariant, setActiveVariant] = useState<FormVariant>(
    modalOptions.formVariant || 'business'
  );
  const [submitted, setSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');

  // Sync variant when modalOptions change
  useEffect(() => {
    if (modalOptions.formVariant) {
      setActiveVariant(modalOptions.formVariant);
    }
    setSubmitted(false);
    setSubmittedMessage('');
  }, [modalOptions, isOpen]);

  // Business Form State
  const [businessData, setBusinessData] = useState<BusinessFormData>({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    industry: 'Real Estate / Property',
    city: '',
    website: '',
    requirement: 'Custom Software Development',
    budget: '₹1,00,000 - ₹5,00,000',
    timeline: 'Immediate / ASAP',
    message: '',
    agreeToContact: true,
  });

  // Careers Form State
  const [careersData, setCareersData] = useState<CareersFormData>({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    college: '',
    qualification: 'B.Tech / B.E.',
    semester: 'Final Year / Graduate',
    experience: 'Fresher / Student',
    position: 'Full Stack Developer',
    resumeUrl: '',
    portfolioUrl: '',
    motivation: '',
  });

  // Demo Form State
  const [demoData, setDemoData] = useState<DemoFormData>({
    fullName: '',
    companyName: '',
    businessSize: '11-50 Employees',
    currentSoftware: '',
    interestedProduct: modalOptions.defaultProduct || 'Voice Agent OS',
    preferredTime: 'Tomorrow - 11:00 AM',
    mobile: '',
    email: '',
    notes: '',
  });

  useEffect(() => {
    if (modalOptions.defaultProduct) {
      setDemoData((prev) => ({
        ...prev,
        interestedProduct: modalOptions.defaultProduct!,
      }));
    }
  }, [modalOptions.defaultProduct]);

  // Handle Business Submit
  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = formatBusinessEnquiryWhatsApp(businessData, modalOptions);
    setSubmittedMessage(formattedMsg);
    setSubmitted(true);

    try {
      // Dispatch analytics event
      trackBookConsultation(businessData.timeline, businessData.budget);

      // Trigger backend alert system
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: businessData.fullName,
          company: businessData.companyName,
          email: businessData.email,
          phone: businessData.mobile,
          preferredDate: businessData.timeline,
          preferredTime: 'Anytime',
          businessType: businessData.industry,
          message: `${businessData.message} | Budget: ${businessData.budget} | Timeline: ${businessData.timeline}`
        })
      });
      if (!response.ok) throw new Error('Consultation request failed');
    } catch (err) {
      console.error(err);
    }

    // Auto redirect to WhatsApp after 1.2s
    setTimeout(() => {
      openWhatsAppLink(formattedMsg);
    }, 1200);
  };

  // Handle Careers Submit
  const handleCareersSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = formatCareersWhatsApp(careersData, modalOptions);
    setSubmittedMessage(formattedMsg);
    setSubmitted(true);

    try {
      // Trigger analytics
      trackBookConsultation('Careers Application', careersData.position || 'Any');
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      openWhatsAppLink(formattedMsg);
    }, 1200);
  };

  // Handle Demo Submit
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = formatDemoWhatsApp(demoData, modalOptions);
    setSubmittedMessage(formattedMsg);
    setSubmitted(true);

    try {
      // Trigger analytics
      trackBookConsultation('Demo Request', demoData.interestedProduct);
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      openWhatsAppLink(formattedMsg);
    }, 1200);
  };

  // Titles based on Variant
  const getHeaderInfo = () => {
    if (modalOptions.customTitle && modalOptions.customSubtitle) {
      return {
        title: modalOptions.customTitle,
        subtitle: modalOptions.customSubtitle,
        badge: 'SYNCREATIVE ENQUIRY',
      };
    }

    switch (activeVariant) {
      case 'careers':
        return {
          title: 'Join Our Team',
          subtitle:
            'Shape the future of AI automation and enterprise software with Synckraft.',
          badge: 'CAREERS AT SYNCKRAFT',
        };
      case 'demo':
        return {
          title: modalOptions.defaultProduct
            ? `Demo: ${modalOptions.defaultProduct}`
            : 'Schedule Product Demo',
          subtitle:
            'Get a personalized live walkthrough of our AI products and software platforms.',
          badge: 'PRODUCT DEMO',
        };
      case 'business':
      default:
        return {
          title: modalOptions.ctaName || 'Start Your Digital Transformation',
          subtitle:
            'Tell us about your project requirements or automation goals.',
          badge: 'BUSINESS ENQUIRY',
        };
    }
  };

  const header = getHeaderInfo();

  return (
    <Modal isOpen={isOpen} onClose={closeLeadModal} maxWidth="max-w-2xl">
      <div className="-m-6 sm:-m-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#1D63FF]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-1.5 pr-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>{header.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {header.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {header.subtitle}
            </p>
          </div>

          {/* Auto-Detected Source Bar */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span className="truncate">
              Source Page: <span className="text-blue-300 font-normal">{modalOptions.sourcePage}</span>
            </span>
            <span className="shrink-0 ml-2">
              CTA: <span className="text-blue-300 font-normal">{modalOptions.ctaName}</span>
            </span>
          </div>
        </div>

        {/* Variant Tabs Selector */}
        {!submitted && (
          <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-2.5 flex items-center gap-2 overflow-x-auto text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveVariant('business')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeVariant === 'business'
                  ? 'bg-[#1D63FF] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Business Enquiry</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVariant('demo')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeVariant === 'demo'
                  ? 'bg-[#1D63FF] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Request Product Demo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVariant('careers')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                activeVariant === 'careers'
                  ? 'bg-[#1D63FF] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Join Our Team</span>
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            /* SUCCESS SCREEN */
            <div className="py-8 px-4 text-center space-y-5">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200/80 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  ✅ Thank You!
                </h4>
                <p className="text-sm font-medium text-slate-700">
                  Your enquiry has been prepared.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Redirecting you automatically to WhatsApp to connect with our team...
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsAppLink(submittedMessage)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp (+91 98677 99655)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={closeLeadModal}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : activeVariant === 'careers' ? (
            /* CAREERS FORM */
            <form onSubmit={handleCareersSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={careersData.fullName}
                      onChange={(e) =>
                        setCareersData({ ...careersData, fullName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={careersData.email}
                      onChange={(e) =>
                        setCareersData({ ...careersData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={careersData.mobile}
                      onChange={(e) =>
                        setCareersData({ ...careersData, mobile: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune / Mumbai / Remote"
                      value={careersData.city}
                      onChange={(e) =>
                        setCareersData({ ...careersData, city: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Applying For *
                  </label>
                  <select
                    required
                    value={careersData.position}
                    onChange={(e) =>
                      setCareersData({ ...careersData, position: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="AI Automation Specialist">
                      AI Automation Specialist
                    </option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="QA Tester & Quality Specialist">
                      QA Tester & Quality Specialist
                    </option>
                    <option value="Marketing Executive">Marketing Executive</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="Software / AI Intern">Software / AI Intern</option>
                    <option value="General Application">General Application</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Highest Qualification
                  </label>
                  <select
                    value={careersData.qualification}
                    onChange={(e) =>
                      setCareersData({
                        ...careersData,
                        qualification: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="B.Tech / B.E.">B.Tech / B.E.</option>
                    <option value="M.Tech / M.E.">M.Tech / M.E.</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="B.Sc / M.Sc Computer Science">
                      B.Sc / M.Sc Computer Science
                    </option>
                    <option value="Diploma Engineering">Diploma Engineering</option>
                    <option value="Other Degree">Other Degree</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    College / University
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. COEP / VJTI / Pune University"
                    value={careersData.college}
                    onChange={(e) =>
                      setCareersData({ ...careersData, college: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Experience Level
                  </label>
                  <select
                    value={careersData.experience}
                    onChange={(e) =>
                      setCareersData({ ...careersData, experience: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Fresher / Student">Fresher / Student</option>
                    <option value="0 - 1 Year">0 - 1 Year</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Portfolio / GitHub / LinkedIn URL
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="https://github.com/yourusername"
                      value={careersData.portfolioUrl}
                      onChange={(e) =>
                        setCareersData({
                          ...careersData,
                          portfolioUrl: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Resume Link (Drive / Dropbox)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="https://drive.google.com/file/..."
                      value={careersData.resumeUrl}
                      onChange={(e) =>
                        setCareersData({
                          ...careersData,
                          resumeUrl: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Why do you want to join Synckraft?
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a short note on your passion and what drives you..."
                  value={careersData.motivation}
                  onChange={(e) =>
                    setCareersData({ ...careersData, motivation: e.target.value })
                  }
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              <PrimaryButton
                type="submit"
                fullWidth
                icon={<Send className="w-4 h-4" />}
              >
                Submit Career Application
              </PrimaryButton>
            </form>
          ) : activeVariant === 'demo' ? (
            /* PRODUCT DEMO FORM */
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={demoData.fullName}
                      onChange={(e) =>
                        setDemoData({ ...demoData, fullName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global"
                      value={demoData.companyName}
                      onChange={(e) =>
                        setDemoData({ ...demoData, companyName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={demoData.mobile}
                      onChange={(e) =>
                        setDemoData({ ...demoData, mobile: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="vikram@apex.com"
                      value={demoData.email}
                      onChange={(e) =>
                        setDemoData({ ...demoData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Interested Product *
                  </label>
                  <select
                    required
                    value={demoData.interestedProduct}
                    onChange={(e) =>
                      setDemoData({ ...demoData, interestedProduct: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Voice Agent OS">Voice Agent OS (AI Voice Calling)</option>
                    <option value="WhatsApp CRM & Automation">
                      WhatsApp CRM & Marketing Engine
                    </option>
                    <option value="Smart POS & Billing Suite">
                      Smart POS & Billing Suite
                    </option>
                    <option value="Real Estate CRM Platform">
                      Real Estate CRM & Booking OS
                    </option>
                    <option value="Healthcare OS">Healthcare OS & Booking</option>
                    <option value="Custom Enterprise Automation">
                      Custom Enterprise Platform
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business Size
                  </label>
                  <select
                    value={demoData.businessSize}
                    onChange={(e) =>
                      setDemoData({ ...demoData, businessSize: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="1 - 10 Employees">1 - 10 Employees</option>
                    <option value="11 - 50 Employees">11 - 50 Employees</option>
                    <option value="51 - 200 Employees">51 - 200 Employees</option>
                    <option value="200+ Enterprise">200+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Current Software / Tools Used
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Excel / Manual / Salesforce"
                    value={demoData.currentSoftware}
                    onChange={(e) =>
                      setDemoData({ ...demoData, currentSoftware: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Preferred Demo Time
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={demoData.preferredTime}
                      onChange={(e) =>
                        setDemoData({ ...demoData, preferredTime: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="Today - Afternoon">Today - Afternoon</option>
                      <option value="Tomorrow - Morning">Tomorrow - Morning (10-12 PM)</option>
                      <option value="Tomorrow - Afternoon">Tomorrow - Afternoon (2-5 PM)</option>
                      <option value="This Weekend">This Weekend</option>
                      <option value="As Soon As Possible">As Soon As Possible</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Specific Features or Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any specific workflows or features you want to see..."
                  value={demoData.notes}
                  onChange={(e) => setDemoData({ ...demoData, notes: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              <PrimaryButton
                type="submit"
                fullWidth
                icon={<Send className="w-4 h-4" />}
              >
                Confirm Product Demo Request
              </PrimaryButton>
            </form>
          ) : (
            /* BUSINESS ENQUIRY FORM */
            <form onSubmit={handleBusinessSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={businessData.fullName}
                      onChange={(e) =>
                        setBusinessData({ ...businessData, fullName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Acme Technologies"
                      value={businessData.companyName}
                      onChange={(e) =>
                        setBusinessData({
                          ...businessData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={businessData.email}
                      onChange={(e) =>
                        setBusinessData({ ...businessData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={businessData.mobile}
                      onChange={(e) =>
                        setBusinessData({ ...businessData, mobile: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business / Industry
                  </label>
                  <select
                    value={businessData.industry}
                    onChange={(e) =>
                      setBusinessData({ ...businessData, industry: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Real Estate / Property">
                      Real Estate / Property
                    </option>
                    <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                    <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                    <option value="Software & SaaS">Software & SaaS</option>
                    <option value="Finance & Fintech">Finance & Fintech</option>
                    <option value="Education & EdTech">Education & EdTech</option>
                    <option value="Logistics & Supply Chain">
                      Logistics & Supply Chain
                    </option>
                    <option value="Other Industry">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Mumbai / Pune / Delhi / Dubai"
                      value={businessData.city}
                      onChange={(e) =>
                        setBusinessData({ ...businessData, city: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Requirement *
                  </label>
                  <select
                    required
                    value={businessData.requirement}
                    onChange={(e) =>
                      setBusinessData({
                        ...businessData,
                        requirement: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>
                    <option value="AI Agent & Automation Systems">
                      AI Agent & Automation Systems
                    </option>
                    <option value="Web & Mobile Application">
                      Web & Mobile Application
                    </option>
                    <option value="WhatsApp Business Automation & CRM">
                      WhatsApp Business Automation & CRM
                    </option>
                    <option value="Enterprise ERP / CRM Solution">
                      Enterprise ERP / CRM Solution
                    </option>
                    <option value="Technology Consultation & Strategy">
                      Technology Consultation & Strategy
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Project Budget
                  </label>
                  <select
                    value={businessData.budget}
                    onChange={(e) =>
                      setBusinessData({ ...businessData, budget: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Under ₹1,00,000">Under ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹5,00,000">
                      ₹1,00,000 - ₹5,00,000
                    </option>
                    <option value="₹5,00,000 - ₹15,00,000">
                      ₹5,00,000 - ₹15,00,000
                    </option>
                    <option value="₹15,00,000+ Enterprise">
                      ₹15,00,000+ Enterprise
                    </option>
                    <option value="Custom / Undecided">Custom / Undecided</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Timeline
                  </label>
                  <select
                    value={businessData.timeline}
                    onChange={(e) =>
                      setBusinessData({ ...businessData, timeline: e.target.value })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="Immediate / ASAP">Immediate / ASAP</option>
                    <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                    <option value="1 Month">1 Month</option>
                    <option value="Flexible / Planning Phase">
                      Flexible / Planning Phase
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Website (Optional)
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={businessData.website}
                      onChange={(e) =>
                        setBusinessData({ ...businessData, website: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Message / Specific Goals
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us a bit about your current workflow or target outcomes..."
                  value={businessData.message}
                  onChange={(e) =>
                    setBusinessData({ ...businessData, message: e.target.value })
                  }
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:border-[#1D63FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeToContact"
                  required
                  checked={businessData.agreeToContact}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      agreeToContact: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-[#1D63FF] rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor="agreeToContact"
                  className="text-xs text-slate-600 font-medium select-none cursor-pointer"
                >
                  I agree to be contacted by Synckraft via WhatsApp or Email.
                </label>
              </div>

              <PrimaryButton
                type="submit"
                fullWidth
                icon={<Send className="w-4 h-4" />}
              >
                Submit Business Enquiry
              </PrimaryButton>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};
