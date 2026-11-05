import React from 'react';
import { ArrowRight, CheckCircle2, Film, Image as ImageIcon, Sparkles, Target, Zap, ShieldCheck } from 'lucide-react';
import { PricingCard } from '../components/PricingCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { servicesData } from '../data/servicesData';

interface SocialMediaPageProps {
  onOpenContact: (plan?: string) => void;
}

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onOpenContact }) => {
  const socialService = servicesData['social-media'];

  const creativeGrid = [
    {
      title: 'High-Retention Video Reels',
      type: 'Video Scripting & Shoots',
      desc: 'Hook-driven 9:16 vertical video shot on high-definition cinema cameras with punchy subtitles.',
      badge: 'Instagram & Shorts',
      img: '/assets/project_social_campaign.png'
    },
    {
      title: 'Designed Carousel Creatives',
      type: 'Visual Brand Design',
      desc: 'Educational and value-packed graphics designed with strict typographic and color hierarchy.',
      badge: 'Feed Engagement',
      img: '/assets/service_web.png'
    },
    {
      title: 'Interactive Daily Stories',
      type: 'Community Retention',
      desc: 'Polls, countdowns, BTS, and customer interactions to maintain daily visibility.',
      badge: 'Daily Cadence',
      img: '/assets/project_mobile_app.png'
    },
    {
      title: 'Targeted Meta Ads (FB + IG)',
      type: 'Paid Performance',
      desc: 'Hyper-local radius and city targeting or national interest campaigns with continuous weekly ROAS audits.',
      badge: 'Included in All Plans',
      img: '/assets/project_web_automation.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors">
      {/* 14 — STUDIO HERO */}
      <section className="bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 pt-14 pb-20 lg:pt-20 lg:pb-28 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40">
              <Film className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2]" />
              <span>Full-Stack Content Studio & Meta Ads</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
              Create Content That Commands Attention and Generates Real Inquiries.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Complete content creation, professional reel shooting, editing, and Meta advertising — all managed under one roof with zero friction.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('Social Media Management')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] shadow-sm transition-all"
              >
                <span>Request Social Media Scope</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 dark:bg-[#1E293B] text-[#101A35] dark:text-white hover:bg-slate-200 dark:hover:bg-[#334155] transition-all"
              >
                <span>Compare Monthly Plans</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL CONTENT STUDIO GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
            Production Quality
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
            The Content Deliverables We Ship Every Month
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            No stock templates or generic copy. Every piece of content is scripted, designed, and curated for your exact market positioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {creativeGrid.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111C33] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 shadow-sm card-hover flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur">
                  {item.badge}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONTHLY PLANS UX (NO PRICE TAGS IN COMPLIANCE WITH USER PROMPT) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] border-y border-gray-200/60 dark:border-white/10 transition-colors" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Transparent Package Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              Social Media & Meta Ads Management Plans
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Every plan includes full shooting, editing, scripting, designed posts, story cadence, and Meta Ads management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialService.packages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                packageData={pkg}
                onSelectPackage={(pkgName) => onOpenContact(`Social Media — ${pkgName}`)}
              />
            ))}
          </div>

          {/* CRITICAL META ADS DISCLOSURE STRIP AS SPECIFIED IN PDF & PROMPT */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/40 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="h-10 w-10 rounded-xl bg-[#23469F] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Target className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-[#101A35] dark:text-white font-display">
                  Meta Ads Campaign Structure (Facebook + Instagram)
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Campaign setup, audience building, and weekly performance optimization are included across all three plans. In compliance with transparent agency practices, client ad spend is paid directly to Meta, while our team handles comprehensive campaign structuring.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-[#111C33] rounded-lg border border-blue-100 dark:border-white/10">
                    <span className="font-bold text-[#101A35] dark:text-white block">Standard Demographic Targeting</span>
                    <span className="text-gray-600 dark:text-gray-400 text-[11px]">Interest, behavior & broad lookalike optimization</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-[#111C33] rounded-lg border border-blue-100 dark:border-white/10">
                    <span className="font-bold text-[#101A35] dark:text-white block">Specific Area / Radius Targeting</span>
                    <span className="text-gray-600 dark:text-gray-400 text-[11px]">City, pincode, or kilometer radius for local businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <FAQAccordion
        faqs={socialService.faqs}
        title="Social Media Management FAQs"
        subtitle="Clear details on video shoot coordination, approval workflows, and ad spend billing."
      />
    </div>
  );
};

