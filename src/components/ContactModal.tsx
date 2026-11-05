import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBudget?: string;
  initialPrompt?: string;
  source?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Web Services',
  initialBudget = 'Flexible / To be discussed',
  initialPrompt = '',
  source = 'Header Connect'
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
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#111C33] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 my-8 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#23469F] dark:text-[#B9DFF2] bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 mb-1">
              <Sparkles className="h-3 w-3" />
              <span>Direct Studio Connection</span>
            </div>
            <h3 className="text-xl font-bold text-[#101A35] dark:text-white font-display">
              Connect With Webloom Studio
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Submit your project parameters directly into our live studio intake queue.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
          <ContactForm
            initialService={initialService}
            initialBudget={initialBudget}
            initialPrompt={initialPrompt}
            source={source}
            onSuccess={() => {
              // Optionally can keep open for review or user closes
            }}
          />
        </div>
      </div>
    </div>
  );
};
