import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Sparkles, Globe, Smartphone, Share2, Cpu, Box } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  previewDescription: string;
  highlights: string[];
  previewImage: string;
}

export const ServiceDiscovery: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'web',
      number: '01',
      title: 'Web Services',
      summary: 'Build your digital presence.',
      link: '/services/web-services',
      icon: Globe,
      tags: ['Websites', 'UI/UX Design', 'E-Commerce', 'Technical SEO'],
      previewDescription:
        'Engineered websites designed with brand-focused typography, responsive-first layouts, and zero visual clutter to establish instant authority.',
      highlights: [
        'Custom component-driven UI/UX design',
        'Sub-second Core Web Vitals optimization',
        'Direct WhatsApp & form lead routing',
        '1-Year maintenance & ongoing support'
      ],
      previewImage: '/assets/service_web.png'
    },
    {
      id: 'apps',
      number: '02',
      title: 'App Services',
      summary: 'Turn ideas into useful products.',
      link: '/services/app-services',
      icon: Smartphone,
      tags: ['Business Apps', 'Customer Portals', 'Booking Systems', 'Custom Apps'],
      previewDescription:
        'Ergonomic, role-based business applications built to coordinate appointments, record attendance, manage inventory, and serve customers.',
      highlights: [
        'Cross-platform mobile & responsive web apps',
        'Role-based permissions & secure authentication',
        'Real-time database sync & data export',
        'Automated booking & customer notification flow'
      ],
      previewImage: '/assets/project_mobile_app.png'
    },
    {
      id: 'social',
      number: '03',
      title: 'Social Media',
      summary: 'Create content that gets attention.',
      link: '/social-media',
      icon: Share2,
      tags: ['Reels Production', 'Brand Posts', 'Meta Ads', 'Community Growth'],
      previewDescription:
        'Complete short-form video scripting, filming, and post-production paired with hyper-targeted Meta advertising campaigns.',
      highlights: [
        'High-retention reel scripting and shooting',
        'Designed graphics, carousels & daily stories',
        'Radius & pincode-specific Meta Ads management',
        'Consistent weekly brand publishing cadence'
      ],
      previewImage: '/assets/project_social_campaign.png'
    },
    {
      id: 'ai',
      number: '04',
      title: 'AI Automation',
      summary: 'Remove repetitive work.',
      link: '/ai-automation',
      icon: Cpu,
      tags: ['Business Workflows', 'WhatsApp Bots', 'CRM Pipelines', 'AI Agents'],
      previewDescription:
        'Connect your lead channels, databases, and customer support with intelligent automated pipelines that work reliably 24/7.',
      highlights: [
        'Automated WhatsApp inquiry & booking bots',
        'Instant multi-channel CRM lead distribution',
        'Inventory threshold & restock alert triggers',
        'Custom grounded AI agents for customer Q&A'
      ],
      previewImage: '/assets/service_ai.png'
    },
    {
      id: '3d',
      number: '05',
      title: '3D Works',
      summary: 'Photorealistic CGI, 3D motion, VFX & product visualization.',
      link: '/3d-works',
      icon: Box,
      tags: ['Photorealistic CGI Stills', '3D Motion & Commercials', 'VFX & Environmental Scenes', 'Product Visualization'],
      previewDescription:
        'Studio-grade photorealistic CGI stills, commercial 3D motion choreographies, atmospheric VFX scenes, and precision product visualization.',
      highlights: [
        'Photorealistic CGI stills & studio lighting',
        '3D motion, commercials & exploded animations',
        'VFX simulations & environmental scenes',
        'Precision 3D product visualization'
      ],
      previewImage: '/assets/project_3d_chrono.png'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="service-matrix" className="py-20 lg:py-28 bg-white border-y border-amber-100/70 relative overflow-hidden transition-colors">
      {/* Subtle warm yellow ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FEF08A]/35 via-[#FDE68A]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-800 bg-[#FEF9C3] border border-amber-200/80 mb-4 font-mono">
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display mb-4">
            ONE PARTNER. MULTIPLE CAPABILITIES.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Rather than coordinating between five disjointed vendors, Webloom unifies digital strategy, software engineering, short-form creative production, automation, and 3D visualization under a cohesive, high-standards studio.
          </p>
        </div>

        {/* DESKTOP SPLIT VIEW */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: INTERACTIVE SERVICE LIST */}
          <div className="lg:col-span-6 space-y-2.5">
            {services.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#FEFCE8]/80 border-amber-300 shadow-[0_8px_24px_-8px_rgba(251,191,36,0.3)] -translate-x-1'
                      : 'bg-white border-slate-200/70 hover:bg-[#FEFCE8]/40 hover:border-amber-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-mono font-bold ${isSelected ? 'text-amber-800' : 'text-slate-400'}`}>
                        {item.number}
                      </span>
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] font-display">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${isSelected ? 'text-amber-800' : 'text-slate-400'}`}>
                        {isSelected ? 'Active Preview' : 'Select'}
                      </span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-amber-700 translate-x-0.5' : 'text-slate-300'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC PREVIEW PANEL */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-white rounded-2xl border border-amber-200/70 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] overflow-hidden p-8 transition-all">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-amber-800 bg-[#FEF9C3] px-2.5 py-1 rounded border border-amber-200">
                    {activeService.number} / 05
                  </span>
                  <h4 className="text-xl font-bold text-[#0F172A] font-display">
                    {activeService.title}
                  </h4>
                </div>
                <Link
                  to={activeService.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <span>Explore Department</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* VISUAL PREVIEW ASSET */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-100">
                <img
                  src={activeService.previewImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-5">
                  <p className="text-white text-xs font-medium">
                    {activeService.summary}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION & HIGHLIGHTS */}
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {activeService.previewDescription}
              </p>

              <div className="space-y-2.5 mb-6">
                {activeService.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* ACTION LINK */}
              <Link
                to={activeService.link}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>View Full {activeService.title} Specifications</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE ACCORDION VIEW */}
        <div className="lg:hidden space-y-3">
          {services.map((item, idx) => {
            const isExpanded = activeIndex === idx;
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isExpanded ? -1 : idx)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-amber-700">
                      {item.number}
                    </span>
                    <Icon className="h-4 w-4 text-amber-600" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500">{item.summary}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90 text-amber-700' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-slate-100 bg-[#FEFCE8]/30">
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {item.previewDescription}
                    </p>
                    <div className="space-y-2 mb-4">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:underline"
                    >
                      <span>Explore {item.title} Page</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

