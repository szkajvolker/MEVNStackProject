div
<template>
  <div class="flex flex-col border-2 border-gray-300 rounded-lg bg-green-200">
    <div class="flex flex-col justify-center">
      <div class="flex justify-center bg-green-500 rounded-lg">
        <h1 class="font-bold text-lg">Best Deal</h1>
      </div>
      <div class="flex flex-row">
        <ProductCard
          v-for="product in filteredBestDeal"
          :key="product._id"
          :product="product"
          @show-details="(p) => emit('show-details', p)"
          @delete="(p) => emit('delete', p)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps({
  products: Array,
});

const emit = defineEmits(["show-details", "delete"]);

const filteredBestDeal = computed(() =>
  [...props.products].sort((a, b) => a.price - b.price).slice(0, 3)
);
</script>
