import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenContact: (service?: string, prompt?: string, source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-white/10'
          : 'bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* LOGO: Profile.png + WEBLOOM TEXT */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#23469F] rounded-lg p-0.5 sm:p-1 group"
            aria-label="Webloom Home"
          >
            <img
              src="/assets/Profile.png"
              alt="Webloom"
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full object-cover border border-[#23469F]/30 dark:border-[#B9DFF2]/40 shadow-sm shrink-0"
            />
            <span className="text-xl sm:text-2xl font-black tracking-tight font-display text-[#101A35] dark:text-white">
              WEBLOOM
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isServicesOpen || location.pathname.startsWith('/services')
                    ? 'text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/60 dark:bg-blue-950/40'
                    : 'text-[#111827] dark:text-gray-300 hover:text-[#23469F] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#23469F] dark:text-[#B9DFF2]' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            <Link
              to="/our-work"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/our-work' || location.pathname.startsWith('/our-work/')
                  ? 'text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/60 dark:bg-blue-950/40'
                  : 'text-[#111827] dark:text-gray-300 hover:text-[#23469F] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/video-showcase"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/video-showcase' || location.pathname === '/showreel'
                  ? 'text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/60 dark:bg-blue-950/40'
                  : 'text-[#111827] dark:text-gray-300 hover:text-[#23469F] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
              }`}
            >
              Video Showcase
            </Link>

            <Link
              to="/pricing"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/pricing'
                  ? 'text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/60 dark:bg-blue-950/40'
                  : 'text-[#111827] dark:text-gray-300 hover:text-[#23469F] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
              }`}
            >
              Plans
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === '/about'
                  ? 'text-[#23469F] dark:text-[#B9DFF2] bg-blue-50/60 dark:bg-blue-950/40'
                  : 'text-[#111827] dark:text-gray-300 hover:text-[#23469F] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800/60'
              }`}
            >
              About
            </Link>
          </nav>

          {/* DESKTOP CTA & THEME TOGGLE */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => onOpenContact('Web Services', '', 'Header Connect')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#23469F] text-white hover:bg-[#1b367c] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23469F] focus:ring-offset-2"
            >
              <span>Connect</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE CONTROLS & THEME TOGGLE */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => onOpenContact('Web Services', '', 'Header Connect (Mobile)')}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#23469F] text-white hover:bg-[#1b367c] active:scale-[0.98] transition-all shadow-sm"
            >
              Connect
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#23469F]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      <MegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-white dark:bg-[#0B1120] border-t border-gray-200 dark:border-white/10 overflow-y-auto px-6 py-6 pb-20 md:hidden flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-3">
                Capabilities
              </span>
              <div className="space-y-2">
                <Link
                  to="/services/web-services"
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  01 — Web Services
                </Link>
                <Link
                  to="/services/app-services"
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  02 — App Services
                </Link>
                <Link
                  to="/social-media"
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  03 — Social Media & Meta Ads
                </Link>
                <Link
                  to="/ai-automation"
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  04 — AI Automation
                </Link>
                <Link
                  to="/3d-works"
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  05 — 3D Works & CGI
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-white/10 pt-4 space-y-2">
              <Link
                to="/our-work"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Projects
              </Link>
              <Link
                to="/video-showcase"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Video Showcase
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Plans
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                About Webloom
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#101A35] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 dark:border-white/10 mt-6 space-y-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact('Web Services', '', 'Header Connect (Mobile Drawer)');
              }}
              className="w-full py-3.5 text-center text-sm font-semibold rounded-lg bg-[#23469F] text-white hover:bg-[#1b367c] transition-colors"
            >
              Connect
            </button>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Partapur, Meerut • info.webloom4u@gmail.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

