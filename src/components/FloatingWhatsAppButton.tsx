import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

const GREETING_STORAGE_KEY = 'synckraft-whatsapp-greeting-seen';

const WHATSAPP_MESSAGE = `Hello Synckraft Team 👋

I came across your website and would like to learn more about your software solutions, AI automation, CRM platforms, and services.

Please guide me with the best solution for my business.

Thank you!`;

export const FloatingWhatsAppButton: React.FC = React.memo(() => {
  const [showGreeting, setShowGreeting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (window.localStorage.getItem(GREETING_STORAGE_KEY)) return;

    const showTimer = window.setTimeout(() => {
      setShowGreeting(true);
      window.localStorage.setItem(GREETING_STORAGE_KEY, 'true');
    }, 4000);

    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showGreeting) return;

    const hideTimer = window.setTimeout(() => setShowGreeting(false), 8000);
    return () => window.clearTimeout(hideTimer);
  }, [showGreeting]);

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[45] flex items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 12, y: 4 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="status"
            className="hidden sm:block pointer-events-auto relative mb-1 max-w-[260px] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-xl shadow-slate-900/10 backdrop-blur-md"
          >
            <span className="block font-semibold text-slate-900">👋 Hi there!</span>
            <span className="block">Want to automate your business?</span>
            <span className="block">Let's chat on WhatsApp.</span>
            <span className="absolute right-[-6px] bottom-5 h-3 w-3 rotate-45 border-r border-t border-white/80 bg-white/90" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group relative pointer-events-auto">
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-within:-translate-x-1 group-focus-within:opacity-100 sm:block"
        >
          Chat with Synckraft →
        </span>

        <motion.a
          href={getWhatsAppUrl(WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Synckraft on WhatsApp"
          onClick={() => setShowGreeting(false)}
          animate={prefersReducedMotion ? undefined : { y: [0, 0, -4, 0] }}
          transition={prefersReducedMotion ? undefined : {
            duration: 0.65,
            times: [0, 0.3, 0.6, 1],
            repeat: Infinity,
            repeatDelay: 12,
            ease: 'easeOut',
          }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-[#25D366]/95 text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] backdrop-blur-sm transition-[box-shadow,filter] duration-200 hover:shadow-[0_14px_38px_rgba(37,211,102,0.55)] hover:brightness-105 focus-visible:outline-white sm:h-16 sm:w-16"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="h-8 w-8 sm:h-9 sm:w-9"
            fill="currentColor"
          >
            <path d="M16.04 3.2A12.7 12.7 0 0 0 5.31 22.72L3.2 28.8l6.3-2.02A12.75 12.75 0 1 0 16.04 3.2Zm0 22.94c-2.2 0-4.35-.59-6.22-1.7l-.45-.27-3.74 1.2 1.22-3.64-.29-.47a10.23 10.23 0 1 1 9.48 4.88Zm5.61-7.66c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.69.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-1.81-.9-3-1.62-4.2-3.68-.32-.55.32-.51.9-1.7.1-.2.05-.38-.03-.53-.08-.16-.69-1.67-.95-2.28-.25-.6-.5-.51-.69-.52h-.59c-.2 0-.54.08-.82.38-.28.31-1.07 1.05-1.07 2.56 0 1.5 1.1 2.96 1.25 3.16.15.2 2.16 3.3 5.23 4.63 1.94.84 2.7.91 3.67.77 1.18-.18 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.07-.13-.28-.2-.59-.36Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
});

FloatingWhatsAppButton.displayName = 'FloatingWhatsAppButton';
