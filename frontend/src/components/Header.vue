<template>
  <header class="flex items-center justify-between p-4 bg-gray-800 text-white">
    <div class="flex items-center gap-2">
      <img src="" alt="logo" class="h-8" />
      <span class="font-bold text-lg">WebShop</span>
    </div>
    <nav class="flex gap-2">
      <router-link to="/" class="btn">Home</router-link>
      <router-link v-if="auth.isAdmin" to="/create" class="btn">Create</router-link>
      <button v-if="auth.isLoggedIn" @click="auth.login()" class="btn">Login</button>
      <button v-else @click="auth.logout()" class="btn">Logout</button>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition;
}
</style>
