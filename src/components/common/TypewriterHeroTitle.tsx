import React, { useState, useEffect } from 'react';

const PHRASES = [
  'Great Business',
  'Modern Enterprise',
  'Custom CRM & System',
  'AI & Automation',
  'Enterprise ERP',
  'Digital Operation',
];

export const TypewriterHeroTitle: React.FC = React.memo(() => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === targetPhrase) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    } else {
      const speed = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        const nextLength = isDeleting
          ? currentText.length - 1
          : currentText.length + 1;
        setCurrentText(targetPhrase.substring(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <div className="flex flex-col items-center justify-center text-center font-black tracking-tight select-none py-1">
      {/* Line 1: Catchy & Professional Anchor */}
      <span className="text-slate-900 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-snug sm:leading-snug tracking-tight">
        The Intelligence Behind Every
      </span>

      {/* Line 2: Fixed-height locked container preventing layout shifts */}
      <div className="relative h-[1.3em] flex items-center justify-center mt-3 sm:mt-4 md:mt-5">
        <span className="text-[#00A3E0] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight whitespace-nowrap">
          {currentText}
        </span>
        <span
          className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.85em] bg-[#00A3E0] ml-1 sm:ml-2 rounded-full animate-pulse align-middle"
          style={{ animationDuration: '800ms' }}
        />
      </div>
    </div>
  );
});

TypewriterHeroTitle.displayName = 'TypewriterHeroTitle';

