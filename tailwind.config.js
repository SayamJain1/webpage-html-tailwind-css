/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      spacing: {
        'big': '32rem',
        'with' : '50%'
      },
    },
    fontFamily: {
      nunito:['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}
