import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const routes = [
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/home', name: 'Home', component: Home },
    { path: '/project', name: 'Projects', component: Projects }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
