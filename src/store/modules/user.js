export default {
  state: {
    myuser: "", // 登录的用户
  },
  getters: {
    getUser(state) {
      return state.myuser
    },

  },
  mutations: {
    setUser(state, data) {
      state.myuser = data;
    },

  },
  actions: {
    setUser({ commit }, data) {
      commit('setUser', data);
    },
  }
}