<template>
  <header class="flex items-center justify-between py-7 lg:px-desktop mx-auto sticky top-0 bg-white/80">
    <nuxt-link to="/">
      <h1 class="font-bold">GRO. <span class="text-red-600">PRO</span></h1>
    </nuxt-link>
    <ul class="lg:flex hidden items-center space-x-14">
      <li class="group" :class="{ 'text-gray-500': activeLink !== link }" v-for="(link, i) in links"
        :key="`navLink${i}`">
        <nuxt-link to="#" class="font-medium group-hover:text-black transition-all duration-300">{{ link }}</nuxt-link>
        <div :class="{ 'bg-black scale-y-100': activeLink === link }"
          class="h-0.5 mt-0.5 group-hover:scale-y-100  group-hover:bg-black group-hover:block w-[80%] transition-all duration-300">
        </div>
      </li>
    </ul>
    <div class="space-x-8 hidden lg:block">
      <nuxt-link to="#">Login</nuxt-link>
      <nuxt-link to="#"
        class="border border-black py-3 px-7 rounded-full font-medium hover:bg-black hover:text-white transition-all">
        Register
      </nuxt-link>
    </div>
  </header>
</template>

<script setup>
const links = ['Home', 'About Us', 'Pricing', 'Blog', 'content']
const activeLink = useState('activeLink', () => 'Home')
</script>

