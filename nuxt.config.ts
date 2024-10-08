// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  plugins: ['~/plugins/notificacion.client.js'],
  compatibilityDate: '2024-07-08',
});
