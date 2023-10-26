import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/abount.vue"
import  CalComponent from "./pages/calculator.vue"

const routes = [
  { path: '/', component: MainComponent },
  { path: '/about', component: AbountComponent },
  { path: '/calculator', component: CalComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
