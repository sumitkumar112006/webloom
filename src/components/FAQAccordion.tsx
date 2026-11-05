import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers to common questions about engagement scope, processes, and delivery.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-100/60 dark:bg-blue-950/50 mb-3 border border-blue-100/60 dark:border-blue-900/40">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#111C33] rounded-xl border border-gray-200/80 dark:border-white/10 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#23469F]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#101A35] dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#23469F] dark:text-[#B9DFF2]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-white/10 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

