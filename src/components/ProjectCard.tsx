import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  variant?: 'large' | 'medium' | 'standard';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'standard'
}) => {
  const isLarge = variant === 'large' || project.gridSpan === 'large';

  return (
    <Link
      to={`/our-work/${project.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 transition-all duration-300 card-hover ${
        isLarge ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      {/* THUMBNAIL CONTAINER */}
      <div className={`relative overflow-hidden bg-slate-900 ${isLarge ? 'aspect-[16/10]' : 'aspect-[16/11]'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* OVERLAY WITH ACCENT BADGE */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
            {project.categoryLabel}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-300 bg-black/40 backdrop-blur">
            {project.year}
          </span>
        </div>

        <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 text-[#101A35] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* TEXT METADATA */}
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#101A35] dark:text-white group-hover:text-[#23469F] dark:group-hover:text-[#B9DFF2] transition-colors font-display line-clamp-1">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* VIEW CASE STUDY LINK */}
        <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#23469F] dark:text-[#B9DFF2] group-hover:text-[#101A35] dark:group-hover:text-white transition-colors">
            View Case Study
          </span>
          <ArrowUpRight className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

