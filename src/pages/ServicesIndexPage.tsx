import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { DriveVideoPlayer } from '../components/DriveVideoPlayer';
import { videoShowcaseList } from '../data/videoShowcaseData';
import { servicesData } from '../data/servicesData';

interface ServicesIndexPageProps {
  onOpenContact?: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

interface ServiceMatrixItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  slug: string;
  tags: string[];
  previewImage: string;
  dataKey: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenContact }) => {
  // Exact Active State requirement: 5th service "3D Works" selected by default
  const [activeId, setActiveId] = useState<string>('3d');
  const [showreelOpen, setShowreelOpen] = useState<boolean>(false);

  const services: ServiceMatrixItem[] = [
    {
      id: 'web',
      number: '01',
      title: 'Web Services',
      tagline: 'Websites, platforms & digital products',
      slug: '/services/web-services',
      dataKey: 'web-services',
      tags: ['Websites & Portals', 'UI/UX Design', 'E-Commerce', 'Core Web Vitals'],
      previewImage: '/assets/service_web.png',
      // Clean Outlined Browser SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
          <line x1="2.5" y1="8.5" x2="21.5" y2="8.5" />
          <circle cx="5.5" cy="6" r="0.75" fill="currentColor" />
          <circle cx="8" cy="6" r="0.75" fill="currentColor" />
          <rect x="6" y="12" width="4.5" height="4.5" rx="1" />
          <line x1="13.5" y1="12" x2="18" y2="12" />
          <line x1="13.5" y1="15" x2="16.5" y2="15" />
        </svg>
      )
    },
    {
      id: 'apps',
      number: '02',
      title: 'App Services',
      tagline: 'Scalable applications & software solutions',
      slug: '/services/app-services',
      dataKey: 'app-services',
      tags: ['Business Apps', 'Customer Portals', 'Cross-Platform', 'Realtime Sync'],
      previewImage: '/assets/project_mobile_app.png',
      // Clean Outlined Smartphone SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="5.5" y="2.5" width="13" height="19" rx="3" />
          <line x1="10" y1="5.5" x2="14" y2="5.5" />
          <circle cx="12" cy="18" r="0.75" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'social',
      number: '03',
      title: 'Social Media',
      tagline: 'Creative strategy, content & brand presence',
      slug: '/social-media',
      dataKey: 'social-media',
      tags: ['Reels Production', 'Brand Posts', 'Meta Ads', 'Motion Graphics'],
      previewImage: '/assets/project_social_campaign.png',
      // Clean Outlined Media Reel & Book SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
          <line x1="8" y1="4" x2="8" y2="20" />
          <circle cx="14" cy="12" r="2.5" />
        </svg>
      )
    },
    {
      id: 'ai',
      number: '04',
      title: 'AI Automation',
      tagline: 'Intelligent workflows & AI-driven solutions',
      slug: '/ai-automation',
      dataKey: 'ai-automation',
      tags: ['WhatsApp Bots', 'CRM Pipelines', 'Task Routing', 'AI Agents'],
      previewImage: '/assets/service_ai.png',
      // Clean Outlined Neural Tree Nodes SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M7.8 7.8L10.5 15.5" />
          <path d="M16.2 7.8L13.5 15.5" />
        </svg>
      )
    },
    {
      id: '3d',
      number: '05',
      title: '3D Works',
      tagline: 'Photorealistic CGI, VFX & product visualization',
      slug: '/3d-works',
      dataKey: '3d-works',
      // Exact four small yellow outlined tags from target reference image
      tags: ['Product CGI Stills', '3D Motion', 'Exploded Animation', 'Spatial VFX'],
      previewImage: '/assets/project_3d_chrono.png',
      // Clean Outlined Isometric 3D Cube SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2.5L3.5 7.5L12 12.5L20.5 7.5L12 2.5Z" />
          <path d="M3.5 7.5V16.5L12 21.5V12.5" />
          <path d="M20.5 7.5V16.5L12 21.5" />
        </svg>
      )
    }
  ];

  const activeService = services.find((s) => s.id === activeId) || services[4];
  const activeDetail = servicesData[activeService.dataKey];

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0F172A] relative overflow-hidden transition-colors select-none">
      
      {/* 1. TOP HERO SECTION (Matching Target Reference Visual Direction) */}
      <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-amber-100/50">
        
        {/* Soft sunshine yellow ambient glow */}
        <div className="absolute top-1/4 right-[8%] w-[600px] h-[500px] bg-gradient-to-b from-[#FEF08A]/40 via-[#FDE68A]/20 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-10 left-[5%] w-[450px] h-[450px] bg-[#FEF9C3]/40 rounded-full blur-[110px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
            
            {/* LEFT HERO COLUMN */}
            <div className="lg:col-span-7 space-y-7 xl:space-y-9">
              {/* Tracker label */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.28em] uppercase text-slate-500">
                  DIGITAL • PRODUCT • CREATIVE
                </span>
              </div>

              {/* Headline with hand-drawn organic accent brush */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.4rem] font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.05] font-display">
                We build digital <br />
                experiences that <br />
                move brands{' '}
                <span className="relative inline-block">
                  forward.
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

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl font-normal leading-relaxed">
                A multidisciplinary studio for web, product, AI and 3D production — from strategy to execution.
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
                <a
                  href="#services-matrix"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] transition-all shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] cursor-pointer"
                >
                  <span>Explore our services</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

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

            {/* RIGHT HERO COLUMN: Luxury Watch Card */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={() => {
                  setActiveId('3d');
                  const el = document.getElementById('services-matrix');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group block relative rounded-[2.5rem] overflow-hidden bg-black aspect-[16/11] lg:aspect-[16/12] xl:aspect-[16/11] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.38)] cursor-pointer border border-black/10"
              >
                <img
                  src="/assets/project_3d_chrono.png"
                  alt="Product CGI & VFX"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />

                <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                </div>

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
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES MATRIX SECTION (EXACT PIXEL-ACCURATE REPRODUCTION OF TARGET REFERENCE) */}
      <section
        id="services-matrix"
        className="py-20 lg:py-28 bg-[#FCFCFD] relative overflow-hidden transition-colors"
      >
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#FEF08A]/25 via-[#FDE68A]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
          
          {/* Exact Two-Column Layout (Vertically Centered) */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
            
            {/* LEFT COLUMN: ~28–30% Width */}
            <div className="w-full lg:w-[29%] xl:w-[28%] shrink-0 space-y-6">
              <div>
                {/* Heading: Large, bold and tightly spaced */}
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0F172A] tracking-[-0.035em] font-display leading-[1.05]">
                  Our <br />
                  Services
                </h2>
                {/* Two-line supporting description */}
                <p className="text-[14.5px] sm:text-[15px] text-slate-500 mt-3 max-w-[280px] leading-relaxed font-normal">
                  End-to-end digital, creative and AI solutions for modern businesses.
                </p>
              </div>

              {/* Underlined 'View all services ↗' link */}
              <div>
                <a
                  href="#department-deepdive"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0F172A] hover:text-amber-800 transition-colors"
                >
                  <span className="underline decoration-slate-300 decoration-1 underline-offset-4 group-hover:decoration-amber-500">
                    View all services
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* SMALL FEATURED PROJECT CARD DIRECTLY UNDERNEATH */}
              <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-amber-200/60 shadow-[0_10px_30px_-6px_rgba(251,191,36,0.18)] max-w-[270px] sm:max-w-[280px] transition-all duration-300">
                
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 mb-3 border border-slate-100">
                  <img
                    src={activeService.previewImage}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  
                  {/* Small Project Index Badge: '05 / 05' */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/75 text-white font-mono font-bold text-[10px] tracking-wider border border-white/10 backdrop-blur-xs">
                    {activeService.number} / 05
                  </div>
                </div>

                {/* Four Small Yellow Outlined Tags (Exact 2x2 layout matching reference) */}
                <div className="grid grid-cols-2 gap-1.5">
                  {activeService.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] font-semibold text-center truncate bg-[#FEFCE8] text-amber-900 border border-amber-300/80 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: ~70–72% Width (Five Horizontal Service Navigation Rows) */}
            <div className="w-full lg:w-[71%] xl:w-[72%] flex-1 flex flex-col justify-center space-y-2.5">
              {services.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`group w-full min-h-[92px] sm:min-h-[98px] lg:h-[100px] px-5 sm:px-7 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#FEFCE8] border border-amber-300 shadow-[0_4px_20px_-4px_rgba(251,191,36,0.22)]'
                        : 'bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveId(item.id);
                      }
                    }}
                  >
                    {/* Left: Index + Icon Container + Service Name */}
                    <div className="flex items-center gap-4 sm:gap-6 min-w-[210px] sm:min-w-[250px] lg:min-w-[280px]">
                      {/* Small Service Index */}
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold transition-colors w-6 ${
                          isActive ? 'text-amber-700' : 'text-slate-400'
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Small Outlined Icon Container */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#FEF9C3] border border-amber-300 text-amber-800'
                            : 'bg-slate-50 border border-slate-200/90 text-slate-500'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Service Name: Bold typography approx 23-25px on desktop */}
                      <h3 className="text-xl sm:text-[23px] lg:text-[24px] font-bold text-[#0F172A] tracking-[-0.02em] font-display">
                        {item.title}
                      </h3>
                    </div>

                    {/* Middle: Supporting Description Horizontally Aligned */}
                    <div className="hidden md:block flex-1 px-4 lg:px-6">
                      <p className="text-[13.5px] lg:text-[14.5px] text-slate-500 font-normal leading-normal">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Right: Arrow Button */}
                    <div className="shrink-0 flex items-center justify-end">
                      {isActive ? (
                        /* Exact Active State: Dark circular arrow button with white arrow */
                        <Link
                          to={item.slug}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform"
                          title={`Explore ${item.title}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        /* Inactive State: Subtle blue-grey arrow */
                        <div className="w-10 h-10 flex items-center justify-center text-slate-400 group-hover:text-slate-700 transition-colors">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. ACTIVE DEPARTMENT DEEP-DIVE (Preserving Full Capabilities & Seamless Intake) */}
      {activeDetail && (
        <section
          id="department-deepdive"
          className="py-16 sm:py-20 bg-white border-t border-slate-100"
        >
          <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20">
            <div className="rounded-[2.5rem] bg-gradient-to-b from-[#FEFCE8]/60 via-white to-white border border-amber-200/80 p-8 sm:p-12 lg:p-14 shadow-sm">
              <div className="max-w-4xl space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                    {activeDetail.categoryNumber} // Department Specifications
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {activeDetail.tagline}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
                  {activeDetail.heroHeadline}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {activeDetail.heroDescription}
                </p>

                {/* Subservices Grid */}
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeDetail.subservices.map((sub, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2"
                    >
                      <h4 className="text-base font-bold text-[#0F172A] font-display flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{sub.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenContact
                        ? onOpenContact(activeDetail.title, `Client initiated inquiry for ${activeDetail.title} from Services Page`, 'Services Page Deepdive')
                        : undefined
                    }
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold bg-[#0F172A] text-white hover:bg-slate-800 transition-all shadow-sm"
                  >
                    <span>Initiate {activeDetail.title} Discussion</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <Link
                    to={activeService.slug}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors"
                  >
                    <span>View Dedicated Department Page</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

    </div>
  );
};
