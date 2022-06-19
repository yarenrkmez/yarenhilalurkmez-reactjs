/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1440px",
    },
    colors: {
      transparent: 'transparent',
      gray: {
        "lightest": "#fff",
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    }
  },
  plugins: [],
}