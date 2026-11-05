import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Film, Sparkles, ShieldCheck } from 'lucide-react';
import { videoShowcaseList } from '../data/videoShowcaseData';
import { DriveVideoPlayer } from '../components/DriveVideoPlayer';

interface VideoShowcasePageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const VideoShowcasePage: React.FC<VideoShowcasePageProps> = ({ onOpenContact }) => {
  useEffect(() => {
    document.title = "Video Showcase — Creative Work. Real Results. | Webloom";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Webloom's video showcase featuring 3D product animations, CAD engineering breakdowns, and commercial showreels hosted on Google Drive."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-12 sm:py-16 lg:py-20 transition-colors">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-12">
        {/* TOP BREADCRUMB / BACK LINK */}
        <div className="flex items-center justify-between">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Work</span>
          </Link>

          <Link
            to="/"
            className="text-xs font-semibold text-gray-400 dark:text-gray-500 hover:text-[#101A35] dark:hover:text-white transition-colors"
          >
            Home
          </Link>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40">
            <Film className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2]" />
            <span>Selected Video Showreels</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
            Creative Work. Real Results.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            A curated showcase of selected creative, 3D animations, product simulations, and project showreels demonstrating precision execution and visual impact.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>5 Curated Video Reels</span>
            </div>
            <span>•</span>
            <span>Google Drive Embedded Player</span>
            <span>•</span>
            <span>Responsive Mobile & Desktop Player</span>
          </div>
        </div>

        {/* RESPONSIVE VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {videoShowcaseList.map((video, index) => (
            <DriveVideoPlayer
              key={video.id}
              video={video}
              index={index}
            />
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION CARD */}
        <div className="rounded-3xl bg-[#101A35] text-white p-8 sm:p-12 border border-gray-800 shadow-xl mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B9DFF2]">
                Have a video, 3D or animation project?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Let's Build Impactful Visuals for Your Brand.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                From technical product animations and CAD engineering drawings to commercial social reels and brand videos, we deliver production-ready assets with transparent timelines.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-center">
              <button
                type="button"
                onClick={() =>
                  onOpenContact(
                    '3D Works, Motion & CGI',
                    'Inquiry originating from Video Showcase & 3D Animation showreel',
                    'Video Showcase Page'
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] transition-all shadow-md w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                to="/3d-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all text-center w-full sm:w-auto"
              >
                <span>Explore 3D Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

