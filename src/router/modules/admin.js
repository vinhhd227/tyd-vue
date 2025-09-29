export default {
  path: '/admin',
  component: () => import('@/layout/admin/AdminLayout.vue'),
  meta: { requiresAuth: true },
  children: [
    { path: '', redirect: { name: 'AdminDashboard' } },
    { path: 'dashboard', name: 'AdminDashboard', component: () => import('@/pages/Admin/Dashboard.vue'), meta: { title: 'Dashboard' } },
    // { path: 'posts', name: 'AdminPosts', component: () => import('@/pages/admin/posts/List.vue') },
    // { path: 'posts/new', name: 'AdminPostCreate', component: () => import('@/pages/admin/posts/Edit.vue') },
    // { path: 'posts/:id', name: 'AdminPostEdit', component: () => import('@/pages/admin/posts/Edit.vue') },
  ],
};
