import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = 'Web Services',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    scopeTimeline: 'Within 2-4 weeks',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Web Services',
    'App Services',
    'Social Media & Reels',
    'AI Automation',
    '3D Modeling, Animation & CAD',
    'Multiple Departments'
  ];

  const timelineOptions = [
    'Immediately (Next 7 days)',
    'Within 2-4 weeks',
    'Within 1-2 months',
    'Exploratory / Planning Stage'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete your name, email, and contact number.');
      return;
    }
    setErrorMsg('');
    setLoading(true);

    // Simulate reliable async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center space-y-4 shadow-sm">
        <div className="h-16 w-16 bg-blue-50 text-[#23469F] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="text-xl font-bold text-[#101A35] font-display">
          Inquiry Received Successfully
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Our strategy and engineering team has received your project parameters for <span className="font-semibold text-gray-900">{formData.service}</span>.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-gray-200/60 text-xs text-gray-600 max-w-sm mx-auto space-y-1">
          <p className="font-bold text-[#101A35]">What happens next?</p>
          <p>We review your brief and contact you within 24 business hours via phone or email for your initial introduction call.</p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: initialService,
                scopeTimeline: 'Within 2-4 weeks',
                details: ''
              });
            }}
            className="text-xs font-semibold text-[#23469F] hover:underline"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111C33] rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 shadow-sm space-y-5">
      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 text-xs font-medium border border-red-200 dark:border-red-900/50">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Company / Brand
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Studio / Brand Name"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Primary Capability Required
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 text-xs bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          >
            {servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Target Timeline
          </label>
          <select
            value={formData.scopeTimeline}
            onChange={(e) => setFormData({ ...formData, scopeTimeline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 text-xs bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          >
            {timelineOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
          Project Details & Objectives
        </label>
        <textarea
          rows={3}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Briefly describe what you're looking to build, current challenges, or target outcomes..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] active:scale-[0.99] flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        <span>{loading ? 'Submitting Scope Parameters...' : 'Start My Project'}</span>
      </button>

      <p className="text-[11px] text-center text-gray-500 dark:text-gray-400">
        Direct partner inquiry. We never share your data or send spam.
      </p>
    </form>
  );
};

