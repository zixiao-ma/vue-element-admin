import user from '@/api/user';
import { getItem, removeAllItem, setItem } from '@/utils/storage';
import { TOKEN } from '@/constant';

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || null,
    userInfo: {}
  }),
  mutations: {
    setToken (state, payload) {
      state.token = payload;
      setItem(TOKEN, payload)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    },
    loginOut (state) {
      state.token = null;
      state.userInfo = {}
      removeAllItem()
      console.log('resr')
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      const res = await user.getUserInfo();
      commit('setUserInfo', res);
      return res;
    },
    async login ({ commit }, payload) {
      const res = await user.login(payload);
      commit('setToken', res.token);
      console.log(res, 'token');
    }
  }
}
