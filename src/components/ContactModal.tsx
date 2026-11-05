import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Web Services'
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#111C33] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 dark:border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2]">
              Direct Project Inquiry
            </span>
            <h3 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
              Have a project in mind?
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Tell us about your requirements and we will review them within 24 business hours.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <ContactForm initialService={initialService} />
        </div>
      </div>
    </div>
  );
};

