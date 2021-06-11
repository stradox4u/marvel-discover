import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import LoadingSpinner from './components/UI/MyLoadingSpinner.vue'
import BaseButton from './components/UI/MyBaseButton.vue'

import router from './router.js'
import store from './store/index.js'



const app = createApp(App)

app.use(router)
app.use(store)

app.component('loading-spinner', LoadingSpinner)
app.component('base-button', BaseButton)


app.mount('#app')
