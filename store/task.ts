export const state = () => ({
  content: [],
  detail: [],
  tasks: []
})

export const getters = {
  content(state) {
    return state.content
  },
  detail(state) {
    return state.detail
  },
  tasks(state) {
    return state.tasks
  }
}


export const mutations = {
  setContent(state, payload) {
    state.content = payload
  },
  setDetail(state, payload) {
    state.detail = payload
  },
  setTasks(state, payload) {
    state.tasks = payload
  }
}

export const actions = {
  async fetchTasks({commit}) {
    try {
      const tasks = await (this as any).$axios.$get('http://localhost:3000/api/v1/tasks')
      commit('setTasks',tasks)
    } catch {

    }
  },
  async createTask({commit}, {content,detail}) {
    try {
      const task = await (this as any).$axios.$post('http://localhost:3000/api/v1/tasks', {content,detail})
      commit('setTasks',task)
    } catch (error) {

    }
  },
  async destroyTask({commit}, {id}) {
    try {
      const task = await (this as any).$axios.$delete('http://localhost:3000/api/v1/tasks/'+ id, {id: id})
      commit('setTasks',task)
    } catch {

    }
  }
}
