<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is a rewrite of my page using
      <a href="https://vuejs.org" target="_blank"> Vue.js</a> instead of
      <a href="https://angular.io" target="_blank">Angular</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
