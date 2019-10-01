export default {
  buildModules: ['@nuxt/typescript-build'],
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    }
  },
  modules: [
    "@nuxtjs/axios"
  ],
  plugins: [
    "~/plugins/axios",
    '~/plugins/cookie-storage.js'
  ],
  css: ['@/assets/main.scss']
}
