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
    try {
      const user = await (this as any).$axios.$post("http://localhost:3000/api/sessions/login", { email,password })
      commit("setCurrent", user)
    } catch (error) {

    }
  },

  async signout({ commit }) {
    try {
      commit("setCurrent", null)
    } catch (error) {

    }
  }


}
