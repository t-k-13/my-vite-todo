import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';
import NotFound from '/src/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'MainTodo',
    component: MainTodo,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/src/pages/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('/src/pages/Blog.vue'),
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: () => import('/src/pages/BlogDetail.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
