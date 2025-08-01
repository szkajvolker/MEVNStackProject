<template>
  <div
    class="bg-white rounded-xl shadow-md p-4 m-2 flex flex-col gap-2 border border-gray-200 hover:shadow-lg hover:shadow-blue-200 transition max-w-sm w-full"
  >
    <div class="flex justify-center">
      <h2 class="font-bold text-lg text-gray-800 mb-2 truncate">{{ product.name }}</h2>
    </div>
    <p class="text-sm text-gray-500">{{ product.brand }}</p>
    <div class="flex flex-row gap-2">
      <p class="text-base text-blue-900 font-semibold">Price: {{ product.price }}</p>
      <p>{{ product.currency }}</p>
    </div>
    <p class="text-xs text-gray-600 line-clamp-2">{{ product.description }}</p>
    <div class="flex justify-between">
      <div v-if="auth.user && auth.user.isAdmin">
        <button
          class="border-2 font-bold text-blue-500 rounded-lg p-1 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-gray-400"
          @click="$emit('delete', product)"
        >
          Delete
        </button>
      </div>
      <button
        class="border-2 font-bold text-blue-500 rounded-lg p-1 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-gray-400"
        @click="$emit('show-details', product)"
      >
        Details
      </button>
      <button
        class="border-2 font-bold text-green-500 rounded-lg p-1 cursor-pointer hover:bg-green-500 hover:text-white hover:border-gray-400"
        @click="addToCart"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { useCartStore } from "../stores/cart";

const auth = useAuthStore();
const cart = useCartStore();
const props = defineProps({
  product: Object,
});
const addToCart = () => {
  cart.addToCart(props.product);
};
</script>
