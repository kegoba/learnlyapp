<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <input
      type="text"
      v-model="searchQuery"
      @input="search"
      placeholder="Search products..."
      class="mb-4 p-2 border border-gray-300 rounded"
    />

    <div v-if="filteredProducts.length === 0" class="text-center text-gray-500">
      No products available
    </div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="product in filteredProducts" :key="product._id" class="border rounded-lg overflow-hidden shadow-lg">
          <img :src="getImageUrl(product.imageURL)" alt="Product Image" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>
            <p class="text-gray-900 font-bold mt-2">{{ formatCurrency(product.price) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center mt-4">
      <button 
        @click="changePage(currentPage - 1)" 
        :disabled="currentPage <= 1" 
        class="bg-blue-500 text-white p-2 rounded"
      >
        Previous
      </button>
      <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
      <button 
        @click="changePage(currentPage + 1)" 
        :disabled="currentPage >= totalPages" 
        class="bg-blue-500 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductPage',
  computed: {
    ...mapGetters(['products', 'searchQuery', 'currentPage', 'totalPages']),
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'setSearchQuery']),
    getImageUrl(imageURL) {
      const baseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8000';
    const fixedImageURL = imageURL.replace(/\\/g, '/');
    return `${baseUrl}${fixedImageURL}`;
      
    },
    formatCurrency(price) {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
      }).format(price);
    },
    search() {
      this.setSearchQuery(this.searchQuery);
    },
    async changePage(page) {
      await this.fetchProducts({ page });
    }
  },
  async created() {
    await this.fetchProducts({ page: this.currentPage });
  },
  mounted() {
   
   
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
