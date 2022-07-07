import { createRouter, createWebHashHistory } from 'vue-router';
import HomeLayout from '@/layout/index'
import UserManage from '@/router/modules/userManage';
import RoleList from '@/router/modules/roleList';
import PermissionList from '@/router/modules/permissionList';
import Article from '@/router/modules/Article';
import ArticleCreate from '@/router/modules/ArticleCreate';

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: 'login'
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
export const privateRoute = [UserManage, RoleList, PermissionList, Article, ArticleCreate]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
});

export default router;
