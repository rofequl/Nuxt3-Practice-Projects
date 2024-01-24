<script setup>
const userStore = useUserStore()
const route = useRoute()
const links = ref([
  {name: 'Links', url: '/admin', icon: 'i-icon-park-outline-hamburger-button'},
  {name: 'Apperance', url: '/admin/apperance', icon: 'i-fluent-shapes-48-regular'},
  {name: 'Analytics', url: '/', icon: 'i-tabler-brand-google-analytics'},
  {name: 'Settings', url: '/', icon: 'i-material-symbols-settings'},
])
const linksSecondaryNav = ref([
  {name: 'Links', url: '/admin', icon: 'icon-park-outline:hamburger-button'},
  {name: 'Apperance', url: '/admin/apperance', icon: 'fluent:shapes-48-regular'},
  {name: 'Analytics', url: '/', icon: 'tabler:brand-google-analytics'},
  {name: 'More', url: '/admin/more', icon: '', img: 'https://avatars.githubusercontent.com/u/739984?v=4'}
])
const linksMobile = ref([
  {name: 'Links', url: '/admin', icon: 'icon-park-outline:hamburger-button'},
  {name: 'Apperance', url: '/admin/apperance', icon: 'fluent:shapes-48-regular'},
  {name: 'Preview', url: '/admin/preview', icon: 'icon-park-outline:preview-open'},
  {name: 'Analytics', url: '/', icon: 'tabler:brand-google-analytics'},
  {name: 'More', url: '/admin/more', icon: '', img: 'https://avatars.githubusercontent.com/u/739984?v=4'}
])
const items = [
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]
const currentMobilePage = () => {
  switch (route.fullPath) {
    case '/admin':
      return 'Links'
      break;
    case '/admin/apperance':
      return 'Apperance'
      break;
    case '/admin/preview':
      return 'Preview'
      break;
    case '/admin/more':
      return 'More'
      break;
  }
}
</script>

