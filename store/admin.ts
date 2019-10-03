export const state = () => ({
  users: []
})

export const getters = {
  users(state) {
    return state.users
  }
}

export const mutations = {

  setUsers(state, payload) {
    state.users = payload
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try {
      const users = await (this as any).$axios.$get("http://localhost:3000/api/v1/manager/users")
      commit("setUsers", users)
    } catch (error) {

    }
  },
  async destroyUser({commit}, {id}) {
    try {
      const user = await (this as any).$axios.$delete('http://localhost:3000/api/v1/manager/users/'+ id, {id: id})
      commit('setUsers',user)
    } catch {

    }
  }
}
