import { createApp } from 'vue'
import App from './App.vue'
import GlobalHeader from './components/global/globalHeader.vue'
import BasicCard from './components/UI/BasicCard.vue'

createApp(App).component('GlobalHeader',GlobalHeader).component('BasicCard',BasicCard).mount('#app');