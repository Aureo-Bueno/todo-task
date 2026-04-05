export const theme = {
  colors: {
    background: '#F6F5F1',
    backgroundAlt: '#EFECE6',
    surface: '#FFFEFC',
    surfaceMuted: '#F8F5EE',
    foreground: '#1F1B16',
    muted: '#6B665F',
    mutedStrong: '#464039',
    border: '#D9D3C8',
    primary: '#1C1917',
    primaryHover: '#292524',
    accent: '#A16207',
    accentHover: '#854D0E',
    success: '#166534',
    successSoft: '#DCFCE7',
    danger: '#B91C1C',
    dangerSoft: '#FEE2E2',
    info: '#1D4ED8',
    infoSoft: '#DBEAFE',
    focus: '#1C1917',
  },

  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultraWide: '1440px',
  },

  media: {
    mobile: '@media (min-width: 375px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    wide: '@media (min-width: 1280px)',
    ultraWide: '@media (min-width: 1440px)',
  },

  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif",
    displayFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
  },

  borderRadius: {
    sm: '0.5rem',
    base: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 0 rgba(28, 25, 23, 0.04)',
    base: '0 8px 30px rgba(28, 25, 23, 0.07)',
    md: '0 14px 42px rgba(28, 25, 23, 0.09)',
  },

  transitions: {
    fast: '150ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    normal: '220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
} as const;

export type Theme = typeof theme;
