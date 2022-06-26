import { createStore } from 'vuex';

const saveStoreData = (store) => {
  const key = 'VUE_STORE_KEY';
  const storage = window.sessionStorage;
  const data = storage.getItem(key);
  data && store.replaceState(JSON.parse(data));

  store.subscribe((mutation, state) => {
    storage.setItem(key, JSON.stringify(state));
  });
};
export default createStore({
  state: {
    user: {}
  },
  getters: {},
  mutations: {
    setUserInfo (state, payload) {
      state.user = payload;
    }
  },
  actions: {},
  modules: {},
  plugins: [saveStoreData]
});
