<script setup>
const userStore = useUserStore()
const router = useRouter()

let email = ref(null)
let password = ref(null)
let errors = ref(null)

const login = async () => {
  errors.value = null
  try {
    await userStore.getToken()
    await userStore.login(email.value, password.value)
    await userStore.getUser()
    await router.push('/admin')
  } catch (error) {
    console.log(error)
    errors.value = error.response.data.errors
  }
}
</script>

<template>
  <NuxtLayout name="auth-layout">
    <div class="mt-10">
      <h1 class="lg:text-5xl text-3xl text-center font-extrabold">
        Log in to your Linktree
      </h1>
      <form class="mt-12" @submit.prevent="$event => login()">
        <div>
          <FormTextInput placeholder="Email: link@gmail.com" v-model:input="email" input-type="email"
                         :error="errors && errors.email ? errors.email[0]:''">

          </FormTextInput>
        </div>
        <div class="mt-4">
          <FormTextInput placeholder="Password" v-model:input="password" input-type="password"
                         :error="errors && errors.password ? errors.password[0]:''">

          </FormTextInput>
        </div>
        <div class="mt-10">
          <button type="submit" class="rounded-full w-full p-3 font-bold" :disabled="(!email || !password)"
                  :class="(email && password) ? 'bg-[#8228D9] hover:bg-[#6C21B3] text-white' : 'bg-[#EFF0EB] text-[#A7AAA2]'">
            Log in
          </button>
        </div>
      </form>
      <div class="text-[14px] text-center pt-12">
        Don't have an account?
        <NuxtLink to="/register" class="text-[#8228D9] underline">Sign up</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

