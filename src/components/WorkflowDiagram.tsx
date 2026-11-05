import React, { useState } from 'react';
import { ArrowRight, UserCheck, Cpu, Database, MailCheck, CheckCircle2, MessageSquare, Bot, Calendar, ArrowDown } from 'lucide-react';

export const WorkflowDiagram: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'lead' | 'whatsapp'>('lead');

  return (
    <div className="bg-white dark:bg-[#111C33] rounded-2xl border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-sm transition-colors">
      {/* TABS */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100 dark:border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
            Interactive Automation Architecture
          </span>
          <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display mt-0.5">
            How Webloom Automations Execute in Real Time
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveWorkflow('lead')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeWorkflow === 'lead'
                ? 'bg-white dark:bg-[#23469F] text-[#23469F] dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            }`}
          >
            Lead Capture & Conversion Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveWorkflow('whatsapp')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeWorkflow === 'whatsapp'
                ? 'bg-white dark:bg-[#23469F] text-[#23469F] dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
            }`}
          >
            WhatsApp Agent & Booking Pipeline
          </button>
        </div>
      </div>

      {/* PIPELINE 1: LEAD -> AI PROCESSING -> CRM -> FOLLOW-UP -> CONVERSION */}
      {activeWorkflow === 'lead' && (
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Automatically ingest incoming website leads and ad prospects, qualify them with LLM scoring, log them into your CRM, and dispatch custom follow-ups in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] text-center flex flex-col items-center">
              <div className="h-9 w-9 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center mb-2">
                <UserCheck className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Step 01</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">Incoming Lead</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Web form, Meta Ad, or email trigger</p>
            </div>

            <div className="hidden md:flex justify-center text-gray-300">
              <ArrowRight className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>
            <div className="flex md:hidden justify-center text-gray-300 py-1">
              <ArrowDown className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border-2 border-[#23469F] dark:border-[#B9DFF2] bg-blue-50/50 dark:bg-blue-950/30 text-center flex flex-col items-center shadow-sm">
              <div className="h-9 w-9 rounded-lg bg-[#23469F] text-white flex items-center justify-center mb-2">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">Step 02</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">AI Processing</h4>
              <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-1">Scoring, intent tagging & deduplication</p>
            </div>

            <div className="hidden md:flex justify-center text-gray-300">
              <ArrowRight className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>
            <div className="flex md:hidden justify-center text-gray-300 py-1">
              <ArrowDown className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] text-center flex flex-col items-center">
              <div className="h-9 w-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center mb-2">
                <Database className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Step 03</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">CRM Routing</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Synced to Sheets, HubSpot or DB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
                <MailCheck className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#101A35] dark:text-white">Automated Follow-up (Under 30s)</h5>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Sends personalized WhatsApp template or email acknowledgment to ensure high response retention.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-emerald-800/40 bg-emerald-50/60 dark:bg-emerald-950/30 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">Conversion & Sales Alert</h5>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 mt-0.5">
                  Notifies your account manager instantly on WhatsApp with one-tap dial and background context.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PIPELINE 2: CUSTOMER -> WHATSAPP -> AI AGENT -> APPOINTMENT -> CRM */}
      {activeWorkflow === 'whatsapp' && (
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            Allow prospects to ask questions, view service catalogs, and book appointments directly within WhatsApp without human intervention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] text-center flex flex-col items-center">
              <div className="h-9 w-9 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center mb-2">
                <UserCheck className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Step 01</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">Customer Message</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Incoming chat inquiry on WhatsApp</p>
            </div>

            <div className="hidden md:flex justify-center text-gray-300">
              <ArrowRight className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>
            <div className="flex md:hidden justify-center text-gray-300 py-1">
              <ArrowDown className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] text-center flex flex-col items-center">
              <div className="h-9 w-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-2">
                <MessageSquare className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Step 02</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">WhatsApp Webhook</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Official Cloud API verification</p>
            </div>

            <div className="hidden md:flex justify-center text-gray-300">
              <ArrowRight className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>
            <div className="flex md:hidden justify-center text-gray-300 py-1">
              <ArrowDown className="h-5 w-5 text-[#23469F] dark:text-[#B9DFF2]" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border-2 border-[#23469F] dark:border-[#B9DFF2] bg-blue-50/50 dark:bg-blue-950/30 text-center flex flex-col items-center shadow-sm">
              <div className="h-9 w-9 rounded-lg bg-[#23469F] text-white flex items-center justify-center mb-2">
                <Bot className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">Step 03</span>
              <h4 className="text-xs font-bold text-[#101A35] dark:text-white mt-0.5">AI Agent Dialogue</h4>
              <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-1">Answers questions & offers available slots</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1120] flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center shrink-0">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#101A35] dark:text-white">Appointment Confirmed & Synced</h5>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Calendar event created, calendar invite dispatched to customer, and reminder scheduled.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-emerald-800/40 bg-emerald-50/60 dark:bg-emerald-950/30 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <Database className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">Live CRM & Admin Update</h5>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 mt-0.5">
                  Customer record updated with interaction summary and scheduled time slot automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

