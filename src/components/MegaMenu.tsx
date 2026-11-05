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
      className="absolute top-full left-0 w-full bg-white dark:bg-[#0E1626] border-b border-gray-200/80 dark:border-white/10 shadow-2xl py-8 px-4 transition-all duration-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-100 dark:border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
              One Partner • Multiple Capabilities
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Explore specialized engineering, creative design, and automation departments.
            </p>
          </div>
          <Link
            to="/services"
            onClick={onClose}
            className="text-xs font-semibold text-[#23469F] dark:text-[#B9DFF2] hover:text-[#101A35] dark:hover:text-white flex items-center gap-1.5 group"
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
                  className="group flex items-start gap-2.5 p-2 -ml-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <div className="p-2 rounded-md bg-[#F6F8FC] dark:bg-slate-800 text-[#23469F] dark:text-[#B9DFF2] group-hover:bg-[#23469F] group-hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#101A35] dark:text-white group-hover:text-[#23469F] dark:group-hover:text-[#B9DFF2] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">{cat.tag}</p>
                  </div>
                </Link>

                <ul className="space-y-1.5 pl-2 border-l border-gray-100 dark:border-white/10">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={cat.slug}
                        onClick={onClose}
                        className="text-xs text-gray-600 dark:text-gray-300 hover:text-[#23469F] dark:hover:text-[#B9DFF2] hover:translate-x-0.5 inline-block transition-all"
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

