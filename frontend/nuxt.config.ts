import { Body } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.min.css",
    "~/assets/css/main.css"
  ],

  app: {
    head: {

      title: "Stef & Philips",
      "meta": [
        // {
        //   name: "google-site-verification",
        //   content: "f3gmEPUy8fVmw-7KajtB8xQ3mhlitf_w0NaeoyRC7fk"
        // },
        {
          name: "google-site-verification",
          content: "KrglZnF0Z_SuNi223OARQnKe5u5xuSODy2u4sQNYGM0"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        },
        {
          charset: "UTF-8"
        },
        {
          'http-equiv': "Content-type",
          content: "text/html; charset=UTF-8"
        },
        {
          name: "google-site-verification", content: "f3gmEPUy8fVmw-7KajtB8xQ3mhlitf_w0NaeoyRC7fk"
        }
      ],

      "link": [
        {
          rel: "icon", href: "/favicon.png"
        }
      ],
      "style": [],
      "script": [
        {
          type: 'text/javascript',
          src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"',
          tagPosition: 'bodyClose',

        },
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NJGTMJBH');`
        },
      ],
      "noscript": [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJGTMJBH" height = "0" width="0" style="display:none;visibility:hidden" > </iframe>`,
          tagPosition: 'bodyClose',
        }
      ],
    },
  },

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  robots: process.env.NODE_ENV!=='production'?{
    UserAgent:'*',
    Disallow:'/',
    sitemap:'https://www.stefphilips.com/sitemap.xml'
  }:{
    UserAgent:'*',
    Disallow:'/search',
    allow:'*',
    sitemap:'https://www.stefphilips.com/sitemap.xml'
  },

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  runtimeConfig: {
    public: {
      VITE_APP_API_URL: process.env.VITE_APP_API_URL,
    }
  },

  routeRules: {
    '/contact-community': { ssr: false },
    '/general': { ssr: false },
  },

  vite: {
    optimizeDeps: {
      include: [
        'primevue/accordion', 'primevue/accordiontab', 'axios', 'primevue/carousel', '@unhead/vue', 'moment', 'vue-vimeo-player', 'vue-social-sharing',
        'ofetch', 'primevue/config', 'primevue/confirmationservice', 'primevue/dialogservice', 'primevue/toastservice', 'primevue/badgedirective', 'primevue/tooltip', 'primevue/ripple', 'primevue/styleclass', 'primevue/focustrap', 'primevue/animateonscroll', 'firebase/app', '@iconify/vue', '@headlessui/vue', '@heroicons/vue/20/solid'
      ]
    }
  }
})

