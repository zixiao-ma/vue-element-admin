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
          title: 'profile'
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
});
export default router;
