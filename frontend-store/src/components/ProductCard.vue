<template>
    <div class="p-4 border border-gray-200 rounded shadow-md">
      <img :src="product.imageURL" alt="Product Image" class="w-full h-48 object-cover rounded mb-4" />
      <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
      <p class="text-gray-700 mb-2">{{ product.description }}</p>
      <p class="text-gray-900 font-bold">{{ formatCurrency(product.price) }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatCurrency(value) {
        return `$${(value / 100).toFixed(2)}`; // Assuming price is in cents
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  