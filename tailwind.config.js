module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mf-pumpkin': '#EE7B30',
        'mf-ruby': '#8B2635',
        'mf-cblue': '#8FC0A9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
