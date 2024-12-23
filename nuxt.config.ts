export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
})
