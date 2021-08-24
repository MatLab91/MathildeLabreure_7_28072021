import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Profil from '../views/Profil.vue'
import Login from '../views/Login.vue'
import Forum from '../views/Forum.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
