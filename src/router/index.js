import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from 'layout/index.vue';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/error',
    component: () => import('@/views/error'),
    name: 'error',
    meta: { title: '错误' },
  },
  {
    path: '/login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/login'),
    name: 'login',
    meta: { title: '登陆' },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/home/index'),
        name: 'home',
        meta: { title: '首页', affix: true }, // title 用于国际化等，affix 固定钉
      },
    ],
  },
  { path: '*', redirect: '/error' },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
