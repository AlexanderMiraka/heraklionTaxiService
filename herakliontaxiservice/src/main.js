import { createApp } from 'vue'
import App from './App.vue'
import GlobalHeader from './components/global/globalHeader.vue'
import BasicCard from './components/UI/BasicCard.vue'
import router from './router.js';

const app = createApp(App);
app.use(router);
app.component('GlobalHeader',GlobalHeader).component('BasicCard',BasicCard);
app.mount('#app');