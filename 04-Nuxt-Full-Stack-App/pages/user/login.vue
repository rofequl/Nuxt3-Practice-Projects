<script setup>
const authType = ref('signIn')

</script>
<template>
  <!--  User login or registration component start -->
  <div class="flex flex-col gap-10 justify-center min-h-[80%]">
    <!--  Logo, website name and short text -->
    <div class="flex flex-col gap-4 items-center">
      <div class="flex gap-4">
        <img src="/img/logo.webp" alt="logo" class="w-10">
        <span class="font-semibold text-4xl text-blue-800 dark:text-gray-300">Minora</span>
      </div>
      <div class="text-gray-400 text-center">Login or registration this website for helping each other to improve
        skill
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
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <form-auth-input-components placeholder="Email address" label="Email address" name="email" type="email"
                                          autocomplete="email" id="email-address"/>
            </div>
            <div>
              <form-auth-input-components placeholder="Password" label="Password" name="password" type="password"
                                          autocomplete="current-password" id="password" input-position="bottom"/>
            </div>
          </div>

          <div class="flex justify-end">
            <div class="text-sm">
              <a href="#"
                 class="font-medium text-blue-800 dark:text-blue-300 dark:hover:text-indigo-400 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit"
                    class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 dark:bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="material-icons h-5 w-5 text-indigo-500 group-hover:text-indigo-400">login</span>
          </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--  User login or registration component end -->
</template>