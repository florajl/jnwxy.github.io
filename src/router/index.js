import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home/index.vue'
import Detail from '@/pages/Detail/index.vue'
import Dynamic1 from '@/pages/Dynamic1/index.vue'
import Dynamic2 from '@/pages/Dynamic2/index.vue'
import Dynamic3 from '@/pages/Dynamic3/index.vue'
import Dynamic4 from '@/pages/Dynamic4/index.vue'
import Dynamic5 from '@/pages/Dynamic5/index.vue'
import Dynamic6 from '@/pages/Dynamic6/index.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
  { path: '/dynamic1', component: Dynamic1 },
  { path: '/dynamic2', component: Dynamic2 },
  { path: '/dynamic3', component: Dynamic3 },
  { path: '/dynamic4', component: Dynamic4 },
  { path: '/dynamic5', component: Dynamic5 },
  { path: '/dynamic6', component: Dynamic6 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
