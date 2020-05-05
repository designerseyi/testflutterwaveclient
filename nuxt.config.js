module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'rgba(221,209,209)' },
  /*
   ** Global CSS{ src: '~/assets/main.scss', lang: 'scss' },
   
   */
  css: [  { src: '~/assets/main.scss', lang: 'scss' },{src:'~/assets/spacing.css'}],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins:{src:'~/plugins/vuetify-google-autocomplete', ssr: false}, ['~/plugins/vuetify-google-autocomplete',{ src: '~/plugins/localStorage.js', ssr: false }],
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
  // plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module'@nuxtjs/vuetify',
    // '@nuxtjs/stylelint-module'
    
    
  ],

 

  

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',   

    // ['nuxt-buefy', { defaultIconPack: 'fas', }],
    // Doc: https://axios.nuxtjs.org/usage  ['nuxt-sass-resources-loader','.assets/main.scss'],
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
  
    'nuxt-buefy',
    // ['nuxt-vuex-localstorage', {
    //   // mode: 'debug',
    //   localStorage: ['usersStore']
    // }]
  
    
  ],

   styleResources:{
    scss:['~/assets/main.scss']
  },
  proxy:{
    '/api':{
      target:'https://testflutterwaveserver.herokuapp.com/api',
      // target:'https://fudapserver.herokuapp.com/api',
      pathRewrite:{
        '^/api':'/'
      },
      changeOrigin:true
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy:true,
    // headers: {
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   "Access-Control-Allow-Origin": "*",
    // }
    // baseURL:'http://localhost:4000/api',
  },
  /*
   ** Build configuration
   */


  build: {
    loaders:{
      sass:{
        prependData:"@import '~bulma/sass/utilities/_all.sass;"
      }
    },
    extend(config,{isDev,isClient}){
      
     
      config.module.rules.push({
        
    });
   
    },
    postcss: {
      
      preset: {
        features: {
          customProperties: false
        }
      }
    },
   
    
     transpile: [],
    
   }
}
