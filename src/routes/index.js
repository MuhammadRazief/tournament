import { createRouter, createWebHistory } from 'vue-router'

// layouts
import MainLayout from '@/layouts/MainLayout.vue'

// views
import Home from '@/pages/Home.vue'
import Tim from '@/pages/Tim.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { 
        path: '',
        component: Home,
        meta: { title: 'Home - Bogor Champions Cup' }
       },
       { 
        path: '/teams',
        component: Tim,
        meta: { title: 'Teams - Bogor Champions Cup' }
       },
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
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  document.title = nearestWithTitle?.meta.title || 'Bogor Champions Cup'
})

export default router