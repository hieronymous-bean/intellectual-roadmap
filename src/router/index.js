import { createRouter, createWebHistory } from 'vue-router';

// application layouts //
import ApplicationContainer from '../layouts/ApplicationContainer.vue';

const routes = [
  {
    path: '/',
    component: ApplicationContainer,
    name: "ApplicationContainer"
  }
]

// router definition //
const router = createRouter({ 
  history: createWebHistory(), 
  routes
});

export default router