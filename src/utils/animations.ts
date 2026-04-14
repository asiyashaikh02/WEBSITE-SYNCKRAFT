import { Variants } from 'framer-motion';

// Reusable animation variants for consistent animations across pages
export const animations = {
  // Fade in with slide up
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as Variants,

  // Fade in with slide down
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as Variants,

  // Fade in with scale
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as Variants,

  // Stagger container
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  // Floating animation
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Glow effect
  glow: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(59, 130, 246, 0.3)',
        '0 0 40px rgba(59, 130, 246, 0.5)',
        '0 0 20px rgba(59, 130, 246, 0.3)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  },

  // Button hover effect
  buttonHover: {
    whileHover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
    },
    whileTap: {
      scale: 0.95,
    },
  },

  // Tab animation
  tabAnimate: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 },
  },

  // Page transition
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

// Reusable animation settings for common patterns
export const hoverAnimations = {
  scale: { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } },
  lift: {
    whileHover: { y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' },
  },
  rotate: { whileHover: { rotate: 2 } },
};

// Viewport animation settings
export const viewportSettings = {
  once: true,
  amount: 'some' as const,
  margin: '0px 0px -100px 0px',
};
