<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Create Product</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
      <input v-model="form.name" type="text" placeholder="Name" class="border rounded px-3 py-2" />
      <input v-model="form.brand" type="text" placeholder="Brand" class="border rounded px-3 py-" />
      <input v-model="form.type" type="text" placeholder="Type" class="border rounded px-3 py-" />
      <input
        v-model="form.price"
        type="number"
        placeholder="Price"
        class="border rounded px-3 py-"
      />
      <textarea v-model="form.description" placeholder="Description"></textarea>
      <input v-model="form.image" type="text" placeholder="" class="border rounded px-3 py-" />
      <input
        v-model.number="form.stock"
        type="number"
        placeholder="Stock"
        class="border rounded px-3 py-"
      />
      <input
        v-model="form.warranty"
        type="text"
        placeholder="Warranty"
        class="border rounded px-3 py-"
      />
      <input
        v-model="form.modelNumber"
        type="text"
        placeholder="ModelNumber"
        class="border rounded px-3 py-"
      />
      <input
        v-model="form.releaseDate"
        type="date"
        placeholder="ReleaseDate"
        class="border rounded px-3 py-"
      />
      <label class="flex items-center gap-2">
        <input v-model="form.inStock" type="checkbox" /> In Stock
      </label>
      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Create
      </button>
    </form>
    <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
    <div v-if="success" class="text-green-600 mt-2">Product created successfully!</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  brand: '',
  type: '',
  price: null,
  description: '',
  image: '',
  stock: '',
  warranty: '',
  modelNumber: '',
  releasedate: '',
  inStock: false,
})

const error = ref('')
const success = ref(false)

async function handleSubmit() {
  error.value = ''
  success.value = false
  try {
    const res = await fetch('http://localhost:3333/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Failed to create product!')
    success.value = true
    Object.keys(form.value).forEach(
      (key) => (form.value[key] = typeof form.value[key] === 'boolean' ? false : '')
    )
    form.value.stock = 0
    form.value.price = null
  } catch (error) {
    error.value = error.message
  }
}
</script>
