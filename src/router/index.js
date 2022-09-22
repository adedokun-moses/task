import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import overdue from '../views/overdue.vue'
import paid from '../views/paid.vue'
import unpaid from '../views/unpaid'
import overview from '../views/overview'
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
   /*  children: [
      { path: '', component: overdue }, // default tab that shows on /about route
      { path: 'paid', component: paid },
      { path: 'unpaid', component: unpaid },
      { path: 'overview', component: overview }
    ] */
  },
 /* {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  }*/

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
