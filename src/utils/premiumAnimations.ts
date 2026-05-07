// Premium Animation Utilities - Apple/Linear/Stripe/Framer Style
import { useEffect, useRef } from 'react';

/**
 * Smooth page transition animation on route change
 */
export const usePageTransition = () => {
  useEffect(() => {
    // Add fade-in animation to page load
    const element = document.querySelector('main');
    if (element) {
      element.style.animation = 'pageEnter 0.6s ease-out forwards';
    }
  }, []);
};

/**
 * Enhanced scroll reveal with stagger effect
 */
export const useEnhancedScrollReveal = (options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    duration: 0.8,
    stagger: 100,
    ...options,
  };

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timeoutId = window.setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Calculate stagger delay
            if (target.parentElement) {
              const children = Array.from(target.parentElement.children);
              const index = children.indexOf(target);
              if (index > 0 && target.parentElement.childElementCount > 1) {
                const delay = Math.min(index * defaultOptions.stagger, 600);
                target.style.transitionDelay = `${delay}ms`;
              }
            }

            // Add animation classes
            target.classList.add('reveal-active');
            target.style.animation = `revealUp ${defaultOptions.duration}s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
          }
        });
      }, {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      });

      const elements = document.querySelectorAll('[data-reveal]');
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(30px)';
        observer?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, []);
};

/**
 * Parallax scroll effect
 */
export const useParallax = (depth = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = scrolled + rect.top;
      const windowCenter = window.innerHeight / 2;
      const distance = scrolled + windowCenter - elementTop;

      element.style.transform = `translateY(${distance * depth * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depth]);

  return ref;
};

/**
 * Floating animation with subtle movement
 */
export const useFloatingAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.animation = 'float 6s ease-in-out infinite';
  }, []);

  return ref;
};

/**
 * Cinematic entrance animation
 */
export const useCinematicEntrance = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'scale(0.95) translateY(20px)';

    const timer = setTimeout(() => {
      element.style.animation = `cinematicEnter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return ref;
};

/**
 * Gradient animation effect
 */
export const useAnimatedGradient = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.animation = 'gradientShift 8s ease infinite';
    element.style.backgroundSize = '200% 200%';
  }, []);

  return ref;
};

/**
 * Inject premium animation keyframes globally
 */
export const injectPremiumAnimations = () => {
  if (typeof document === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes pageEnter {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes revealUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes cinematicEnter {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes hoverGlow {
      0% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0);
      }
      50% {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
      }
      100% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0);
      }
    }

    /* Smooth scroll behavior */
    html {
      scroll-behavior: smooth;
    }

    /* Premium transition defaults */
    * {
      transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }

    /* Disable transitions for motion-reduce preference */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `;

  document.head.appendChild(style);
};
