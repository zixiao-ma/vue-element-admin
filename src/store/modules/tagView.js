export default {
  namespaced: true,
  state: {
    tags: []
  },
  mutations: {
    addTag (state, tag) {
      if (tag.path === '/login') return;
      const index = state.tags.findIndex(val => val.path === tag.path)
      if (index >= 0) return
      state.tags.push(tag)
    },
    delTag (state, index) {
      state.tags.splice(index, 1)
    },
    removeTag (state) {
      state.tags = []
    }
  }
}
