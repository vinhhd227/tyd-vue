import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue') },
  { path: '/blog', component: () => import('@/pages/BlogList.vue') },
  { path: '/blog/:slug', component: () => import('@/pages/BlogPost.vue') },

  { path: '/login', component: () => import('@/pages/Login.vue') },
  // { path: '/admin', component: () => import('@/pages/admin/Dashboard.vue'), meta: { requiresAdmin: true } },
  // { path: '/admin/posts', component: () => import('@/pages/admin/Posts.vue'), meta: { requiresAdmin: true } },
  // { path: '/admin/posts/new', component: () => import('@/pages/admin/PostEdit.vue'), meta: { requiresAdmin: true } },
  // { path: '/admin/posts/:id', component: () => import('@/pages/admin/PostEdit.vue'), meta: { requiresAdmin: true } },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  if (to.meta.requiresAdmin) {
    await auth.ensureSessionLoaded();
    if (!auth.isAdmin) return { path: '/login', query: { redirect: to.fullPath } };
  }
  return true;
});

export default router;
