// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      exclude: ['vee-validate']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@formkit/auto-animate/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  image: {
    // Options
    inject: true

  },
  app: {
    head: {
      title: "HerTechQuest",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/hertechquestlogo.jpg" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
   pinia: {
    storesDirs: ['./stores/**'],
  },
  
})

