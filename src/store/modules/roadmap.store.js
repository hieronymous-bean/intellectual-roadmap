// initial state object //
const initialState = () => ({
  currentRoadmap: null,
  userRoadmaps: null
});

// state //
const state = initialState();

// getters //
const getters = {
  getCurrentRoadmap(state) {
    return state.currentRoadmap
  },
  getUserRoadmaps(state) {
    return state.userRoadmaps
  }
}

// actions //
const actions = { }

// mutations //
const mutations = { 
  storeCurrentRoadmap: (state, roadmap) => {
    state.currentRoadmap = roadmap;
  },
  storeUserRoadmaps: (state, roadmaps) => {
    state.userRoadmaps = roadmaps
  },
  RoadmapLogout: (state) => {
    const newState = initial();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}