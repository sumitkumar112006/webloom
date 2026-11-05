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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'web',
      number: '01',
      title: 'Web Services',
      tagline: 'Websites, platforms & digital products',
      link: '/services/web-services',
      tags: ['React & Next.js', 'UI/UX Systems', 'E-Commerce', 'Core Web Vitals'],
      previewImage: '/assets/service_web.png',
      // Bespoke Hand-Crafted Browser Wireframe SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="3" width="20" height="18" rx="3" className="stroke-current" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <circle cx="5" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
          <line x1="6" y1="12" x2="14" y2="12" strokeDasharray="1 1" />
          <rect x="6" y="15" width="5" height="3" rx="0.5" className="fill-current/10" />
          <rect x="13" y="15" width="5" height="3" rx="0.5" className="fill-current/10" />
        </svg>
      )
    },
    {
      id: 'apps',
      number: '02',
      title: 'App Services',
      tagline: 'Scalable applications & software solutions',
      link: '/services/app-services',
      tags: ['Cross-Platform', 'Client Portals', 'Role Auth', 'Realtime Sync'],
      previewImage: '/assets/project_mobile_app.png',
      // Bespoke Hand-Crafted Mobile App & System Interface SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="5" y="2" width="14" height="20" rx="3" className="stroke-current" />
          <line x1="10" y1="5" x2="14" y2="5" />
          <rect x="8" y="9" width="8" height="4" rx="1" className="fill-current/10" />
          <rect x="8" y="15" width="3.5" height="3.5" rx="0.5" />
          <rect x="12.5" y="15" width="3.5" height="3.5" rx="0.5" />
        </svg>
      )
    },
    {
      id: 'social',
      number: '03',
      title: 'Social Media',
      tagline: 'Creative strategy, content & brand presence',
      link: '/social-media',
      tags: ['Short-Form Reels', 'Meta Ads', 'Brand Assets', 'Motion Graphics'],
      previewImage: '/assets/project_social_campaign.png',
      // Bespoke Hand-Crafted Media Production Reel SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M7 4v16" strokeDasharray="2 2" />
          <path d="M17 4v16" strokeDasharray="2 2" />
          <polygon points="11,10 15,12 11,14" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      id: 'ai',
      number: '04',
      title: 'AI Automation',
      tagline: 'Intelligent workflows & AI-driven solutions',
      link: '/ai-automation',
      tags: ['WhatsApp Bots', 'CRM Pipelines', 'Task Routing', 'Custom Agents'],
      previewImage: '/assets/service_ai.png',
      // Bespoke Hand-Crafted Neural Nodes & Flow Graph SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5L15.5 7.5" />
          <path d="M7.5 8.5L10.5 15.5" />
          <path d="M16.5 8.5L13.5 15.5" />
        </svg>
      )
    },
    {
      id: '3d',
      number: '05',
      title: '3D Works',
      tagline: 'Photorealistic CGI, VFX & product visualization',
      link: '/3d-works',
      tags: ['Product CGI Stills', '3D Motion', 'Exploded Animation', 'Spatial VFX'],
      previewImage: '/assets/project_3d_chrono.png',
      // Bespoke Hand-Crafted Isometric 3D Prism SVG Icon
      icon: ({ className = 'w-5 h-5' }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2L3 7L12 12L21 7L12 2Z" />
          <path d="M3 7V17L12 22V12" />
          <path d="M21 7V17L12 22" />
          <path d="M12 12L17 9.5" strokeDasharray="1 1" />
        </svg>
      )
    }
  ];

  const activeHoverItem = services.find((s) => s.id === hoveredId);

  return (
    <section id="our-services" className="py-20 lg:py-28 bg-white border-y border-amber-100/60 relative overflow-hidden transition-colors select-none">
      
      {/* WARM YELLOW AMBIENT SUNSHINE GLOW (Strictly Yellow Gradient & White BG) */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-gradient-to-tl from-[#FEF08A]/45 via-[#FDE68A]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[380px] h-[380px] bg-[#FEF9C3]/50 rounded-full blur-[100px] pointer-events-none" />

      {/* ENTIRE WIDTH CONTAINER (No max-w-7xl restriction, full edge-to-edge) */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: EDITORIAL ANCHOR (Matching FlowStudio reference) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0F172A] tracking-[-0.03em] font-display leading-[1.04]">
                Our <br />
                Services
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-sm leading-relaxed font-normal">
                End-to-end digital, creative and AI solutions for modern businesses.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-amber-700 transition-colors"
              >
                <span className="underline decoration-slate-300 decoration-2 underline-offset-6 group-hover:decoration-amber-500 transition-all">
                  View all services
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* DYNAMIC FLOATING PREVIEW CARD (Visible on hover on desktop) */}
            <div
              className={`hidden lg:block transition-all duration-300 ease-out pt-4 ${
                activeHoverItem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
              }`}
            >
              {activeHoverItem && (
                <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 border border-amber-200/80 shadow-[0_16px_36px_-12px_rgba(251,191,36,0.35)] w-72">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-3 border border-slate-100">
                    <img
                      src={activeHoverItem.previewImage}
                      alt={activeHoverItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-black/70 text-white backdrop-blur">
                      {activeHoverItem.number} / 05
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeHoverItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#FEF9C3] text-amber-900 border border-amber-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: SLEEK FULL-WIDTH EDITORIAL ROWS WITH BESPOKE ICON CRAFT */}
          <div className="lg:col-span-8 divide-y divide-slate-200/80">
            {services.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredId === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.link}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group grid grid-cols-12 items-center py-6 sm:py-7 px-4 -mx-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isHovered
                      ? 'bg-[#FEFCE8]/80 shadow-[0_6px_20px_-6px_rgba(251,191,36,0.22)]'
                      : 'hover:bg-[#FEFCE8]/40'
                  }`}
                >
                  {/* Left: Number + Icon + Title (Col 1 to 5) */}
                  <div className="col-span-12 sm:col-span-5 flex items-center gap-4 sm:gap-6">
                    {/* Editorial Number */}
                    <span className="text-sm font-mono font-semibold text-slate-400 group-hover:text-amber-800 transition-colors w-6">
                      {item.number}
                    </span>

                    {/* Bespoke Hand-Crafted Icon Badge */}
                    <div
                      className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-all duration-200 shrink-0 ${
                        isHovered
                          ? 'bg-[#FEF9C3] text-amber-900 border border-amber-300 scale-105 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border border-slate-200/80 group-hover:bg-[#FEF9C3] group-hover:text-amber-900 group-hover:border-amber-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-[-0.02em] font-display transition-transform duration-200 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Center: Description (Col 6 to 11) */}
                  <div className="col-span-10 sm:col-span-6 mt-2 sm:mt-0 pl-16 sm:pl-0">
                    <span className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-800 font-normal transition-colors">
                      {item.tagline}
                    </span>
                  </div>

                  {/* Right: Directional Arrow (Col 12) */}
                  <div className="col-span-2 sm:col-span-1 flex justify-end">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                        isHovered
                          ? 'bg-[#0F172A] text-white shadow-xs'
                          : 'text-slate-400 group-hover:text-[#0F172A] group-hover:bg-white'
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
