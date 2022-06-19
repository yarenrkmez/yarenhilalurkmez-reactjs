/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      },
      maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        xs: '20rem',
        '2xs': '22rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        ...theme('spacing'),
        ...breakpoints(theme('screens')),
      }),

    }
  },
  plugins: [],
}