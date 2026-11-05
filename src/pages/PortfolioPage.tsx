import React, { useState } from 'react';
import { Sparkles, Film, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-14 sm:py-20 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Studio Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
              OUR WORK
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
              See what we've built across web platforms, applications, social media content, AI automation, and 3D visualization.
            </p>
          </div>

          <Link
            to="/video-showcase"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#111C33] text-[#23469F] dark:text-[#B9DFF2] border border-[#23469F]/30 dark:border-[#B9DFF2]/30 hover:bg-blue-50 dark:hover:bg-[#162340] shadow-sm transition-all shrink-0"
          >
            <Film className="h-4 w-4" />
            <span>Video Showcase</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 10 — CATEGORY FILTER BUTTONS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === cat
                  ? 'bg-[#23469F] text-white shadow-sm'
                  : 'bg-white dark:bg-[#111C33] text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-[#162340] border border-gray-200/80 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VARIED EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const variantType = project.gridSpan === 'large' ? 'large' : project.gridSpan === 'medium' ? 'medium' : (idx % 3 === 0 ? 'large' : 'standard');
            return (
              <ProjectCard
                key={project.id}
                project={project}
                variant={variantType}
              />
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-[#111C33] rounded-2xl border border-gray-200 dark:border-white/10">
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              No projects found in this category right now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
