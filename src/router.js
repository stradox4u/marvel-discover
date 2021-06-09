import { createRouter, createWebHistory } from 'vue-router'

const MyLandingPage = () => import('./components/MyLandingPage.vue')
const CharacterDetail = () => import('./components/MyCharacterDetail.vue')



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage, name: 'home' },
        { path: '/character/:charId', component: CharacterDetail, name: 'character-detail' },
    ]
})

export default router