/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    colors: {
      gray: {
        100: '#38343D',
        200: '#686071',
        300: '#797085',
        400: '#F4EFFA',
        500: '#FDFCFE'
      },
      red: '#AA2222',
      black: '#000',
      white: '#fff'
    },
    extend: {}
  },
  plugins: []
}
