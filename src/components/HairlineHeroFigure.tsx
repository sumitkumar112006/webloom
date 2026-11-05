import React, { useState } from 'react';
import { Keyboard } from '@lucasmarkes/hairline/react';
import { Play, Pause, Compass, Sliders } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const HairlineHeroFigure: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [readout, setReadout] = useState<string>('KEYBOARD // REST POSE');
  const [isPlayingTour, setIsPlayingTour] = useState<boolean>(false);
  const [intensity, setIntensity] = useState<number>(0.65);
  const [showControls, setShowControls] = useState<boolean>(false);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none">
      {/* CARD CHASSIS CONTAINER */}
      <div className="relative rounded-3xl bg-white/95 dark:bg-[#0B101E]/95 border border-slate-200/90 dark:border-blue-500/25 shadow-xl dark:shadow-2xl p-4 sm:p-6 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-500/40">
        
        {/* Subtle ambient backplate lighting */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-400/15 dark:bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sky-400/15 dark:bg-sky-500/10 blur-3xl pointer-events-none" />

        {/* STATUS BAR & TELEMETRY READ-OUT */}
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-200/70 dark:border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#23469F] dark:bg-blue-400"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
              HAIRLINE // 60-KEY MATRIX
            </span>
          </div>

          <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[10px] sm:text-xs font-semibold text-[#101A35] dark:text-white tracking-wider uppercase tabular-nums transition-colors">
            {readout ? (readout === 'rest' ? 'KEY // REST' : readout) : 'KEY // REST'}
          </div>
        </div>

        {/* HAIRLINE OFFICIAL KEYBOARD STAGE */}
        <div className="relative aspect-[5/4] w-full rounded-2xl bg-[#F8FAFC] dark:bg-[#070A14] border border-slate-200/90 dark:border-white/10 overflow-hidden cursor-crosshair transition-colors duration-200">
          <Keyboard
            intensity={intensity}
            theme={isDark ? 'dark' : 'light'}
            play={isPlayingTour}
            onRead={(text) => setReadout(text || 'rest')}
            className="w-full h-full"
            style={
              isDark
                ? ({
                    '--hairline-hi': '#60A5FA',
                    '--hairline-edge': '#93C5FD',
                    '--hairline-mid': '#1E3A8A',
                    '--hairline-lo': '#1E293B',
                    '--hairline-plate': '#070A14',
                    '--hairline-stroke': '1.15'
                  } as React.CSSProperties)
                : ({
                    '--hairline-hi': '#1D4ED8',
                    '--hairline-edge': '#2563EB',
                    '--hairline-mid': '#93C5FD',
                    '--hairline-lo': '#CBD5E1',
                    '--hairline-plate': '#F8FAFC',
                    '--hairline-stroke': '1.15'
                  } as React.CSSProperties)
            }
          />

          {/* Micro overlay instruction tag */}
          <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1.5 pointer-events-none">
            <Compass className="h-3 w-3 text-[#23469F] dark:text-blue-400 animate-spin" style={{ animationDuration: '12s' }} />
            <span>Pointer-reactive tactile keys · Sink wave physics</span>
          </div>
        </div>

        {/* CONTROLS STRIP */}
        <div className="mt-4 pt-3 border-t border-gray-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Quick status pills */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/10">
              60 KEYS
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#23469F] dark:text-[#B9DFF2] border border-blue-200/80 dark:border-blue-800/40 font-semibold">
              ISOMETRIC
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 border border-slate-200/60 dark:border-white/5 hidden sm:inline-block">
              SPRING DAMPED
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowControls(!showControls)}
              className={`p-1.5 rounded-lg border transition-colors ${
                showControls
                  ? 'bg-blue-100 dark:bg-blue-600/30 border-blue-400 dark:border-blue-500/50 text-[#23469F] dark:text-white'
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
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
                  ? 'bg-[#23469F] dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/15'
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
          <div className="mt-3 pt-3 border-t border-gray-200/70 dark:border-white/10 flex items-center gap-3 text-[11px] font-mono animate-fadeIn">
            <span className="text-slate-600 dark:text-gray-400 shrink-0">Press Depth:</span>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full accent-[#23469F] dark:accent-blue-500 cursor-pointer h-1.5 bg-slate-200 dark:bg-white/10 rounded-lg"
            />
            <span className="text-[#101A35] dark:text-white font-bold w-9 text-right tabular-nums">
              {Math.round(intensity * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
