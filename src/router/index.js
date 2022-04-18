import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'about-page',
    component:About
  },
  {
    path: '/services',
    name: 'services-page',
    component:Services
  },
  {
    path: '/contact',
    name: 'contact-page',
    component:Contact
  },
  {
    path: '/projects',
    name: 'projects-page',
    component:Projects
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
