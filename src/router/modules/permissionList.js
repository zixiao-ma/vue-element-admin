import layout from '@/layout'

export default {
  path: '/user',
  name: 'permissionList',
  component: layout,
  redirect: '/user/manage',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      name: 'userPermission',
      component: import('../../views/permission-list'),
      meta: {
        title: '权限列表',
        icon: 'permission'
      }
    }
  ]
}
