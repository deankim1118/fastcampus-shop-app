/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark-blue': '#0a1930',
      'light-blue': '#1f93ff',

      'light-gray': '#E7E7E7',
      'dark-gray': '#767676',
      'border-gray': '#CCCCCC',
      'table-border-gray': '#EEE',

      'color-white': ' #FFFFFF',
      'color-primary': '#0074e9',

      'color-black': '#111111',
      'color-red': '#E52528',
    },
  },
  plugins: [],
};
