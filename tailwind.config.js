/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Orange-500 - Main brand color
          light: '#FB923C',   // Orange-400 - Lighter orange
          dark: '#EA580C',    // Orange-600 - Darker orange
          muted: '#FDBA74',   // Orange-300 - Muted for backgrounds
        },
        secondary: {
          DEFAULT: '#000000', // Black - Secondary color
          light: '#374151',   // Gray-700 - Dark gray
          dark: '#000000',    // Black
        },
        accent: {
          DEFAULT: '#FFFFFF', // White
          muted: '#F3F4F6',   // Gray-100 - Light background
        },
        // Professional grayscale for text and backgrounds
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}