
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Unica+One|Roboto:100,300,400,500,900|Graduate&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/0382c824e2.js', crossorigin: 'anonymous'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/css/styles.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/masonry', { src: "~plugins/slick-slide.js", mode: 'client' } ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss', '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/apollo'],

  // Give apollo module options
  apollo: {

    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
        // fetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
    },

    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'https://fierce-taiga-68339.herokuapp.com/'
      },

    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
