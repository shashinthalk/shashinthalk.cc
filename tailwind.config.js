/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#151515',
        secondary: '#393E46',
        accent: '#948979',
        background: '#151515',
        foreground: '#DFD0B8',
        'heading-text': '#B4A5A5',
        'description-text': '#B4A5A5',
        'button-bg': '#B4A5A5',
        'button-text': '#3C415C',
        'links': '#B4A5A5',
        'links-hover': '#DFD0B8',
        'card-background': '#DFD0B8',
        'card-heading': '#151515',
        'card-description': '#151515',
        'card-link': '#3C415C',
        'card-link-hover': '#B4A5A5',
        'border-color': '#B4A5A5',
      },
      backgroundImage: {
        'theme-gradient': 'linear-gradient(to right, #151515, #3C415C, #151515)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      height: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "3px #B4A5A5",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}