
import { createRouter, createWebHistory } from 'vue-router'
// // import HomeView from '../views/HomeView.vue'
import JokePage from '@/components/JokePage.vue'
import HomePage from '@/components/HomePage.vue'
import QuotePage from '@/components/QuotePage.vue'
import FactPage from '@/components/FactPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/joke',
            name: 'joke',
            component: JokePage
        },
        {
            path: '/quote',
            name: 'quote',
            component: QuotePage
        },
        {
            path: '/fact',
            name: 'fact',
            component: FactPage
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
