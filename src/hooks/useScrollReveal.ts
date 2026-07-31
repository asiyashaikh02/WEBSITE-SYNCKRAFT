import { useInView, UseInViewOptions } from 'motion/react';
import { useRef } from 'react';

export const useScrollReveal = (margin: UseInViewOptions['margin'] = '-40px', once = true) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
};
