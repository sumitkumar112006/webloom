import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface DepartmentSpec {
  id: string;
  number: string;
  shortName: string;
  fullName: string;
  oneLiner: string;
  link: string;
  previewImage: string;
  stack: string;
  shipTime: string;
  output: string;
}

const CornerCropMarks: React.FC = () => (
  <>
    {/* Top-Left */}
    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#4d9bff] pointer-events-none" />
    {/* Top-Right */}
    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#4d9bff] pointer-events-none" />
    {/* Bottom-Left */}
    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#4d9bff] pointer-events-none" />
    {/* Bottom-Right */}
    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#4d9bff] pointer-events-none" />
  </>
);

export const ServiceDiscovery: React.FC = () => {
  const departments: DepartmentSpec[] = [
    {
      id: 'web',
      number: '01',
      shortName: 'Web',
      fullName: 'Web Engineering',
      oneLiner: 'Custom web applications, responsive architectures, technical SEO.',
      link: '/services/web-services',
      previewImage: '/assets/service_web.png',
      stack: 'React, Next.js, Tailwind, Vite',
      shipTime: '2 to 4 weeks',
      output: 'Production app, full source, docs'
    },
    {
      id: 'apps',
      number: '02',
      shortName: 'Apps',
      fullName: 'App Systems',
      oneLiner: 'Role-based portals, booking engines, cross-platform tools.',
      link: '/services/app-services',
      previewImage: '/assets/project_mobile_app.png',
      stack: 'React Native, Node, PostgreSQL',
      shipTime: '3 to 6 weeks',
      output: 'iOS, Android & Web Portal'
    },
    {
      id: 'social',
      number: '03',
      shortName: 'Social',
      fullName: 'Social Media',
      oneLiner: 'Short-form video production, reel shooting, Meta ad operations.',
      link: '/social-media',
      previewImage: '/assets/project_social_campaign.png',
      stack: 'Premiere, After Effects, DaVinci',
      shipTime: 'Weekly sprints (monthly retainer)',
      output: '12–20 Reels / mo + Meta Ads setup'
    },
    {
      id: 'automation',
      number: '04',
      shortName: 'Automation',
      fullName: 'AI Automation',
      oneLiner: 'Lead routing pipelines, WhatsApp booking bots, automated sync.',
      link: '/ai-automation',
      previewImage: '/assets/service_ai.png',
      stack: 'Python, n8n, OpenAI, WhatsApp API',
      shipTime: '1 to 3 weeks',
      output: 'Live webhooks, pipeline logs, SOPs'
    },
    {
      id: '3d',
      number: '05',
      shortName: '3D',
      fullName: '3D Works',
      oneLiner: 'CGI, motion and product visuals.',
      link: '/3d-works',
      previewImage: '/assets/project_3d_chrono.png',
      stack: 'Blender, Unreal',
      shipTime: '2 to 5 weeks',
      output: 'CGI, product renders'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(4); // Default to 05 3D matching wireframe
  const activeDepartment = departments[activeIndex];
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % departments.length;
      setActiveIndex(nextIndex);
      rowRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + departments.length) % departments.length;
      setActiveIndex(prevIndex);
      rowRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="service-matrix"
      className="py-12 sm:py-16 lg:py-20 bg-[#0a1226] text-[#e8edf7] border-y border-[#24304f] transition-colors duration-200"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* TWO COLUMNS ON DESKTOP (~45% / ~55%), STACKED ON MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: HEADINGS & LEDGER INDEX */}
          <div className="lg:col-span-5 w-full flex flex-col">
            
            {/* HEADINGS BLOCK */}
            <div className="mb-8 lg:mb-10">
              {/* Eyebrow: mono label in blue with letter-spacing + handwritten italic note */}
              <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
                <span className="text-[#4d9bff] uppercase tracking-[0.16em] font-mono text-xs font-medium">
                  CAPABILITY MATRIX
                </span>
                <span className="font-handwriting italic text-sm sm:text-base text-[#4d9bff] select-none">
                  (5 departments, 1 team)
                </span>
              </div>

              {/* Headline: two lines, tight tracking (-0.03em), max two font weights (400 and 500) */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] leading-[1.08] mb-4">
                <span className="block text-[#e8edf7]">One partner.</span>
                <span className="block text-[#4d9bff]">Five ways to build.</span>
              </h2>

              {/* Short paragraph in muted blue-grey */}
              <p className="text-xs sm:text-sm text-[#5b6a8f] font-normal leading-relaxed">
                Rather than coordinating between five disjointed vendors, Webloom unifies digital strategy, software engineering, short-form creative production, automation, and 3D visualization under a cohesive, high-standards standard.
              </p>
            </div>

            {/* LEDGER INDEX ROWS */}
            <div
              role="tablist"
              aria-label="Capabilities Directory"
              className="w-full flex flex-col"
            >
              {departments.map((dept, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={dept.id}
                    ref={(el) => {
                      rowRefs.current[idx] = el;
                    }}
                    tabIndex={0}
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onFocus={() => setActiveIndex(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`relative w-full cursor-pointer border-b border-[#24304f] transition-colors duration-200 ease-out focus:outline-none select-none ${
                      idx === 0 ? 'border-t border-[#24304f]' : ''
                    } ${isActive ? 'py-4 sm:py-5' : 'py-3.5 sm:py-4 hover:border-[#384872]'}`}
                  >
                    {/* 2px Solid Blue Bar on Active Row */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#4d9bff]" />
                    )}

                    <div className="flex items-baseline justify-between pl-4 pr-1">
                      {/* Mono Number & Department Name */}
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-xs tracking-wider transition-colors duration-200 ${
                            isActive ? 'text-[#4d9bff] font-medium' : 'text-[#5b6a8f] font-normal'
                          }`}
                        >
                          {dept.number}
                        </span>
                        <span
                          className={`text-xl sm:text-2xl lg:text-[1.65rem] tracking-tight transition-colors duration-200 ${
                            isActive ? 'font-medium text-[#e8edf7]' : 'font-normal text-[#5b6a8f] hover:text-[#8899bf]'
                          }`}
                        >
                          {dept.shortName}
                        </span>
                      </div>

                      {/* Small Mono Status ("Active" or "View") */}
                      <span
                        className={`font-mono text-xs tracking-wider transition-colors duration-200 ${
                          isActive ? 'text-[#4d9bff] font-medium' : 'text-[#5b6a8f] font-normal'
                        }`}
                      >
                        {isActive ? 'Active' : 'View'}
                      </span>
                    </div>

                    {/* Active Row Expanded Description */}
                    {isActive && (
                      <div className="pl-4 pr-2 mt-2 transition-all duration-200 ease-out">
                        <p className="text-xs sm:text-sm text-[#5b6a8f] font-normal leading-relaxed">
                          {dept.oneLiner}
                        </p>
                      </div>
                    )}

                    {/* Mobile Specimen Accordion Content */}
                    {isActive && (
                      <div className="lg:hidden mt-4 pt-4 border-t border-[#24304f]">
                        <div className="relative p-5 bg-[#0a1226] border border-[#24304f]">
                          <CornerCropMarks />

                          {/* Image stage */}
                          <div className="relative aspect-[16/10] w-full bg-[#111c3a] border border-[#24304f] overflow-hidden mb-4">
                            <div className="absolute top-2.5 right-3 z-10">
                              <span className="font-handwriting italic text-sm text-[#4d9bff] select-none">
                                built in-house
                              </span>
                            </div>
                            <img
                              src={dept.previewImage}
                              alt={dept.fullName}
                              className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute bottom-2.5 left-3 z-10">
                              <span className="font-mono text-[10px] text-[#5b6a8f] uppercase tracking-wider bg-[#111c3a]/90 px-1.5 py-0.5">
                                FIG. {dept.number}
                              </span>
                            </div>
                          </div>

                          {/* Title & Explore */}
                          <div className="flex items-baseline justify-between pb-3 mb-2">
                            <h3 className="text-xl font-medium text-[#e8edf7]">
                              {dept.fullName}
                            </h3>
                            <Link
                              to={dept.link}
                              className="font-mono text-xs font-medium uppercase tracking-wider text-[#4d9bff] hover:underline"
                            >
                              EXPLORE →
                            </Link>
                          </div>

                          {/* Specs */}
                          <div className="space-y-0 text-xs">
                            <div className="flex justify-between py-2 border-t border-[#24304f]">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#5b6a8f]">
                                STACK
                              </span>
                              <span className="font-normal text-[#e8edf7]">{dept.stack}</span>
                            </div>
                            <div className="flex justify-between py-2 border-t border-[#24304f]">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#5b6a8f]">
                                SHIP TIME
                              </span>
                              <span className="font-normal text-[#e8edf7]">{dept.shipTime}</span>
                            </div>
                            <div className="flex justify-between py-2 border-t border-[#24304f]">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#5b6a8f]">
                                OUTPUT
                              </span>
                              <span className="font-normal text-[#e8edf7]">{dept.output}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: SPECIMEN PANEL (ALIGNED WITH HEADINGS AT THE TOP) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-24">
            <div className="relative p-6 xl:p-8 bg-[#0a1226]">
              {/* 4 Blue Corner Crop Marks (12px, 1.5px stroke #4d9bff) */}
              <CornerCropMarks />

              {/* Department Preview Image Stage */}
              <div className="relative aspect-[16/10] w-full bg-[#111c3a] border border-[#24304f] overflow-hidden mb-5">
                {/* Top-Right Handwritten Italic Note */}
                <div className="absolute top-3.5 right-4 z-10">
                  <span className="font-handwriting italic text-sm xl:text-base text-[#4d9bff] select-none">
                    built in-house
                  </span>
                </div>

                {/* Crossfading Preview Asset */}
                <img
                  key={activeDepartment.id}
                  src={activeDepartment.previewImage}
                  alt={activeDepartment.fullName}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-out opacity-90"
                />

                {/* Bottom-Left Mono Caption */}
                <div className="absolute bottom-3.5 left-4 z-10">
                  <span className="font-mono text-[11px] text-[#5b6a8f] uppercase tracking-wider bg-[#111c3a]/90 px-2 py-0.5 border border-[#24304f]/60">
                    FIG. {activeDepartment.number}
                  </span>
                </div>
              </div>

              {/* Department Title & Explore Link */}
              <div className="flex items-baseline justify-between pb-3.5 mb-1">
                <h3 className="text-2xl xl:text-3xl font-medium text-[#e8edf7] tracking-tight">
                  {activeDepartment.fullName}
                </h3>
                <Link
                  to={activeDepartment.link}
                  className="font-mono text-xs font-medium uppercase tracking-wider text-[#4d9bff] hover:underline flex items-center gap-1 group"
                >
                  <span>EXPLORE</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* 3-Row Spec Table with Hairline Separators */}
              <div className="space-y-0 text-xs sm:text-sm">
                {/* STACK */}
                <div className="grid grid-cols-12 py-2.5 sm:py-3 border-t border-[#24304f] items-baseline">
                  <span className="col-span-3 font-mono text-xs uppercase tracking-wider text-[#5b6a8f]">
                    STACK
                  </span>
                  <span className="col-span-9 font-normal text-[#e8edf7]">
                    {activeDepartment.stack}
                  </span>
                </div>

                {/* SHIP TIME */}
                <div className="grid grid-cols-12 py-2.5 sm:py-3 border-t border-[#24304f] items-baseline">
                  <span className="col-span-3 font-mono text-xs uppercase tracking-wider text-[#5b6a8f]">
                    SHIP TIME
                  </span>
                  <span className="col-span-9 font-normal text-[#e8edf7]">
                    {activeDepartment.shipTime}
                  </span>
                </div>

                {/* OUTPUT */}
                <div className="grid grid-cols-12 py-2.5 sm:py-3 border-t border-[#24304f] items-baseline">
                  <span className="col-span-3 font-mono text-xs uppercase tracking-wider text-[#5b6a8f]">
                    OUTPUT
                  </span>
                  <span className="col-span-9 font-normal text-[#e8edf7]">
                    {activeDepartment.output}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
