import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'
import store from './store'

createApp(Main).use(store).use(router).mount('#main')
