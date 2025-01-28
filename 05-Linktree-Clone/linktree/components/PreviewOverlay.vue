<script setup>
const userStore = useUserStore()

const fakeLink = [{
  id: 1,
  name: 'Youtube Channel',
  url: 'nayem@uysys.com',
  image: 'https://avatars.githubusercontent.com/u/739984?v=4'
}, {
  id: 2,
  name: 'Youtube Channel',
  url: 'nayem@uysys.com',
  image: 'https://avatars.githubusercontent.com/u/739984?v=4'
}, {
  id: 3,
  name: 'Youtube Channel',
  url: 'nayem@uysys.com',
  image: 'https://avatars.githubusercontent.com/u/739984?v=4'
}]

onUnmounted(() => userStore.isPreviewOverlay = false)
</script>
<template>
  <div id="PreviewOverlay" :class="userStore.theme.color"
       class="md:hidden bg-white fixed z-30 top-0 left-0 h-full w-full overflow-auto">
    <div id="PreviewOverlayTopNav" class="w-full fixed z-10 flex items-center justify-between">
      <div class="flex items-center justify-between px-2 py-[8px] pl-4 bg-white w-full border-b">
        <div class="flex items-center justify-start w-full">
          <button @click="userStore.isPreviewOverlay = false">
            <img class="w-[23px] min-w-[23px] select-none" src="~/assets/images/linktree-logo-icon.png">
          </button>
        </div>
        <div class="flex items-center justify-between gap-3">
          <button class="flex items-center text-sm font-semibold p-2 rounded-full hover:bg-gray-100">
            <UIcon name="i-healthicons-megaphone-outline" class="mr-0.5 text-[22px]" dynamic/>
          </button>
          <button class="flex items-center font-semibold px-3 py-2 rounded-full bg-gray-100">
            <UIcon name="i-ph-lightning-fill" class="mr-0.5 text-[18px]" dynamic/>
            Upgrade
          </button>
          <button class="flex items-center font-semibold px-3 py-2 rounded-full border hover:bg-gray-100">
            <UIcon name="i-teenyicons-upload-solid" class="mr-1.5 text-[18px]" dynamic/>
            Share
          </button>
        </div>
      </div>
    </div>
    <div id="PreviewOverlayContentSection" class="relative w-full h-full mx-auto pt-24">
      <div class="mx-auto  mb-16 w-full p-3">
        <div class="h-full mx-auto w-full overflow-auto z-10">
          <img class="rounded-full min-w-[100px] w-[100px] mx-auto "
               src="https://avatars.githubusercontent.com/u/739984?v=4">
          <div class="text-center text-xl font-semibold mt-4">
            @rofequlislamnayem
          </div>
          <div class="text-center font-light mt-2" :class="userStore.theme.text">
            <div class="px-8">
              This is the bio section!!!
            </div>
          </div>
          <div v-for="link in fakeLink">
            <a :href="link.url" target="_blank"
               class="flex items-center relative w-[calc(100%-10px)] mx-auto border bg-white mt-4 p-1 rounded-lg">
              <img class="rounded-lg h-[45px] aspect-square" :src="link.image">
              <div class="absolute text-[16px] text-center w-full">
                {{ link.name }}
              </div>
            </a>
          </div>
          <div class="pb-28"/>
        </div>
      </div>
    </div>
    <div id="PreviewButton" class="fixed bottom-10 w-full flex items-center justify-center">
      <button @click="userStore.isPreviewOverlay = false"
          class="flex items-center justify-center p-2.5 bg-[#DFE2D9] rounded-full">
        <Icon name="mdi:close" size="30"/>
      </button>
    </div>
  </div>
</template>
