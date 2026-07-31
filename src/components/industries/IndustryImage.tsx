import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Industry3DIllustration } from '../illustrations/Industry3DIllustration';

interface IndustryImageProps {
  src: string;
  alt: string;
  industryName: string;
  accentBorder: string;
}

export const IndustryImage: React.FC<IndustryImageProps> = ({
  src,
  alt,
  industryName,
  accentBorder,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full h-44 sm:h-52 lg:h-56 rounded-2xl sm:rounded-3xl overflow-hidden border ${accentBorder} shadow-xs group/img bg-slate-100/80`}
    >
      {!hasError ? (
        <>
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            initial={{ scale: 1.05 }}
            animate={{ scale: isLoaded ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Subtle gradient overlay for readability & gloss */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-50 p-2">
          <Industry3DIllustration industry={industryName} />
        </div>
      )}
    </motion.div>
  );
};
