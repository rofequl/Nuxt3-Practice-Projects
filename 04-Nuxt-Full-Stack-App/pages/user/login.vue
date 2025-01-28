<script setup>
const authType = ref('signUp')

</script>
<template>
  <div class="flex flex-col gap-10 justify-center min-h-[80%]">
    <!--  User login or registration component start -->
    <!--  Logo, website name and short text -->
    <div class="flex flex-col gap-4 items-center">
      <div class="flex gap-4">
        <img src="/img/logo.webp" alt="logo" class="w-10">
        <span class="font-semibold text-4xl text-blue-800 dark:text-gray-300">Minora</span>
      </div>
      <div class="text-gray-400 text-center">
        Login or registration this website for helping each other to improve skill
      </div>
    </div>
    <!--  Registration or signIn part -->
    <div class="flex flex-col gap-4 items-center">
      <!--  Tabs for select signIn or signUp -->
      <div class="transition inline-flex border-b border-gray-200 dark:border-gray-700">
        <button @click="authType = 'signIn'"
                :class="[authType === 'signIn' ? 'text-blue-800 border-blue-500 dark:border-blue-400 dark:text-blue-300 dark:text-white' : 'text-gray-700 dark:text-gray-500 border-transparent hover:border-gray-400 cursor-base']"
                class="h-10 px-6 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base  whitespace-nowrap focus:outline-none">
          Sign In
        </button>
        <button @click="authType = 'signUp'"
                :class="[authType === 'signUp' ? 'text-blue-800 border-blue-500 dark:border-blue-400 dark:text-blue-300 dark:text-white' : 'text-gray-700 dark:text-gray-500 border-transparent hover:border-gray-400 cursor-base']"
                class="h-10 px-6 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none">
          Sign Up
        </button>
      </div>
      <!--  Selection tabs form -->
      <div class="w-full max-w-sm px-5">
        <form-sign-up-form/>
      </div>
    </div>
    <!--  User login or registration component end -->
  </div>
</template>