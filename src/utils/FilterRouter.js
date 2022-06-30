import router from '@/router';
import store from '@/store/index'

const menuRouter = []
const menuRole = Object.values(store.getters.menuRole)
const publicRole = []

function MapArr (params) {
  params.forEach(item => {
    if (item.children && item.children.length > 0) {
      if (item.path === '/') {
        item.children.forEach(val => {
          if (val.meta) {
            publicRole.push(val)
          }
        })
      }
      item.children.forEach(val => {
        if (val.meta) {
          if (menuRole.includes(val.name)) {
            menuRouter.push(val)
          }
        }
      })
    }
  })
}

export const filterRouter = () => {
  let rootRouter = []
  const routerInfo = router.getRoutes()
  console.log(routerInfo)
  rootRouter = routerInfo.filter(value => {
    return value.children.length > 0;
  })
  const allRouter = [...publicRole, ...menuRouter]
  MapArr(rootRouter)
  rootRouter.forEach((val) => {
    allRouter.forEach(v => {
      if (val.path.includes(v.path)) {
        val.children.push(v)
      }
    })
  })
  console.log(allRouter)
}
