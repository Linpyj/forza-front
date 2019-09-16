export const state = () => ({
  current: null
})

export const getters = {
  current(state) {
    return state.current
  }
}

export const mutations = {
  setCurrent(state, payload) {
    state.current = payload
  }
}

export const actions = {


  async signin({ commit }, { email, password }) {
    commit("startLoading", {}, { root: true })
    try {
      const {
        user
      } = await (this as any).$axios.$post("/sessions/login", { email, password })
      commit("setCurrent", user)
      commit("endLoading", {}, { root: true })
    } catch (error) {
      commit("setError", error, { root: true })
      commit("endLoading", {}, { root: true })
      if (error.response && error.response.status === 401) {
        throw new Error("ログインに失敗しました")
      }
    }
  },
  async signout({ commit }) {
    try {
      commit("setCurrent", null)
      document.cookie = `loadless_token=; max-age=0`
    } catch (error) {
      commit("setError", error)
    }
  }
}
