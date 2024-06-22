<script setup>
import { ref, computed } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader />

  <RouterView />

  <AppFooter />
</template>

<style scoped>
/* Oculta a barra de rolagem */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

/* Para Firefox */
.overflow-x-auto {
  scrollbar-width: none;
}
</style>
