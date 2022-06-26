import { createRouter, createWebHashHistory } from 'vue-router';
import HomeLayout from '@/layout/index';

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'HomeLayout',
    component: () => HomeLayout
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
});

export default router;
