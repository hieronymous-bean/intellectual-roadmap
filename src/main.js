import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

// temporarily importing this dummy data for development purposes //
import workspaces from './assets/data/workspaces.json';
import journeys from './assets/data/journeys.json';
import roadmaps from './assets/data/roadmaps.json';

// load instantiation functions to load user data into local storage //
import { instantiateWorkspaces } from './utilities/workspaces/workspaces';
import { instantiateJourneys } from './utilities/journeys/journeys';
import { instantiateRoadmaps } from './utilities/roadmaps/roadmaps';


// import primary CSS files //
import './assets/css/tailwind.css';

instantiateWorkspaces(workspaces.data);
instantiateJourneys(journeys.data);
instantiateRoadmaps(roadmaps.data);

// initialize application //
const app = createApp(App);

// declare the store and router //
app.use(store);
app.use(router);

// main mount //
app.mount('#app');