<template>
    <div>
        <h1>Product Listing</h1>
        <input v-model="search" placeholder="Search Products" class="border p-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="product in filteredProducts" :key="product.id" class="border p-4">
                <img :src="product.image" alt="product.name" class="w-full">
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <p>${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default home{
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState(['products']),
        filteredProducts() {
            return this.products.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    created() {
        this.fetchProducts()
    },
    methods: {
        ...mapActions(['fetchProducts'])
    }
}
</script>
