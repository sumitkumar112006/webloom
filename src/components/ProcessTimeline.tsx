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
    <section className="py-16 sm:py-24 bg-white border-y border-amber-100/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800 bg-[#FEF9C3] mb-3 border border-amber-200/80 font-mono">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
            <span>Structured Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
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
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400 hover:shadow-[0_8px_20px_-6px_rgba(251,191,36,0.25)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-amber-700">
                    {num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {deliverables && (
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 font-mono block">
                      Deliverables:
                    </span>
                    {deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
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

