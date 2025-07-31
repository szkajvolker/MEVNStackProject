<template>
  <div class="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg shadow-blue-200">
    <div class="flex justify-center">
      <h2 class="text-2xl font-bold mb-4 text-blue-400">Login</h2>
    </div>
    <form @submit.prevent="handleLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="mb-2 border-2 border-gray-300 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-4 border-2 border-gray-300 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
      <div class="flex justify-center">
        <button
          type="submit"
          class="border-2 font-bold text-blue-500 rounded-lg p-1 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-gray-400"
        >
          Login
        </button>
      </div>
      <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const auth = useAuthStore();
const router = useRouter();

async function handleLogin() {
  error.value = "";
  try {
    const res = await fetch("http://localhost:3333/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Error at login");
    auth.login(data.user);
    localStorage.setItem("token", data.token);
    router.push("/");
  } catch (error) {
    error.value = error.message;
  }
}
</script>
