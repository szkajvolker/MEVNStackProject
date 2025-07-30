<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
      >
        &times;
      </button>
      <h2 class="text-2xl font-bold mb-4">{{ product.name }}</h2>
      <img src="" alt="" />
      <p class="text-gray-500">
        <strong>Brand: {{ product.brand }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>Type: {{ product.type }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>Price: {{ product.price }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>Description: {{ product.description }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>Stock: {{ product.stock }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>Warranty: {{ product.warranty }}</strong>
      </p>
      <p class="text-gray-500">
        <strong>ModelNumber{{ product.modelNumber }}</strong>
      </p>
      <p class="text-gray-500">
        <strong
          >Release Day:{{
            product.releasedate ? new Date(product.releaseDate).toLocaleDateString() : "-"
          }}</strong
        >
      </p>
      <p class="text-gray-500">
        <strong>InStock: {{ product.inStock ? "✅" : "❌" }}</strong>
      </p>
      <div v-if="product.specs && Object.keys(product.specs).length" class="text-gray-500" mt-2>
        <strong>Specs:</strong>
        <strong></strong>
        <ul class="list-disc ml-6">
          <li v-for="(value, key) in product.specs" :key="key">{{ key }} : {{ value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
