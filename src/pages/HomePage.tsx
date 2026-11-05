import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FlowStudioHeroSection } from '../components/FlowStudioHeroSection';
import { ServiceDiscovery } from '../components/ServiceDiscovery';
import { ProjectCard } from '../components/ProjectCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ContactForm } from '../components/ContactForm';
import { projectsData } from '../data/projectsData';
import { companyData } from '../data/companyData';

interface HomePageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* 01 — FLOWSTUDIO HERO SECTION (Exact Reference Match, Full Width) */}
      <FlowStudioHeroSection onOpenContact={onOpenContact} />

      {/* 02 — OUR SERVICES EDITORIAL MATRIX (Exact Reference Match, Full Width) */}
      <ServiceDiscovery />

      {/* 03 — FEATURED EDITORIAL WORK GRID */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 transition-colors">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2 font-mono">
                Production Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight">
                Featured Work
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
                Real web platforms, interactive systems, and spatial 3D visualization engineered with craft and architectural discipline.
              </p>
            </div>

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-amber-600 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Varied Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={idx === 0 ? 'large' : 'medium'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — AUTHENTIC WEBLOOM PHILOSOPHY & FOUNDER CARD */}
      <section className="py-24 bg-gradient-to-b from-white via-[#FEFCE8]/40 to-white text-[#0F172A] border-y border-amber-100/60 relative overflow-hidden">
        {/* Subtle yellow gradient highlight orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FEF08A]/40 to-[#FDE68A]/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 font-mono">
              The Webloom Philosophy
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug font-display text-[#0F172A]">
              “At Webloom, we believe a website should be more than just a digital business card. It should be an experience, a communication tool, and a driver of growth.”
            </blockquote>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We bring together thoughtful web design, modern front-end engineering, UI/UX architecture, and 3D precision to help companies build an authentic, authoritative presence.
            </p>

            {/* Founder Profile Badge */}
            <div className="pt-4 flex items-center justify-center gap-3.5">
              <img
                src="/assets/Profile.png"
                alt="Founder & Principal"
                className="h-12 w-12 rounded-full object-cover border-2 border-amber-300 shadow-sm"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Webloom Leadership</p>
                <p className="text-[11px] text-amber-700 font-medium font-mono">Founder & Lead Technical Strategist</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-slate-800 shadow-sm transition-all"
              >
                <span>Read Mission & Studio Principles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — 4-STEP DISCIPLINED APPROACH TIMELINE */}
      <ProcessTimeline />

      {/* 06 — ONBOARDING TIMELINE */}
      <ProcessTimeline
        title="Client Onboarding Journey"
        subtitle="Transparent onboarding designed for clarity and rapid time-to-market without guesswork."
        type="onboarding"
      />

      {/* 07 — CONTACT & PROJECT INQUIRY */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 transition-colors" id="contact">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">
                Start A Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need a full digital redesign, an internal workflow app, or continuous short-form content and Meta Ads, our engineers and strategists are ready to collaborate.
              </p>

              <div className="pt-4 space-y-4 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Documented scope of work with milestone timelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Direct founder & engineer accessibility — zero outsourced fluff</span>
                </div>
              </div>

              <div className="pt-6 p-5 rounded-2xl bg-[#FEFCE8]/50 border border-amber-200/80 space-y-2 text-xs">
                <p className="font-bold text-[#0F172A]">Headquarters & Direct Inquiries</p>
                <p className="text-slate-600">{companyData.legalLocation}</p>
                <p className="text-amber-800 font-semibold">{companyData.primaryPhone}</p>
                <p className="text-slate-500">{companyData.email}</p>
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

