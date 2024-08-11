<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon
      <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="pokemon"
      class="w-[200px] h-[200px] mt-5"
    />

    <!-- Aquí se está utilizando el nombre de la ruta y los parámetros -->
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-700 transition-colors"
    >
      Next
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    id: string;
  }

  const props = defineProps<Props>();

  console.log({ id: props.id });
</script>