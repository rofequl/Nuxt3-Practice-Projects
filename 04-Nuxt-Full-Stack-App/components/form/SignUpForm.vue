<script setup lang="ts">
import {userRegistration} from "~/composables/useAuth";

const name = ref(null)
const email = ref(null)
const password = ref(null)
const errors = ref(new Map())
let response = ref<FormValidation>({hasErrors: false})

const postRegistration = async () => {
  response.value = await userRegistration(name.value, email.value, password.value)
  errors.value = response.value.errors
}
</script>
<template>
  <form class="mt-8 space-y-6" v-on:submit.prevent action="#" method="POST">
    <div v-if="response.hasErrors && errors"
         class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
      <strong class="font-bold">Oops, try again! </strong>
      <ul class="block sm:inline">
        <li v-for="[key, value] in errors">
          {{ value.check.errorMessage }}
        </li>
      </ul>
    </div>
    <div class="-space-y-px rounded-md shadow-sm">

      <form-auth-input-components placeholder="Name" label="Name" name="name" type="text" :value="name"
                                  autocomplete="name" id="name" input-position="top" @update="(e) => name = e"/>
      <form-auth-input-components placeholder="Email address" label="Email address" name="email" type="email"
                                  autocomplete="email" id="email-address" @update="(e) => email = e" :value="email"/>
      <form-auth-input-components placeholder="Password" label="Password" name="password" type="password"
                                  autocomplete="current-password" id="password" input-position="bottom"
                                  @update="(e) => password = e" :value="password"/>
    </div>
    <div>
      <button @click="postRegistration"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-800 dark:bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="material-icons h-5 w-5 text-indigo-500 group-hover:text-indigo-400">login</span>
          </span>
        Sign up
      </button>
    </div>
  </form>
</template>