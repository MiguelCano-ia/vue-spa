import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ), // Permite navegar por la historia del navegador
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [ // Rutas hijas
        {
          path: '/', // Cuando estamos aqui se muestra el componente Home
          name: 'home',
          component: HomePage
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeauteresPage.vue'), // Lazy loading
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PrincingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
      ],
    },

    //Auth

    {
      path: '/auth',
      component: () => import('@/modules/auth/pages/LoginPage.vue'),
    }
  ],
});

export default router;