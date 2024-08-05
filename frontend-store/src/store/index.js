// src/store/index.js
import { createStore } from 'vuex'

export default  createStore({
    state: {
        products: [],
        user: null
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        addProduct(state, product) {
            state.products.push(product)
        },
        setUser(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = null
            localStorage.removeItem('auth')
        }
    },
    actions: {
        fetchProducts({ commit }) {
            // Fetch products from API or local storage
            const products = JSON.parse(localStorage.getItem('products')) || []
            commit('setProducts', products)
        },
        addProduct({ commit }, product) {
            commit('addProduct', product)
            const products = JSON.parse(localStorage.getItem('products')) || []
            products.push(product)
            localStorage.setItem('products', JSON.stringify(products))
        },
        login({ commit }, user) {
            localStorage.setItem('auth', true)
            commit('setUser', user)
        }
    }
})
