import React from 'react';
import { FAQItem } from '../../types';
import { Plus, Minus } from 'lucide-react';

interface FaqAccordionProps {
  faqs: FAQItem[];
  openFaqId: string | null;
  onToggle: (id: string) => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, openFaqId, onToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {faqs.map((faq) => {
        const isOpen = openFaqId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs transition-all"
          >
            <button
              onClick={() => onToggle(faq.id)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#1D63FF] transition-colors focus:outline-hidden cursor-pointer"
            >
              <span>{faq.question}</span>
              <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D63FF] flex items-center justify-center shrink-0">
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-xs text-slate-600 font-normal leading-relaxed border-t border-slate-50 animate-in fade-in duration-150">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
