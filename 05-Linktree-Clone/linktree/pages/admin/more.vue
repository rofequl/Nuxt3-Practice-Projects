<script setup>
const userStore = useUserStore()

const router = useRouter()

let windowWidth = ref(window.innerWidth)

definePageMeta({ middleware: 'is-logged-out' })

onMounted(() => {
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth;
  });
})

const logout = async () => {
  let res = confirm('Are you sure you want to sign out?')
}

watch(() => windowWidth.value, () => {
  if (windowWidth.value >= 767) {
    router.push('/admin')
  }
})
</script>

<template>
  <NuxtLayout name="admin-layout">
    <div id="MorePage" class="flex" :class="userStore.isMobile ? 'pt-24' : 'pt-32'">
      <div class="rounded-md bg-white w-full">
        <button @click="logout()" class="w-full flex items-center text-gray-600 p-3 hover:text-black"
                :class="userStore.isMobile ? 'text-[20px]' : 'text-[15px]'">
          <Icon name="circum:logout" class="mr-6" :size="userStore.isMobile ? '22' : '15'"/>
          Sign out
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
