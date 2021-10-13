// initial state object //
const initialState = () => ({
  currentRoadmap: null,
  currentJourney: null,
  currentWorkspace: null
});

// state //
const state = initialState();

// getters //
const getters = {
  getCurrentRoadmap(state) {
    return state.currentRoadmap
  },
  getCurrentJourney(state) {
    return state.currentJourney
  },
  getCurrentWorkspace(state) {
    return state.currentWorkspace
  }
}

// actions //
const actions = { }

// mutations //
const mutations = { 
  storeRoadmap: (state, roadmap) => {
    state.currentRoadmap = roadmap;
  },
  storeJourney: (state, journey) => {
    state.currentJourney = journey;
  },
  storeWorkspace: (state, workspace) => {
    state.currentWorkspace = workspace;
  },
  applicationLogout: (state) => {
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