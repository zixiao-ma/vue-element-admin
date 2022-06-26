import { createRouter, createWebHashHistory } from 'vue-router';
import HomeLayout from '@/layout/index';
import store from '@/store/index';

console.log(store);
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && store.getters.getToken) {
    return next('/');
  }
  if (to.path !== '/login' && !store.getters.getToken) {
    return next('/login');
  }
  return next();
});
export default router;
