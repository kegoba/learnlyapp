<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 class="text-2xl font-bold mb-4">Register</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email:</label>
            <input v-model="email" type="email" id="email" required class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Username:</label>
            <input v-model="username" type="text" id="username" required class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password:</label>
            <input v-model="password" type="password" id="password" required class="w-full p-2 border rounded" />
          </div>
          <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded">Register</button>
          <div class="mt-5"> Registered?  <span> <router-link to="/login">Login</router-link>  </span></div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'RegisterPage',
    data() {
      return {
        email: '',
        password: '',
        username : ""
      };
    },
    methods: {
      ...mapActions(['registerUser']),
      async register() {
        await this.registerUser({ email: this.email,username: this.username, password: this.password });
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  