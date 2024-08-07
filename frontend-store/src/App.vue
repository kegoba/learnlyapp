<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-blue-500 p-4">
      <router-link to="/" class="text-white mr-4">Home</router-link>
      <router-link to="/products" class="text-white mr-4">Products</router-link>
      <router-link  v-if="!user" to="/login" class="text-white mr-4">Login</router-link>   
      <router-link v-if="user" to="/create-product" class="text-white mr-4"> Create-Product</router-link>
      <button v-if="user" @click="logout" class="text-white mr-4">Logout</button>
      
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Add your global styles here */
</style>
