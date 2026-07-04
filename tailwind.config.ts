import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172023',
        forest: '#0f3d3e',
        teal: '#176b68',
        mint: '#e8f3ef',
        ivory: '#fbfaf7',
        gold: '#b78946',
        line: '#dfe6e2',
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
