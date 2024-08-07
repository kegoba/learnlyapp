<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold">Create Product</h1>
      <ProductForm />
    </div>
  </template>
  
  <script>
  import ProductForm from '../components/ProductForm.vue';
  
  export default {
    name: 'CreateProduct',
    components: {
      ProductForm
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  