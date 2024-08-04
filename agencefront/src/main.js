import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './axios'; // Ensure this line imports axios configuration

const app = createApp(App);
app.use(router);
app.mount('#app');
