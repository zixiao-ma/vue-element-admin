import { privateRoute, publicRoutes } from '@/router';

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoute (state, newRoute) {
      state.routes = [...publicRoutes, ...newRoute]
    }
  },
  actions: {
    filterMenus ({ commit }, menus) {
      const result = []
      menus.forEach(name => {
        result.push(...privateRoute.filter(item => item.name === name))
      })
      result.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoute', result)
      return result
    }
  }
}
