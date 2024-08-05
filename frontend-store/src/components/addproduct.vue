<template>
    <div>
        <h1>Add Product</h1>
        <form @submit.prevent="submitForm" class="space-y-4">
            <input v-model="name" placeholder="Product Name" class="border p-2 w-full">
            <textarea v-model="description" placeholder="Product Description" class="border p-2 w-full"></textarea>
            <input v-model="price" type="number" placeholder="Product Price" class="border p-2 w-full">
            <input v-model="image" placeholder="Product Image URL" class="border p-2 w-full">
            <button type="submit" class="bg-blue-500 text-white p-2">Add Product</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            name: '',
            description: '',
            price: '',
            image: ''
        }
    },
    methods: {
        ...mapActions(['addProduct']),
        submitForm() {
            const product = {
                id: Date.now(),
                name: this.name,
                description: this.description,
                price: this.price,
                image: this.image
            }
            this.addProduct(product)
            this.$router.push('/')
        }
    }
}
</script>
