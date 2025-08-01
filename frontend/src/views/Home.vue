<template>
  <div class="flex justify-end mr-5 mt-5">
    <ShowCartBtn v-if="!showCart" :showCart="showCart" @toggle-cart="showCart = !showCart" />
  </div>
  <div class="mt-20 relative">
    <transition name="slide-right">
      <div
        v-if="showCart"
        class="fixed top-0 mt-18 right-0 h-full w-80 z-50 flex justify-end"
        style="background: rgba(0, 0, 0, 0.2)"
      >
        <Cart :showCart="showCart" @toggle-cart="showCart = !showCart" class="h-full" />
      </div>
    </transition>
    <div v-if="!auth.isLoggedIn">
      <Register />
    </div>
    <div v-else>
      <div v-if="loading" class="text-center my-8">Loading...</div>
      <div v-else-if="error" class="text-red-500 my-8">{{ error }}</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in products"
          :key="product._id"
          :product="product"
          @show-details="openModal"
          @delete="deleteProduct"
        ></ProductCard>
        <ProductModal
          v-if="showModal"
          :product="selectedProduct"
          @close="showModal = false"
        ></ProductModal>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";
import { useAuthStore } from "../stores/auth";
import Register from "./Register.vue";
import Cart from "../components/Cart.vue";
import ShowCartBtn from "../components/ShowCartBtn.vue";

const products = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);
const auth = useAuthStore();
const showCart = ref(false);

onMounted(async () => {
  loading.value = true;
  error.value = "";
  try {
    const res = await fetch("http://localhost:3333/api/products");
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch products");
    products.value = data.products;
  } catch (error) {
    error.value = error.message;
  } finally {
    loading.value = false;
  }
});

async function deleteProduct(product) {
  console.log("Törlendő termék", product);
  console.log(product._id);

  try {
    const res = await fetch(`http://localhost:3333/api/products/${product._id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Failed to delete", product);
      return;
    }
    products.value = products.value.filter((p) => p._id !== product._id);
  } catch (error) {
    console.error(error);
  }
}

const selectedProduct = ref(null);

function openModal(product) {
  selectedProduct.value = product;
  showModal.value = true;
}
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
