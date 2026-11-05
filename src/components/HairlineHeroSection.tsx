import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { HairlineHeroFigure } from './HairlineHeroFigure';

interface HairlineHeroSectionProps {
  onOpenContact: () => void;
}

export const HairlineHeroSection: React.FC<HairlineHeroSectionProps> = ({ onOpenContact }) => {
  const scrollToNextSection = () => {
    const el = document.getElementById('service-matrix');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-[98svh] w-full flex flex-col justify-between bg-[#070A13] text-white overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-white/10">
      {/* 1. AMBIENT BACKGROUND GLOW & GEOMETRIC DISCIPLINE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep blue atmospheric lighting */}
        <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#23469F]/20 via-[#1E3A8A]/10 to-transparent blur-[120px]" />
        <div className="absolute -top-32 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]" />
        
        {/* Subtle geometric isometric coordinate grid */}
        <div className="absolute inset-0 bg-diagonal-pattern opacity-15" />
      </div>

      {/* 2. MAIN TWO-COLUMN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & IDENTITY */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small agency identity label / studio indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-[#B9DFF2] bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>WEBLOOM // STUDIO • PARTAPUR, MEERUT</span>
            </div>

            {/* Large, bold, editorial headline with selective accent styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] font-display text-white">
              BUILD DIGITAL EXPERIENCES AT THE INTERSECTION OF{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B9DFF2] to-[#60A5FA]">
                CREATIVE CODE
              </span>{' '}
              &amp;{' '}
              <span className="text-[#B9DFF2] underline decoration-blue-500/40 underline-offset-8">
                3D PRECISION
              </span>
              .
            </h1>

            {/* Short authentic description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-normal">
              Webloom unites modern web engineering, internal business applications, automation workflows, and photorealistic 3D visualization under a single high-standards studio.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#2b54bc] active:scale-[0.98] transition-all shadow-lg hover:shadow-blue-500/20 card-hover group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/15 active:scale-[0.98] transition-all backdrop-blur-sm"
              >
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Studio Pillars & Live Specs Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                <span className="text-gray-300">Web Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                <span className="text-gray-300">App Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                <span className="text-gray-300">AI Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                <span className="text-gray-300">3D / CAD Works</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LARGE CUSTOM HAIRLINE ISOMETRIC 3D FIGURE */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <HairlineHeroFigure />
          </div>

        </div>
      </div>

      {/* 3. SUBTLE BOTTOM SCROLL INDICATOR */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Zero Outsourced Fluff • Authentic Founder-Led Engineering</span>
        </div>

        <button
          type="button"
          onClick={scrollToNextSection}
          className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-gray-400 hover:text-white transition-colors group"
          aria-label="Scroll to capability matrix"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:text-blue-400" />
        </button>
      </div>
    </section>
  );
};

