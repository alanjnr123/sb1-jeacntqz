/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e1eaff',
          200: '#c3d5ff',
          300: '#9eb6ff',
          400: '#778cff',
          500: '#5562f7',
          600: '#4241eb',
          700: '#3730cd',
          800: '#2e2ba5',
          900: '#2b2a82',
          950: '#1a1946',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        'ibm': ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};