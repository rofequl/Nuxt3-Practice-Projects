<script setup>
const emit = defineEmits(['close'])

let name = ref('')
let url = ref('')
let errors = ref(null)

const addLink = async () => {

}
</script>
<template>
  <div id="AddLink" class="w-full bg-white rounded-3xl overflow-hidden">
    <div class="flex items-center justify-between pb-2 p-6">
      <div class="text-[19px] font-semibold">Enter URL</div>
      <button @click="$event => $emit('close')" class="flex items-center rounded-full p-1.5 hover:bg-[#EFF0EA]">
        <Icon name="mdi:close" size="20" color="#676B5F"/>
      </button>
    </div>
    <form @submit.prevent="$event => submit()" class="flex items-center gap-4 w-full pt-2 p-6">
      <div class="w-full">
        <FormTextInput v-model:input="name" input-type="text" placeholder="Name" class="w-full"
                       :error="errors && errors.name ? errors.name[0]:''"/>
        <div class="py-1"/>
        <FormTextInput v-model:input="url" input-type="text" placeholder="URL" class="w-full"
                       :error="errors && errors.url ? errors.url[0]:''"/>
      </div>
      <button type="submit" :disabled="!name && !url" @click="$event => addLink()" class="rounded-full p-3 px-6"
              :class="name && url ? 'bg-[#8228D9] hover:bg-[#6C21B3] text-white':'bg-[#EFF0EA] text-[#A7AAA2]'">
        Add
      </button>
    </form>
  </div>
</template>