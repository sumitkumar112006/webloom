import React, { useState } from 'react';
import { Play, ExternalLink, AlertCircle, RefreshCw, Maximize2 } from 'lucide-react';
import { ShowcaseVideo } from '../data/videoShowcaseData';

interface DriveVideoPlayerProps {
  video: ShowcaseVideo;
  index: number;
}

export const DriveVideoPlayer: React.FC<DriveVideoPlayerProps> = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartPlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const handleReload = () => {
    setHasError(false);
    setIsLoading(true);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 shadow-sm overflow-hidden hover:border-[#23469F]/40 dark:hover:border-[#B9DFF2]/40 transition-all duration-300 card-hover">
      {/* 16:9 VIDEO CONTAINER */}
      <div className="relative aspect-video w-full bg-[#101A35] overflow-hidden">
        {!isPlaying ? (
          /* INTERACTIVE FACADE (Avoilds autoplay & avoids heavy iframe loading until interaction) */
          <div
            onClick={handleStartPlay}
            className="relative h-full w-full flex flex-col items-center justify-center p-6 cursor-pointer bg-gradient-to-br from-[#101A35] via-[#162244] to-[#0A1022] group-hover:scale-[1.01] transition-transform duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleStartPlay();
              }
            }}
            aria-label={`Play video: ${video.title}`}
          >
            {/* Subtle background graphic lines */}
            <div className="absolute inset-0 bg-diagonal-pattern opacity-40 pointer-events-none" />

            {/* Top Badge Strip */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-[#B9DFF2] backdrop-blur border border-white/10">
                {video.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-400 bg-white/5 backdrop-blur">
                0{index + 1}
              </span>
            </div>

            {/* Play Button Trigger */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[#23469F] text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#1b367c] active:scale-95 transition-all">
                <Play className="h-6 w-6 fill-white translate-x-0.5" />
              </div>
              <span className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                Click to Watch Video
              </span>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 font-mono bg-black/40 px-2 py-0.5 rounded backdrop-blur">
              Google Drive Preview
            </div>
          </div>
        ) : (
          /* ACTIVE GOOGLE DRIVE EMBEDDED IFRAME */
          <div className="relative h-full w-full bg-black">
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#101A35]/90 text-white z-10">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                  <RefreshCw className="h-4 w-4 animate-spin text-[#B9DFF2]" />
                  <span>Connecting to Drive player...</span>
                </div>
              </div>
            )}

            {!hasError ? (
              <iframe
                src={video.driveEmbedUrl}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
                className="h-full w-full border-0"
              />
            ) : (
              /* GRACEFUL FALLBACK IF DRIVE VIDEO IS RESTRICTED */
              <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center text-white bg-slate-900 space-y-3">
                <AlertCircle className="h-8 w-8 text-amber-400" />
                <div>
                  <h4 className="text-xs font-bold">Embedded Preview Unavailable</h4>
                  <p className="text-[11px] text-gray-400 max-w-xs mt-1">
                    Google Drive requires direct permission or may block embedded playback on third-party cookies.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleReload}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="h-3 w-3" />
                    <span>Retry</span>
                  </button>
                  <a
                    href={video.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#23469F] hover:bg-[#1b367c] text-white transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* METADATA & ACTIONS */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#23469F]">
              {video.category}
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              ID: {video.fileId.slice(0, 8)}...
            </span>
          </div>

          <h3 className="text-base font-bold text-[#101A35] dark:text-white font-display group-hover:text-[#23469F] dark:group-hover:text-[#B9DFF2] transition-colors leading-snug">
            {video.title}
          </h3>

          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
          {!isPlaying ? (
            <button
              type="button"
              onClick={handleStartPlay}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white transition-colors"
            >
              <Play className="h-3.5 w-3.5 fill-[#23469F] dark:fill-[#B9DFF2]" />
              <span>Watch Reel</span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Playing in Player</span>
            </span>
          )}

          <a
            href={video.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
            title="Open original video directly in Google Drive"
          >
            <span>Drive Link</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

