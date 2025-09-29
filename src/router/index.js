import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import publicGroup from './modules/public';
import adminGroup from './modules/admin';
import authRoutes from './modules/auth';

const routes = [ publicGroup, adminGroup, ...authRoutes ];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  const needsAuth = to.matched.some(r => r.meta?.requiresAuth);

  if (needsAuth) {
    await auth.ensureSessionLoaded();
    if (!auth.user) return { name: 'Login', query: { redirect: to.fullPath } };
  }

  if ((to.name === 'Login' || to.name === 'Register')) {
    await auth.ensureSessionLoaded().catch(() => {});
    if (auth.user) {
      const redirect = typeof to.query.redirect === 'string' ? to.query.redirect : '/admin/dashboard';
      return redirect;
    }
  }
  return true;
});


export default router;
