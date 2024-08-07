<template>
    <div>
      <div v-if="products.length === 0" class="text-center text-gray-500">
        No products available
      </div>
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="product in products" :key="product._id" class="border rounded-lg overflow-hidden shadow-lg">
            <img :src="product.imageURL" alt="Product Image" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h2 class="text-xl font-semibold">{{ product.name }}</h2>
              <p class="text-gray-600">{{ product.description }}</p>
              <p class="text-gray-900 font-bold mt-2">{{ formatCurrency(product.price) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    mounted() {
      console.log('ProductList Products on mount:', this.products);
      this.$watch('products', function (newVal) {
        console.log('ProductList Products updated:', newVal);
      });
    },
    methods: {
      formatCurrency(value) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if necessary */
  </style>
  