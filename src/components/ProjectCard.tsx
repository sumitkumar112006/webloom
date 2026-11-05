import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { ProjectStickerBadge } from './ProjectStickerBadge';

interface ProjectCardProps {
  project: ProjectItem;
  variant?: 'large' | 'medium' | 'standard';
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'standard',
  index = 0
}) => {
  const isLarge = variant === 'large' || project.gridSpan === 'large';
  const formattedIndex = String(index + 1).padStart(2, '0');

  if (isLarge) {
    return (
      <Link
        to={`/our-work/${project.id}`}
        className="group col-span-1 md:col-span-2 block relative rounded-[2.5rem] bg-white border border-slate-200/90 hover:border-amber-400 p-4 sm:p-6 lg:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(251,191,36,0.3)] transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* IMAGE CONTAINER WITH PHYSICAL STICKERS */}
          <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-[16/10] border border-slate-100 shadow-inner">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />

            {/* STICKER 1: Primary Die-Cut Sticker */}
            {project.sticker && (
              <div className="absolute top-4 left-4">
                <ProjectStickerBadge sticker={project.sticker} />
              </div>
            )}

            {/* STICKER 2: Brutalist Category Stamp */}
            <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/75 text-white backdrop-blur-md border border-white/20">
                {project.categoryLabel}
              </span>
              {project.impact && (
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide bg-[#FEF08A] text-[#854D0E] shadow-sm">
                  {project.impact}
                </span>
              )}
            </div>

            {/* Top-Right Arrow Hover Glint */}
            <div className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-md">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* EDITORIAL CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 py-2">
            <div className="space-y-3">
              {/* Index & Client Name */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-700">
                  {formattedIndex} // CASE STUDY
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-[-0.03em] font-display leading-tight group-hover:text-amber-800 transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {project.tagline}
              </p>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-amber-800 transition-colors">
                Explore Case Study
              </span>
              <div className="h-9 w-9 rounded-full bg-slate-100 group-hover:bg-[#0F172A] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

        </div>
      </Link>
    );
  }

  // STANDARD / MEDIUM EDITORIAL CARD
  return (
    <Link
      to={`/our-work/${project.id}`}
      className="group relative flex flex-col justify-between rounded-[2rem] bg-white border border-slate-200/90 hover:border-amber-400 p-4 sm:p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(251,191,36,0.28)] transition-all duration-300 col-span-1"
    >
      <div>
        {/* IMAGE WITH PHYSICAL STICKER OVERLAY */}
        <div className="relative rounded-[1.5rem] overflow-hidden bg-slate-900 aspect-[16/11] border border-slate-100 mb-5">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />

          {/* STICKER */}
          {project.sticker && (
            <div className="absolute top-3.5 left-3.5">
              <ProjectStickerBadge sticker={project.sticker} />
            </div>
          )}

          {/* Top-Right Arrow Pin */}
          <div className="absolute top-3.5 right-3.5 h-9 w-9 rounded-full bg-white/95 text-[#0F172A] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-md">
            <ArrowUpRight className="h-4 w-4" />
          </div>

          {/* Category Chip */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-md border border-white/20">
              {project.categoryLabel}
            </span>
            {project.impact && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF08A] text-[#854D0E] shadow-2xs">
                {project.impact}
              </span>
            )}
          </div>
        </div>

        {/* METADATA */}
        <div className="space-y-2 px-1">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-amber-700">{formattedIndex} // PROJECT</span>
            <span className="text-slate-400 font-medium">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] tracking-[-0.02em] font-display line-clamp-1 group-hover:text-amber-800 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* FOOTER ACTION */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-amber-800 transition-colors">
          View Case Study
        </span>
        <div className="h-7 w-7 rounded-full bg-slate-100 group-hover:bg-[#0F172A] text-slate-700 group-hover:text-white flex items-center justify-center transition-all">
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};
