/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

