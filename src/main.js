import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import LoadingSpinner from './components/UI/MyLoadingSpinner.vue'

import router from './router.js'



const app = createApp(App)

app.use(router)

app.component('loading-spinner', LoadingSpinner)


app.mount('#app')
