import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaViewer } from '../components/MediaViewer';
import { FAQAccordion } from '../components/FAQAccordion';
import { servicesData } from '../data/servicesData';

interface ThreeDWorksPageProps {
  onOpenContact: (service?: string, prompt?: string, source?: string) => void;
}

export const ThreeDWorksPage: React.FC<ThreeDWorksPageProps> = ({ onOpenContact }) => {
  const service = servicesData['3d-works'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Photorealistic CGI Stills',
    '3D Motion & Commercials',
    'VFX & Environmental Scenes',
    'Product Visualization'
  ];

  const galleryItems = [
    {
      id: 'chrono',
      title: 'Aura Chrono — Exploded Product Animation & Mechanical Breakdown',
      category: '3D Motion & Commercials',
      mediaUrl: '/assets/project_3d_chrono.png',
      type: 'image' as const,
      description: 'Exploded internal gear trains, rotational kinematics, sapphire reflections, and precision timing mechanisms.'
    },
    {
      id: 'cgi-stills',
      title: 'Industrial Device — Photorealistic CGI Stills & Macro Studio Lighting',
      category: 'Photorealistic CGI Stills',
      mediaUrl: '/assets/project_web_automation.png',
      type: 'image' as const,
      description: 'Clean quad mesh modeling, sub-millimeter tolerances, and manufacturing-ready surface geometry.'
    },
    {
      id: 'vfx-scenes',
      title: 'Atmospheric VFX & Environmental Landscape Scenography',
      category: 'VFX & Environmental Scenes',
      mediaUrl: '/assets/project_cad_drawings.png',
      type: 'image' as const,
      description: 'Photorealistic atmospheric mist, dynamic environmental lighting, and photoreal cinematic textures.'
    },
    {
      id: 'product-vis',
      title: 'Studio Lighting & Photorealistic Product Visualization',
      category: 'Product Visualization',
      mediaUrl: '/assets/project_3d_chrono.png',
      type: 'image' as const,
      description: 'Raytraced PBR material shaders, brushed metal textures, and commercial studio lighting.'
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#101A35] text-white">
      {/* 13 — 3D HERO: CINEMATIC BUT DISCIPLINED */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-white/10 bg-gradient-to-b from-[#101A35] to-[#0A1022]">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#B9DFF2] bg-white/10 border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-[#B9DFF2]" />
              <span>3D MODELING • PRODUCT ANIMATION • CAD DRAWINGS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
              3D MODELS, PRODUCT ANIMATION & CAD DRAWINGS.
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              From concept sketches and physical prototypes to high-accuracy 3D models, manufacturing CAD drawings, and kinetic product animations that showcase every internal mechanism.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() =>
                  onOpenContact(
                    '3D Works, Motion & CGI',
                    'Request for custom 3D modeling, animation, or CAD drafting quote',
                    '3D Works Hero'
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#2b54bc] transition-all shadow-lg"
              >
                <span>Request Custom 3D Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <span>View Render Reel</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D CATEGORIES FILTER */}
      <section className="py-8 bg-[#0D152B] border-b border-white/10 sticky top-20 z-30 backdrop-blur-md" id="showcase">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#23469F] text-white shadow-sm'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA SHOWCASE GRID */}
      <section className="py-16 sm:py-24 w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="space-y-3">
              <MediaViewer
                type={item.type}
                url={item.mediaUrl}
                thumbnail={item.mediaUrl}
                title={item.title}
              />
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9DFF2]">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onOpenContact(
                      '3D Works, Motion & CGI',
                      `Project Reference: ${item.title} (${item.category})`,
                      '3D Works Gallery Item'
                    )
                  }
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-[#23469F] text-white transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D PRICING & ENGAGEMENT MODEL: STRICT CUSTOM QUOTE */}
      <section className="py-16 sm:py-24 bg-[#0A1022] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/20 text-[#B9DFF2] border border-blue-400/30">
            PRICING STRUCTURE: CUSTOM QUOTE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Every 3D Model, Animation & CAD Blueprint Has Unique Requirements
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            In accordance with our studio standards, we do not apply flat generic rates to 3D engineering work. We evaluate part complexity, CAD drawing requirements, animation timelines, and rendering compute to furnish an authentic milestone quote.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-6 max-w-3xl mx-auto">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono font-bold text-[#B9DFF2]">01 — 3D CAD & Asset Review</span>
              <p className="text-xs text-gray-300 mt-2">Evaluate .STEP, .DWG, sketches, tolerances, or physical sample specifications.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono font-bold text-[#B9DFF2]">02 — Modeling & Animation Scope</span>
              <p className="text-xs text-gray-300 mt-2">Determine exploded view sequencing, technical callouts, and camera paths.</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono font-bold text-[#B9DFF2]">03 — Milestone Delivery</span>
              <p className="text-xs text-gray-300 mt-2">Wireframes, CAD technical sheets, clay animatics, and 4K final renders.</p>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() =>
                onOpenContact(
                  '3D Works, Motion & CGI',
                  'Request for Custom Milestone-Based 3D Engagement',
                  '3D Works Custom Quote'
                )
              }
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#2b54bc] transition-all shadow-lg"
            >
              Request Custom 3D Quote
            </button>
          </div>
        </div>
      </section>

      {/* 3D FAQS */}
      <div className="bg-[#101A35] border-t border-white/10">
        <FAQAccordion
          faqs={service.faqs}
          title="3D Works & CGI Inquiries"
          subtitle="Everything you need to know about asset readiness, turnaround times, and rendering pipelines."
        />
      </div>
    </div>
  );
};

