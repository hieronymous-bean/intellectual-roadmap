import { store } from '../../store/index';

export const instantiateJourneys = async (journeys) => {
  let currentJourney = store.getters['roadmap/getCurrentJourney'];
  if (!currentJourney) {
    store.commit('journey/storeCurrentJourney', journeys[0])
  }
  let storeJourneys = await store.commit('journey/storeUserJourneys', journeys);
  return storeJourneys;
}