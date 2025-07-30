<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen w-full">
    <Header class="fixed top-0 left-0 w-full z-50" />
    <div class="pt-16">
      <router-view />
    </div>
  </div>
</template>
