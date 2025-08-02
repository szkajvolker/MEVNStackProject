<template>
  <div class="relative inline-block w-48">
    <select
      @change="$emit('change', $event)"
      class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-500 rounded-lg shadow focus:outline-none focus:ring-blue-400 focus:boder-blue-400 transition hover:bg-blue-400 hover:text-white"
    >
      <option value="">All</option>
      <option v-for="type in uniqueTypes" :key="type" :value="type" v-if="uniqueTypes.length">
        {{ type }}
      </option>
    </select>
    <span
      class="absolute right-0.5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
    >
      ▼</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  products: Array,
});

const uniqueTypes = [...new Set(props.products.map((p) => p.type))];
</script>
