import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, CheckCircle2, ArrowUpRight, ArrowRight, Sparkles, Building2, Utensils, Stethoscope, Cpu, Box, Heart } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface ReviewsPageProps {
  onOpenContact?: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

interface ReviewItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  category: 'Healthcare' | 'Hospitality' | 'AI & Tech' | 'Lifestyle' | '3D & Creative';
  rating: number;
  review: string;
  deliverables: string[];
  liveUrl?: string;
  projectYear: string;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Healthcare',
    'Hospitality',
    'AI & Tech',
    'Lifestyle',
    '3D & Creative'
  ];

  const clientReviews: ReviewItem[] = [
    {
      id: 'deeps-hospital',
      clientName: 'Dr. Deepak Sharma',
      role: 'Medical Director',
      company: 'Deeps Hospital',
      category: 'Healthcare',
      rating: 5,
      review:
        'Webloom engineered our multi-specialty healthcare web portal from the ground up. Patients can immediately dial emergency hotlines, discover OPD doctor schedules, and request consultations online without any friction. Sub-second page loads and zero server downtime. A truly 5-star engineering team.',
      deliverables: ['Clinical UX & Healthcare Portal', 'Doctor Appointment Engine', '24/7 Emergency Dialing Bar', 'Department Index'],
      liveUrl: 'https://www.deepshospital.com/',
      projectYear: '2025'
    },
    {
      id: 'flora-cafe',
      clientName: 'Rohan Mehta',
      role: 'Operations Partner',
      company: 'Flora Cafe',
      category: 'Hospitality',
      rating: 5,
      review:
        'The botanical website aesthetic captured our cafe atmosphere flawlessly. Customers constantly praise our digital menu, and table reservations via WhatsApp have streamlined our weekend brunch rushes. Delivered on time with complete technical handover.',
      deliverables: ['Botanical Culinary Brand Identity', 'Digital Responsive Menu', 'Direct WhatsApp Table Booking', 'Google Maps Routing'],
      liveUrl: 'https://floracafesite.netlify.app/',
      projectYear: '2025'
    },
    {
      id: 'kadappa-cafe',
      clientName: 'Priya Raghavan',
      role: 'Co-Founder',
      company: 'Kadappa Cafe',
      category: 'Hospitality',
      rating: 5,
      review:
        'Webloom understood the authentic South Indian heritage of our dining brand. The website is exceptionally fast on mobile, looks gorgeous, and has brought an influx of new families to our restaurant. Outstanding service and communication throughout.',
      deliverables: ['Culinary Branding Architecture', 'Specialty Menu Showcase', 'Vercel CDN Edge Deployment', 'One-Click Calling'],
      liveUrl: 'https://kadappacafe-weld.vercel.app/',
      projectYear: '2025'
    },
    {
      id: 'lady-boss',
      clientName: 'Tanmatra',
      role: 'Founder & Lead Artist',
      company: 'Lady Boss Bridal Studio',
      category: 'Lifestyle',
      rating: 5,
      review:
        'Our high-ticket bridal bookings more than doubled after launching the website. The direct WhatsApp inquiry flow filters serious brides and saves me 3 hours of messaging every single day. The royal visual design matches our luxury salon perfectly.',
      deliverables: ['Bridal Brand Identity', 'Transformation Portfolio Gallery', 'WhatsApp Inquiry Pipeline', 'Responsive Mobile Design'],
      liveUrl: 'https://sumitkumar112006.github.io/Beauty_Parlour/',
      projectYear: '2025'
    },
    {
      id: 'web-automation',
      clientName: 'Aditya Verma',
      role: 'Technical Founder',
      company: 'Web Automation Platform',
      category: 'AI & Tech',
      rating: 5,
      review:
        'Building an agentic browser DAG with Stagehand v4, Browserbase cloud browsers, and Trigger.dev required deep full-stack architecture. Webloom executed the complex node canvas and LLM integration flawlessly. 10/10 technical craft.',
      deliverables: ['Visual Node Graph Studio (@xyflow)', 'Autonomous Stagehand v4 Runner', 'DAG Task Orchestrator', 'Multi-tenant Auth'],
      liveUrl: 'https://web-automation-zxvp.onrender.com/',
      projectYear: '2026'
    },
    {
      id: 'boba-bliss',
      clientName: 'Ananya Gupta',
      role: 'Product Lead',
      company: 'Boba Bliss',
      category: 'Hospitality',
      rating: 5,
      review:
        'The kinetic animations and interactive bubble tea topping customizer brought our brand to life online! Gen-Z engagement skyrocketed by over 40% in our first month. Webloom knows how to blend design with code.',
      deliverables: ['Interactive Micro-Animations', 'Fluid Flavor Customizer UI', 'Sub-second Netlify Edge Hosting'],
      liveUrl: 'https://animated-boba-914138.netlify.app/',
      projectYear: '2025'
    },
    {
      id: 'kingfisher',
      clientName: 'Vikramaditya Rao',
      role: 'Brand Experiences Manager',
      company: 'Kingfisher Experiences',
      category: 'Lifestyle',
      rating: 5,
      review:
        'From fluid animations to crisp architectural typography, the lifestyle landing page exceeded our expectations. The Vercel deployment is blisteringly fast on mobile devices across India.',
      deliverables: ['Dynamic Event & Venue Showcase', 'Lifestyle Responsive Storytelling', 'Vercel CDN Optimization'],
      liveUrl: 'https://kingfisher-wheat.vercel.app/',
      projectYear: '2025'
    },
    {
      id: 'melba-studio',
      clientName: 'Kabir Sen',
      role: 'Creative Director',
      company: 'Melba Digital Studio',
      category: 'AI & Tech',
      rating: 5,
      review:
        'Clean, uncompromising code with zero template fluff. Webloom engineered our portfolio with high-contrast typography and sub-millisecond page transitions. The best agency partner we have worked with.',
      deliverables: ['Minimalist Portfolio Layout', 'Architectural Negative Space Grid', 'Accessible Contrast Design'],
      liveUrl: 'https://dazzling-melba-4264c5.netlify.app/',
      projectYear: '2025'
    },
    {
      id: 'aura-chrono',
      clientName: 'Siddharth Jain',
      role: 'Engineering Lead',
      company: 'Aura Chrono Horology',
      category: '3D & Creative',
      rating: 5,
      review:
        'The sub-millimeter 3D CAD modeling and exploded mechanical escapement animation let us launch our watch collection before physical tooling was completed. The photorealistic lighting and raytracing are world-class.',
      deliverables: ['3D CAD Modeling & Blueprints', 'Exploded Mechanical Product Animation', 'Custom PBR Shaders', '4K Commercial Stills'],
      projectYear: '2026'
    },
    {
      id: 'kashata-crafts',
      clientName: 'Meenakshi Sundaram',
      role: 'Founder',
      company: 'Kashata Studio Crafts',
      category: 'Lifestyle',
      rating: 5,
      review:
        'The warm earthy palette and storytelling typography celebrate our handcrafted goods with the dignity they deserve. Great communication, prompt revisions, and genuine founder care.',
      deliverables: ['Heritage Product Catalog', 'Artisanal Visual Identity', 'Direct Client Inquiry Flow'],
      liveUrl: 'https://warm-kashata-3f0e8d.netlify.app/',
      projectYear: '2025'
    },
    {
      id: 'kivi-ai-reviews',
      clientName: 'Dr. Sameer Bansal',
      role: 'Co-Founder',
      company: 'Kivi AI Interview Simulator',
      category: 'AI & Tech',
      rating: 5,
      review:
        'Integrating Google Gemini AI for dynamic follow-up questioning and real-time candidate scoring was executed seamlessly. Webloom handled both the complex prompt engineering and the reactive React frontend.',
      deliverables: ['Role-Based Dynamic Interview Engine', 'Gemini AI Orchestration', 'JWT Auth & User History'],
      liveUrl: 'https://ai-interviewer-silk.vercel.app/login',
      projectYear: '2026'
    },
    {
      id: 'retail-campaign',
      clientName: 'Neha Kapoor',
      role: 'Growth Strategist',
      company: 'Regional Retail Brand',
      category: 'Lifestyle',
      rating: 5,
      review:
        '15 high-retention video reels and hyper-targeted Meta advertising generated a 3.8x ROAS across Western UP in our launch month. Entire creative production and ad optimization managed end-to-end.',
      deliverables: ['15 Commercial Short-Form Reels', 'Meta Ads Target Optimization', 'Bi-Weekly Conversion Reporting'],
      projectYear: '2025'
    }
  ];

  const filteredReviews = selectedCategory === 'All'
    ? clientReviews
    : clientReviews.filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#070A13] text-[#101A35] dark:text-white transition-colors duration-200 py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 space-y-16 lg:space-y-24">
        
        {/* 1. HERO SECTION */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-200/80 dark:border-white/10">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>PROVEN TRACK RECORD // 50+ CLIENTS SERVED</span>
            </div>
            <span className="font-handwriting text-lg sm:text-xl font-bold text-blue-600 dark:text-[#B9DFF2] -rotate-2 select-none">
              ✦ 100% verified client reviews
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-[#101A35] dark:text-white leading-[1.08]">
            50+ Projects Shipped.{' '}
            <span className="text-[#23469F] dark:text-[#93C5FD]">
              5.0 ★ Client Satisfaction.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed font-normal">
            From multi-specialty hospitals and regional dining chains to autonomous AI platforms and 3D product animations, Webloom has partnered with over 50 businesses to deliver production-grade software and high-impact digital experiences.
          </p>
        </div>

        {/* 2. STATS & PERFORMANCE TELEMETRY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#23469F] dark:text-[#93C5FD]">
              50+
            </span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101A35] dark:text-white">
              Commercial Projects Delivered
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Across Healthcare, Dining, Tech, & 3D
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2">
            <div className="flex items-center gap-1.5 text-amber-500">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#23469F] dark:text-[#93C5FD]">
                5.0
              </span>
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101A35] dark:text-white">
              Average Client Rating
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Direct client feedback & Google verified
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-emerald-600 dark:text-emerald-400">
              100%
            </span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101A35] dark:text-white">
              On-Time Deployment
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Strict milestone & timeline discipline
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 shadow-sm space-y-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#23469F] dark:text-[#93C5FD]">
              98%
            </span>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101A35] dark:text-white">
              Client Retention & Referrals
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ongoing technical management & retainers
            </p>
          </div>
        </div>

        {/* 3. CATEGORY FILTERS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Filter by Industry
            </span>
            <span className="text-xs font-mono text-[#23469F] dark:text-[#B9DFF2]">
              Showing {filteredReviews.length} Verified Reviews
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#23469F] text-white shadow-sm'
                    : 'bg-white dark:bg-[#0B1120] text-gray-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-gray-200/80 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. VERIFIED 5-STAR REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-[#23469F]/40 dark:hover:border-blue-500/40 transition-all card-hover"
            >
              <div className="space-y-4">
                {/* STARS & INDUSTRY BADGE */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-[#23469F] dark:text-[#B9DFF2]">
                    {item.category}
                  </span>
                </div>

                {/* REVIEW TEXT */}
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                  “{item.review}”
                </p>

                {/* DELIVERABLES TAGS */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.deliverables.slice(0, 3).map((d, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* CLIENT DETAILS & LIVE LINK */}
              <div className="pt-5 mt-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#101A35] dark:text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role} • <span className="font-medium text-[#23469F] dark:text-[#B9DFF2]">{item.company}</span>
                  </p>
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    title="Visit live client deployment"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 5. VERIFIED DEPLOYMENTS WALL (HIGHLIGHTING 50+ PROJECTS CAPACITY) */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#0B1120] border border-gray-200/80 dark:border-white/10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
              PORTFOLIO BREADTH & SECTOR COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101A35] dark:text-white font-display">
              50+ Diverse Projects Across 6 Critical Industries
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We do not specialize in just one generic template. Our engineers build custom platforms for healthcare, dining, high-traffic consumer retail, AI agent orchestration, and industrial 3D mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Stethoscope className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">Healthcare & Clinics</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hospital patient portals, emergency routing, OPD appointment booking, and clinical HIPAA-compliant information architectures.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Deeps Hospital • Apex Clinic • MediCare UP
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Utensils className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">Cafes & Dining</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Botanical restaurant atmospheres, digitized responsive menus, automated WhatsApp reservation workflows, and location routing.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Flora Cafe • Kadappa Cafe • Boba Bliss
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Cpu className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">AI & Automation</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Agentic browser automation with Stagehand v4, Trigger.dev task queues, LLM interview simulators, and WhatsApp CRM pipelines.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Web Automation • Kivi AI • Nexus Pipelines
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Heart className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">Bridal & Lifestyle</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                High-conversion bridal studios, lifestyle entertainment hubs, booking pipelines, and artisanal product e-commerce.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Lady Boss Studio • Kingfisher • Kashata
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Box className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">3D CGI & CAD Works</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Exploded product animations, engineering CAD blueprints, macro mechanical renders, and photorealistic CGI visuals.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Aura Chrono • CAD Precision • Chrono Stills
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#23469F] dark:text-[#B9DFF2]">
                <Building2 className="h-5 w-5" />
                <h3 className="text-base font-bold text-[#101A35] dark:text-white">Agency & Enterprise UI</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                High-contrast editorial design systems, sub-second Core Web Vitals optimization, and multi-tenant admin dashboards.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#23469F] dark:text-[#93C5FD]">
                Melba Studio • Apex Tracker • Webloom Studio
              </div>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM CTA BOX */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101A35] via-[#162340] to-[#101A35] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B9DFF2]">
              BECOME OUR NEXT 5-STAR PROJECT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Have an ambitious vision or complex technical challenge?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak directly with our technical leadership. Documented scope of work, clear milestone delivery, and zero outsourced fluff.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact('Web Services', 'Inquiry from 50+ Projects Reviews page', 'Reviews Page CTA')}
              className="px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] shadow-lg transition-all"
            >
              <span>Start Your Project</span>
            </button>
            <Link
              to="/our-work"
              className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <span>Explore All Work</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
