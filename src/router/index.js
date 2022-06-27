import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store/index';
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
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/login' && store.getters.getToken) {
    return next('/');
  }
  if (to.path !== '/login' && !store.getters.getToken) {
    return next('/login');
  }
  return next();
});
export default router;
