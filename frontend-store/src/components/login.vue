<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login" class="space-y-4">
            <input v-model="username" placeholder="Username" class="border p-2 w-full">
            <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full">
            <button type="submit" class="bg-blue-500 text-white p-2">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        login() {
            const user = {
                username: this.username,
                password: this.password
            }
            this.login(user)
            this.$router.push('/')
        }
    }
}
</script>
