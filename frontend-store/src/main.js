 
import App from './App.vue';
import router from './router/Router';
import store from './store/Store';
import "./Index.css";

import { createApp } from 'vue';
 



  const app = createApp(App);

  app.use(router);
  app.use(store);
  app.mount('#app')