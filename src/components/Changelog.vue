<script setup lang="ts">
import ChangelogItem from './ChangelogItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <ChangelogItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Under Construction</template>
  </ChangelogItem>
</template>
