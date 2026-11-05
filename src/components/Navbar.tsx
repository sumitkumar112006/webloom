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
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] border-b border-white/80'
          : 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-200/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]'
      }`}
    >
      {/* 1. TOP SPECULAR BEVEL REFLECTION (Simulates crisp light reflecting on upper glass bevel) */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-20" />

      {/* 2. DYNAMIC AMBIENT REFLECTION SHEEN (Realistic glass light sweep) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glass-reflection-sheen" />
      </div>

      {/* 3. SUBTLE PRISMATIC REFLECTION GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/40 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO WITH EXCLUSIVE SHIMMER EFFECT */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-0.5 sm:p-1 group logo-shimmer"
            aria-label="Webloom Home"
          >
            <img
              src="/assets/Logo_light.png"
              alt="Webloom"
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
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
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  isServicesOpen || location.pathname.startsWith('/services')
                    ? 'text-[#0F172A] bg-white/90 shadow-xs border border-white'
                    : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/70 hover:shadow-xs hover:border hover:border-white/80'
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'
                  }`}
                />
              </button>
            </div>

            <Link
              to="/our-work"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                location.pathname === '/our-work' || location.pathname.startsWith('/our-work/')
                  ? 'text-[#0F172A] bg-white/90 shadow-xs border border-white'
                  : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/70 hover:shadow-xs hover:border hover:border-white/80'
              }`}
            >
              Work
            </Link>

            <Link
              to="/video-showcase"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                location.pathname === '/video-showcase' || location.pathname === '/showreel'
                  ? 'text-[#0F172A] bg-white/90 shadow-xs border border-white'
                  : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/70 hover:shadow-xs hover:border hover:border-white/80'
              }`}
            >
              Video Showcase
            </Link>

            <Link
              to="/pricing"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                location.pathname === '/pricing'
                  ? 'text-[#0F172A] bg-white/90 shadow-xs border border-white'
                  : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/70 hover:shadow-xs hover:border hover:border-white/80'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                location.pathname === '/about'
                  ? 'text-[#0F172A] bg-white/90 shadow-xs border border-white'
                  : 'text-slate-700 hover:text-[#0F172A] hover:bg-white/70 hover:shadow-xs hover:border hover:border-white/80'
              }`}
            >
              About
            </Link>
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenContact('Web Services', '', 'Header Connect')}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-slate-800"
            >
              <span>Connect</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenContact('Web Services', '', 'Header Connect (Mobile)')}
              className="px-4 py-1.5 text-xs font-bold rounded-full bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xs"
            >
              Connect
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-black hover:bg-white/80 focus:outline-none"
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
        <div className="fixed inset-0 top-20 z-50 bg-white/95 backdrop-blur-2xl border-t border-slate-200/70 overflow-y-auto px-6 py-6 pb-20 md:hidden flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3 font-mono">
                Capabilities
              </span>
              <div className="space-y-2">
                <Link
                  to="/services/web-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-amber-50"
                >
                  01 — Web Services
                </Link>
                <Link
                  to="/services/app-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-amber-50"
                >
                  02 — App Services
                </Link>
                <Link
                  to="/social-media"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-amber-50"
                >
                  03 — Social Media & Meta Ads
                </Link>
                <Link
                  to="/ai-automation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-amber-50"
                >
                  04 — AI Automation
                </Link>
                <Link
                  to="/3d-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-amber-50"
                >
                  05 — 3D Works & CGI
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <Link
                to="/our-work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-slate-50"
              >
                Our Work
              </Link>
              <Link
                to="/video-showcase"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-slate-50"
              >
                Video Showcase
              </Link>
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-slate-50"
              >
                Pricing & Packages
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-slate-50"
              >
                About Webloom
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0F172A] hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6 space-y-3">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact('Web Services', '', 'Header Connect (Mobile Drawer)');
              }}
              className="w-full py-3.5 text-center text-sm font-bold rounded-full bg-[#0F172A] text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Connect
            </button>
            <p className="text-xs text-center text-slate-500">
              Partapur, Meerut • info.webloom4u@gmail.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

