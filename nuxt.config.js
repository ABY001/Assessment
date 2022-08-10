export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,

  head: {
    title: 'STORE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/antd-ui' },
    // { src: "~/plugins/axios" },
    { src: "~/plugins/persistedState.client.js" }
  ],

  axios: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? process.env.BASE_URL
        : `https://htmlfood.herokuapp.com`
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/v1/admin/login",
            method: "post"
          },
          logout: { url: "/api/v1/admin/logout", method: "put" },
          user: false
        }
        // tokenType: ""
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  // router: {
  //   middleware: ["auth"]
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  },
}
