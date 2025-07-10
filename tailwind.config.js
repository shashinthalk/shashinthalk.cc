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
          sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
      height: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      rotate: {
        'y-12': 'rotateY(12deg)',
        'x-12': 'rotateX(12deg)',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      scale: {
        '102': '1.02',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [
    function ({ addUtilities, matchUtilities, theme }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "3px #B4A5A5",
        },
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-12": {
          "transform": "rotateY(12deg)",
        },
        ".rotate-x-12": {
          "transform": "rotateX(12deg)",
        },
        ".perspective-1000": {
          "perspective": "1000px",
        }
      };
      addUtilities(newUtilities);
      
      // Add animation delay utilities
      const animationDelayValues = {
        '150': '150ms',
        '300': '300ms',
        '450': '450ms',
        '600': '600ms',
      };
      
      matchUtilities(
        {
          'animation-delay': (value) => ({
            'animation-delay': value
          }),
        },
        {
          values: animationDelayValues,
        }
      );
    },
  ],
}