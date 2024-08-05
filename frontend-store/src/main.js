import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/index'
import createStore from "./store/index"
//createApp(App).mount('#app')
createApp(App).use(createStore).use(router).mount('#app')
