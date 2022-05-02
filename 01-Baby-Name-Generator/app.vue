<script setup lang="ts">

enum Gender {
  GIRL = 'Girl',
  BOY = 'Boy',
  UNISEX = 'Unisex'
}

enum Popularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique'
}

enum Length {
  SHORT = 'Short',
  LONG = 'Long',
  ALL = 'All'
}

interface OptionsState {
  gender: Gender,
  popularity: Popularity,
  length: Length
}

const options = reactive<OptionsState>({
  gender: Gender.UNISEX,
  popularity: Popularity.UNIQUE,
  length: Length.ALL
})

const names = ref<string[]>([])
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <button class="option" :class="options.gender === Gender.BOY && 'option-active'"
                @click="options.gender = Gender.BOY">Boy
        </button>
        <button class="option" :class="options.gender === Gender.UNISEX && 'option-active'"
                @click="options.gender = Gender.UNISEX">Unisex
        </button>
        <button class="option" :class="options.gender === Gender.GIRL && 'option-active'"
                @click="options.gender = Gender.GIRL">Girl
        </button>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <button class="option" :class="options.popularity === Popularity.TRENDY && 'option-active'"
                @click="options.popularity = Popularity.TRENDY">Trendy
        </button>
        <button class="option" :class="options.popularity === Popularity.UNIQUE && 'option-active'"
                @click="options.popularity = Popularity.UNIQUE">Unique
        </button>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <button class="option" :class="options.length === Length.LONG && 'option-active'"
                @click="options.length = Length.LONG">Long
        </button>
        <button class="option" :class="options.length === Length.ALL && 'option-active'"
                @click="options.length = Length.ALL">All
        </button>
        <button class="option" :class="options.length === Length.SHORT && 'option-active'"
                @click="options.length = Length.SHORT">Short
        </button>
      </div>
      <button class="primary">Find Names</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 4rem auto 0;
  position: relative;
}

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

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}
</style>