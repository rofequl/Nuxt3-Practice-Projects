<script setup>
const props = defineProps({
  id: String,
  type: String,
  autocomplete: String,
  placeholder: String,
  label: String,
  name: String,
  value: [Number, String],
  inputPosition: {
    default: ''
  }
})
</script>
<template>
  <div>
    <label :for="id" class="sr-only">{{ label }}</label>
    <input :id="id" :name="name" :type="type" :autocomplete="autocomplete" required
           @input="$emit('update', $event.target.value)" :value="value"
           class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:border-gray-500"
           :placeholder="placeholder"
           :class="inputPosition === 'top'? 'rounded-t-md': inputPosition === 'bottom'?'rounded-b-md':''">
  </div>
</template>