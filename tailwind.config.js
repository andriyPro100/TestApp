module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '0rem',
        sm: "5rem",
        lg: '10rem',
        xl: '20rem',
        '2xl': '28rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
