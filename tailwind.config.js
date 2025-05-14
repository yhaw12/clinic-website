/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // override default sans
      },
      colors: {
        purple: {
          700: '#5F4B8B',
          900: '#2D2654',
        },
        teal: {
          400: '#4DC0B5',
        },
        blue: {
          50: '#EBF8FF',
        },
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
};