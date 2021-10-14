import { createRouter, createWebHistory } from 'vue-router';

// application containers //
import ApplicationContainer from '../containers/ApplicationContainer.vue';

// application views //
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: ApplicationContainer,
    name: 'ApplicationContainer',
    redirect: '/app/dashboard',
    children: [
      {
        path: '/app/dashboard',
        component: Dashboard,
        name: "Dashboard"
      }
    ]
  }
]

// router definition //
const router = createRouter({ 
  history: createWebHistory(), 
  routes
});

export default router