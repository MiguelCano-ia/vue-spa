<template>
  <!-- component -->
  <main class="h-screen w-full flex flex-col justify-center items-center bg-[#F1F1F1]">
    <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
    <div class="bg-[#2563EB] px-2 text-sm rounded rotate-12 absolute text-white">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-700 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>
        <span class="relative block px-8 py-3 bg-[#2563EB] border border-current">
          <router-link replace to="/">Go Home</router-link>
        </span>
      </a>
    </button>
  </main>
</template>