<template>
  <button class="mb-4 px-4 py-2 bg-blue-500 text-white rounded" @click="$emit('toggle-cart')">
    {{ showCart ? "Hide cart" : "Show cart" }}
  </button>
</template>

<script setup>
defineProps({
  showCart: Boolean,
});
defineEmits(["toggle-cart"]);
</script>
