import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101A35] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white font-display">
                WEB<span className="text-[#B9DFF2]">LOOM</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              {companyData.subheadline}
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#B9DFF2] shrink-0 mt-0.5" />
                <span>{companyData.legalLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#B9DFF2] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#B9DFF2] shrink-0" />
                <a href={`tel:${companyData.primaryPhone}`} className="hover:text-white transition-colors">
                  {companyData.primaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/services/web-services" className="hover:text-[#B9DFF2] transition-colors">
                  Web Services
                </Link>
              </li>
              <li>
                <Link to="/services/app-services" className="hover:text-[#B9DFF2] transition-colors">
                  App Services
                </Link>
              </li>
              <li>
                <Link to="/social-media" className="hover:text-[#B9DFF2] transition-colors">
                  Social Media & Reels
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="hover:text-[#B9DFF2] transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/3d-works" className="hover:text-[#B9DFF2] transition-colors">
                  3D Works & CGI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#B9DFF2] transition-colors">
                  About Webloom
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#B9DFF2] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/video-showcase" className="hover:text-[#B9DFF2] transition-colors">
                  Video Showcase
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#B9DFF2] transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B9DFF2] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Support & Verification */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Speak directly with our engineering and strategy team regarding ongoing projects or new proposals.
            </p>
            <div className="space-y-1.5 text-xs text-gray-300">
              <p>+91 62079 19163</p>
              <p>+91 92588 15761</p>
              <p>+91 90588 38478</p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <a
                href="mailto:info.webloom4u@gmail.com"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#B9DFF2] hover:underline"
              >
                <span>Send RFP / Scope Brief</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Webloom. All rights reserved. Built with product design discipline.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Authentic Client Scope • Zero Fabricated Metrics</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

