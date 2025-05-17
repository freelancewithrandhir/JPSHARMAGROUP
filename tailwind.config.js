/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc6ff',
          400: '#36a9ff',
          500: '#0090ff',
          600: '#0072dd',
          700: '#005db8',
          800: '#004a94',
          900: '#003972',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d6dae3',
          300: '#b3bac8',
          400: '#8b95a9',
          500: '#6b768f',
          600: '#556076',
          700: '#444d61',
          800: '#394152',
          900: '#2f3544',
        },
        accent: {
          50: '#eefff7',
          100: '#d6ffed',
          200: '#a1ffdb',
          300: '#64fac7',
          400: '#22e5aa',
          500: '#00c78d',
          600: '#00a376',
          700: '#007d5c',
          800: '#06624a',
          900: '#07503e',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};