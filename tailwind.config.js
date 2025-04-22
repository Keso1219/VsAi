/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#141414',
          card: '#1E1E1E',
        },
        primary: {
          DEFAULT: '#2196F3',
          hover: '#64B5F6',
        },
        secondary: {
          DEFAULT: '#B0B0B0',
          light: '#E0E0E0',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};