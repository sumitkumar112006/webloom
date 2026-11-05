import React from 'react';
import { Keyboard } from '@lucasmarkes/hairline/react';
import { useTheme } from '../context/ThemeContext';

export const HairlineHeroFigure: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative w-full select-none flex items-center justify-center">
      {/* Soft atmospheric ambient aura behind the keyboard */}
      <div className="absolute inset-0 max-w-2xl mx-auto rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-[90px] pointer-events-none" />

      {/* HAIRLINE KEYBOARD (UNBOXED, FULL RESOLUTION & CENTERED) */}
      <div className="relative w-full aspect-[5/4] cursor-crosshair">
        <Keyboard
          intensity={0.65}
          theme={isDark ? 'dark' : 'light'}
          play={true}
          className="w-full h-full drop-shadow-sm dark:drop-shadow-[0_12px_40px_rgba(37,99,235,0.22)]"
          style={
            isDark
              ? ({
                  '--hairline-hi': '#60A5FA',
                  '--hairline-edge': '#93C5FD',
                  '--hairline-mid': '#2563EB',
                  '--hairline-lo': '#1E293B',
                  '--hairline-plate': '#070A13',
                  '--hairline-stroke': '1.15'
                } as React.CSSProperties)
              : ({
                  '--hairline-hi': '#1D4ED8',
                  '--hairline-edge': '#2563EB',
                  '--hairline-mid': '#93C5FD',
                  '--hairline-lo': '#CBD5E1',
                  '--hairline-plate': '#FFFFFF',
                  '--hairline-stroke': '1.15'
                } as React.CSSProperties)
          }
        />
      </div>
    </div>
  );
};
