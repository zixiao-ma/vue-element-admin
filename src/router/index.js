import { createRouter, createWebHashHistory } from 'vue-router';
import HomeLayout from '@/layout/index'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/profile',
    component: HomeLayout,
    name: 'HomeLayout',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/chart/index'),
        meta: {
          title: '数据可视化',
          icon: 'nested'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
];
const privateRoute = [/*
  {
    path: '/user',
    name: 'user',
    component: HomeLayout,
    meta: {
      title: '用户',
      icon: 'user'
    },
    redirect: '/user/manage',
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('../views/user-manage'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'roleList',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'permissionList',
        component: () => import('../views/permission-list'),
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('../views/import')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: HomeLayout,
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('../views/article-detail')
      }
    ]
  } */
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoute]
});
export default router;
