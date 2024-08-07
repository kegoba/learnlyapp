import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import CreateProductPage from '../views/CreateProductPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: ProductDetailPage },
  { path: '/create-product', component: CreateProductPage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = localStorage.getItem('user');
  
  if (requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
