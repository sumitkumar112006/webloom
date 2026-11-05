import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Share2, Cpu, Box, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const ServicesIndexPage: React.FC = () => {
  const list = [
    {
      slug: '/services/web-services',
      data: servicesData['web-services'],
      icon: Globe,
      color: 'bg-blue-50 text-[#23469F]'
    },
    {
      slug: '/services/app-services',
      data: servicesData['app-services'],
      icon: Smartphone,
      color: 'bg-indigo-50 text-[#23469F]'
    },
    {
      slug: '/social-media',
      data: servicesData['social-media'],
      icon: Share2,
      color: 'bg-sky-50 text-[#23469F]'
    },
    {
      slug: '/ai-automation',
      data: servicesData['ai-automation'],
      icon: Cpu,
      color: 'bg-cyan-50 text-[#23469F]'
    },
    {
      slug: '/3d-works',
      data: servicesData['3d-works'],
      icon: Box,
      color: 'bg-slate-100 text-[#101A35]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-14 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Capability Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
            OUR CAPABILITIES
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            Five specialized disciplines unified under a single high-standards product studio.
          </p>
        </div>

        <div className="space-y-6">
          {list.map((item, idx) => {
            const Icon = item.icon;
            const s = item.data;
            return (
              <div
                key={s.id}
                className="bg-white dark:bg-[#111C33] rounded-2xl p-7 sm:p-8 border border-gray-200/80 dark:border-white/10 shadow-sm card-hover flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 max-w-2xl">
                  <div className={`p-3 rounded-xl shrink-0 ${item.color} dark:bg-white/10 dark:text-[#B9DFF2]`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2]">
                        {s.categoryNumber}
                      </span>
                      <h2 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
                        {s.title}
                      </h2>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      {s.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {s.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {s.subservices.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                        >
                          {sub.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center md:justify-end">
                  <Link
                    to={item.slug}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] transition-colors shadow-sm"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

