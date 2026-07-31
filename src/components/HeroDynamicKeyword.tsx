import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const ROTATING_WORDS = [
  'Growth',
  'Scale',
  'Revenue',
  'Efficiency',
  'Success',
  'Automation',
  'Performance',
  'Innovation',
  'Structure',
  'Momentum',
];

export const HeroDynamicKeyword: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(ROTATING_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompletedHighlight, setIsCompletedHighlight] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Blink cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIndex];

    if (!isDeleting && displayedText === currentWord) {
      // Completed typing full word
      setIsCompletedHighlight(true);
      const highlightTimer = setTimeout(() => {
        setIsCompletedHighlight(false);
      }, 200);

      // Hold for 2.5 seconds before starting deletion
      timerRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);

      return () => {
        clearTimeout(highlightTimer);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    if (isDeleting && displayedText === '') {
      // Finished deleting current word
      // Pause 300ms before starting next word
      timerRef.current = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      }, 300);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    // Character typing (45-60ms, avg 50ms) or deleting (20-30ms, avg 25ms) step
    const speed = isDeleting ? 25 : 50;

    timerRef.current = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <span className="inline-grid grid-cols-1 grid-rows-1 text-left align-baseline ml-2.5">
      {/* Invisible placeholder of longest word to lock width and prevent layout shift */}
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none invisible font-extrabold pr-3"
      >
        Performance.
      </span>

      {/* Visible animated text */}
      <span className="col-start-1 row-start-1 inline-flex items-baseline text-[#1D63FF] font-extrabold">
        <motion.span
          animate={{
            scale: isCompletedHighlight ? [1, 1.03, 1] : 1,
            textShadow: isCompletedHighlight
              ? [
                  '0 0 0px rgba(29,99,255,0)',
                  '0 0 18px rgba(29,99,255,0.7)',
                  '0 0 0px rgba(29,99,255,0)',
                ]
              : '0 0 0px rgba(29,99,255,0)',
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="inline-block"
        >
          {displayedText}
        </motion.span>

        {/* Blinking Cursor */}
        <span
          className={`inline-block w-[3px] h-[0.75em] ml-1 bg-[#1D63FF] align-middle rounded-full transition-opacity duration-150 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <span>.</span>
      </span>
    </span>
  );
};

