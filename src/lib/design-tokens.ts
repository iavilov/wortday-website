// Design tokens — synced with the main Wortday app (github.com/iavilov/wortday)

export const palette = {
  // Backgrounds
  bgMain: '#FFFAF0',
  cardBg: '#FFFFFF',
  ink: '#121212',

  // Brand
  primary: '#6BCF7F',
  yellow: '#FFDE00',
  pink: '#FF80BF',
  blue: '#60A5FA',
  purple: '#C084FC',
  orange: '#FB923C',

  // Semantic
  destructive: '#EF4444',
  vibrantGreen: '#00E090',

  // Light variants
  lightGreen: '#86EFAC',
  lightBlue: '#93C5FD',
  lightYellow: '#FDE68A',

  // Article colors (German grammar)
  articleDer: '#93C5FD',
  articleDie: '#F9A8D4',
  articleDas: '#6BCF7F',

  // Gray scale
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;

export const borderRadius = {
  SHARP: 0,
  SMALL: 4,
  MEDIUM: 12,
  LARGE: 20,
  ROUND: 999,
} as const;

export const borderWidth = {
  DEFAULT: '2px',
  thick: '3px',
} as const;

export const shadows = {
  brutal: '4px 4px 0px 0px #121212',
  'brutal-sm': '2px 2px 0px 0px #121212',
  'brutal-lg': '6px 6px 0px 0px #121212',
  'brutal-hover': '6px 6px 0px 0px #121212',
  'brutal-active': '0px 0px 0px 0px #121212',
} as const;

export const backgroundPattern = {
  backgroundColor: '#FFFAF0',
  backgroundImage: 'radial-gradient(#121212 0.5px, transparent 0.5px)',
  backgroundSize: '24px 24px',
} as const;
