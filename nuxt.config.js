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
  css: ['@/assets/main.scss']
}
