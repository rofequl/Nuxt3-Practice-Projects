<script setup>
const userStore = useUserStore()
const {updatedLinkId} = storeToRefs(userStore)
const route = useRoute()
onUnmounted(() => updatedLinkId.value = 0)
</script>

<template>
  <div id="AuthLayout" class="h-screen w-full flex justify-between">
    <div class="lg:pt-7 pt-3 lg:px-12 px-6 lg:w-2/3 w-full lg:min-w-[800px]">
      <NuxtLink to="/" class="inline-block">
        <img src="~/assets/images/linktree-logo.png" class="lg:w-28 w-[75px] select-none" alt="linktree-logo">
      </NuxtLink>
      <main class="w-full">
        <div class="w-full md:max-w-[550px] max-w-[360px] mx-auto">
          <slot/>
        </div>
      </main>
    </div>
    <div class="lg:block hidden w-1/3 pointer-events-none">
      <img src="~/assets/images/side1.png" alt="side" class="object-cover w-full h-screen select-none"
           v-if="route.fullPath === '/'">
      <img src="~/assets/images/side2.png" alt="side" class="object-cover w-full h-screen select-none"
           v-else>
    </div>
  </div>
</template>
