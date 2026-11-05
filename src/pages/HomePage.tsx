import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Cpu, Box, Sparkles, CheckCircle2, ShieldCheck, Layers, Star } from 'lucide-react';
import { HairlineHeroSection } from '../components/HairlineHeroSection';
import { ServiceDiscovery } from '../components/ServiceDiscovery';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewCard } from '../components/ReviewCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ContactForm } from '../components/ContactForm';
import { projectsData } from '../data/projectsData';
import { reviewsData } from '../data/reviewsData';
import { companyData } from '../data/companyData';

interface HomePageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* 06 — INTERACTIVE HAIRLINE HERO SECTION */}
      <HairlineHeroSection onOpenContact={onOpenContact} />

      {/* 07 — SERVICE DISCOVERY SECTION */}
      <ServiceDiscovery />

      {/* 10 — FEATURED EDITORIAL WORK GRID */}
      <section className="py-20 lg:py-28 bg-white dark:bg-[#0B1120] transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
                Selected Case Studies
              </span>
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
                  OUR WORK
                </h2>
                <span className="font-handwriting text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 rotate-2 select-none">
                  ~ real code & production assets
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                See what we've built across web applications, mock platforms, local studios, and 3D visualization.
              </p>
            </div>

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* SINGLE LINE CONTINUOUS SCROLLING MARQUEE (RIGHT TO LEFT) */}
          <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            {/* Fade gradients on left & right edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-10" />

            <div className="animate-marquee-left flex items-stretch gap-6">
              {[...projectsData, ...projectsData].map((project, idx) => (
                <ProjectCard
                  key={`${project.id}-${idx}`}
                  project={project}
                  variant="compact"
                />
              ))}
            </div>
          </div>

          {/* VERIFIED 5-STAR RATINGS SCROLLING FROM LEFT TO RIGHT */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Verified 5.0 ★ Client Ratings • Continuous Left to Right
                </span>
                <span className="hidden sm:inline-block font-handwriting text-sm text-gray-500 dark:text-gray-400">
                  (50+ delivered projects)
                </span>
              </div>
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                Hover to pause
              </span>
            </div>

            <div className="relative w-full overflow-hidden py-3 -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-[#0B1120] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-[#0B1120] to-transparent z-10" />

              <div className="animate-marquee-right flex items-stretch gap-6">
                {[...reviewsData, ...reviewsData].map((review, idx) => (
                  <ReviewCard
                    key={`home-rev-${review.id}-${idx}`}
                    review={review}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16 — AUTHENTIC WEBLOOM POSITIONING */}
      <section className="py-20 bg-slate-50 dark:bg-[#0A1022] text-[#101A35] dark:text-white border-y border-gray-200/80 dark:border-white/10 transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#23469F] dark:text-[#B9DFF2]">
              The Webloom Philosophy
            </span>
            <blockquote className="font-editorial italic font-normal text-3xl sm:text-4xl lg:text-5xl leading-snug text-[#101A35] dark:text-white">
              “At Webloom, we believe a website should be more than just a digital business card. It should be an <span className="font-semibold text-[#23469F] dark:text-[#93C5FD]">experience</span>, a communication tool, and a driver of growth.”
            </blockquote>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We bring together thoughtful web design, development, UI/UX, branding, and digital marketing to help businesses build a stronger and more memorable online identity.
            </p>

            {/* Founder Profile Badge */}
            <div className="pt-2 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-3.5">
                <img
                  src="/assets/Profile.png"
                  alt="Founder & Principal"
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#23469F]/30 dark:border-[#B9DFF2]/50 shadow-md"
                />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#101A35] dark:text-white uppercase tracking-wider">Webloom Leadership</p>
                  <p className="text-[11px] text-[#23469F] dark:text-[#B9DFF2] font-medium">Founder & Lead Technical Strategist</p>
                </div>
              </div>
              <span className="font-handwriting text-lg sm:text-xl text-[#23469F] dark:text-[#B9DFF2] -rotate-2 select-none">
                — hands-on craft, every single line
              </span>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] dark:bg-white dark:text-[#101A35] dark:hover:bg-[#B9DFF2] shadow-sm transition-colors"
              >
                <span>Read Mission & Vision</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP DISCIPLINED APPROACH TIMELINE */}
      <ProcessTimeline />

      {/* ONBOARDING TIMELINE */}
      <ProcessTimeline
        title="Client Onboarding Journey"
        subtitle="Transparent onboarding designed for clarity and rapid time-to-market without guesswork."
        type="onboarding"
      />

      {/* 18 — CONTACT & PROJECT INQUIRY */}
      <section className="py-20 lg:py-28 bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors" id="contact">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
                  Start A Conversation
                </span>
                <span className="font-handwriting text-base text-blue-600 dark:text-[#B9DFF2] -rotate-2 select-none">
                  ✦ direct conversation with founders
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you need a full digital redesign, an internal workflow app, or continuous short-form content and Meta Ads, our engineers and strategists are ready to collaborate.
              </p>

              <div className="pt-4 space-y-4 border-t border-gray-200 dark:border-white/10 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Documented scope of work with milestone timelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Direct founder & engineer accessibility — zero outsourced fluff</span>
                </div>
              </div>

              <div className="pt-6 p-5 rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200 dark:border-white/10 space-y-2 text-xs">
                <p className="font-bold text-[#101A35] dark:text-white">Headquarters & Direct Inquiries</p>
                <p className="text-gray-600 dark:text-gray-300">{companyData.legalLocation}</p>
                <p className="text-[#23469F] dark:text-[#B9DFF2] font-semibold">{companyData.primaryPhone}</p>
                <p className="text-gray-500 dark:text-gray-400">{companyData.email}</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm source="Homepage Contact Section" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

