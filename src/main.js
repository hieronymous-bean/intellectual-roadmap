import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

import Auth from './utilities/authentication/authentication';

// temporarily importing this dummy data for development purposes //
import workspaces from './assets/data/workspaces.json';
import journeys from './assets/data/journeys.json';
import roadmaps from './assets/data/roadmaps.json';

// load instantiation functions to load user data into local storage //
import { instantiateWorkspaces } from './utilities/workspaces/workspaces';
import { instantiateJourneys } from './utilities/journeys/journeys';
import { instantiateRoadmaps } from './utilities/roadmaps/roadmaps';
import { setupAuth } from './utilities/authentication/authentication';

const authConfig = {
  "domain": process.env.AUTH0_DOMAIN,
  "client_id": process.env.AUTH0_CLIENT_ID,
  "redirect_uri": window.location.origin
}

// import primary CSS files //
import './assets/css/tailwind.css';

instantiateWorkspaces(workspaces.data);
instantiateJourneys(journeys.data);
instantiateRoadmaps(roadmaps.data);
let app = createApp(App).use(store).use(router)

function callbackRedirect(appState) {
  router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : '/'
  );
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount('#app')
})