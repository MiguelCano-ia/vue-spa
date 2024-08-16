<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header
      class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8 justify-between"
    >
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/vuejs.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/features"> Features </RouterLink>
        <RouterLink to="/pricing"> Pricing </RouterLink>
        <RouterLink to="/contact"> Contact </RouterLink>
      </nav>
      <nav class="space-x-4">
        <RouterLink to="/pokemon/1"> Pokemon </RouterLink>
        <RouterLink to="/auth"> Login </RouterLink>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <!-- keep alive: Permite mantener el estado de los componentes cuando se navega entre rutas, gracias al keep alive 
        Ademas, :is="Component" permite renderizar el componente que se está navegando 
      -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <!-- <RouterView /> -->
      <!-- Aquí se renderizarán las páginas -->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Miguel Cano. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
<script setup lang="ts"></script>
