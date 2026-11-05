import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  type?: 'approach' | 'onboarding';
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  title = 'Our Disciplined 4-Step Approach',
  subtitle = 'How we turn ambiguous business goals into dependable digital assets without missed deadlines or scope creep.',
  type = 'approach'
}) => {
  const steps = type === 'approach' ? companyData.approach : companyData.onboarding;

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] border-y border-gray-100 dark:border-white/10 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-950/50 mb-3 border border-blue-100/60 dark:border-blue-900/40">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Structured Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const num = 'number' in item ? item.number : item.step;
            const deliverables = 'deliverables' in item ? item.deliverables : null;

            return (
              <div
                key={idx}
                className="relative bg-[#F6F8FC] dark:bg-[#111C33] rounded-2xl p-6 border border-gray-200/70 dark:border-white/10 hover:border-[#23469F]/40 dark:hover:border-[#B9DFF2]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-[#23469F] dark:text-[#B9DFF2]">
                    {num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-full border border-gray-200/60 dark:border-slate-700">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#101A35] dark:text-white font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {deliverables && (
                  <div className="pt-3 border-t border-gray-200/60 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block">
                      Deliverables:
                    </span>
                    {deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-gray-700">
                        <CheckCircle2 className="h-3 w-3 text-[#23469F] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
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

