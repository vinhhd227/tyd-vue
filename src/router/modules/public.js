export default {
  path: '/',
  component: () => import('@/layout/DefaultLayout.vue'),
  children: [
    { path: '', name: 'Home', component: () => import('@/pages/Home.vue') },
    { path: 'about-us', name: 'AboutUs', component: () => import('@/pages/AboutUs.vue') },
    { path: 'contact', name: 'Contact', component: () => import('@/pages/Contact.vue') },
    { path: 'blog', name: 'BlogList', component: () => import('@/pages/BlogList.vue') },
    { path: 'blog/:slug', name: 'BlogPost', component: () => import('@/pages/BlogPost.vue') },
  ],
};
