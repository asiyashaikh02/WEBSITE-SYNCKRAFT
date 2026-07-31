import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { FormInput, FormTextarea, FormSelect } from './ui/FormField';
import { PrimaryButton } from './ui/Button';
import { Calendar, Clock, CheckCircle2, User, Mail, Phone, Building2 } from 'lucide-react';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessRedirect?: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  onSuccessRedirect,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      if (onSuccessRedirect) onSuccessRedirect();
    }, 2000);
  };

  const timeOptions = [
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '02:00 PM', label: '02:00 PM' },
    { value: '04:00 PM', label: '04:00 PM' },
    { value: '06:00 PM', label: '06:00 PM' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="-m-6 sm:-m-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-[#1D63FF] p-6 text-white relative rounded-t-3xl">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
            Schedule Session
          </span>
          <h3 className="text-2xl font-bold">Book a Strategy Call</h3>
          <p className="text-blue-100 text-xs mt-1">
            30-minute free technology roadmap & architecture consultation.
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Call Scheduled!</h4>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              We have reserved your slot. A Google Meet invitation has been sent to{' '}
              <span className="font-semibold text-slate-900">{formData.email || 'your email'}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormInput
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormInput
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormInput
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormInput
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormInput
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 z-10" />
                  <FormSelect
                    options={timeOptions}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <FormTextarea
              label="Project Overview / Goals"
              rows={3}
              placeholder="Briefly describe what software or system you wish to build..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />

            <PrimaryButton type="submit" size="sm" className="w-full">
              Confirm Strategy Call Booking
            </PrimaryButton>

            <p className="text-[11px] text-center text-slate-500 pt-1">
              Or speak with sales directly:{' '}
              <a href="tel:+919987155988" className="font-semibold text-[#1D63FF] hover:underline">
                +91 99871 55988
              </a>{' '}
              |{' '}
              <a href="mailto:grow@synckraft.in" className="font-semibold text-[#1D63FF] hover:underline">
                grow@synckraft.in
              </a>
            </p>
          </form>
        )}
      </div>
    </Modal>
  );
};
