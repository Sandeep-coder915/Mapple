/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mapple: {
          50: '#f2fef7',
          100: '#d7f8e8',
          200: '#b6f0d0',
          300: '#84e1ae',
          400: '#46c685',
          500: '#1aa35f',
          600: '#16864d',
          700: '#146a42',
          800: '#16573a',
          900: '#134f34',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
    },
  },
  plugins: [],
}

