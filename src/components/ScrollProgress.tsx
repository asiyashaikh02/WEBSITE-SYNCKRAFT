import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = React.memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D63FF] via-blue-500 to-indigo-600 z-[100] origin-left shadow-sm shadow-blue-500/20"
      style={{ scaleX, willChange: 'transform' }}
    />
  );
});

ScrollProgress.displayName = 'ScrollProgress';

