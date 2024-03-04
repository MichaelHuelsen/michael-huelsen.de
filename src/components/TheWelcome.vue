<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon> </template>
    <template #heading>Welcome to my homepage</template>
    You can also find me on the following sites:
  </WelcomeItem>
  <WelcomeItem>
    <template #icon> </template>
    <template #heading> GitHub</template>
    https://www.github.com/michaelhuelsen
  </WelcomeItem>
  <WelcomeItem>
    <template #icon> </template>
    <template #heading> StackOverflow</template>
    https://stackoverflow.com/users/4537576/michaelhuelsen
  </WelcomeItem>
  <WelcomeItem>
    <template #icon> </template>
    <template #heading> LinkedIn</template>
    https://www.linkedin.com/in/meet-michael-huelsen
  </WelcomeItem>
  <WelcomeItem>
    <template #icon> </template>
    <template #heading> Have fun!</template>
  </WelcomeItem>
</template>
