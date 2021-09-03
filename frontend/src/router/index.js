import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Profil from '../views/Profil.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Forum from '../views/Forum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login"
    }
  },
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
    component: Profil,
    //meta: { auth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { auth: false }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    //meta: { auth: true },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
