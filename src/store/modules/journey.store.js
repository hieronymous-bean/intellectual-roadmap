// initial state object //
const initialState = () => ({
  currentJourney: null,
  userJourneys: null
});

// state //
const state = initialState();

// getters //
const getters = {
  getCurrentJourney(state) {
    return state.currentJourney
  },
  getUserJourneys(state) {
    return state.userJourneys
  }
}

// actions //
const actions = { }

// mutations //
const mutations = { 
  storeCurrentJourney: (state, journey) => {
    state.currentJourney = journey;
  },
  storeUserJourneys: (state, journeys) => {
    state.userJourneys = journeys
  },
  journeyLogout: (state) => {
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