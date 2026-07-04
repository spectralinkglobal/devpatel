import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#142126',
        forest: '#075f73',
        teal: '#0a7185',
        mint: '#edf8f3',
        ivory: '#fbfaf7',
        gold: '#56b947',
        line: '#d9e7e5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(23, 32, 35, 0.12)',
        card: '0 18px 45px rgba(23, 32, 35, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
