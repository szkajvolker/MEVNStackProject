<template>
  <header class="flex items-center justify-between p-2 bg-gray-800 text-white top-0 w-full">
    <div class="flex items-center gap-2">
      <img :src="logoImg" alt="logo" class="w-14 h-14" />
      <span class="font-bold text-lg">WebShop</span>
    </div>

    <nav class="flex justify-between w-full">
      <router-link
        to="/"
        class="btn ml-20 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >Home</router-link
      >
      <router-link v-if="auth.isAdmin" to="/create" class="btn">Create</router-link>
      <router-link
        v-if="!auth.isLoggedIn"
        to="/login"
        class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
      >
        Login
      </router-link>
      <button
        v-else
        @click="auth.logout()"
        class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import logoImg from "../assets/logo.png";

const auth = useAuthStore();
</script>
