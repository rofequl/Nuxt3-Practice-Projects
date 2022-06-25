<template>
  <section class="lg:mx-desktop bg-[#f3f7f5] rounded-3xl mt-4 relative">
    <!--  Stat Card -->
    <div
      class="absolute rounded-2xl p-4 bg-white bottom-4 left-[40%] z-40 hover:scale-105 hover:shadow-lg shadow shadow-black/5 transition-all duration-300">
      <img src="" alt="Investor status" class="mx-auto">
      <p>80% startups</p>
      <h1 class="text-lg"></h1>
    </div>
    <div class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-green-900"></div>
    <div class="absolute right-[40%] bottom-7 rounded-full w-5 h-5 bg-yellow-500"></div>
    <div class="flex">
      <div class="basis-1/2 pl-20 pt-24 relative">
        <h1 class="font-bold text-6xl leading-[1.15] relative z-40 animate-slideDown">
          <div class="absolute right-[20%] top-0 rounded-full w-5 h-5 bg-green-500/50"></div>
          Join the world's <br>
          largest startup <br>
          community
        </h1>
        <p class="mt-3 text-gray-600 font-medium text-xl">Experience the startup ecosystem _ invest in startups</p>
        <p class="mt-3 text-gray-600 font-medium text-xl">
          Research the fastest growing companies.
        </p>
        <div class="mt-16">
          <nuxt-link to="#"
            class="border border-transparent hover:border-[#3e3e3e] py-5 px-10 rounded-full font-medium hover:bg-[#3e3e3e] bg-black text-white transition-all">
            Get Started
          </nuxt-link>
        </div>
      </div>
      <div class="basis-1/2 overflow-hidden relative hidden lg:block">
        <img src="/home.png" alt="Image of a women" class="object-cover h-[100%]">
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
