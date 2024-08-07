import { createStore } from 'vuex';
import axiosInstance from '../utils/Index';


export default createStore({
  state: {
    products: [],
    totalPages: 0,
    currentPage: 1,
    user: localStorage.getItem('user') || null,
    searchQuery: '',
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setUser(state, user) {
      state.user = user;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    async addProduct({ commit }, data) {
      console.log(data, "before");
      try {
        const response = await axiosInstance.post('/product/create', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        commit('setNewProduct', response.data);
        console.log(response.data, "after");
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProducts({ commit }, { page = 1, limit = 10 }) {
      try {
        const response = await axiosInstance.get(`/product/findall?page=${page}&limit=${limit}`);
        commit('setProducts', response.data.products);
        commit('setTotalPages', response.data.totalPages);
        commit('setCurrentPage', response.data.currentPage);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    
    async loginUser({ commit }, credentials) {
      try {
        const response = await axiosInstance.post('/user/login', credentials);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
 
    async registerUser({ commit }, credentials) {
      try {
        const response = await axiosInstance.post("/user/register", credentials);
        commit('setUser', response.data.user);
      } catch (error) {
        console.error('Error registering:', error);
      }
    },
    logoutUser({ commit }) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      commit('setUser', null);
    },
    setSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    }
  },
 getters: {
    products: (state) => state.products,
    totalPages: (state) => state.totalPages,
    currentPage: (state) => state.currentPage,
    filteredProducts: (state) => {
      const query = state.searchQuery.toLowerCase();
      return state.products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    },
    user: (state) => state.user,
    searchQuery: (state) => state.searchQuery
  }
});
