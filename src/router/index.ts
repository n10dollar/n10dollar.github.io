import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const routes = [
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/home', component: Home },
    { path: '/project', component: Projects }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
