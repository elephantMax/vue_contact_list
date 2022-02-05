import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    sortBy: null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setSortBy(state, sortBy) {
      state.sortBy = sortBy
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
    sortBy: s => s.sortBy,
    sortedUsers: s => {
      const { users, sortBy } = s
      if (sortBy) {
        return [...users].sort((a, b) => {
          const aValue =
            typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy]
          const bValue =
            typeof a[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy]

          return aValue > bValue ? 1 : bValue > aValue ? -1 : 0
        })
      }
      return users
    },
  },
})

export default store
