export default {
  // registrations
  css: [
    { src: "~/node_modules/swiper/css/swiper.min.css" },
    { src: "~/node_modules/bootstrap/dist/css/bootstrap.min.css" },
    { src: "~/node_modules/bootstrap-vue/dist/bootstrap-vue.min.css" },
    { src: "~/node_modules/materialize-css/dist/css/materialize.min.css" },

    // base
    { src: "~/assets/styles/base/base.sass" },
    { src: "~/assets/styles/base/reset.sass" },

    // states
    { src: "~/assets/styles/state/tabs.sass" },
    { src: "~/assets/styles/state/toast.sass" },
    { src: "~/assets/styles/state/select.sass" },
    { src: "~/assets/styles/state/recaptcha.sass" },
    { src: "~/assets/styles/state/score-stars.sass" },

    // themes
    { src: "~/assets/styles/theme/scrollbar.sass" },
    { src: "~/assets/styles/theme/fonts/material-icons.sass" },
    { src: "~/assets/styles/theme/fonts/days-one-regular.sass" }
  ],
  plugins: [
    { src: "@/plugins/messages" },
    { src: "@/plugins/materialize", mode: "client" },

    // vue
    { src: "@/plugins/vue/vue-meta" },
    { src: "@/plugins/vue/vuelidate" },
    { src: "@/plugins/vue/vue-recaptcha" },
    { src: "@/plugins/vue/vue-awesome-swiper"},

    // global methods
    { src: "@/plugins/methods/format-route-title" },
    { src: "@/plugins/methods/format-breadcrumb-title" }
  ],
  modules: [
    ["@nuxtjs/html-validator",
      {
        usePrettier: true,
        options: {
          extends: [
            "html-validate:document",
            "html-validate:recommended",
            "html-validate:standard"
          ]
        }
      }
    ],
    ["@nuxtjs/robots"],
    ["@nuxtjs/firebase",
      {
        config: {
          measurementId: "G-P47VCZ10ZJ",
          projectId: "otaku-library-b5dd4",
          messagingSenderId: "75933468300",
          storageBucket: "otaku-library-b5dd4.appspot.com",
          apiKey: "AIzaSyCIPI4pf_bCw6vyUB7sg8ZWvU2MpCmR288",
          authDomain: "otaku-library-b5dd4.firebaseapp.com",
          appId: "1:75933468300:web:ea747d3df0d9d601a19da9",
          databaseURL: "https://otaku-library-b5dd4.firebaseio.com"
        },
        services: {
          auth: true,
          database: true
        }
      }
    ],
    ["cookie-universal-nuxt"]
  ],
  // server
  ssr: true,
  target: "static",
  components: true,
  build: {
    analyze: true,
    analyze: {
      analyzerMode: "static"
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 51200
      }
    }
  },
  generate: {
    crawler: false,
    exclude: [
      /^\/anime/,
      /^\/manga/,
      /^\/characters/
    ]
  },
  // client
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  loading: {
    height: "3px",
    color: "#26A69A",
    continuous: true
  }
}
