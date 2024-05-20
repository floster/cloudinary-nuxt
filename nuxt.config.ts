// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/cloudinary", "@nuxtjs/tailwindcss"],
  cloudinary: {
    cloudName: "dr2lnj2sw",
  },
  runtimeConfig: {
    cloudSecret: process.env.NUXT_CLOUD_SECRET_KEY,
    cloudKey: process.env.NUXT_CLOUD_API_KEY,
  },
});
