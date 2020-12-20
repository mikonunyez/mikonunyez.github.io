const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
        teal: colors.teal
      },
      backgroundImage: theme => ({
        'landing-profile': 'url(/dist/img/profile-portrait.jpg)'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
