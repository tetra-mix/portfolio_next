import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        concert: ['Concert One', 'sans-serif'],
        kosugi: ['Kosugi Maru', 'sans-serif'],
        dot: ['DotGothic16', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
