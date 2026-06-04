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
import Report from './pages/Report.vue'

// Bootstrap 5 color mode (light/dark/auto) switcher.
// Makes the ModeButton widget functional. Based on the official BS docs example,
// adapted to run as an IIFE in a module (no globals pollution).
(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')
    if (!themeSwitcher) return

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

    if (!btnToActive) return

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    const svgOfActive = btnToActive.querySelector('svg use').getAttribute('href')
    if (activeThemeIcon && svgOfActive) {
      activeThemeIcon.setAttribute('href', svgOfActive)
    }
    const themeSwitcherLabel = `${themeSwitcherText ? themeSwitcherText.textContent + ' ' : ''}${btnToActive.textContent.trim()}`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  // Use event delegation for theme value buttons. This works even if the
  // ModeButton (and its menu items) are inserted later by Vue mount.
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-bs-theme-value]')
    if (toggle) {
      const theme = toggle.getAttribute('data-bs-theme-value')
      setStoredTheme(theme)
      setTheme(theme)
      showActiveTheme(theme, true)
    }
  })

  // Show initial active state early (for the <html data-bs-theme> + pre-mount)
  showActiveTheme(getPreferredTheme())
})()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/learn/:article?',
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
    },
    {
        path: '/news/:number',
        name: 'news-item',
        component: Report
    }
  ]
})

let app = createApp(App)
app.use(router)
app.mount('#app')

// After mount, the ModeButton's [data-bs-theme-value] items exist in the DOM.
// Re-apply to set the correct .active + visible check mark in the dropdown.
setTimeout(() => showActiveTheme(getPreferredTheme()), 0)
