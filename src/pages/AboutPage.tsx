import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Sparkles, MapPin, Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { ProcessTimeline } from '../components/ProcessTimeline';

interface AboutPageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors">
      {/* 16 — HERO WITH AUTHENTIC CORE POSITIONING & PROFILE */}
      <section className="bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 pt-14 pb-20 lg:pt-20 lg:pb-28 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40">
                <Sparkles className="h-3.5 w-3.5" />
                <span>About Webloom Studio</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
                A Digital Partner Built on Craft, Utility and Authenticity.
              </h1>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                “{companyData.coreBelief}”
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Based in Partapur, Meerut, Webloom operates across digital design, software development, creative media, and business process automation. We build tools and brand presences that serve genuine business objectives rather than temporary vanity trends.
              </p>
            </div>

            {/* Main Profile Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl bg-white dark:bg-[#111C33] p-4 sm:p-5 border border-gray-200/80 dark:border-white/10 shadow-xl overflow-hidden card-hover">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 mb-4">
                    <img
                      src="/assets/Profile.png"
                      alt="Webloom Studio Leadership"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Founder & Studio Lead</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <h3 className="text-base font-bold text-[#101A35] dark:text-white font-display">
                      Founder-Led Engineering
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Direct strategic planning, clean architecture, and hands-on execution for every engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16 — MISSION AND VISION CARDS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-[#111C33] rounded-2xl p-8 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#23469F] dark:text-[#B9DFF2] block">
              Our Mission
            </span>
            <h2 className="text-2xl font-bold text-[#101A35] dark:text-white font-display">
              Results-Driven Digital Presence for Businesses of All Sizes
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-[#111C33] rounded-2xl p-8 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center">
              <Compass className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#23469F] dark:text-[#B9DFF2] block">
              Our Vision
            </span>
            <h2 className="text-2xl font-bold text-[#101A35] dark:text-white font-display">
              Becoming a Trusted Digital Growth Partner
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>
      </section>

      {/* 17 — TRUST ROOTED IN PROCESS & INTEGRITY (STRICTLY NO FAKE TESTIMONIALS / AWARDS) */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B1120] border-y border-gray-200/60 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Authentic Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              Why We Lead With Engineering, Not Inflated Claims
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Unlike agencies that publish stock client logos, fabricated five-star ratings, or unverified revenue percentages, Webloom establishes trust strictly through demonstrated work, clean source code, transparent scoping, and responsive communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F6F8FC] dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">01</span>
              <h3 className="text-sm font-bold text-[#101A35] dark:text-white">Real Case Studies</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Inspect live deployments and source repositories directly across our portfolio.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F8FC] dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">02</span>
              <h3 className="text-sm font-bold text-[#101A35] dark:text-white">Clear Deliverables</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Every package is defined by concrete deliverables rather than vague promises.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F8FC] dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">03</span>
              <h3 className="text-sm font-bold text-[#101A35] dark:text-white">Founder Access</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Direct technical leadership on every client account without junior account managers.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F8FC] dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">04</span>
              <h3 className="text-sm font-bold text-[#101A35] dark:text-white">Accessible Location</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">A physical presence in Meerut ready for in-person consultations and regional shoots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP DISCIPLINED APPROACH TIMELINE */}
      <ProcessTimeline />

      {/* PHYSICAL STUDIO LOCATION & DIRECT CONTACT DETAILS */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101A35] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B9DFF2]">
                Verified Studio Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Connect Directly With the Webloom Team
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                We welcome discussions for new software initiatives, business automations, and ongoing creative retainer management.
              </p>

              <div className="space-y-3 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#B9DFF2]" />
                  <span>{companyData.legalLocation}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#B9DFF2]" />
                  <a href={`mailto:${companyData.email}`} className="hover:text-white underline">
                    {companyData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#B9DFF2]" />
                  <span>+91 90588 38478 • +91 62079 19163 • +91 92588 15761</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button
                type="button"
                onClick={() => onOpenContact('Web Services', 'Discussion initiated from About Webloom page', 'About Page CTA')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] transition-all shadow-md text-center"
              >
                Start a Project
              </button>
              <Link
                to="/our-work"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all text-center"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

