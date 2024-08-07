<template>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-gray-700">Name</label>
        <input type="text" v-model="form.name" required class="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <div>
        <label for="description" class="block text-gray-700">Description</label>
        <textarea v-model="form.description" required class="mt-1 p-2 w-full border border-gray-300 rounded"></textarea>
      </div>
      <div>
        <label for="price" class="block text-gray-700">Price</label>
        <input type="number" v-model="form.price" required class="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <div>
        <label for="image" class="block text-gray-700">Image</label>
        <input type="file" @change="onFileChange" class="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ProductForm',
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: null,
          image: null
        }
      };
    },
    methods: {
      onFileChange(event) {
        this.form.image = event.target.files[0];
      },
      async submitForm() {
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('description', this.form.description);
        formData.append('price', this.form.price);
        formData.append('file', this.form.image); // Ensure the field name is 'file'
  
        try {
          await this.$store.dispatch('addProduct', formData);
          console.log("Product submitted successfully", formData);
          this.$router.push('/products');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  