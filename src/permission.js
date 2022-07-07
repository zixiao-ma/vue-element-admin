import router from '@/router/index'
import store from '@/store';

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title
    const tagObj = {
      title: to.meta.title,
      path: to.path
    }
    store.commit('tagView/addTag', tagObj)
  }
  if (store.getters.token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')
        const respose = await store.dispatch('permission/filterMenus', permission.menus)
        respose.forEach(item => {
          router.addRoute(item)
        })
        return next(to.path)
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
});
