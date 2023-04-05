/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}'],
  theme: {
    extend: {},
    backgroundImage: {
      'beams-dark': 'url("/beams.webp"), linear-gradient(#0D172B, #12213F)',
      'beams-light': 'url("/beams.webp"), linear-gradient(#CDFFF9, #FFDCDF)',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

