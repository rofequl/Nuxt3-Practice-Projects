<script setup>
const userStore = useUserStore()
const {isMobile, updatedLinkId} = storeToRefs(userStore)
const props = defineProps({
  link: Object,
  selectedId: {type: Number, default: 0},
  selectedStr: {type: String, default: ''}
})
const {link, selectedId, selectedStr} = toRefs(props)
const emit = defineEmits(['updatedInput'])

let name = ref('')
let url = ref('')
let data = ref(null)
let isDelete = ref(false)
let openCropper = ref(false)
let isUploadImage = ref(false)

onMounted(() => {
  name.value = link.value.name
  url.value = link.value.url

  document.addEventListener('mouseup', function (e) {
    let editNameInput = document.getElementById(`editNameInput-${link.value.id}`)
    if (editNameInput && !editNameInput.contains(e.target) && selectedStr.value === 'isName' && selectedId.value === link.value.id) {
      editNameInput.blur()
      emit('updatedInput', {id: 0, str: ''})
    }
  })
  document.addEventListener('mouseup', function (e) {
    let editLinkInput = document.getElementById(`editLinkInput-${link.value.id}`)
    if (editLinkInput && !editLinkInput.contains(e.target) && selectedStr.value === 'isLink' && selectedId.value === link.value.id) {
      editLinkInput.blur()
      emit('updatedInput', {id: 0, str: ''})
    }
  })
})

const updateLink = useDebounce(async () => {
  //
}, 500)

const changeInput = (str, linkIdNameString) => {
  if (selectedId.value === link.value.id && selectedStr.value === str) {
    setTimeout(() => {
      document.getElementById(`${linkIdNameString}-${link.value.id}`).focus()
    }, 100)
  }
}

const editName = (selectedId, selectedStr) => {
  if (userStore.isMobile) {
    userStore.updatedLinkId = selectedId
    return false
  } else if (selectedId === link.value.id && selectedStr === 'isName') return true
  return false
}

const editLink = (selectedId, selectedStr) => {
  if (userStore.isMobile) {
    userStore.updatedLinkId = selectedId
    return false
  } else if (selectedId === link.value.id && selectedStr === 'isLink') return true
  return false
}

const editImage = () => {
  if (userStore.isMobile) userStore.updatedLinkId = link.value.id
  else {
    isUploadImage.value = true;
    isDelete.value = false;
  }
}

const updateLinkImage = async () => {
  //
}

const deleteLink = async () => {
  let res = confirm('Are you sure you want to delete this link?')
}

watch(() => name.value, () => {
  if (name.value && name.value !== link.value.name) updateLink()
})
watch(() => url.value, () => {
  if (url.value && url.value !== link.value.url) updateLink()
})
watch(() => selectedId.value, () => {
  if (selectedId.value) {
    changeInput('isName', 'editNameInput')
    changeInput('isLink', 'editLinkInput')
  }
})
watch(() => selectedStr.value, () => {
  if (selectedStr.value) {
    changeInput('isName', 'editNameInput')
    changeInput('isLink', 'editLinkInput')
  }
})
watch(() => updatedLinkId.value, (val) => {
  if (!val) emit('updatedInput', {id: 0, str: ''})
})
watch(() => data.value, async () => await updateLinkImage())

</script>

