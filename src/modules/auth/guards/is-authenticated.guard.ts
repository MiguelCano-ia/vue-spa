import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  // A donde voy, de donde vengo, funcion para navegar a la persona.
  const userId = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path); // Guarda la ultima ruta visitada

  if (!userId) {
    return next({ name: 'login' }); // Redirige a la ruta login
  }

  return next();
};

export default isAuthenticatedGuard;
