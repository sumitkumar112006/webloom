import React, { useState } from 'react';
import { Play, ExternalLink, AlertCircle, Maximize2, X, Eye } from 'lucide-react';

interface MediaViewerProps {
  type: 'image' | 'youtube' | 'gdrive' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  className?: string;
}

export const MediaViewer: React.FC<MediaViewerProps> = ({
  type,
  url,
  thumbnail,
  title,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [gdriveError, setGdriveError] = useState(false);

  // Helper to extract YouTube embed URL
  const getYouTubeEmbedUrl = (rawUrl: string): string => {
    try {
      if (rawUrl.includes('youtube.com/embed/')) return rawUrl;
      const urlObj = new URL(rawUrl);
      if (urlObj.hostname.includes('youtube.com')) {
        const v = urlObj.searchParams.get('v');
        return v ? `https://www.youtube.com/embed/${v}?autoplay=1&rel=0` : rawUrl;
      }
      if (urlObj.hostname === 'youtu.be') {
        const id = urlObj.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }
    } catch {
      // fallback
    }
    return rawUrl;
  };

  // Helper for Google Drive embed
  const getGoogleDriveEmbedUrl = (rawUrl: string): string => {
    try {
      if (rawUrl.includes('/preview')) return rawUrl;
      const fileIdMatch = rawUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    } catch {
      // fallback
    }
    return rawUrl;
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#101A35] border border-gray-200/20 group ${className}`}>
      {/* 1. YOUTUBE EMBED */}
      {type === 'youtube' && (
        <div className="relative aspect-video w-full bg-black">
          {!isPlaying ? (
            <div className="relative h-full w-full">
              <img
                src={thumbnail || '/assets/hero_showcase.png'}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-[#23469F] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
                  aria-label={`Play video for ${title}`}
                >
                  <Play className="h-7 w-7 fill-white translate-x-0.5" />
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={getYouTubeEmbedUrl(url)}
              title={title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      )}

      {/* 2. GOOGLE DRIVE EMBED WITH SAFE FALLBACK */}
      {type === 'gdrive' && (
        <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
          {!gdriveError ? (
            <div className="relative h-full w-full">
              <iframe
                src={getGoogleDriveEmbedUrl(url)}
                title={title}
                className="h-full w-full border-0"
                allow="autoplay"
                onError={() => setGdriveError(true)}
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/60 backdrop-blur rounded-lg hover:bg-black/80 transition-colors"
                >
                  <span>Open Media in New Tab</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-white flex flex-col items-center max-w-md">
              <AlertCircle className="h-10 w-10 text-amber-400 mb-3" />
              <p className="text-sm font-semibold mb-1">Embedded Preview Unavailable</p>
              <p className="text-xs text-gray-400 mb-4">
                This Google Drive asset requires external permissions or viewer mode to play.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#23469F] text-white hover:bg-[#1b367c] transition-colors"
              >
                <span>Open Media Securely</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* 3. HTML5 DIRECT VIDEO */}
      {type === 'video' && (
        <div className="relative aspect-video w-full bg-black">
          <video
            src={url}
            poster={thumbnail}
            controls
            preload="metadata"
            className="h-full w-full object-contain"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}

      {/* 4. STATIC / RETINA IMAGE */}
      {type === 'image' && (
        <div className="relative w-full overflow-hidden bg-slate-950">
          <img
            src={url}
            alt={title}
            className="w-full h-full object-cover max-h-[560px] transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 text-white backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:opacity-100"
            aria-label="View Fullscreen Media"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal for Images */}
      {isFullscreen && type === 'image' && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close fullscreen modal"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={url}
            alt={title}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

