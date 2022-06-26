import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { getUserInfo } from '@/utils/user';

export default createStore({
  state: {
    user: {},
    userInfo: {}
  },
  getters: {
    getToken (state) {
      return state.user.token;
    }
  },
  mutations: {
    setToken (state, payload) {
      state.user = payload;
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    },
    loginOut (state) {
      state.user = {};
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
