import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#23469F] ${
        isDark
          ? 'bg-slate-800 text-amber-300 hover:bg-slate-700 hover:text-amber-200 border border-slate-700/80 shadow-sm'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 shadow-sm'
      } ${className}`}
    >
      <div className="relative h-4 w-4">
        {isDark ? (
          <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 fill-amber-300/30" />
        ) : (
          <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 fill-slate-700/20" />
        )}
      </div>
    </button>
  );
};

