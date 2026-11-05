import React, { useState } from 'react';
import { Film, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Web', 'Apps', 'Social', 'AI', '3D'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white py-14 sm:py-20 relative overflow-hidden transition-colors select-none">
      
      {/* WARM YELLOW AMBIENT SUNSHINE GLOW */}
      <div className="absolute top-10 right-10 w-[500px] h-[400px] bg-gradient-to-b from-[#FEF08A]/40 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#FEF9C3]/50 rounded-full blur-[100px] pointer-events-none" />

      {/* ENTIRE WIDTH CONTAINER */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-amber-800 bg-[#FEF9C3] border border-amber-200/80">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>SELECTED ARCHIVE (2025 – 2026)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] font-display tracking-tight leading-[1.05]">
              OUR WORK
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Real web platforms, interactive systems, short-form creative production, and 3D precision motion engineered with architectural discipline.
            </p>
          </div>

          <Link
            to="/video-showcase"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-slate-800 shadow-sm transition-all shrink-0 self-start md:self-auto"
          >
            <Film className="h-4 w-4" />
            <span>Video Showcase Reel</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Link>
        </div>

        {/* CATEGORY FILTER PILLS (Physical Studio Filter Tabs) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#0F172A] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-[#FEFCE8] hover:text-amber-900 border border-slate-200/90 shadow-2xs'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* ASYMMETRICAL EDITORIAL GRID WITH STICKER BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const variantType = project.gridSpan === 'large' ? 'large' : (idx === 0 || idx % 4 === 0 ? 'large' : 'standard');
            return (
              <ProjectCard
                key={project.id}
                project={project}
                variant={variantType}
                index={idx}
              />
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200/80 shadow-xs">
            <p className="text-sm font-semibold text-slate-500">
              No projects found in this category right now.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
