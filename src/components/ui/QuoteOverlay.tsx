import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';

export interface QuoteOverlayProps {
  quote?: string;
  author?: string;
  brandName?: string;
  overlayOpacity?: string;
  alignment?: 'center' | 'left' | 'right';
  className?: string;
}

export const QuoteOverlay: React.FC<QuoteOverlayProps> = ({
  quote = "Great things in business are never built by one person. They are built by passionate people who believe in one vision, trust one another, and grow together every single day.",
  author = "— The Synckraft Team",
  brandName = "Synckraft",
  overlayOpacity = "from-slate-950/85 via-slate-950/45 to-transparent",
  alignment = "center",
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Helper to highlight brandName in author string
  const renderAuthor = () => {
    if (!author) return null;
    if (brandName && author.includes(brandName)) {
      const parts = author.split(brandName);
      return (
        <>
          {parts[0]}
          <span className="text-[#2563EB] font-bold">{brandName}</span>
          {parts[1]}
        </>
      );
    }
    return author;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.45,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const authorVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const alignClass =
    alignment === 'center'
      ? 'items-center text-center'
      : alignment === 'right'
      ? 'items-end text-right'
      : 'items-start text-left';

  return (
    <div
      className={`absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 lg:p-12 bg-gradient-to-t ${overlayOpacity} pointer-events-none ${className}`}
    >
      <motion.figure
        aria-label="Inspirational quote"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`max-w-[800px] mx-auto w-full flex flex-col ${alignClass} space-y-2 sm:space-y-3`}
      >
        {/* Large Decorative Quotation Mark Icon */}
        <motion.div variants={iconVariants} className="select-none">
          <QuoteIcon className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#2563EB] fill-[#2563EB]/25 stroke-[1.5]" />
        </motion.div>

        {/* Semantic Blockquote Main Text */}
        <motion.blockquote
          variants={quoteVariants}
          className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-white leading-relaxed sm:leading-relaxed tracking-tight drop-shadow-md"
        >
          &ldquo;{quote}&rdquo;
        </motion.blockquote>

        {/* Attribution */}
        <motion.figcaption
          variants={authorVariants}
          className="text-xs sm:text-sm md:text-base text-slate-200 font-medium tracking-wide drop-shadow-sm pt-0.5"
        >
          {renderAuthor()}
        </motion.figcaption>
      </motion.figure>
    </div>
  );
};
