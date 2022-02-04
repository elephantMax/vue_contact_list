import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
  },
  actions: {
    createUser({ commit, state }, user) {
      const newUser = {
        id: Date.now(),
        ...user,
      }
      const users = [...state.users, newUser]
      commit('setUsers', users)
      const jsonData = JSON.stringify(users)
      localStorage.setItem('users', jsonData)
    },
    getUsers({ commit }) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      commit('setUsers', users)
    },
  },
  getters: {
    users: s => s.users,
  },
})

export default store
