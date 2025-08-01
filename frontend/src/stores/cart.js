import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item._id === product._id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter((item) => item._id !== productId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
