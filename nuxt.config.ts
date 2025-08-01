export default defineNuxtConfig({
  app: {
    // SEO config.
    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      title: 'Nuxt Starter Template',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt SSR & full-stack starter template, supports I18n, UnoCSS, Prisma, MySQL and provides better SEO.' },
      ],
    },
  },

  // Enable server-side rendering.
  // If you want to use SPA mode, set ssr to false, it will be built to .output/public directory.
  ssr: true,

  // Open devtools by default.
  devtools: {
    enabled: true,
  },

  // Server config.
  devServer: {
    port: 9865,
  },

  // Runtime config.
  // https://nuxt.com/docs/api/nuxt-config#runtimeconfig-1
  runtimeConfig: {
    app: {
      baseUrl: '',
    },
    public: {
      requestBaseUrl: '',
    },
  },

  // Register nuxt modules.
  // https://nuxt.com/modules
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-lodash',
    '@nuxt/test-utils/module',
  ],

  // Additional auto-import config.
  // https://nuxt.com/docs/api/nuxt-config#imports
  imports: {
    dirs: [
      'constants',
      'stores',
    ],
  },

  // CSS config.
  // https://unocss.dev/
  css: [
    '@unocss/reset/tailwind.css',
  ],

  // I18n config.
  // https://i18n.nuxtjs.org/
  i18n: {
    defaultLocale: 'en',
    // If you don't need the prefix strategy, you can remove the strategy option.
    // And you can remove `useLocalePath` in `src` directory.
    strategy: 'prefix_and_default',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'zh', file: 'zh.json', name: '中文' },
    ],
  },
})
