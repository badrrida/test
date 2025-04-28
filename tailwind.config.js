/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002366',
          light: '#1a3c7d',
          dark: '#001a4d'
        },
        accent: {
          DEFAULT: '#D4AF37',
          light: '#e0c661',
          dark: '#b3922c'
        },
        neutral: {
          white: '#FFFFFF',
          lightGray: '#F5F5F5',
          gray: '#E0E0E0',
          darkGray: '#333333'
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336'
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'hover': '0 16px 32px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};