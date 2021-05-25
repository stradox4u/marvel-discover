import { createRouter, createWebHistory } from 'vue-router'

const MyLandingPage = () => import('./components/MyLandingPage.vue')



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage, name: 'home' },
    ]
})

export default router