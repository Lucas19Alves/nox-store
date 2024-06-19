import { createMemoryHistory, createRouter } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Carrinho from '../views/Carrinho.vue';
import Index from '../views/Index.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/dashboard', component: Dashboard },
  { path: '/carrinho', component: Carrinho },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
