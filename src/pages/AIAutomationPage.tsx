import React from 'react';
import { ArrowRight, Cpu, CheckCircle2, ShieldCheck, Bot, Database, Workflow, Sparkles } from 'lucide-react';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { PricingCard } from '../components/PricingCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { servicesData } from '../data/servicesData';

interface AIAutomationPageProps {
  onOpenContact: (plan?: string) => void;
}

export const AIAutomationPage: React.FC<AIAutomationPageProps> = ({ onOpenContact }) => {
  const aiService = servicesData['ai-automation'];

  const automationPillars = [
    {
      title: 'WhatsApp Business Automations',
      desc: 'Connect your verified WhatsApp Business API to automatically answer customer questions, share PDF catalogs, and collect appointment details.',
      icon: Bot
    },
    {
      title: 'CRM & Multi-Channel Routing',
      desc: 'Route leads instantly from web forms, Facebook Ads, and email to Google Sheets, Notion, or your custom CRM within seconds.',
      icon: Database
    },
    {
      title: 'Automated Booking & Sync',
      desc: 'Enable seamless self-service appointments with Google Calendar / Outlook synchronization, instant confirmations, and WhatsApp reminder alerts.',
      icon: Workflow
    },
    {
      title: 'Contextual AI Knowledge Agents',
      desc: 'Deploy custom LLM agents grounded strictly in your business documentation to assist customers and qualify high-ticket inquiries.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors">
      {/* 15 — AI AUTOMATION HERO */}
      <section className="bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 pt-14 pb-20 lg:pt-20 lg:pb-28 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40">
              <Cpu className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2]" />
              <span>Business Process Automation & AI Systems</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
              Engineered Automation That Removes Repetitive Manual Work.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We build dependable automation pipelines, WhatsApp conversational bots, and CRM sync systems so your team can focus on closing deals rather than data entry.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('AI Automation & Workflows')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] shadow-sm transition-all"
              >
                <span>Request Automation Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#diagrams"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 dark:bg-[#1E293B] text-[#101A35] dark:text-white hover:bg-slate-200 dark:hover:bg-[#334155] transition-all"
              >
                <span>View Live Pipelines</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 15 — INTERACTIVE CLEAN WORKFLOW DIAGRAMS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="diagrams">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
            Execution Logic
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
            Clean, Proven Automation Pipelines
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Explore how data flows through our automation architectures with zero manual delays or missing leads.
          </p>
        </div>

        <WorkflowDiagram />
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B1120] border-y border-gray-200/60 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              Automation Modules Built for Business Utility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-[#F6F8FC] dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-3 card-hover">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES UX (NO PRICE TAGS IN COMPLIANCE WITH USER RULE) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
            Scope-Based Tiers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
            AI Automation Packages & Deliverables
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            From basic lead alerts to autonomous 24/7 AI agents and custom CRM integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {aiService.packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              packageData={pkg}
              onSelectPackage={(pkgName) => onOpenContact(`AI Automation — ${pkgName}`)}
            />
          ))}
        </div>
      </section>

      {/* FAQS */}
      <FAQAccordion
        faqs={aiService.faqs}
        title="AI Automation FAQs"
        subtitle="Technical details on API limits, WhatsApp Cloud verification, and system reliability."
      />
    </div>
  );
};

