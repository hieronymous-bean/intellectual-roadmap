import { store } from '../../store/index';

export const instantiateRoadmaps = async (roadmaps) => {
  let currentRoadmap = store.getters['roadmap/getCurrentRoadmap'];
  if (!currentRoadmap) {
    store.commit('roadmap/storeCurrentRoadmap', roadmaps[0])
  }
  let storeRoadmaps = await store.commit('roadmap/storeUserRoadmaps', roadmaps);
  return storeRoadmaps;
}