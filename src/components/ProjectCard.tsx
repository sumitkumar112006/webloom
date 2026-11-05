import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  variant?: 'large' | 'medium' | 'standard' | 'compact';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'standard'
}) => {
  const isCompact = variant === 'compact';
  const isLarge = !isCompact && (variant === 'large' || project.gridSpan === 'large');

  return (
    <Link
      to={`/our-work/${project.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 transition-all duration-300 card-hover ${
        isCompact
          ? 'w-[280px] sm:w-[320px] md:w-[340px] shrink-0'
          : isLarge
          ? 'md:col-span-2'
          : 'col-span-1'
      }`}
    >
      {/* THUMBNAIL CONTAINER */}
      <div className={`relative overflow-hidden bg-slate-900 ${isCompact ? 'aspect-[16/10]' : isLarge ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* OVERLAY WITH ACCENT BADGE */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md">
            {project.categoryLabel}
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-gray-300 bg-black/50 backdrop-blur">
            {project.year}
          </span>
          {project.liveUrl && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 backdrop-blur">
              Live ↗
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-[#101A35] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* TEXT METADATA */}
      <div className={isCompact ? 'p-4 sm:p-5 flex-1 flex flex-col justify-between' : 'p-6'}>
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className={`font-bold text-[#101A35] dark:text-white group-hover:text-[#23469F] dark:group-hover:text-[#B9DFF2] transition-colors font-display line-clamp-1 ${
              isCompact ? 'text-sm sm:text-base' : 'text-lg'
            }`}>
              {project.title}
            </h3>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* VIEW CASE STUDY LINK */}
        <div className="pt-3 mt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
          <span className="font-semibold text-[#23469F] dark:text-[#B9DFF2] group-hover:text-[#101A35] dark:group-hover:text-white transition-colors">
            {project.liveUrl ? 'Live Preview' : 'Case Study'}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
