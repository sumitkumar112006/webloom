import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Share2, Cpu, Box, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const categories = [
    {
      title: "WEB SERVICES",
      slug: "/services/web-services",
      icon: Globe,
      items: ["Websites & Portals", "UI/UX & Design Systems", "E-Commerce Platforms", "SEO & Speed Architecture"],
      tag: "Build Digital Presence"
    },
    {
      title: "APP SERVICES",
      slug: "/services/app-services",
      icon: Smartphone,
      items: ["Business Applications", "Customer & Booking Portals", "Inventory & Tracking Apps", "Custom Cloud & AI Apps"],
      tag: "Turn Ideas into Products"
    },
    {
      title: "SOCIAL MEDIA",
      slug: "/social-media",
      icon: Share2,
      items: ["Brand Content Strategy", "Short-Form Reels Production", "Community Page Management", "Targeted Meta Ads (FB & IG)"],
      tag: "Content That Commands Attention"
    },
    {
      title: "AI AUTOMATION",
      slug: "/ai-automation",
      icon: Cpu,
      items: ["Business Task Automation", "WhatsApp Business Bots", "Lead Routing & CRM Sync", "Intelligent AI Agents"],
      tag: "Remove Repetitive Work"
    },
    {
      title: "3D WORKS",
      slug: "/3d-works",
      icon: Box,
      items: [
        "Photorealistic CGI Stills",
        "3D Motion & Commercials",
        "VFX & Environmental Scenes",
        "Product Visualization"
      ],
      tag: "CGI • Motion • VFX • Visualization"
    }
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.09)] py-8 px-4 transition-all duration-200 z-40 relative overflow-hidden"
      onMouseLeave={onClose}
    >
      {/* Specular glass reflection line at top */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none" />
      {/* Subtle warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-32 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-mono">
              One Partner • Multiple Capabilities
            </span>
            <p className="text-sm text-slate-500 mt-0.5">
              Explore specialized engineering, creative design, and automation departments.
            </p>
          </div>
          <Link
            to="/services"
            onClick={onClose}
            className="text-xs font-bold text-[#0F172A] hover:text-amber-700 flex items-center gap-1.5 group transition-colors"
          >
            <span>View All Capabilities Overview</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="flex flex-col space-y-3">
                <Link
                  to={cat.slug}
                  onClick={onClose}
                  className="group flex items-start gap-2.5 p-2 -ml-2 rounded-xl hover:bg-[#FEFCE8]/80 hover:shadow-xs transition-all"
                >
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-amber-800 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{cat.tag}</p>
                  </div>
                </Link>

                <ul className="space-y-1.5 pl-2 border-l border-slate-100">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={cat.slug}
                        onClick={onClose}
                        className="text-xs text-slate-600 hover:text-amber-800 hover:translate-x-0.5 inline-block transition-all"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

