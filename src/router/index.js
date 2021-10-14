import { createRouter, createWebHistory } from 'vue-router';

// application containers //
import ApplicationContainer from '../containers/ApplicationContainer.vue';

// application views //
import Dashboard from '../views/Dashboard.vue';
import JourneyDetails from '../views/JourneyDetails.vue';
import RoadmapDetails from '../views/RoadmapDetails.vue';
import ViewJourneys from '../views/ViewJourneys.vue';
import ViewRoadmaps from '../views/ViewRoadmaps.vue';


const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: ApplicationContainer,
    name: 'ApplicationContainer',
    redirect: '/app/dashboard',
    children: [
      {
        path: '/app/dashboard',
        component: Dashboard,
        name: "Dashboard"
      },
      {
        path: '/app/journeys',
        component: ViewJourneys,
        name: 'ViewJourneys'
      },
      {
        path: '/app/roadmaps',
        component: ViewRoadmaps,
        name: 'ViewRoadmaps'
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