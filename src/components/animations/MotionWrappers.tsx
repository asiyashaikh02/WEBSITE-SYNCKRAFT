import React from 'react';
import { motion, MotionProps } from 'motion/react';

interface FadeUpProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const ScaleIn: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const HoverLift: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);
