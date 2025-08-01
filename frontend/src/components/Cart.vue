<template>
  <aside class="w-64 p-4 bg-gray-400 rounded">
    <ShowCartBtn :show-cart="showCart" @toggle-cart="$emit('toggle-cart')" class="flex ml-30" />
    <h3 class="font-bold mb-2">Cart</h3>
    <ul v-if="cart.items.length">
      <li v-for="item in cart.items" key="item._id" class="mb-2">
        {{ item.name }} ({{ item.quantity }} Qt)
        <button class="ml-2 text-red-500 hover:underline" @click="cart.removeFromCart(item._id)">
          delete
        </button>
      </li>
    </ul>
    <div v-else class="text-gray-500">Cart is empty.</div>
    <div class="mt-4 font-bold">All: {{ total }} Ft</div>
  </aside>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";
import ShowCartBtn from "./ShowCartBtn.vue";

const cart = useCartStore();
const total = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
const props = defineProps({
  showCart: Boolean,
});
defineEmits(["toggle-cart"]);
</script>
