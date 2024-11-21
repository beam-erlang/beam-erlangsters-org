import './main.scss'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.scss';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import Learn from './pages/Learn.vue'
import Download from './pages/Download.vue'
import About from './pages/About.vue'
import News from './pages/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/learn',
        name: 'learn',
        component: Learn
    },
    {
        path: '/download',
        name: 'download',
        component: Download
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/news',
        name: 'news',
        component: News
    }
  ]
})

let app = createApp(App)
app.use(router)
app.mount('#app')
