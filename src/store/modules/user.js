import user from '@/api/user';
import { getItem, removeAllItem, setItem } from '@/utils/storage';
import { TOKEN, USERINFO } from '@/constant';
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || null,
    userInfo: getItem(USERINFO) || {}
  }),
  mutations: {
    setToken (state, payload) {
      state.token = payload;
      setItem(TOKEN, payload)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
      setItem(USERINFO, userInfo)
    },
    loginOut (state) {
      state.token = null;
      state.userInfo = {}
      removeAllItem()
      router.push('/login')
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      const res = await user.getUserInfo();
      commit('setUserInfo', res);
      console.log(res);
      return res;
    },
    async login ({ commit }, payload) {
      const res = await user.login(payload);
      commit('setToken', res.token);
      return res
    }
  }
}
