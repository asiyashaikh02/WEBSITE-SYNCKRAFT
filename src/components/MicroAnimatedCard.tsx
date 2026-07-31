import React, { useState, createContext, useContext } from 'react';
import { motion, useInView } from 'motion/react';

interface CardAnimationContextType {
  cardHovered: boolean;
  cardInView: boolean;
}

const CardAnimationContext = createContext<CardAnimationContextType>({
  cardHovered: false,
  cardInView: true,
});

interface MicroAnimatedCardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  onClick?: () => void;
}

export const MicroAnimatedCard: React.FC<MicroAnimatedCardProps> = ({
  children,
  index = 0,
  className = '',
  onClick,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardAnimationContext.Provider value={{ cardHovered: isHovered, cardInView: inView }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={
          inView
            ? {
                opacity: 1,
                y: isHovered ? -5 : 0,
              }
            : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`transition-shadow duration-300 ${
          isHovered
            ? 'shadow-xl shadow-blue-500/10 border-blue-400/80'
            : ''
        } ${className}`}
      >
        {children}
      </motion.div>
    </CardAnimationContext.Provider>
  );
};

interface MicroAnimatedIconProps {
  type?: string;
  children: React.ReactNode;
  cardHovered?: boolean;
  cardInView?: boolean;
  className?: string;
}

export const MicroAnimatedIcon: React.FC<MicroAnimatedIconProps> = ({
  type = 'default',
  children,
  cardHovered: cardHoveredProp,
  cardInView: cardInViewProp,
  className = '',
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const standaloneInView = useInView(ref, { once: true, margin: '-20px' });

  const context = useContext(CardAnimationContext);
  const cardHovered = cardHoveredProp ?? context.cardHovered;
  const cardInView = cardInViewProp ?? (cardInViewProp === undefined ? (context.cardInView || standaloneInView) : cardInViewProp);

  // Key state triggers replay on hover
  const [hoverTrigger, setHoverTrigger] = useState(0);

  const handleMouseEnter = () => {
    setHoverTrigger((prev) => prev + 1);
  };

  // Determine specific animation parameters based on icon type
  const getVariants = () => {
    const key = type.toLowerCase();
    switch (key) {
      case 'code':
      case 'code2':
        return {
          initial: { scale: 0.8, rotate: -8, opacity: 0 },
          animate: {
            scale: [0.8, 1.15, 0.95, 1],
            rotate: [-8, 4, -2, 0],
            opacity: 1,
          },
        };
      case 'sparkles':
      case 'ai':
      case 'zap':
        return {
          initial: { scale: 0.7, rotate: -45, opacity: 0 },
          animate: {
            scale: [0.7, 1.25, 0.9, 1],
            rotate: [-45, 90, 0],
            opacity: 1,
          },
        };
      case 'heart':
      case 'heartpulse':
      case 'stethoscope':
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: {
            scale: [0.8, 1.25, 0.9, 1.15, 1],
            opacity: 1,
          },
        };
      case 'truck':
      case 'logistics':
        return {
          initial: { x: -14, opacity: 0 },
          animate: {
            x: [-14, 4, -1, 0],
            opacity: 1,
          },
        };
      case 'rocket':
        return {
          initial: { y: 14, scale: 0.8, opacity: 0 },
          animate: {
            y: [14, -4, 1, 0],
            scale: [0.8, 1.15, 1],
            opacity: 1,
          },
        };
      case 'cloud':
      case 'server':
        return {
          initial: { y: 8, opacity: 0 },
          animate: {
            y: [8, -3, 0],
            scale: [0.9, 1.1, 1],
            opacity: 1,
          },
        };
      case 'barchart3':
      case 'analytics':
      case 'trendingup':
        return {
          initial: { scaleY: 0.3, opacity: 0 },
          animate: {
            scaleY: [0.3, 1.2, 0.95, 1],
            opacity: 1,
          },
        };
      case 'building2':
      case 'building':
      case 'factory':
        return {
          initial: { y: 10, opacity: 0 },
          animate: {
            y: [10, -2, 0],
            scale: [0.9, 1.05, 1],
            opacity: 1,
          },
        };
      case 'graduationcap':
      case 'education':
      case 'bookopen':
        return {
          initial: { y: -10, rotate: -15, opacity: 0 },
          animate: {
            y: [-10, 2, 0],
            rotate: [-15, 5, 0],
            opacity: 1,
          },
        };
      case 'landmark':
      case 'shieldcheck':
      case 'shield':
      case 'lock':
        return {
          initial: { scale: 0.85, rotateY: 90, opacity: 0 },
          animate: {
            scale: [0.85, 1.1, 1],
            rotateY: [90, 0],
            opacity: 1,
          },
        };
      case 'shoppingbag':
      case 'shoppingcart':
      case 'utensils':
        return {
          initial: { rotate: -14, opacity: 0 },
          animate: {
            rotate: [-14, 10, -5, 0],
            opacity: 1,
          },
        };
      case 'globe':
      case 'globe2':
        return {
          initial: { rotate: -25, opacity: 0 },
          animate: {
            rotate: [-25, 15, 0],
            scale: [0.85, 1.1, 1],
            opacity: 1,
          },
        };
      case 'phone':
      case 'phonecall':
        return {
          initial: { rotate: 0, opacity: 0 },
          animate: {
            rotate: [0, -12, 12, -8, 8, 0],
            scale: [0.85, 1.1, 1],
            opacity: 1,
          },
        };
      case 'mail':
      case 'send':
      case 'messagecircle':
        return {
          initial: { y: 6, scale: 0.8, opacity: 0 },
          animate: {
            y: [6, -3, 0],
            scale: [0.8, 1.12, 1],
            opacity: 1,
          },
        };
      case 'arrowright':
      case 'chevronright':
      case 'arrow':
        return {
          initial: { x: -6, opacity: 0 },
          animate: {
            x: [-6, 3, 0],
            scale: [0.9, 1.08, 1],
            opacity: 1,
          },
        };
      case 'users':
      case 'usercheck':
        return {
          initial: { scale: 0.8, y: 4, opacity: 0 },
          animate: {
            scale: [0.8, 1.12, 1],
            y: [4, -2, 0],
            opacity: 1,
          },
        };
      case 'thumbsup':
      case 'check':
      case 'checkcircle2':
        return {
          initial: { scale: 0.6, rotate: -20, opacity: 0 },
          animate: {
            scale: [0.6, 1.25, 0.95, 1],
            rotate: [-20, 10, 0],
            opacity: 1,
          },
        };
      case 'calendar':
      case 'clock':
        return {
          initial: { rotateX: 60, opacity: 0 },
          animate: {
            rotateX: [60, -15, 0],
            scale: [0.9, 1.05, 1],
            opacity: 1,
          },
        };
      case 'boxes':
      case 'cpu':
      case 'layers':
        return {
          initial: { scale: 0.7, opacity: 0 },
          animate: {
            scale: [0.7, 1.15, 0.95, 1],
            opacity: 1,
          },
        };
      default:
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: {
            scale: [0.8, 1.12, 1],
            opacity: 1,
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      key={`${type}-${hoverTrigger}`}
      initial={variants.initial}
      animate={
        cardInView || cardHovered || hoverTrigger > 0 || standaloneInView
          ? {
              ...variants.animate,
              scale: cardHovered ? 1.08 : 1,
            }
          : variants.initial
      }
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={handleMouseEnter}
      className={`relative inline-flex items-center justify-center transition-all duration-300 ${
        cardHovered ? 'drop-shadow-[0_0_12px_rgba(29,99,255,0.45)]' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
