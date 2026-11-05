import React, { useState } from 'react';
import { Play, ExternalLink, AlertCircle, RefreshCw, Maximize2, Minimize2, X, Smartphone, Monitor } from 'lucide-react';
import { ShowcaseVideo } from '../data/videoShowcaseData';

interface DriveVideoPlayerProps {
  video: ShowcaseVideo;
  index: number;
}

export const DriveVideoPlayer: React.FC<DriveVideoPlayerProps> = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTallMode, setIsTallMode] = useState(false);
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);

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
    <>
      <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#111C33] border border-gray-200/80 dark:border-white/10 shadow-sm overflow-hidden hover:border-[#23469F]/40 dark:hover:border-[#B9DFF2]/40 transition-all duration-300 card-hover">
        {/* RESPONSIVE VIDEO CONTAINER: aspect-[4/5] on mobile for vertical visibility, aspect-video on tablet/desktop */}
        <div
          className={`relative w-full ${
            isTallMode
              ? 'aspect-[9/16] min-h-[460px]'
              : 'aspect-[4/5] sm:aspect-video min-h-[320px] sm:min-h-0'
          } bg-[#070A14] overflow-hidden transition-all duration-300`}
        >
          {!isPlaying ? (
            /* INTERACTIVE FACADE (Avoids autoplay & avoids heavy iframe loading until user interaction) */
            <div
              onClick={handleStartPlay}
              className="relative h-full w-full flex flex-col items-center justify-center p-6 cursor-pointer bg-gradient-to-br from-[#0B1020] via-[#101A35] to-[#070A14] group-hover:scale-[1.01] transition-transform duration-300"
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
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-[#B9DFF2] backdrop-blur border border-white/15">
                    {video.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-400 bg-white/10 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTallMode(!isTallMode);
                    }}
                    className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white backdrop-blur border border-white/10 transition-colors"
                    title={isTallMode ? 'Switch to Standard Ratio' : 'Switch to Tall Mobile Ratio'}
                  >
                    {isTallMode ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFullscreenModal(true);
                    }}
                    className="p-1.5 rounded-md bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white backdrop-blur border border-white/10 transition-colors"
                    title="Open Expanded Theater View"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Play Button Trigger */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="h-16 w-16 rounded-full bg-[#23469F] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#1b367c] active:scale-95 transition-all border border-blue-400/30">
                  <Play className="h-7 w-7 fill-white translate-x-0.5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">
                    Click to Play Video
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono block">
                    Optimized for mobile & desktop
                  </span>
                </div>
              </div>

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur border border-white/10">
                Drive Player
              </div>
            </div>
          ) : (
            /* ACTIVE GOOGLE DRIVE EMBEDDED IFRAME */
            <div className="relative h-full w-full bg-black">
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#070A14]/90 text-white z-10">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                    <RefreshCw className="h-4 w-4 animate-spin text-[#B9DFF2]" />
                    <span>Loading Drive video stream...</span>
                  </div>
                </div>
              )}

              {/* Top Controls Overlay on active video */}
              <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => setIsTallMode(!isTallMode)}
                  className="p-1.5 rounded-md bg-black/70 hover:bg-black text-white backdrop-blur border border-white/20 transition-colors shadow-md"
                  title={isTallMode ? 'Switch to Standard Ratio' : 'Switch to Tall Mobile Ratio'}
                >
                  {isTallMode ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullscreenModal(true)}
                  className="p-1.5 rounded-md bg-black/70 hover:bg-black text-white backdrop-blur border border-white/20 transition-colors shadow-md"
                  title="Expand Theater View"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {!hasError ? (
                <iframe
                  src={video.driveEmbedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                      Google Drive permissions or third-party cookies may be restricting iframe playback.
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
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
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
            <div className="flex items-center gap-3">
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={handleStartPlay}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white transition-colors"
                >
                  <Play className="h-3.5 w-3.5 fill-[#23469F] dark:fill-[#B9DFF2]" />
                  <span>Watch Video</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Playing</span>
                </span>
              )}

              <button
                type="button"
                onClick={() => setIsTallMode(!isTallMode)}
                className="text-[11px] font-medium text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors sm:hidden"
              >
                {isTallMode ? 'Standard' : 'Tall Reel'}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsFullscreenModal(true)}
                className="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
                title="Watch in Expanded Theater Mode"
              >
                <Maximize2 className="h-3 w-3" />
                <span className="hidden xs:inline">Theater</span>
              </button>

              <a
                href={video.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
                title="Open original video in Google Drive"
              >
                <span>Drive</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* EXPANDED FULLSCREEN THEATER MODAL (Guarantees 100% full-screen responsive visibility on all phones & tablets) */}
      {isFullscreenModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-6 animate-fadeIn"
          onClick={() => setIsFullscreenModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#070A14] rounded-2xl sm:rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-[#B9DFF2] border border-blue-400/30">
                  {video.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                  {video.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={video.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  title="Open directly in Google Drive"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsFullscreenModal(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close theater view"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Video Player - Takes full available viewport on mobile */}
            <div className="relative w-full aspect-[4/5] sm:aspect-video max-h-[75vh] bg-black">
              <iframe
                src={video.driveEmbedUrl}
                title={`${video.title} - Fullscreen`}
                loading="eager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
              <p className="line-clamp-1 max-w-xl text-[11px] sm:text-xs">
                {video.description}
              </p>
              <button
                type="button"
                onClick={() => setIsFullscreenModal(false)}
                className="text-[11px] font-semibold text-[#B9DFF2] hover:underline shrink-0 ml-3"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
