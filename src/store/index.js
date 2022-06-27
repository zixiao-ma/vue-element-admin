import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { getUserInfo } from '@/api/user';

export default createStore({
  state: {
    token: {},
    userInfo: {}
  },
  getters: {
    getToken (state) {
      return state.token.token;
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload;
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    },
    loginOut (state) {
      state.token = {};
      state.userInfo = {}
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      const res = await getUserInfo();
      commit('setUserInfo', res);
      console.log(res);
      return res;
    }
  },
  modules: {},
  plugins: [
    createPersistedState({
      key: 'vuex',
      storage: window.sessionStorage
    })
  ]
});
