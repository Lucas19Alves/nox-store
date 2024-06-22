import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import axios from 'axios';
import { FontAwesomeIcon } from './font-awesome';
import './style.css';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
