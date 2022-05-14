<script setup lang="ts">
import restaurants from "@/data.json"

const restaurantsOrganized = {
  first: [...restaurants].splice(0, 25),
  second: [...restaurants].splice(25, 25)
}
</script>

<template>
  <div class="table my-5">
    <h1 class="mb-4">TOP 50: THE RANKING</h1>
    <div class="d-flex justify-content-between">
      <div class="table-col">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow v-for="(restaurants, index) in restaurantsOrganized.first" :key="restaurants.id"
                       :name="restaurants.name" :rank="restaurants.rank" :index="index"/>
      </div>
      <div class="table-col">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow v-for="(restaurants, index) in restaurantsOrganized.second" :key="restaurants.id"
                       :name="restaurants.name" :rank="restaurants.rank" :index="index"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-col {
  width: 48%;
}
</style>