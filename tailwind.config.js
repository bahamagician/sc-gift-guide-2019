module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#00246a',
        'highlight': '#f03f35',
        'darkGrey': '#f7f7f7',
      }
    },
    fontFamily: {
      'display': ['Unica One'],
      'body': ['Roboto'],
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
