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
    <section id="service-matrix" className="py-20 lg:py-28 bg-[#F6F8FC] dark:bg-[#0B1120] border-y border-gray-200/60 dark:border-white/10 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-100/60 dark:bg-blue-900/40">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Capability Matrix</span>
            </div>
            <span className="font-handwriting text-lg sm:text-xl font-bold text-[#23469F] dark:text-[#B9DFF2] -rotate-2 select-none">
              (all 5 departments work as one)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] dark:text-white tracking-tight font-display mb-4">
            ONE PARTNER. MULTIPLE CAPABILITIES.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Rather than coordinating between five disjointed vendors, Webloom unifies digital strategy, software engineering, short-form creative production, automation, and 3D visualization under a cohesive, high-standards standard.
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
                      ? 'bg-white dark:bg-[#111C33] border-[#23469F] dark:border-[#B9DFF2] shadow-md -translate-x-1'
                      : 'bg-white/70 dark:bg-[#111C33]/60 border-gray-200/70 dark:border-white/10 hover:bg-white dark:hover:bg-[#111C33] hover:border-gray-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-mono font-bold ${isSelected ? 'text-[#23469F] dark:text-[#B9DFF2]' : 'text-gray-400 dark:text-gray-500'}`}>
                        {item.number}
                      </span>
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-50 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2]' : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${isSelected ? 'text-[#23469F] dark:text-[#B9DFF2]' : 'text-gray-400 dark:text-gray-500'}`}>
                        {isSelected ? 'Active Preview' : 'Hover to View'}
                      </span>
                      <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-[#23469F] dark:text-[#B9DFF2] translate-x-0.5' : 'text-gray-300 dark:text-gray-600'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC PREVIEW PANEL */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-white dark:bg-[#111C33] rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden p-8 transition-all">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded">
                    {activeService.number} / 05
                  </span>
                  <h4 className="text-xl font-bold text-[#101A35] dark:text-white">
                    {activeService.title}
                  </h4>
                  <span className="font-handwriting text-sm text-blue-600 dark:text-[#B9DFF2] hidden sm:inline-block">
                    ★ engineered in-house
                  </span>
                </div>
                <Link
                  to={activeService.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white transition-colors"
                >
                  <span>Explore Department</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* VISUAL PREVIEW ASSET */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-gray-100 dark:border-white/10">
                <img
                  src={activeService.previewImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A35]/80 via-transparent to-transparent flex items-end p-5">
                  <p className="text-white text-xs font-medium">
                    {activeService.summary}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION & HIGHLIGHTS */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                {activeService.previewDescription}
              </p>

              <div className="space-y-2.5 mb-6">
                {activeService.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* ACTION LINK */}
              <Link
                to={activeService.link}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#101A35] dark:bg-[#23469F] text-white hover:bg-[#23469F] dark:hover:bg-[#1b367c] flex items-center justify-center gap-2 transition-colors shadow-sm"
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
                className="bg-white dark:bg-[#111C33] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isExpanded ? -1 : idx)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">
                      {item.number}
                    </span>
                    <Icon className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2]" />
                    <div>
                      <h3 className="text-sm font-bold text-[#101A35] dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.summary}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform ${isExpanded ? 'rotate-90 text-[#23469F] dark:text-[#B9DFF2]' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-gray-100 dark:border-white/10 bg-slate-50/50 dark:bg-[#0B1120]/50">
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {item.previewDescription}
                    </p>
                    <div className="space-y-2 mb-4">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#23469F] dark:text-[#B9DFF2] hover:underline"
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

