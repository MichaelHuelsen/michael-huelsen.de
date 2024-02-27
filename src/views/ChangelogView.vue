<script>
import Changelog from '../components/Changelog.vue'
</script>

<template>
  <div class=".changelog">
  <Changelog />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .changelog {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
