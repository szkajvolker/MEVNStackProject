<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
      >
        &times;
      </button>
      <h2 class="text-2xl font-bold mb-4">{{ product.name }}</h2>
      <img src="" alt="" />
      <p>
        <strong>Brand: {{ product.brand }}</strong>
      </p>
      <p>
        <strong>Type: {{ product.type }}</strong>
      </p>
      <p>
        <strong>Price: {{ product.price }}</strong>
      </p>
      <p>
        <strong>Description: {{ product.description }}</strong>
      </p>
      <p>
        <strong>Stock: {{ product.stock }}</strong>
      </p>
      <p>
        <strong>Warranty: {{ product.warranty }}</strong>
      </p>
      <p>
        <strong>ModelNumber{{ product.modelNumber }}</strong>
      </p>
      <p>
        <strong
          >Release Day:{{
            product.releasedate ? new Date(product.releaseDate).toLocaleDateString() : '-'
          }}</strong
        >
      </p>
      <p>
        <strong>InStock: {{ product.inStock ? '✅' : '❌' }}</strong>
      </p>
      <div v-if="product.specs && Object.keys(product.specs).length" class="mt-2">
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
})
</script>
