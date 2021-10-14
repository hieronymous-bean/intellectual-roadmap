// initial state object //
const initialState = () => ({
  currentRoadmap: null,
  currentJourney: null,
  currentWorkspace: null,
  selectedMenuItem: 'journeys',
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
  },
  getSelectedMenuItem(state) {
    return state.selectedMenuItem
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
  storeSelectedMenuItem: (state, menuItem) => {
    state.selectedMenuItem = menuItem;
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