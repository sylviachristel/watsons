<template>
  <div class="app-container">
    <AppHeader />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
</script>