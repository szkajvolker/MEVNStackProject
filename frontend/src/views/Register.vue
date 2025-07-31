<template>
  <div class="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg shadow-blue-200">
    <div class="flex justify-center">
      <h2 class="text-2xl font-bold mb-4 text-blue-400">Registration</h2>
    </div>
    <form @submit.prevent="register">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border-2 border-gray-300 rounded-lg mb-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border-2 border-gray-300 rounded-lg mb-4 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border-2 border-gray-300 rounded-lg mb-4 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <div class="flex items-center justify-center gap-5">
        <button
          type="submit"
          class="border-2 font-bold text-blue-500 rounded-lg p-1 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-gray-400"
        >
          Register
        </button>
        <router-link
          to="/login"
          class="border-2 font-bold text-blue-500 rounded-lg p-1 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-gray-400"
        >
          Login
        </router-link>
      </div>
      <div v-if="error" class="text-red-400 bg-red-800">{{ error }}</div>
      <div v-if="success" class="text-green-400 bg-green-800">Registration successfully!</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();
const username = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const router = useRouter();

if (auth.isLoggedIn) {
  router.push("/");
}
async function register() {
  error.value = "";
  success.value = false;
  try {
    const res = await fetch("http://localhost:3333/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");
    success.value = true;
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  } catch (error) {
    error.value = error.message;
  }
}
</script>
