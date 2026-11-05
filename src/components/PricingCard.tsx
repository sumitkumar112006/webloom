import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ServicePackage } from '../data/servicesData';

interface PricingCardProps {
  packageData: ServicePackage;
  onSelectPackage: (packageName: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  packageData,
  onSelectPackage
}) => {
  const isRecommended = packageData.highlighted;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 card-hover-pricing ${
        isRecommended
          ? 'bg-white dark:bg-[#111C33] border-2 border-[#23469F] dark:border-[#3b82f6] shadow-lg md:-translate-y-1'
          : 'bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-gray-300 dark:hover:border-white/20'
      }`}
    >
      {/* SHIMMER EFFECT OVERLAY (constrained to rounded card surface) */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10">
        <span className="shimmer-sweep" />
      </div>

      {/* BADGE */}
      {isRecommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#23469F] text-white shadow-sm">
            Recommended Tier
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
            {packageData.name}
          </h3>
          {packageData.badge && !isRecommended && (
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300">
              {packageData.badge}
            </span>
          )}
        </div>

        {/* BEST FOR BADGE */}
        <div className="mb-4">
          <p className="text-xs font-medium text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/70 dark:bg-blue-950/50 p-2.5 rounded-lg border border-blue-100/60 dark:border-blue-900/40 leading-relaxed">
            <span className="font-bold">Best for:</span> {packageData.bestFor}
          </p>
        </div>

        {/* PACKAGE DESCRIPTION */}
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {packageData.description}
        </p>

        {/* DELIVERABLE CHECKLIST */}
        <div className="border-t border-gray-100 dark:border-white/10 pt-5 mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#101A35] dark:text-white mb-3">
            Package Deliverables
          </p>
          <ul className="space-y-2.5">
            {packageData.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 leading-normal">
                <div className="h-4 w-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="pt-4 border-t border-gray-100 dark:border-white/10 mt-2">
        <button
          type="button"
          onClick={() => onSelectPackage(packageData.name)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            isRecommended
              ? 'bg-[#23469F] text-white hover:bg-[#1b367c] shadow-sm active:scale-[0.98]'
              : 'bg-slate-100 dark:bg-slate-800 text-[#101A35] dark:text-white hover:bg-[#23469F] hover:text-white dark:hover:bg-[#23469F]'
          }`}
        >
          <span>{packageData.ctaLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

