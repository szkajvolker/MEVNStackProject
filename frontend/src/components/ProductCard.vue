<template>
  <div class="p-4 border rounded shadow bg-white">
    <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
    <p class="mb-1">{{ product.brand }}</p>
    <p class="mb-1">Price: {{ product.price }}</p>
    <p class="text-sm text-gray-600">{{ product.description }}</p>
    <button class="font-bold text-red-500 rounded-lg px-4 py-2">Delete</button>
    <button
      class="font-bold text-red-500 rounded-lg px-4 py-2"
      @click="$emit('show-details', product)"
    >
      Details
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
})
</script>
