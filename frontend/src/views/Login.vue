<template>
  <div class="max-w-sm mx-auto mt-20 p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="mb-2 w-full" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-4 w-full"
        required
      />
      <button type="submit" class="w-full">Login</button>
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
