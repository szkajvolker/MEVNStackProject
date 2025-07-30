<template>
  <div
    class="p-4 border-2 rounded rounded-lg border-grey-500 shadow bg-white w-fit bg-grey-300 m-2"
  >
    <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
    <p class="mb-1">{{ product.brand }}</p>
    <p class="mb-1">Price: {{ product.price }}</p>
    <p class="text-sm text-gray-600">{{ product.description }}</p>
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
})
</script>
