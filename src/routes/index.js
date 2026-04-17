import { createRouter, createWebHistory } from 'vue-router'

// layouts
import MainLayout from '@/layouts/MainLayout.vue'

// views
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
    //   { path: 'tournaments', component: Tournaments }
    ]
  },
//   {
//     path: '/auth',
//     component: AuthLayout,
//     children: [
//       { path: 'login', component: Login }
//     ]
//   },
//   {
//     path: '/admin',
//     component: AdminLayout,
//     children: [
//       { path: '', component: Dashboard }
//     ]
//   }
]

export default createRouter({
  history: createWebHistory(),
  routes
})