<template>
  <div id="AdminLayout" class="w-full fixed z-30">
    <!-- Start: Header top nav menu bar -->
    <div id="TopNav" v-if="!userStore.isMobile" class="w-full flex items-center justify-between md:pt-2.5 md:px-2.5">
      <div
          class="flex items-center justify-between md:rounded-full md:shadow-sm px-2 md:pl-6 pl-4 py-[8px] bg-white w-full border-b">
        <div class="flex items-center justify-start w-full max-w-[500px]">
          <NuxtLink to="/admin">
            <img src="~/assets/images/linktree-logo-icon.png" class="w-[23px] min-w-[23px] select-none"
                 alt="linktree-logo">
          </NuxtLink>
          <div v-for="link in links" class="lg:px-2.5 px-0.5 md:block hidden">
            <NuxtLink :to="link.url"
                      class="flex items-center text-sm font-semibold px-1.5 py-3 rounded-lg hover:bg-gray-100">
              <UIcon :name="link.icon" class="mr-0.5 text-[18px]"
                     :class="route.fullPath === link.url? 'text-[#000000]':'text-[#676B5F]'" dynamic/>
              <div :class="route.fullPath === link.url? 'text-[#000000]':'text-[#676B5F]'">
                {{ link.name }}
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center justify-between gap-3">
          <button class="flex items-center text-sm font-semibold p-2 rounded-full hover:bg-gray-100">
            <UIcon name="i-healthicons-megaphone-outline" class="mr-0.5 text-[22px]" dynamic/>
          </button>
          <button class="flex items-center font-semibold px-3 py-2 rounded-full bg-gray-100">
            <UIcon name="i-ph-lightning-fill" class="mr-0.5 text-[22px]" dynamic/>
            Upgrade
          </button>
          <button class="flex items-center font-semibold px-3 py-2 rounded-full border hover:bg-gray-100">
            <UIcon name="i-teenyicons-upload-solid" class="mr-0.5 text-[22px]" dynamic/>
            Share
          </button>
          <ClientOnly>
            <UDropdown :items="items" class="md:block hidden" :popper="{ offsetDistance: 15,placement: 'bottom' }">
              <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="md" alt="Avatar"/>
            </UDropdown>
          </ClientOnly>
        </div>
      </div>
    </div>
    <!-- End: Header top nav menu bar -->
    <!-- Start: Header second top nav menu bar for mobile view-->
    <div v-if="!userStore.isMobile" id="SecondaryTopNav"
         class="w-full md:hidden flex items-center justify-between md:pt-2.5 md:px-2.5">
      <div class="flex items-center justify-between gap-4 shadow-sm bg-white w-full">
        <div class="flex w-full">
          <div v-for="link in linksSecondaryNav" class="w-1/4">
            <NuxtLink :to="link.url"
                      class="relative flex justify-center border-t-black text-sm w-full h-full font-semibold px-1.5 my-[1px] py-[1px] hover:bg-gray-100"
                      :class="route.fullPath === link.url ? 'border-b-2 border-b-black':''">
              <button class="relative pt-[6px]">
                <UIcon v-if="link.icon" :name="link.icon" class="text-[20px]"
                       :class="route.fullPath === link.url? 'text-[#000000]':'text-[#676B5F]'" dynamic/>
                <img v-else class="rounded-full min-w-[22px] w-[22px]" :src="link.img" alt="Profile Picture">
                <div class="relative text-[13px] text-[#676B5F]" :class="link.img ? '-left-[5px]' : ''">
                    <span :class="route.fullPath === link.url ? 'text-[#000000]' : 'text-[#676B5F]'">
                        {{ link.name }}
                    </span>
                </div>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Header second top nav menu bar for mobile view -->
    <!-- Start: Display bottom preview button for mobile view-->
    <div v-if="!userStore.isMobile" id="PreviewButton" class="fixed bottom-10 w-full flex items-center justify-center">
      <button @click="$event => userStore.isPreviewOverlay = true"
              class="md:hidden flex items-center text-[17px] font-semibold px-5 py-2.5 bg-[#DFE2D9] rounded-full">
        <UIcon name="i-icon-park-outline-preview-open" class="text-[20px] mr-2"/>
        Preview
      </button>
    </div>
    <!-- End: Display bottom preview button for mobile view-->
    <!-- Start: Header top nav menu bar for touch mobile-->
    <div v-if="userStore.isMobile" id="TopNavMobile"
         class="fixed w-full flex items-center justify-between px-2.5 bg-[#F3F3F1]">
      <div class="flex items-center justify-between w-full py-[8px]">
        <div class="flex items-center justify-between w-full text-3xl font-bold max-w-[500px]">
          {{ currentMobilePage() }}
        </div>
        <div class="flex items-center justify-between gap-3">
          <button class="flex items-center text-[18px] font-semibold px-3 py-2 rounded-full bg-gray-200">
            Upgrade
            <UIcon name="i-ph-lightning-fill" class="ml-1 text-[20px]" dynamic/>
          </button>
          <button class="flex items-center font-semibold px-3 py-2 rounded-full hover:bg-gray-200">
            <UIcon name="i-ph-share-network" class="mr-0.5 text-[23px]" dynamic/>
          </button>
        </div>
      </div>
    </div>
    <!-- End: Header top nav menu bar for touch mobile-->
  </div>
  <div class="px-2.5 w-full z-0">
    <slot/>
  </div>
  <!-- Start: Footer nav menu bar for mobile view-->
  <div v-if="userStore.isMobile" id="BottomNav"
       class="fixed z-20 bottom-0 flex w-full bg-white shadow-[0_35px_60px_10px_rgba(0,0,0,0.4)]"
       :class="userStore.isMobile ? 'h-[70px]':'h-[60px]'">
    <div class="flex w-full">
      <div v-for="link in linksMobile" class="w-1/5">
        <NuxtLink :to="link.url"
                  class="relative flex justify-center border-t-black text-sm w-full h-full font-semibold px-1.5 my-[1px] py-[1px] hover:bg-gray-100"
                  :class="route.fullPath === link.url ? 'border-b-2 border-b-black':''">
          <button class="relative pt-[6px]">
            <UIcon v-if="link.icon" :name="link.icon" class="text-[20px]"
                   :class="route.fullPath === link.url? 'text-[#000000]':'text-[#676B5F]'" dynamic/>
            <img v-else class="rounded-full min-w-[22px] w-[22px]" :src="link.img" alt="Profile Picture">
            <div class="relative text-[13px] text-[#676B5F]" :class="link.img ? '-left-[5px]' : ''">
                    <span :class="route.fullPath === link.url ? 'text-[#000000]' : 'text-[#676B5F]'">
                        {{ link.name }}
                    </span>
            </div>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <!-- End: Footer nav menu bar for mobile view -->
</template>
