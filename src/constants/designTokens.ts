export const DESIGN_TOKENS = {
  colors: {
    primary: '#1D63FF',
    primaryHover: '#0052FF',
    primaryLightBg: 'bg-blue-50',
    primaryBorder: 'border-blue-100',
    bgCanvas: '#FAFCFF',
    textMain: 'text-slate-900',
    textMuted: 'text-slate-600',
    textSubtle: 'text-slate-500',
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200/80',
  },
  spacing: {
    sectionGap: 'space-y-24',
    containerPadding: 'max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10',
    legalContainer: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-10',
  },
  radius: {
    pill: 'rounded-full',
    cardLarge: 'rounded-3xl',
    cardMedium: 'rounded-2xl',
    cardSmall: 'rounded-xl',
  },
  shadows: {
    subtle: 'shadow-2xs',
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg shadow-blue-500/25',
    xl: 'shadow-xl shadow-blue-500/10',
  },
  transitions: {
    default: 'transition-all duration-300',
    easeOutCustom: [0.16, 1, 0.3, 1] as const,
  },
};
