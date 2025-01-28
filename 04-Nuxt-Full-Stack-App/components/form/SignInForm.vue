<template>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <form-auth-input-components placeholder="Email address" label="Email address" name="email" type="email"
                                    autocomplete="email" id="email-address" input-position="top"/>
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
</template>