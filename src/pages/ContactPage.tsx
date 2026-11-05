import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { companyData } from '../data/companyData';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#0B1120] py-14 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800/40 mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Direct Client Consultation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101A35] dark:text-white font-display tracking-tight">
            START YOUR PROJECT
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
            Tell us about your technical goals, brand requirements, or automation hurdles. We review every brief thoroughly before our discovery call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#111C33] rounded-2xl p-7 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-gray-100 dark:border-white/10">
                <img
                  src="/assets/Profile.png"
                  alt="Studio Principal"
                  className="h-12 w-12 rounded-xl object-cover border border-gray-200 dark:border-white/15 shadow-sm shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-[#101A35] dark:text-white font-display">
                    Direct Founder Consultation
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Lead Technical Strategist & Principal
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101A35] dark:text-white block">Headquarters</span>
                    <span>{companyData.legalLocation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101A35] dark:text-white block">Project RFP & Proposals</span>
                    <a href={`mailto:${companyData.email}`} className="text-[#23469F] dark:text-[#B9DFF2] hover:underline font-medium">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101A35] dark:text-white block">Direct Contact Lines</span>
                    <p className="mt-0.5">+91 90588 38478</p>
                    <p>+91 62079 19163</p>
                    <p>+91 92588 15761</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#23469F] dark:text-[#B9DFF2] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101A35] dark:text-white block">Response Turnaround</span>
                    <span>Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/70 dark:bg-blue-950/40 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/40 text-xs text-gray-700 dark:text-gray-300 space-y-2">
              <span className="font-bold text-[#101A35] dark:text-white block">What to Expect:</span>
              <p className="leading-relaxed">
                1. Initial review by our engineering & strategy leads.
              </p>
              <p className="leading-relaxed">
                2. Scheduling a 20-minute discovery call to clarify boundaries.
              </p>
              <p className="leading-relaxed">
                3. A formal scope document with milestones and deliverables.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7">
            <ContactForm source="Contact Page" />
          </div>
        </div>
      </div>
    </div>
  );
};

