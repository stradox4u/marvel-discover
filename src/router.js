import { createRouter, createWebHistory } from 'vue-router'

const MyLandingPage = () => import('./components/MyLandingPage.vue')
const CharacterDetail = () => import('./components/MyCharacterDetail.vue')
const ComicDetail = () => import('./components/MyComicDetail.vue')
const SearchResults = () => import('./components/MySearchResults.vue')
const NotFoundComponent = () => import('./components/MyNotFoundComponent.vue')



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage, name: 'home' },
        { path: '/character/:charId', component: CharacterDetail, name: 'character-detail' },
        { path: '/comic/:comId', component: ComicDetail, name: 'comic-detail' },
        { path: '/search', component: SearchResults, name: 'search-results' },
        { path: '/:catchAll(.*)', component: NotFoundComponent, name: 'not-found' },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    }
})

export default router