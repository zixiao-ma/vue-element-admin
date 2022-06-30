/* eslint-disable no-useless-return */
/*
* 取后三条的所有children
* */
export const getChildrenRoutes = (routes) => {
  const result = [];
  routes.forEach(item => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}

export const filterRouter = (routes) => {
  // 12个子路由
  const childRouter = getChildrenRoutes(routes)
  // 从16个里面过滤，每过滤一遍，12个子路由都在16个里面找自己的12个，然后取反得到4个
  return routes.filter(item => {
    return !childRouter.find(val => {
      return item.path === val.path
    })
  })
}

function isNull (data) {
  if (!data) return true;
  if (JSON.stringify(data) === '{}') return true;
  if (JSON.stringify(data) === '[]') return true;
  return false
}

/*
*@routes 四个路由 包含登录
* */

export const getMenu = (routes) => {
  const result = []
  routes.forEach(item => {
    // 如果meta是空的 children也是空的 直接停止1
    if (isNull(item.meta) && isNull(item.children)) return
    // 如果meta有内容，并且children也不是空的
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...getMenu(item.children))
    }
    const routePath = item.path
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...getMenu(item.children))
    }
  })
  return result
}
