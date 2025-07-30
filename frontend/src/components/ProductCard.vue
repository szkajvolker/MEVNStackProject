<template>
  <div
    class="bg-white rounded-xl shadow-md p-4 m-2 flex flex-col gap-2 border border-gray-200 hover:shadow-lg transition"
  >
    <h2 class="font-bold text-lg text-gray-800 mb-2 truncate">{{ product.name }}</h2>
    <p class="text-sm text-gray-500">{{ product.brand }}</p>
    <div class="flex flex-row gap-2">
      <p class="text-base text-blue-900 font-semibold">Price: {{ product.price }}</p>
      <p>{{ product.currency }}</p>
    </div>
    <p class="text-xs text-gray-600 line-clamp-2">{{ product.description }}</p>
    <div>
      <button
        class="font-bold text-red-500 rounded-lg px-4 py-2 cursor-pointer"
        @click="$emit('delete', product)"
      >
        Delete
      </button>
      <button
        class="font-bold text-red-500 rounded-lg px-4 py-2 cursor-pointer"
        @click="$emit('show-details', product)"
      >
        Details
      </button>
      <button class="cursor-pointer hover:bg-orange-500" @click="$emit('add-to-cart', product)">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
