import React from 'react';
import { ProjectSticker } from '../data/projectsData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectStickerBadgeProps {
  sticker: ProjectSticker;
  className?: string;
}

export const ProjectStickerBadge: React.FC<ProjectStickerBadgeProps> = ({ sticker, className = '' }) => {
  const rotation = sticker.rotation || '-rotate-2';

  switch (sticker.variant) {
    case 'yellow-star':
      return (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FEF08A] text-[#854D0E] font-extrabold text-[11px] sm:text-xs tracking-wide border-2 border-white shadow-[0_6px_18px_-4px_rgba(251,191,36,0.5)] transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none z-20 ${className}`}
        >
          <Sparkles className="h-3 w-3 fill-[#854D0E] text-[#854D0E] shrink-0" />
          <span>{sticker.label}</span>
        </div>
      );

    case 'holographic':
      return (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-200 via-pink-200 to-amber-200 text-slate-900 font-extrabold text-[11px] sm:text-xs tracking-wide border-2 border-white/95 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.4)] backdrop-blur-md transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none z-20 ${className}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
          <span>{sticker.label}</span>
        </div>
      );

    case 'stamp':
      return (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/95 text-[#0F172A] font-mono font-bold text-[10px] sm:text-[11px] tracking-widest uppercase border-2 border-dashed border-slate-700 shadow-sm transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none z-20 ${className}`}
        >
          <span>{sticker.label}</span>
        </div>
      );

    case 'tape':
      return (
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1 bg-[#FEFCE8]/95 text-amber-900 font-mono font-bold text-[10px] sm:text-[11px] tracking-wider uppercase border-y border-amber-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none z-20 ${className}`}
        >
          <span className="text-amber-500">✦</span>
          <span>{sticker.label}</span>
        </div>
      );

    case 'badge':
    default:
      return (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white font-bold text-[11px] sm:text-xs tracking-wide border-2 border-white shadow-md transform ${rotation} group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none select-none z-20 ${className}`}
        >
          <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
          <span>{sticker.label}</span>
        </div>
      );
  }
};
