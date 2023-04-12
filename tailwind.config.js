/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ibtc-grey': '#E0E0E0',
        'ibtc-grey-2': '#4F4F4F',
        'ibtc-offwhite': '#EAF1FA',
        'ibtc-blue': '#2D65BC',
        'ibtc-blue-dark': '#1E427B',
        'ibtc-blue-light': '#EFF3FB',
        'ibtc-black': '#121212',
        'ibtc-light-yellow': '#FDF7E7',
      },
      fontSize: {
        'text-sm': '0.8125rem',
      },
    },
  },
  plugins: [],
}
