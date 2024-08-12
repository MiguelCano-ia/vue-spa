import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ), // Permite navegar por la historia del navegador
  routes: [
    // Landing
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: ( route ) => {
            const id = +route.params.id; // Convierte el id a numero

            return isNaN(id) ? { id: 1 } : { id }; // Si no es un numero retorna 1
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        }
      ],
    },

    //Auth

    {
      path: '/auth',
      redirect: { name: 'login' }, // Redirige a la ruta login cuando se accede a /auth
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login', // sin el slash tendriamos que acceder a /auth/login
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not found

    {
      path: '/:pathMatch(.*)*', // Cualquier ruta que no exista
      component: NotFound404,
    }
  ],
});

export default router;