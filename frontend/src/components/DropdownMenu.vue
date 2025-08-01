<template>
  <select @change="$emit('change', $event)">
    <option value="">All</option>
    <option v-for="type in uniqueTypes" :key="type" :value="type" v-if="uniqueTypes.length">
      {{ type }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  products: Array,
});

const uniqueTypes = [...new Set(props.products.map((p) => p.type))];
</script>
