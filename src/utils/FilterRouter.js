import router from '@/router/index';

export const filterRouter = () => {
  const SubMenu = router.getRoutes().filter(val => {
    return val.children && val.children.length > 0 && JSON.stringify(val.meta) !== '{}'
  })
  const mainMenu = router.getRoutes().filter(val => {
    return val.children && val.children.length > 0 && JSON.stringify(val.meta) === '{}'
  })
  SubMenu.forEach(val => {
    val.children = val.children.filter(item => {
      return item.meta && JSON.stringify(item.meta) !== '{}'
    })
  })
  mainMenu.forEach(val => {
    SubMenu.unshift(...val.children.filter(item => {
      return item.meta && JSON.stringify(item.meta) !== '{}'
    }))
  })
  console.log(SubMenu)
  return SubMenu
}
