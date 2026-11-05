import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { PricingCard } from '../components/PricingCard';
import { FAQAccordion } from '../components/FAQAccordion';

interface PricingPageProps {
  onOpenContact: (plan?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'web-services' | 'app-services' | 'social-media' | 'ai-automation' | '3d-works'>('web-services');

  const tabs = [
    { id: 'web-services' as const, label: 'Web Services' },
    { id: 'app-services' as const, label: 'App Services' },
    { id: 'social-media' as const, label: 'Social Media' },
    { id: 'ai-automation' as const, label: 'AI Automation' },
    { id: '3d-works' as const, label: '3D Models & CAD' }
  ];

  const currentService = servicesData[activeTab];

  const generalPricingFAQs = [
    {
      question: "How do you structure project proposals and quotations?",
      answer: "Every proposal is customized following our introduction call. We evaluate your functional scope, integrations, and milestones, delivering a transparent breakdown with zero hidden charges."
    },
    {
      question: "Are there discounts for bundled services?",
      answer: "Yes. Clients pairing our Web Services with ongoing Social Media Management or AI Automation receive dedicated monthly partner discounts."
    },
    {
      question: "What are the standard payment terms?",
      answer: "Standard project milestones are structured as 50% mobilization advance upon contract sign-off and 50% upon successful final staging deployment and client approval."
    },
    {
      question: "How is 3D visualization and CGI quoted?",
      answer: "All 3D work is quoted on a Custom Quote basis tailored to asset polycounts, animation length, and raytracing compute needs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-14 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40 mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Structured Packages & Scope</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
            TRANSPARENT SERVICE TIERS
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            Compare structured deliverables and service scopes across all Webloom departments. Tailored to your organization's growth phase.
          </p>
        </div>

        {/* SERVICE TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#23469F] text-white shadow-md'
                  : 'bg-white dark:bg-[#111C33] text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-[#162340] border border-gray-200/80 dark:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PACKAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch mb-16">
          {currentService.packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              packageData={pkg}
              onSelectPackage={(pkgName) => onOpenContact(`${currentService.title} — ${pkgName}`)}
            />
          ))}
        </div>

        {/* PROPOSAL STANDARDS BANNER */}
        <div className="rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200 dark:border-white/10 p-8 shadow-sm mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">Authentic Scoping</span>
              <h4 className="text-sm font-bold text-[#101A35] dark:text-white">Zero Hidden Fees</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Every deliverable and revision boundary is documented upfront in writing.</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">Milestone Approvals</span>
              <h4 className="text-sm font-bold text-[#101A35] dark:text-white">Phase Gate Sign-Off</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">You review each phase before we transition into the next development sprint.</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">Ongoing Reliability</span>
              <h4 className="text-sm font-bold text-[#101A35] dark:text-white">Post-Launch Care</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">Included maintenance periods ensure smooth operations after official launch.</p>
            </div>
          </div>
        </div>

        {/* FAQS */}
        <FAQAccordion
          faqs={generalPricingFAQs}
          title="Pricing & Proposal Engagement FAQs"
          subtitle="Everything you need to know about proposals, timelines, milestones, and agreements."
        />
      </div>
    </div>
  );
};

