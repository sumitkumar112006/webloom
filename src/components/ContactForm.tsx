import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { submitLeadToGoogleSheets, LeadPayload } from '../config/apiConfig';

interface ContactFormProps {
  initialService?: string;
  initialBudget?: string;
  initialPrompt?: string;
  source?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = 'Web Services',
  initialBudget = 'Flexible / To be discussed',
  initialPrompt = '',
  source = 'Header Connect',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: initialBudget,
    source: source || 'Website',
    prompt: initialPrompt
  });

  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const mountTimeRef = useRef<number>(Date.now());
  const submittedEmailsRef = useRef<Set<string>>(new Set());

  // Synchronize when initial props change (e.g. user clicks different package or service)
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialPrompt) {
      setFormData((prev) => ({ ...prev, prompt: initialPrompt }));
    }
  }, [initialPrompt]);

  useEffect(() => {
    if (source) {
      setFormData((prev) => ({ ...prev, source: source }));
    }
  }, [source]);

  const servicesList = [
    'Web Services',
    'App Services',
    'Social Media & Reels',
    'AI Automation',
    '3D Works, Motion & CGI',
    'Multiple Departments / Full Studio'
  ];

  const budgetOptions = [
    'Flexible / To be discussed',
    'Under $500 (Under INR 40,000)',
    '$600 - $1,800 (INR 50,000 - 1,50,000)',
    '$1,800 - $3,600 (INR 1,50,000 - 3,00,000)',
    '$3,600+ (INR 3,00,000+)',
    'Custom Scope / Enterprise Retainer'
  ];

  const validateEmail = (email: string): boolean => {
    // RFC 5322 compliant regex for realistic email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    return emailRegex.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Basic Spam Protection - Honeypot check
    if (honeypot.trim().length > 0) {
      // Silently ignore bot submission
      setSubmitted(true);
      return;
    }

    // 2. Bot timing check - ensure human interaction time
    const elapsedSeconds = (Date.now() - mountTimeRef.current) / 1000;
    if (elapsedSeconds < 1.0) {
      setErrorMsg('Submission was too quick. Please take a moment to review your details.');
      return;
    }

    // 3. Field Validations
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMsg('Please provide your full name (minimum 2 characters).');
      return;
    }

    if (!trimmedEmail) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address (e.g., name@company.com).');
      return;
    }

    if (trimmedPhone && trimmedPhone.length < 7) {
      setErrorMsg('Please enter a valid phone or WhatsApp number.');
      return;
    }

    // 4. Duplicate Submission Guard
    const submissionKey = `${trimmedEmail.toLowerCase()}::${formData.service}::${formData.prompt.trim().slice(0, 30)}`;
    if (submittedEmailsRef.current.has(submissionKey)) {
      setErrorMsg('This inquiry was already received. Our strategy team will reach out to you within 24 business hours.');
      return;
    }

    const userRequirements = formData.prompt.trim();

    const payload: LeadPayload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || 'Not provided',
      company: formData.company.trim() || 'Individual / Startup',
      service: formData.service || 'Web Services',
      budget: formData.budget || 'Flexible / To be discussed',
      message: userRequirements || 'Website requirements provided in prompt',
      source: formData.source || 'Website',
      prompt: userRequirements || 'Website Requirements'
    };

    setLoading(true);

    try {
      const response = await submitLeadToGoogleSheets(payload);
      
      // Success confirmed by server
      submittedEmailsRef.current.add(submissionKey);
      setSuccessMsg(response.message || 'Your inquiry has been successfully recorded in our system.');
      setSubmitted(true);
      
      // Reset form state only after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: initialService,
        budget: initialBudget,
        source: source || 'Website',
        prompt: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Submission failed:', err);
      setErrorMsg(
        err?.message ||
          'Unable to submit your details at this moment. Please check your connection or contact us directly at info.webloom4u@gmail.com.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-[#111C33] rounded-2xl p-8 border border-gray-200/80 dark:border-white/10 text-center space-y-4 shadow-sm transition-colors">
        <div className="h-16 w-16 bg-blue-50 dark:bg-blue-950/60 text-[#23469F] dark:text-[#B9DFF2] rounded-full flex items-center justify-center mx-auto border border-blue-100 dark:border-blue-900/50">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
          Inquiry Successfully Connected
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          {successMsg}
        </p>
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-200/60 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300 max-w-md mx-auto space-y-1.5 text-left">
          <p className="font-bold text-[#101A35] dark:text-white flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#23469F] dark:text-[#B9DFF2]" />
            What happens next?
          </p>
          <p>
            Your parameters have been logged directly into our master schedule. Our lead technical strategist will review your brief and contact you within 24 business hours.
          </p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSuccessMsg('');
              setErrorMsg('');
              mountTimeRef.current = Date.now();
            }}
            className="text-xs font-semibold text-[#23469F] dark:text-[#B9DFF2] hover:underline"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-[#111C33] rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-white/10 shadow-sm space-y-5 transition-colors"
      noValidate
    >
      {/* Honeypot hidden input for anti-spam bots */}
      <input
        type="text"
        name="agency_verification_code"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {errorMsg && (
        <div className="p-3.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-medium border border-red-200 dark:border-red-900/60 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
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
            placeholder="Studio, Brand or Startup"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Service Interested In & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider mb-1.5">
            Service Interested In
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
            Expected Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 text-xs bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors"
          >
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Website Requirements & Prompt Field */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-bold text-[#101A35] dark:text-gray-200 uppercase tracking-wider">
            Website Requirements & Prompt
          </label>
          {formData.prompt && (
            <span className="text-[10px] font-mono text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60 dark:border-blue-900/50">
              Captured from UI
            </span>
          )}
        </div>
        <textarea
          rows={4}
          value={formData.prompt}
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
          placeholder="Describe your website requirements, target pages, desired features, design style, animations, or enter your project prompt..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-[#23469F] focus:border-[#23469F] outline-none transition-colors resize-none leading-relaxed"
        />
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
          Specify your website requirements or prompt so we can prepare your project scope and architecture.
        </p>
      </div>

      {/* Source Indicator */}
      <input type="hidden" name="source" value={formData.source} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#23469F] text-white hover:bg-[#1b367c] active:scale-[0.99] flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Connecting To Google Sheets...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Connect & Submit Inquiry</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 pt-1">
        <span>Direct studio transmission to spreadsheet</span>
        <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500">
          Source: {formData.source}
        </span>
      </div>
    </form>
  );
};
