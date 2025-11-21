import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030305',
      },
      fontFamily: {
        space: 'var(--font-space)',
        mono: 'var(--font-mono)',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(150%)' },
        },
        'slow-pulse': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        shine: 'shine 1.15s ease-in-out forwards',
        'slow-pulse': 'slow-pulse 4s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 10px 60px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
