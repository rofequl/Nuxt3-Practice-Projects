<script setup>
import UpdateLinkOverlay from "~/components/UpdateLinkOverlay.vue";

const userStore = useUserStore()
const {isMobile, updatedLinkId, addLinkOverlay, isPreviewOverlay} = storeToRefs(userStore)

const route = useRoute()
let bgIsGray = ref(false)

onMounted(() => {
  userStore.colors = colors()
  updatedLinkId.value = 0
  addLinkOverlay.value = false
  isPreviewOverlay.value = false
  isMobile.value = 'ontouchstart' in window;
  checkPath(route.fullPath)
})

const colors = () => {
  return [
    {id: 1, color: 'bg-white', text: 'text-black', name: 'Air White'},
    {id: 2, color: 'bg-gray-800', text: 'text-white', name: 'Lake Black'},
    {
      id: 3,
      color: 'bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500',
      text: 'text-white',
      name: 'Purple Pie'
    },
    {id: 4, color: 'bg-gradient-to-t from-gray-500 via-blue-500 to-green-500', text: 'text-white', name: 'Green Grass'},
    {
      id: 5,
      color: 'bg-gradient-to-t from-orange-500 via-green-500 to-red-500',
      text: 'text-white',
      name: 'Traffic Lights'
    },
    {id: 6, color: 'bg-gradient-to-b from-blue-800 via-blue-500 to-green-500', text: 'text-white', name: 'Blue Sky'},
    {
      id: 7,
      color: 'bg-gradient-to-t from-lime-500 via-indigo-700 to-amber-500',
      text: 'text-white',
      name: 'Soft Horizon'
    },
    {id: 8, color: 'bg-gradient-to-t from-gray-800 to-emerald-500', text: 'text-white', name: 'Tinted Lake'},
  ]
}

const checkPath = (path) => {
  if (path === '/' || path === '/register') {
    bgIsGray.value = false
    return
  }
  bgIsGray.value = true
}
</script>
<template>
  <VitePwaManifest/>
  <div v-if="bgIsGray" class="bg-[#F3F3F1] fixed w-full h-full z-[-1]"/>
  <NuxtPage/>
  <UpdateLinkOverlay/>
  <AddLinkOverlay v-if="isMobile && addLinkOverlay"/>
  <PreviewOverlay v-if="!isMobile && isPreviewOverlay"/>
</template>
