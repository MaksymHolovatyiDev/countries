import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg: { max: '1023px' },
      },
      colors: {
        'dark-blue': 'var(--dark-blue)',
        'very-light-gray': 'var(--very-light-gray)',
        'very-dark-blue': 'var(--very-dark-blue)',
        'dark-gray': 'var(--dark-gray)',
      },
    },
  },
  plugins: [],
};
export default config;
