import { getItem, setItem } from '@/utils/storage';

export default {
  namespaced: true,
  state: () => ({
    color: getItem('subject') || '#304156'
  }),
  mutations: {
    setColor (state, color) {
      state.color = color
      setItem('subject', state.color)
    }
  }
}
