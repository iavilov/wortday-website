import type { Config } from 'tailwindcss';

// Tailwind v4 uses @theme directives in globals.css for theming.
// Design tokens source of truth: src/lib/design-tokens.ts
// This config provides content paths for class detection.

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
