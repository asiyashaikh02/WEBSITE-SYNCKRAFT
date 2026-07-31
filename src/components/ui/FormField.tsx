import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, error, className = '', ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-xs font-semibold text-slate-700">{label}</label>}
    <input
      {...props}
      className={`w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:bg-white focus:border-[#1D63FF] focus:outline-hidden transition-colors ${className}`}
    />
    {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({ label, error, className = '', ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-xs font-semibold text-slate-700">{label}</label>}
    <textarea
      {...props}
      className={`w-full bg-slate-50/80 border border-slate-200 rounded-xl p-4 text-xs text-slate-800 focus:bg-white focus:border-[#1D63FF] focus:outline-hidden resize-none transition-colors ${className}`}
    />
    {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({ label, options, error, className = '', ...props }) => (
  <div className="space-y-1">
    {label && <label className="block text-xs font-semibold text-slate-700">{label}</label>}
    <select
      {...props}
      className={`w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 focus:bg-white focus:border-[#1D63FF] focus:outline-hidden transition-colors ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}
  </div>
);