<template>
  <div :id="`LinkBox${link.id}`" class="w-full bg-white rounded-3xl">
    <div id="MainLinkBoxSection" class="px-8 py-5">
      <div class="flex items-center justify-between py-1">
        <div class="flex items-center w-full">
          <input v-if="editName(selectedId, selectedStr)" :id="`editNameInput-${link.id}`" type="text" v-model="name"
                 maxlength="18"
                 class="w-full text-sm font-semibold focus:outline-none">
          <div v-else class="flex items-center w-full">
            <div class="font-semibold mr-2 cursor-pointer" :class="isMobile ? 'text-xl':'text-sm'"
                 @click="name = link.name; $emit('updatedInput', {id: link.id, str: 'isName'})">
              {{ link.name}}
            </div>
            <Icon name="octicon:pencil-24" class="cursor-pointer" color="#676B5F" :size="isMobile ? '23':'17'"
                  @click="$event => $emit('updatedInput', {id: link.id, str: 'isName'})"/>
          </div>
        </div>
        <div class="flex items-center">
          <Icon name="mdi:bell-outline" class="cursor-pointer" color="#676B5F" :size="isMobile ? '25':'20'"
                :class="isMobile ? 'min-w-[23px]':'min-w-[17px]'"/>
        </div>
      </div>
      <div class="flex items-center justify-between py-1">
        <div class="flex items-center w-full">
          <input v-if="editLink(selectedId, selectedStr)" :id="`editLinkInput-${link.id}`" type="text" v-model="url"
                 class="w-full text-sm focus:outline-none">
          <div v-else class="flex items-center w-[calc(100%-2px)]">
            <div class="mr-2 truncate cursor-pointer" :class="isMobile ? 'text-xl':'text-sm'"
                 @click="url = link.url; $emit('updatedInput', {id: link.id, str: 'isLink'})">
              {{ link.url}}
            </div>
            <Icon name="octicon:pencil-24" class="cursor-pointer min-w-[17px]"
                  @click="$event => $emit('updatedInput', {id: link.id, str: 'isLink'})"
                  :class="isMobile ? 'min-w-[23px]':'min-w-[17px]'" color="#676B5F" :size="isMobile ? '23':'17'"/>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between py-1 mt-4">
        <div class="flex items-center w-full relative">
          <div class="flex items-center px-1.5 py-[2px] absolute -left-[6px] rounded-md"
               :class="isUploadImage ? 'bg-[#8228D9]' : 'hover:bg-gray-200'">
            <Icon name="icon-park-twotone:collect-picture" class="cursor-pointer" :size="isMobile ? '23':'17'"
                  :color="isUploadImage ? '#FFFFFF':'#676B5F'" @click="editImage()"/>
          </div>
        </div>
        <div v-if="!isMobile" class="flex items-center">
          <div class="flex items-center px-1.5  py-[2px] rounded-md relative">
            <button @click="isDelete = true; isUploadImage = false"
                    class="flex items-center px-1.5 py-[2px] absolute -right-[6px] rounded-md"
                    :class="isDelete ? 'bg-[#8228D9]' : 'hover:bg-gray-200'">
              <Icon name="carbon:trash-can" class="cursor-pointer" size="20" :color="isDelete ? '#FFFFFF':'#676B5F'"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="FooterLinkDeleteSection" class="overflow-hidden"
         :class="isDelete? 'max-h-[180px] transition-all duration-300 ease-in':'max-h-0 transition-all duration-200 ease-out'">
      <button @click="isDelete = false" class="relative w-full bg-[#DFE2D9] py-1.5">
        <Icon name="mdi:close" class="absolute right-1 top-[6px] cursor-pointer" size="20" color="#45494A"/>
        <div class="text-center text-sm font-bold text-[#45494A]">Delete</div>
      </button>
      <div class="flex items-center justify-center pt-3">
        Delete this forever?
      </div>
      <div class="w-full px-4 py-3">
        <div class="flex items-center gap-2 w-full">
          <button @click="deleteLink()"
                  class="flex items-center border justify-center w-full py-3 rounded-full text-black font-semibold hover:bg-gray-100">
            Remove
          </button>
        </div>
      </div>
    </div>
    <div id="FooterLinkBoxSection" class="overflow-hidden"
         :class="isUploadImage? 'max-h-[180px] transition-all duration-300 ease-in':'max-h-0 transition-all duration-200 ease-out'">
      <div class="relative w-full bg-[#DFE2D9] py-1.5">
        <Icon @click="isUploadImage = false" name="mdi:close" class="absolute right-1 top-[6px] cursor-pointer"
              size="20" color="#45494A"/>
        <div class="text-center text-sm font-bold text-[#45494A]">
          Add Thumbnail
        </div>
      </div>
      <div class="w-full flex items-center justify-between px-4 py-5">
        <img class="rounded-lg w-[80px] aspect-square" src="https://avatars.githubusercontent.com/u/739984?v=4">
        <div class="w-full pl-3">
          <button @click="openCropper = true"
                  class="flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-[#8228D9] hover:bg-[#6c21b3] mb-2">
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
</template>