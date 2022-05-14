<script setup lang="ts">
interface RowProps {
  rank?: number;
  name?: string;
  index?: number;
  isHeader?: boolean;
}

const props = defineProps<RowProps>()
</script>
<template>
  <div class="row" v-if="isHeader">
    <h4 class="header">Rank</h4>
    <h4 class="header">Chain</h4>
  </div>
  <div v-else class="row d-flex align-items-center" :style="index % 2 === 0 ? {background: 'rgba(128,128,128,0.15)'}: null">
    <h4 class="header text-black">{{ rank }}</h4>
    <a :href="`/restaurants/${name}`" class="header link">{{ name }}</a>
  </div>
</template>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
}

.header {
  font-size: 1.25rem;
  color: rgb(10, 31, 148);
  margin: 0 2rem 0 0;
  padding: 0.5rem 1rem;
  font-weight: 700;
  width: 4rem;
}

.link {
  text-decoration: none;
  color: rgb(228, 157, 27);
  width: auto;
  font-weight: 500;
}
</style>