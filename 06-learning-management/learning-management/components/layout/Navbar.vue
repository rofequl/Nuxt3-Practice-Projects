<script setup lang="ts">
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
const isOpen = ref(false)
</script>

<template>
  <!--  Website sticky Navbar Start -->
  <nav class="sticky top-0 bg-white shadow dark:bg-gray-800 dark:shadow-gray-700">
    <div class="container px-6 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <!--  Start Website Logo -->
            <NuxtLink
                class="flex gap-4 text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"><img src="/images/logo.svg" alt="logo" class="w-10">
              <span class="text-font-primary dark:text-gray-300">Course</span>
            </NuxtLink>
            <!--  End Website Logo -->
          </div>
          <!-- Start Mobile menu button -->
          <div class="flex lg:hidden">
            <button @click="isOpen = !isOpen" type="button"
                    class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu">
              <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
              </svg>

              <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <!-- End Mobile menu button -->
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div :class="[isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full']"
             class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
            <NuxtLink to="item"
                      activeClass="bg-gray-100 dark:bg-gray-700"
                      class="border-r border-gray-400 ps-3 pe-6 py-2 mx-3 mt-2 text-font-primary transition-colors lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500">
              Login
            </NuxtLink>
            <NuxtLink to="item"
                      activeClass="bg-gray-100 dark:bg-gray-700"
                      class="pe-3 py-2 mx-3 mt-2 text-font-primary lg:mt-0 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500">
              Support
            </NuxtLink>
          </div>
          <div class="flex items-center mt-4 lg:mt-0">
            <!-- Start Color mode change and user profile -->
            <button
                class="hidden mx-4 text-gray-600 mt-2 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
              <span
                  class="material-icons w-6 h-6 hover:scale-125 transition">{{
                  $colorMode.preference === 'dark' ? 'dark_mode' : 'light_mode'
                }}</span>
            </button>
            <!-- End Color mode change and user profile -->

            <button type="button" class="flex items-center focus:outline-none hidden"
                    aria-label="toggle profile dropdown">
              <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    class="object-cover w-full h-full" alt="avatar">
              </div>

              <h3 class="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
            </button>
            <NuxtLink to="/user/login"
                      class="flex items-center shadow focus:outline-none text-font-primary bg-gradient-to-r from-[#CBE333] from-10% to-[#B5CC25] via-30% hover:from-[#CBE333] hover:to-[#B5CC25] px-3 py-2 rounded dark:text-gray-800 dark:bg-gray-200">
              <UIcon name="i-heroicons-plus" class="mr-2" /> Join Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!--  Website sticky Navbar End -->
</template>