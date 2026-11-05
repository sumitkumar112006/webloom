import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle, Layers, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { PricingCard } from '../components/PricingCard';
import { ProjectCard } from '../components/ProjectCard';
import { FAQAccordion } from '../components/FAQAccordion';

interface ServicePageProps {
  onOpenContact: (serviceName?: string, promptText?: string, sourceName?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug || 'web-services'] || servicesData['web-services'];

  // Match relevant portfolio projects
  const relevantProjects = projectsData.filter((p) => {
    if (service.slug === 'web-services') return p.category === 'Web';
    if (service.slug === 'app-services') return p.category === 'Apps';
    if (service.slug === 'social-media') return p.category === 'Social';
    if (service.slug === 'ai-automation') return p.category === 'AI';
    if (service.slug === '3d-works') return p.category === '3D';
    return true;
  }).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] transition-colors">
      {/* 1. HERO */}
      <section className="bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 pt-12 pb-16 lg:pt-16 lg:pb-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#23469F] dark:hover:text-[#B9DFF2] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Capabilities</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40">
              <span>{service.categoryNumber} — {service.title}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.heroDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenContact(service.title, `Inquiry for ${service.title}`, `Service Hero: ${service.slug}`)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] shadow-sm active:scale-[0.98] transition-all"
              >
                <span>Inquire About {service.title}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-slate-100 dark:bg-[#1E293B] text-[#101A35] dark:text-white hover:bg-slate-200 dark:hover:bg-[#334155] transition-all"
              >
                <span>View Scope & Packages</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO & 3. SERVICES (SUBSERVICES) */}
      <section className="py-16 sm:py-24 bg-[#F6F8FC] dark:bg-[#0B1120] border-b border-gray-200/60 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Capabilities Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              What We Do in {service.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Structured engineering and execution pillars designed for predictable quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subservices.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111C33] rounded-2xl p-7 border border-gray-200/80 dark:border-white/10 shadow-sm hover:border-[#23469F]/40 transition-colors card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 px-2 py-1 rounded">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#101A35] dark:text-white font-display">
                    {sub.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Audience Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              Who This Is For
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              We design our service engagements to address explicit business scenarios rather than generic vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whoItsFor.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111C33] border border-gray-200/70 dark:border-white/10 space-y-2"
              >
                <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#23469F] dark:text-[#B9DFF2] flex items-center justify-center font-bold text-xs mb-3">
                  {idx + 1}
                </div>
                <h4 className="text-sm font-bold text-[#101A35] dark:text-white font-display">
                  {item.audience}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.need}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="py-16 sm:py-24 bg-[#F6F8FC] dark:bg-[#0B1120] border-b border-gray-200/60 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Execution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              Our Process for {service.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Every phase has defined inputs, clear reviews, and documented outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111C33] p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm space-y-3 card-hover"
              >
                <span className="text-2xl font-mono font-extrabold text-[#23469F] dark:text-[#B9DFF2]">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-[#101A35] dark:text-white font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SELECTED WORK */}
      {relevantProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-white dark:bg-[#0B1120] border-b border-gray-100 dark:border-white/10 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-1">
                  Evidence of Execution
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
                  Selected {service.title} Work
                </h2>
              </div>
              <Link
                to="/our-work"
                className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] hover:underline flex items-center gap-1"
              >
                <span>View All Portfolio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. PRICING & PACKAGES (NO PRICE TAGS IN COMPLIANCE WITH USER RULE) */}
      <section className="py-16 sm:py-24 bg-[#F6F8FC] dark:bg-[#0B1120] border-b border-gray-200/60 dark:border-white/10 transition-colors" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] block mb-2">
              Scope-Based Tiers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] dark:text-white font-display">
              {service.title} Packages & Scope
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Select the tier that aligns with your organizational stage. We tailor the exact technical scope during our initial discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {service.packages.map((pkg) => (
              <PricingCard
                key={pkg.id}
                packageData={pkg}
                onSelectPackage={(pkgName) =>
                  onOpenContact(
                    service.title,
                    `Selected Package: ${pkgName} (${service.title})`,
                    `Service Package Grid: ${service.slug}`
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <FAQAccordion
        faqs={service.faqs}
        title={`${service.title} FAQs`}
        subtitle="Common questions regarding scope, deliverable formats, revisions, and technical handover."
      />

      {/* 9. SERVICE CTA */}
      <section className="py-20 bg-[#101A35] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B9DFF2]">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Start Your {service.title} Project With Webloom.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Book an introduction call with our Meerut studio to discuss requirements, project milestones, and production schedules.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenContact(service.title, `Let's discuss ${service.title}`, `Service Bottom CTA: ${service.slug}`)}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] transition-all shadow-md"
            >
              Start My Project
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              Compare All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

