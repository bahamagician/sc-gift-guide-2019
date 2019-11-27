require('dotenv').config();
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.TITLE || "Holiday Gift Guide",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.DESCRIPTION || "Make this holiday special"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: process.env.GOOGLE_FONTS }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/0382c824e2.js",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/styles.css", "slick-carousel/slick/slick.css"],
  /*
   ** Plugins to load before mounting the App
   */
  purgeCSS: {
    whitelistPatterns: [/^slick/],
  },
  plugins: [
    "@/plugins/masonry",
    "@/plugins/currencyfilter",
    "@/plugins/filters",
    { src: "~plugins/slick-slide.js", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
    "@nuxtjs/dotenv"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/apollo"],

  // Give apollo module options
  apollo: {
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: "loading",
        fetchPolicy: "cache-and-network",
        // fetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true
      }
    },

    clientConfigs: {
      default: {
        // required
        httpEndpoint: process.env.ENDPOINT
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ["vue-clamp", "resize-detector"]
  }
};
