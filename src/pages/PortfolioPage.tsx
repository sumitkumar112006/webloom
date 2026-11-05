import React, { useState } from 'react';
import { Sparkles, Film, ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewCard } from '../components/ReviewCard';
import { projectsData } from '../data/projectsData';
import { reviewsData } from '../data/reviewsData';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Web', 'Apps', 'Social', 'AI', '3D'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-14 sm:py-20 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* 1. EDITORIAL HEADER & 50+ PROJECTS MILESTONE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Studio Directory • 50+ Projects Served</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
              PROJECTS & CLIENT WORK
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
              Explore production web platforms, applications, creative assets, AI automation workflows, and photorealistic 3D visualization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/video-showcase"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white dark:bg-[#111C33] text-[#23469F] dark:text-[#B9DFF2] border border-[#23469F]/30 dark:border-[#B9DFF2]/30 hover:bg-blue-50 dark:hover:bg-[#162340] shadow-sm transition-all"
            >
              <Film className="h-4 w-4" />
              <span>Video Showcase</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/40 hover:bg-amber-100 dark:hover:bg-amber-900/40 shadow-sm transition-all"
            >
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>All 5.0 ★ Client Reviews</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 2. STATS & VERIFIED TRACK RECORD BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 mb-12 rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 shadow-sm">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-display text-[#101A35] dark:text-white">
              50+
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              Commercial Projects Delivered
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-amber-500 dark:text-amber-400">
                5.0 ★
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              Average Client Rating (100% 5-Star)
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-600 dark:text-emerald-400">
              100%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              On-Time Milestone Handover
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-display text-[#23469F] dark:text-[#B9DFF2]">
              0 Fluff
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              Direct Founder & Engineer Access
            </p>
          </div>
        </div>

        {/* 3. CONTINUOUS LIVE DEPLOYMENT MARQUEE (RIGHT TO LEFT) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
              Live Project Deployments • Moving Right to Left
            </span>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              Hover to pause • Click to inspect
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F6F8FC] dark:from-[#0B1120] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F6F8FC] dark:from-[#0B1120] to-transparent z-10" />

            <div className="animate-marquee-left flex items-stretch gap-6">
              {[...projectsData, ...projectsData].map((project, idx) => (
                <ProjectCard
                  key={`marquee-proj-${project.id}-${idx}`}
                  project={project}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>

        {/* 4. CONTINUOUS CLIENT RATINGS & REVIEWS MARQUEE (LEFT TO RIGHT) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Verified 5-Star Ratings • Moving Left to Right
              </span>
              <span className="hidden sm:inline-block font-handwriting text-sm text-gray-500 dark:text-gray-400">
                (genuine reviews from founders & directors)
              </span>
            </div>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
              Hover to pause
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F6F8FC] dark:from-[#0B1120] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F6F8FC] dark:from-[#0B1120] to-transparent z-10" />

            <div className="animate-marquee-right flex items-stretch gap-6">
              {[...reviewsData, ...reviewsData].map((review, idx) => (
                <ReviewCard
                  key={`marquee-rev-${review.id}-${idx}`}
                  review={review}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 5. CATEGORY FILTER BUTTONS */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#101A35] dark:text-white">
              All Projects Directory
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Filter by specialty or view our complete catalog
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  selectedFilter === cat
                    ? 'bg-[#23469F] text-white shadow-sm'
                    : 'bg-white dark:bg-[#111C33] text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-[#162340] border border-gray-200/80 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6. COMPACT DIRECTORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="standard"
            />
          ))}
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
