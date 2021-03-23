export default {
  head: {
    title: "Otaku Library",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  target: "static",
  ssr: true,
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 51200
      }
    }
  },
  css: [
    // packages styles
    { src: "~/node_modules/swiper/css/swiper.min.css" },
    { src: "~/node_modules/vue-wysiwyg/dist/vueWysiwyg.css"},
    { src: "~/node_modules/bootstrap/dist/css/bootstrap.min.css" },
    { src: "~/node_modules/bootstrap-vue/dist/bootstrap-vue.min.css" },
    { src: "~/node_modules/materialize-css/dist/css/materialize.min.css" },
    // custom styles
    { src: "~/assets/styles/base/base.sass" },
    { src: "~/assets/styles/base/reset.sass" },
    { src: "~/assets/styles/state/tabs.sass" },
    { src: "~/assets/styles/state/toast.sass" },
    { src: "~/assets/styles/state/select.sass" },
    { src: "~/assets/styles/state/recaptcha.sass" },
    { src: "~/assets/styles/state/infinite-scroll.sass" },
    { src: "~/assets/styles/theme/scrollbar.sass" },
    { src: "~/assets/styles/theme/fonts/material-icons.sass" },
    { src: "~/assets/styles/theme/fonts/days-one-regular.sass" }
  ],
  plugins: [
    { src: "@/plugins/messages" },
    { src: "@/plugins/vue-meta" },
    { src: "@/plugins/vuelidate" },
    { src: "@/plugins/vue-wysiwyg"},
    { src: "@/plugins/vue-recaptcha" },
    { src: "@/plugins/vue-awesome-swiper"},
    { src: "@/plugins/materialize", mode: "client" },

    { src: "@/plugins/methods/format-route-title" },
    { src: "@/plugins/methods/format-related-title" }
  ],
  components: true,
  modules: [
    ["@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCIPI4pf_bCw6vyUB7sg8ZWvU2MpCmR288",
          authDomain: "otaku-library-b5dd4.firebaseapp.com",
          databaseURL: "https://otaku-library-b5dd4.firebaseio.com",
          projectId: "otaku-library-b5dd4",
          storageBucket: "otaku-library-b5dd4.appspot.com",
          messagingSenderId: "75933468300",
          appId: "1:75933468300:web:ea747d3df0d9d601a19da9",
          measurementId: "G-P47VCZ10ZJ"
        },
        services: {
          auth: true,
          database: true
        }
      }
    ],
    ["cookie-universal-nuxt"]
  ],
  router: {
  },
  loading: {
    height: "3px",
    color: "#26A69A",
    continuous: true
  },
  generate: {
    crawler: false,
    exclude: [
      /^\/anime/,
      /^\/manga/,
      /^\/characters/
    ]
  }
}
