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
    { src: '~plugins/localStorage', ssr: false },
  ],
  css: ['@/assets/main.scss']
}
