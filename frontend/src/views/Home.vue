<template>
  <div>
    <h1>Welcome to the home page</h1>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductModal from '../components/ProductModal.vue'

const products = ref([])
const loading = ref(true)
const error = ref('')
const showModal = ref(false)

onMounted(async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('http://localhost:3333/api/products')
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Failed to fetch products')
    products.value = data.products
  } catch (error) {
    error.value = error.message
  } finally {
    loading.value = false
  }
})

async function deleteProduct(product) {
  console.log('Törlendő termék', product)
  console.log(product._id)

  try {
    const res = await fetch(`http://localhost:3333/api/products/${product._id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      console.error('Failed to delete', product)
      return
    }
    products.value = products.value.filter((p) => p._id !== product._id)
  } catch (error) {
    console.error(error)
  }
}

const selectedProduct = ref(null)

function openModal(product) {
  selectedProduct.value = product
  showModal.value = true
}
</script>
