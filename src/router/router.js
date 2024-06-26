import { createMemoryHistory, createRouter } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Registrar from '../views/Registrar.vue';
import Carrinho from '../views/Carrinho.vue';
import Index from '../views/Index.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/dashboard', component: Dashboard },
  { path: '/carrinho', component: Carrinho },
  { path: '/login', component: Login },
  { path: '/registrar', component: Registrar }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
