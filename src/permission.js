import router from '@/router/index'
import store from '@/store';

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const userInfo = JSON.stringify(store.getters.userInfo)

  if (store.getters.token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (userInfo !== '{}') {
        next()
      } else {
        console.log('1111')
        const res = await store.dispatch('user/getUserInfo')
        console.log(res, 'res')
        if (res) {
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
});
