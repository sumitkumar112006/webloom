import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Code2, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { MediaViewer } from '../components/MediaViewer';

interface ProjectDetailPageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenContact }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex] || projectsData[0];

  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-12 sm:py-16 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-10">
        {/* BACK NAVIGATION */}
        <div>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* 11 — HEADER: TITLE, CATEGORY, SHORT DESCRIPTION */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] border border-blue-100 dark:border-blue-800/40">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
              Completed {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* External links if live / repo available */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#23469F] text-white hover:bg-[#1b367c] transition-colors shadow-sm"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-white dark:bg-[#111C33] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-[#162340] transition-colors"
              >
                <Code2 className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* 12 — LARGE PRIMARY MEDIA VIEWER */}
        <MediaViewer
          type={project.mediaType}
          url={project.mediaUrl}
          thumbnail={project.thumbnail}
          title={project.title}
          className="shadow-md"
        />

        {/* CASE STUDY CONTENT: OVERVIEW, CHALLENGE, SOLUTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
          <div className="md:col-span-8 space-y-8">
            {/* OVERVIEW */}
            <div className="bg-white dark:bg-[#111C33] rounded-2xl p-7 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
                Project Overview
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </div>

            {/* CHALLENGE & SOLUTION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#111C33] rounded-2xl p-6 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                  The Problem
                </span>
                <h3 className="text-base font-bold text-[#101A35] dark:text-white font-display">
                  Core Challenge
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white dark:bg-[#111C33] rounded-2xl p-6 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block">
                  The Architecture
                </span>
                <h3 className="text-base font-bold text-[#101A35] dark:text-white font-display">
                  Webloom Solution
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* GALLERY IMAGES */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-slate-900 aspect-[16/10]">
                      <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AUTHENTIC RESULTS (STRICTLY NO FABRICATED METRICS) */}
            {project.results && project.results.length > 0 && (
              <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-3">
                <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-200 font-display">
                  Verified Project Results
                </h3>
                <ul className="space-y-2">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-emerald-900 dark:text-emerald-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* AUTHENTIC TESTIMONIAL (ONLY IF REAL) */}
            {project.testimonial && (
              <div className="p-7 rounded-2xl bg-[#101A35] text-white space-y-3">
                <p className="text-sm italic text-gray-200 leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="pt-2 border-t border-white/10 text-xs">
                  <p className="font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-gray-400">{project.testimonial.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR: DELIVERABLES & TECH STACK */}
          <div className="md:col-span-4 space-y-6">
            {/* DELIVERABLES */}
            <div className="bg-white dark:bg-[#111C33] rounded-2xl p-6 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#101A35] dark:text-white">
                Key Deliverables
              </h3>
              <ul className="space-y-2.5">
                {project.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 rounded-2xl bg-[#101A35] text-white space-y-3">
              <h4 className="text-sm font-bold font-display">Need a similar solution?</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                We build customized web systems, applications, and automation pipelines with predictable milestones.
              </p>
              <button
                type="button"
                onClick={() =>
                  onOpenContact(
                    'Web Services',
                    `Inquiry based on case study: ${project.title} (${project.category})`,
                    `Case Study: ${project.title}`
                  )
                }
                className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] transition-colors"
              >
                Inquire About Similar Project
              </button>
            </div>
          </div>
        </div>

        {/* 11 — NEXT PROJECT LINK */}
        <div className="pt-10 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <Link
            to="/our-work"
            className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            ← All Case Studies
          </Link>

          <Link
            to={`/our-work/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white transition-colors"
          >
            <span>Next Project: {nextProject.title}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
