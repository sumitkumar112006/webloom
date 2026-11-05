import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { DriveVideoPlayer } from './DriveVideoPlayer';
import { videoShowcaseList } from '../data/videoShowcaseData';

interface FlowStudioHeroSectionProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const FlowStudioHeroSection: React.FC<FlowStudioHeroSectionProps> = ({ onOpenContact }) => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section className="relative w-full bg-white text-[#0F172A] overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 select-none">
      
      {/* LUMINOUS WARM YELLOW AMBIENT SUNSHINE GLOW */}
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[500px] bg-gradient-to-b from-[#FEF08A]/45 via-[#FDE68A]/25 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 left-[5%] w-[450px] h-[450px] bg-[#FEF9C3]/40 rounded-full blur-[110px] pointer-events-none" />

      {/* ENTIRE WIDTH CONTAINER (No max-w-7xl restriction, full edge-to-edge with generous studio padding) */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* LEFT COLUMN: HERO EDITORIAL HEADLINE & CTA */}
          <div className="lg:col-span-7 space-y-7 xl:space-y-9">
            
            {/* TRACKER SUB-LABEL */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.28em] uppercase text-slate-500">
                DIGITAL • PRODUCT • CREATIVE
              </span>
            </div>

            {/* GIGANTIC EDITORIAL HEADLINE WITH HAND-DRAWN ORGANIC BRUSH ACCENT */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.4rem] font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.05] font-display">
              We build digital <br />
              experiences that <br />
              move brands{' '}
              <span className="relative inline-block">
                forward.
                {/* Hand-drawn organic curved brush stroke under "forward." */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-5 text-[#C084FC] pointer-events-none"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C65 2.5 175 2.5 237 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                </svg>
              </span>
            </h1>

            {/* SUBTITLE STATEMENT */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
              A multidisciplinary studio for web, product, AI and 3D production — from strategy to execution.
            </p>

            {/* ACTION BUTTONS (Exact FlowStudio matching button pair) */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Primary Pill Button */}
              <button
                type="button"
                onClick={() =>
                  onOpenContact(
                    'Web Services',
                    'Client initiated inquiry from FlowStudio Hero',
                    'FlowStudio Hero CTA'
                  )
                }
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] transition-all shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] cursor-pointer"
              >
                <span>Explore our services</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Watch Showreel Button */}
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="group inline-flex items-center gap-3 text-sm sm:text-base font-bold text-[#0F172A] hover:text-amber-800 transition-colors cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-xs group-hover:border-[#0F172A] group-hover:scale-105 transition-all">
                  <Play className="h-3.5 w-3.5 fill-[#0F172A] text-[#0F172A] ml-0.5" />
                </div>
                <span>Watch showreel</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: FEATURED LUXURY WATCH CARD (Exact FlowStudio reference) */}
          <div className="lg:col-span-5 relative">
            <Link
              to="/3d-works"
              className="group block relative rounded-[2.5rem] overflow-hidden bg-black aspect-[16/11] lg:aspect-[16/12] xl:aspect-[16/11] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.38)] cursor-pointer border border-black/10"
            >
              {/* Luxury Watch exploded-view CGI render */}
              <img
                src="/assets/project_3d_chrono.png"
                alt="Product CGI & VFX"
                className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />

              {/* Top-Right Play Indicator Pill */}
              <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-4 w-4 fill-white text-white ml-0.5" />
              </div>

              {/* Bottom Metadata & Arrow */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-300 block mb-1">
                    FEATURED WORK
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Product CGI & VFX
                  </h3>
                </div>

                <div className="h-9 w-9 rounded-full flex items-center justify-center text-white/90 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* SHOWREEL MODAL */}
      {showreelOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 text-white">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-300">
                Webloom Studio • Showreel
              </span>
              <button
                type="button"
                onClick={() => setShowreelOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <DriveVideoPlayer
                video={videoShowcaseList[0]}
                index={0}
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
