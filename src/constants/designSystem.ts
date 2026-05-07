// Design System Constants for Synckraft
export const DESIGN_SYSTEM = {
  // Colors
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      900: '#0f172a'
    },
    gradient: {
      primary: 'from-blue-600 to-blue-700',
      text: 'from-blue-600 to-cyan-500'
    }
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      display: ['Sora', 'Inter', 'system-ui', '-apple-system', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },

  // Spacing
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000'
  },

  // Animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out'
    },
    transforms: {
      hover: 'hover:-translate-y-0.5 hover:scale-[1.02]',
      active: 'active:scale-[0.98] active:translate-y-0'
    }
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

// Utility classes for consistent styling
export const STYLES = {
  // Button variants
  button: {
    primary: `bg-gradient-to-r ${DESIGN_SYSTEM.colors.gradient.primary} text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 ${DESIGN_SYSTEM.animations.transforms.hover} ${DESIGN_SYSTEM.animations.transforms.active}`,
    secondary: `bg-slate-900 text-white shadow-lg shadow-slate-900/25 hover:shadow-xl hover:shadow-slate-900/30 hover:bg-blue-600 ${DESIGN_SYSTEM.animations.transforms.hover} ${DESIGN_SYSTEM.animations.transforms.active}`,
    outline: `bg-white border-2 border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md ${DESIGN_SYSTEM.animations.transforms.hover} ${DESIGN_SYSTEM.animations.transforms.active}`,
    ghost: `bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 ${DESIGN_SYSTEM.animations.transforms.hover} ${DESIGN_SYSTEM.animations.transforms.active}`
  },

  // Card styles
  card: {
    base: 'bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 ease-out',
    primary: 'border-blue-300 shadow-lg shadow-blue-900/10',
    glass: 'backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl'
  },

  // Text styles
  text: {
    gradient: `text-transparent bg-clip-text bg-gradient-to-r ${DESIGN_SYSTEM.colors.gradient.text}`,
    heading: 'font-extrabold tracking-tight text-slate-900',
    body: 'text-slate-600 font-medium leading-relaxed'
  },

  // Layout
  container: 'max-w-7xl mx-auto px-6 lg:px-8',
  section: 'py-24 md:py-32'
};