import React from 'react';
import { motion, MotionProps } from 'motion/react';

interface FadeUpProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = React.memo(({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  style,
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    {...rest}
  >
    {children}
  </motion.div>
));

FadeUp.displayName = 'FadeUp';

export const ScaleIn: React.FC<FadeUpProps> = React.memo(({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  style,
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    style={{ willChange: 'transform, opacity', ...style }}
    {...rest}
  >
    {children}
  </motion.div>
));

ScaleIn.displayName = 'ScaleIn';

export const HoverLift: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = React.memo(({
  children,
  className = '',
  style,
}) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className={className}
    style={{ willChange: 'transform', ...style }}
  >
    {children}
  </motion.div>
));

HoverLift.displayName = 'HoverLift';

