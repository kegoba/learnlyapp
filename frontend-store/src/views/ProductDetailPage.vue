<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold">Product Detail</h1>
      <!-- Add product detail content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    props: ['id'],
    computed: {
      product() {
        return this.$store.state.products.find(product => product.id === this.id);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  