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

let selectedInput = ref({id: 0, str: ''})
let showAddLink = ref(false)

const updateInput = (e) => {
  selectedInput.value.id = e.id
  selectedInput.value.str = e.str
}
const showAddLinkFunc = () => {
  if (userStore.isMobile) userStore.addLinkOverlay = true
  else showAddLink.value = true
}
</script>
<template>
  <NuxtLayout name="admin-layout">
    <div id="AdminPage" class="flex h-[100vh] pb-4">
      <div class="lg:w-[calc(100%-500px)] md:w-[calc(100%-330px)] w-full md:pt-20 pt-14">
        <div class="max-w-[750px] mx-auto pb-24">
          <button v-if="userStore.isMobile || !showAddLink" @click="$event => showAddLinkFunc()"
                  class="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-[#8228D9] hover:bg-[#6C21B3]"
                  :class="userStore.isMobile ? 'mt-8 text-xl':'mt-20 md:mt-8'">
            <Icon v-if="!userStore.isMobile" name="mdi:plus" class="mr-0.5" size="25"/>
            <span v-if="!userStore.isMobile">Add link</span>
            <span v-else>Add new link</span>
          </button>
          <AddLink v-if="!userStore.isMobile" @close="$event=> showAddLink = false"
                   :class="showAddLink ? 'mt-20 md:mt-8 mb-12 max-h-[1000px] transition-all duration-300 ease-in'
                   :'max-h-0 transition-all duration-300 ease-out'"/>
          <div v-for="link in fakeLink" class="mt-4">
            <LinkBox v-if="link" :link="link" :selected-id="selectedInput.id" :selected-str="selectedInput.str"
                     @updatedInput="updateInput" class="mt-6"/>
          </div>
        </div>
      </div>
      <MobileSectionDisplay/>
    </div>
  </NuxtLayout>
</template>



