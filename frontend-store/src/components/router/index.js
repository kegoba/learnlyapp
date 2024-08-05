// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import Login from '../views/Login.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/add-product', name: 'AddProduct', component: AddProduct, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = localStorage.getItem('auth')

    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
