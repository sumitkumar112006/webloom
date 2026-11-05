import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, ShieldCheck } from 'lucide-react';
import { HairlineHeroFigure } from './HairlineHeroFigure';

interface HairlineHeroSectionProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const HairlineHeroSection: React.FC<HairlineHeroSectionProps> = ({ onOpenContact }) => {
  const scrollToNextSection = () => {
    const el = document.getElementById('service-matrix');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:h-[calc(100vh-5rem)] w-full flex flex-col justify-between bg-white dark:bg-[#070A13] text-[#101A35] dark:text-white overflow-hidden pt-4 pb-3 sm:pt-6 sm:pb-4 lg:pt-5 lg:pb-4 border-b border-gray-200/80 dark:border-white/10 transition-colors duration-200">
      {/* 1. AMBIENT BACKGROUND GLOW & GEOMETRIC DISCIPLINE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-blue-100/70 via-sky-100/40 to-transparent dark:from-[#23469F]/20 dark:via-[#1E3A8A]/10 blur-[120px]" />
        <div className="absolute -top-32 left-10 w-96 h-96 rounded-full bg-blue-100/60 dark:blue-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-diagonal-pattern opacity-5 dark:opacity-15" />
      </div>

      {/* 2. MAIN EDITORIAL HERO STAGE (FULL WIDTH & POSITION RELATIVE ALIGNMENT) */}
      <div className="relative w-full z-10 flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* TOP-LEFT CORNER: HEADLINE & CRAFT ANNOTATION */}
        <div className="relative z-20 pointer-events-auto w-full flex justify-start pt-1 sm:pt-2">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-[680px] space-y-2.5 sm:space-y-3.5 text-left">
            <div className="flex items-center gap-3">
              <span className="font-handwriting text-lg sm:text-xl font-bold text-blue-600 dark:text-[#B9DFF2] -rotate-2 select-none">
                ✦ crafted by humans, not templates
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] 2xl:text-[3.65rem] font-bold tracking-tight leading-[1.08] font-display text-[#101A35] dark:text-white">
              BUILD DIGITAL EXPERIENCES AT THE INTERSECTION OF{' '}
              <span className="font-editorial italic font-normal text-[1.12em] tracking-normal text-[#23469F] dark:text-[#93C5FD]">
                Creative Code
              </span>{' '}
              <span className="font-editorial italic font-light text-[0.88em] text-gray-400 dark:text-gray-500">&amp;</span>{' '}
              <span className="font-editorial italic font-normal text-[1.12em] tracking-normal text-[#1E40AF] dark:text-[#60A5FA] underline decoration-blue-500/40 underline-offset-8">
                3D Precision
              </span>
              .
            </h1>
          </div>
        </div>

        {/* CENTER STAGE: LARGE ISOMETRIC KEYBOARD SHIFTED SLIGHTLY TO THE RIGHT */}
        <div className="relative lg:absolute lg:inset-0 flex items-center justify-center pointer-events-none z-10 my-2 sm:my-3 lg:my-0">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[700px] 2xl:max-w-[760px] pointer-events-auto transform lg:translate-x-16 xl:translate-x-24 2xl:translate-x-28">
            <HairlineHeroFigure />
          </div>
        </div>

        {/* BOTTOM-RIGHT CORNER: DESCRIPTION & CTAS */}
        <div className="relative z-20 pointer-events-auto w-full flex justify-end pb-1 sm:pb-2">
          <div className="max-w-md lg:max-w-lg xl:max-w-[540px] space-y-3 sm:space-y-3.5 text-left sm:text-right">
            <p className="text-sm sm:text-base lg:text-[15px] xl:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
              Webloom unites modern web engineering, internal business applications, automation workflows, and photorealistic 3D visualization under a single high-standards studio.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 sm:justify-end pt-0.5">
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] active:scale-[0.98] transition-all shadow-md hover:shadow-blue-500/20 card-hover group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenContact('Web Services', 'Interactive Hero Let\'s Talk CTA', 'Homepage Hero')}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-[#101A35] dark:text-white border border-slate-200 dark:border-white/15 active:scale-[0.98] transition-all"
              >
                <span>Let's Talk</span>
              </button>
            </div>

            <div className="flex items-center sm:justify-end gap-2 pt-0.5">
              <span className="font-handwriting text-base text-gray-500 dark:text-gray-400 rotate-1 select-none">
                ~ direct developer contact
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. SUBTLE BOTTOM SCROLL INDICATOR (FULL WIDTH) */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 z-20 pt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
        <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-400">
          <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <span>Zero Outsourced Fluff • Authentic Founder-Led Engineering</span>
        </div>

        <button
          type="button"
          onClick={scrollToNextSection}
          className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors group"
          aria-label="Scroll to capability matrix"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#23469F] dark:text-blue-400" />
        </button>
      </div>
    </section>
  );
};
