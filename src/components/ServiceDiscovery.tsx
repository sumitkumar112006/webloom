import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  link: string;
  tags: string[];
  previewImage: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const ServiceDiscovery: React.FC = () => {
  // Fifth service "3D Works" selected by default per exact specification
  const [activeId, setActiveId] = useState<string>('3d');

  const services: ServiceItem[] = [
    {
      id: 'web',
      number: '01',
      title: 'Web Services',
      tagline: 'Websites, platforms & digital products',
      link: '/services/web-services',
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
      link: '/services/app-services',
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
      link: '/social-media',
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
      link: '/ai-automation',
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
      link: '/3d-works',
      // Exact four small yellow outlined tags from target reference
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

  return (
    <section
      id="our-services"
      className="py-20 lg:py-28 bg-[#FCFCFD] border-y border-amber-100/40 relative overflow-hidden transition-colors select-none"
    >
      {/* Soft warm ivory / subtle golden radial mesh glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#FEF08A]/25 via-[#FDE68A]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* ENTIRE WIDTH CONTAINER WITH GENEROUS HORIZONTAL MARGINS */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* EXACT TWO-COLUMN LAYOUT (Vertically Centered Left & Right Columns) */}
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
              <Link
                to="/services"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0F172A] hover:text-amber-800 transition-colors"
              >
                <span className="underline decoration-slate-300 decoration-1 underline-offset-4 group-hover:decoration-amber-500">
                  View all services
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* SMALL FEATURED PROJECT CARD DIRECTLY UNDERNEATH */}
            <div className="rounded-2xl bg-white p-3.5 sm:p-4 border border-amber-200/60 shadow-[0_10px_30px_-6px_rgba(251,191,36,0.18)] max-w-[270px] sm:max-w-[280px] transition-all duration-300">
              
              {/* Featured Card Image Container */}
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

              {/* Four Small Yellow Outlined Tags (2x2 grid) */}
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
                  {/* Left Group: Index + Icon Container + Bold Service Name */}
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
                        to={item.link}
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
  );
};
