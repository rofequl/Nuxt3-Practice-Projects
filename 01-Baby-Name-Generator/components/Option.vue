<script setup lang="ts">
import {Gender, Length, Popularity} from "~/data";

interface OptionProps {
  option: {
    title: string,
    category: string,
    buttons: Gender[] | Popularity[] | Length[]
  };
  options: {
    gender: Gender,
    popularity: Popularity,
    length: Length
  }
}

const props = defineProps<OptionProps>()
</script>
<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <button v-for="value in option.buttons" :key="value" class="option" :class="options[option.category] === value && 'option-active'"
            @click="options[option.category] = value">{{value}}
    </button>
  </div>
</template>

<style scoped>
.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font-weight: 200;
}

.option:first-of-type {
  border-end-start-radius: 2rem;
  border-start-start-radius: 2rem;
}

.option:last-of-type {
  border-end-end-radius: 2rem;
  border-start-end-radius: 2rem;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>