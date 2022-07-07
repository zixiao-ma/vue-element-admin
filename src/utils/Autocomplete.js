export const getAutocomplete = (routes) => {
  const result = []
  routes.forEach(item => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}
export const filterMenus = (routes) => {
  const childRoutes = getAutocomplete(routes)
  return routes.filter(item => {
    return !childRoutes.find(val => item.path === val.path)
  })
}

function isNull (data) {
  if (!data) return true;
  if (JSON.stringify(data) === '{}') return true;
  if (JSON.stringify(data) === '[]') return true;
  return false
}

export const getMenus = (routes) => {
  const result = []
  routes.forEach(item => {
    if (isNull(item.meta) && isNull(item.children)) return;
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...getMenus(item.children))
    }

    let route = result.find(val => val.path === item.path)

    if (!route) {
      route = {
        ...item,
        path: item.path,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...getMenus(item.children))
    }
  })
  const loadAll = []
  result.forEach(item => {
    const obj = {
      value: item.meta.title,
      link: item.path
    }
    loadAll.push(obj)
  })
  console.log(loadAll)
  return loadAll
}
