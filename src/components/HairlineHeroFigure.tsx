import React, { useState } from 'react';
import { Keyboard } from '@lucasmarkes/hairline/react';
import { Play, Pause, Compass, Sliders, Sparkles } from 'lucide-react';

export const HairlineHeroFigure: React.FC = () => {
  const [readout, setReadout] = useState<string>('KEYBOARD // REST POSE');
  const [isPlayingTour, setIsPlayingTour] = useState<boolean>(false);
  const [intensity, setIntensity] = useState<number>(0.65);
  const [showControls, setShowControls] = useState<boolean>(false);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none">
      {/* CARD CHASSIS CONTAINER */}
      <div className="relative rounded-3xl bg-[#0B101E]/95 border border-blue-500/25 shadow-2xl p-4 sm:p-6 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:border-blue-500/40">
        
        {/* Subtle ambient backplate lighting */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

        {/* STATUS BAR & TELEMETRY READ-OUT */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#B9DFF2]">
              HAIRLINE // 60-KEY MATRIX
            </span>
          </div>

          <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] sm:text-xs font-semibold text-white tracking-wider uppercase tabular-nums transition-colors">
            {readout ? (readout === 'rest' ? 'KEY // REST' : readout) : 'KEY // REST'}
          </div>
        </div>

        {/* HAIRLINE OFFICIAL KEYBOARD STAGE */}
        <div className="relative aspect-[5/4] w-full rounded-2xl bg-[#070A14] border border-white/10 overflow-hidden cursor-crosshair">
          <Keyboard
            intensity={intensity}
            theme="dark"
            play={isPlayingTour}
            onRead={(text) => setReadout(text || 'rest')}
            className="w-full h-full"
            style={
              {
                '--hairline-hi': '#60A5FA',
                '--hairline-edge': '#93C5FD',
                '--hairline-mid': '#1E3A8A',
                '--hairline-lo': '#1E293B',
                '--hairline-plate': '#070A14',
                '--hairline-stroke': '1.15'
              } as React.CSSProperties
            }
          />

          {/* Micro overlay instruction tag */}
          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-gray-400 flex items-center gap-1.5 pointer-events-none">
            <Compass className="h-3 w-3 text-blue-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>Pointer-reactive tactile keys · Sink wave physics</span>
          </div>
        </div>

        {/* CONTROLS STRIP */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Quick status pills */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
              60 KEYS
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-950/60 text-[#B9DFF2] border border-blue-800/40">
              ISOMETRIC
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 hidden sm:inline-block">
              SPRING DAMPED
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowControls(!showControls)}
              className={`p-1.5 rounded-lg border text-gray-300 hover:text-white transition-colors ${
                showControls ? 'bg-blue-600/30 border-blue-500/50 text-white' : 'bg-white/5 border-white/10'
              }`}
              title="Adjust spring press depth"
              aria-label="Adjust spring press depth"
            >
              <Sliders className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlayingTour(!isPlayingTour)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold font-mono uppercase tracking-wider transition-all ${
                isPlayingTour
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white/10 text-gray-200 hover:text-white hover:bg-white/15'
              }`}
            >
              {isPlayingTour ? (
                <>
                  <Pause className="h-3 w-3" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" />
                  <span>Play Tour</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* EXPANDABLE INTENSITY SLIDER */}
        {showControls && (
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-3 text-[11px] font-mono animate-fadeIn">
            <span className="text-gray-400 shrink-0">Press Depth:</span>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1.5 bg-white/10 rounded-lg"
            />
            <span className="text-white font-bold w-9 text-right tabular-nums">
              {Math.round(intensity * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
