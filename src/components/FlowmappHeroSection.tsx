import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Monitor,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  MousePointer2,
  CornerDownRight
} from 'lucide-react';

interface FlowmappHeroSectionProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const FlowmappHeroSection: React.FC<FlowmappHeroSectionProps> = ({ onOpenContact }) => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('mobile');
  const [winClientsToggle, setWinClientsToggle] = useState<boolean>(true);

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[96svh] bg-white text-[#0F172A] overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 select-none">
      
      {/* 1. LUMINOUS WARM SUNNY YELLOW AMBIENT GRADIENTS (Strictly Yellow Gradient & White BG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary central warm yellow sunbeam glow */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[680px] sm:w-[920px] h-[480px] bg-gradient-to-b from-[#FEF08A]/70 via-[#FDE047]/35 to-transparent rounded-full blur-[110px]" />
        
        {/* Soft amber accent orbs left & right */}
        <div className="absolute top-20 left-[10%] w-[380px] h-[380px] bg-[#FEF9C3]/80 rounded-full blur-[90px]" />
        <div className="absolute top-28 right-[12%] w-[420px] h-[420px] bg-[#FDE68A]/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-gradient-to-t from-[#FEF08A]/30 to-transparent rounded-full blur-[120px]" />

        {/* Clean, faint geometric blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. TOP RATING & COLLABORATOR PROOF PILL */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.06)] backdrop-blur-md">
            <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Top Rated Studio
            </span>

            {/* Overlapping team & client avatars */}
            <div className="flex -space-x-1.5 overflow-hidden py-0.5">
              <img
                src="/assets/Profile.png"
                alt="Founder"
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
              />
              <div className="h-5 w-5 rounded-full bg-amber-400 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                S
              </div>
              <div className="h-5 w-5 rounded-full bg-indigo-500 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                W
              </div>
              <div className="h-5 w-5 rounded-full bg-sky-400 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white">
                3D
              </div>
            </div>

            <span className="text-xs font-semibold text-slate-700">
              100% Direct Founder Led
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-500">
            Over 100+ bespoke digital blueprints & production launches
          </span>
        </div>

        {/* 3. CENTRAL EDITORIAL HEADLINE & VALUE PROPOSITION */}
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-[#0F172A] leading-[1.08] font-display">
            Visual platform for <br className="hidden sm:inline" />
            planning UX and <br className="hidden sm:inline" />
            pitching web design
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We architect websites, dynamic product platforms, and 3D precision motion designed to communicate credibility and convert client briefs into real results.
          </p>

          {/* Interactive Platform Switcher */}
          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-medium text-slate-700">
            <span className="text-slate-600 font-semibold">
              {winClientsToggle ? 'Win more clients' : 'Deliver 3x faster'}
            </span>

            {/* Tactile Switch Toggle */}
            <button
              type="button"
              onClick={() => setWinClientsToggle(!winClientsToggle)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                winClientsToggle ? 'bg-[#0F172A]' : 'bg-amber-400'
              }`}
              aria-label="Toggle client objective"
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                  winClientsToggle ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            {/* Framework badges */}
            <div className="hidden sm:flex items-center gap-2.5 text-[11px] font-mono text-slate-500 border-l border-slate-200 pl-4">
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-800">React</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-800">Tailwind</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-800">Three.js</span>
            </div>
          </div>

          {/* Main Flowmapp Pill Button CTA with Squiggle Arrow */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                onOpenContact(
                  'Web Services',
                  'Client initiated project inquiry from Flowmapp-style Hero',
                  'Flowmapp Hero CTA'
                )
              }
              className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-extrabold text-white bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-200 shadow-[0_14px_30px_-8px_rgba(37,99,235,0.45)] hover:shadow-[0_18px_36px_-8px_rgba(37,99,235,0.55)] cursor-pointer"
            >
              <span>Start planning</span>
              {/* Hand-crafted curved squiggle vector arrow */}
              <svg
                className="w-8 h-4 stroke-white stroke-[2.5] fill-none transition-transform group-hover:translate-x-1"
                viewBox="0 0 36 16"
              >
                <path d="M1 8 Q 5 2, 9 8 T 17 8 T 25 8 L 33 8 M 27 2 L 33 8 L 27 14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* 4. SURROUNDING FLOATING CANVAS ARTIFACTS (Interactive Wireframe & Connected Nodes) */}
        <div className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-10 min-h-[360px] sm:min-h-[460px]">
          
          {/* CURVED SVG CONNECTOR LINE (Between Right Top Card & Right Bottom Feedback Card) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block overflow-visible">
            <path
              d="M 780 70 C 760 140, 910 180, 910 240"
              stroke="#6366F1"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="5 5"
              className="animate-pulse"
            />
            {/* Start circle pin */}
            <circle cx="780" cy="70" r="5" fill="#6366F1" />
            {/* End circle pin */}
            <circle cx="910" cy="240" r="5" fill="#6366F1" />
          </svg>

          {/* LEFT ARTIFACT: Interactive Wireframe Page Block Card */}
          <div className="lg:absolute lg:top-4 lg:left-0 w-full max-w-xs mx-auto lg:mx-0 z-20">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-1">
              
              {/* Wireframe Card Topbar with Device Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setActiveDevice('desktop')}
                    className={`p-1.5 rounded-md text-xs font-semibold transition-colors ${
                      activeDevice === 'desktop' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1.5 rounded-md text-xs font-semibold transition-colors ${
                      activeDevice === 'mobile' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'
                    }`}
                    title="Mobile Wireframe"
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                </div>

                <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                  {activeDevice === 'mobile' ? '390px' : '1440px'}
                </span>
              </div>

              {/* Page Title & Scope Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-extrabold text-slate-900 font-display">
                  Main Page
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold text-emerald-800 bg-emerald-100/80">
                  14d / Ready
                </span>
              </div>

              {/* Stacked Pastel Wireframe Sections (Exact Flowmapp signature blocks) */}
              <div className="space-y-2">
                {/* Yellow: Header */}
                <div className="p-2.5 rounded-xl bg-[#FEF9C3] border border-[#FEF08A] flex items-center justify-between text-xs font-bold text-[#854D0E] shadow-2xs">
                  <span>Header</span>
                  <span className="text-[10px] opacity-70">Hero</span>
                </div>

                {/* Mint Green: Company Overview */}
                <div className="p-2.5 rounded-xl bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-between text-xs font-bold text-[#166534] shadow-2xs">
                  <span>Company Overview</span>
                  <span className="text-[10px] opacity-70">Story</span>
                </div>

                {/* Peach / Coral: Feature */}
                <div className="p-2.5 rounded-xl bg-[#FFE4E6] border border-[#FECDD3] flex items-center justify-between text-xs font-bold text-[#9F1239] shadow-2xs">
                  <span>Features & 3D Model</span>
                  <span className="text-[10px] opacity-70">Interactive</span>
                </div>

                {/* Sky Blue: CTA */}
                <div className="p-2.5 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-between text-xs font-bold text-[#075985] shadow-2xs">
                  <span>Inquiry & Intake</span>
                  <span className="text-[10px] opacity-70">Convert</span>
                </div>

                {/* Lavender: Footer */}
                <div className="p-2.5 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-between text-xs font-bold text-[#6B21A8] shadow-2xs">
                  <span>Footer Handover</span>
                  <span className="text-[10px] opacity-70">Links</span>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING CURSOR 1: Emily in purple bubble */}
          <div className="hidden lg:flex absolute top-12 left-[28%] items-center gap-1.5 px-3 py-1 rounded-full bg-[#818CF8] text-white text-xs font-bold shadow-md transform -rotate-3 pointer-events-none">
            <MousePointer2 className="h-3 w-3 fill-white" />
            <span>Emily</span>
          </div>

          {/* FLOATING TOKEN: Dollar / Value coin */}
          <div className="hidden lg:flex absolute top-4 left-[24%] h-11 w-11 rounded-full bg-emerald-400 text-white font-bold text-lg items-center justify-center shadow-lg transform -rotate-6">
            $
          </div>

          {/* RIGHT TOP CARD: Generate Scope / Invoice Node */}
          <div className="hidden lg:block absolute top-0 right-[16%] z-20">
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.08)] p-4 w-44 hover:-translate-y-1 transition-transform">
              <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                <FileText className="h-4 w-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">
                Scope & Wireframes
              </h4>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Milestone documentation
              </p>
            </div>
          </div>

          {/* FLOATING CURSOR 2: Nik in coral bubble */}
          <div className="hidden lg:flex absolute bottom-24 right-[25%] items-center gap-1.5 px-3 py-1 rounded-full bg-[#F43F5E] text-white text-xs font-bold shadow-md transform rotate-6 pointer-events-none">
            <MousePointer2 className="h-3 w-3 fill-white" />
            <span>Nik</span>
          </div>

          {/* RIGHT BOTTOM CARD: Client Approval Feedback Node */}
          <div className="hidden lg:block absolute bottom-6 right-0 z-20">
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_16px_38px_-12px_rgba(0,0,0,0.1)] p-4 max-w-xs hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/Profile.png"
                  alt="Client"
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-slate-200"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Client Partner
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Just now
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-snug">
                “We approve the proposal! The wireframe flow is clear. Excited for the next steps.”
              </p>
            </div>
          </div>

          {/* FLOATING TOKEN: 3D Sparkle badge */}
          <div className="hidden lg:flex absolute bottom-32 right-[3%] h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white items-center justify-center shadow-md">
            <Sparkles className="h-4 w-4 fill-white" />
          </div>

        </div>

      </div>

    </section>
  );
};
