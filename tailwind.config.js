require('dotenv').config();
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': process.env.PRIMARY_COLOR,
        'highlight': process.env.HIGHLIGHT_COLOR,
        'darkGrey': '#f7f7f7',
      }
    },
    fontFamily: {
      'display': [process.env.DISPLAY_FONT],
      'body': [process.env.BODY_FONT],
      'graduate': ['Graduate']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1800px',
      // => @media (min-width: 1600px) { ... }
    }
  },
  variants: {},
  plugins: []
}
