/* application.store.js */

// initial state object //
const initialState = () => ({
  selectedMenuItem: 'journeys',
});

// state //
const state = initialState();

// getters //
const getters = {
  getSelectedMenuItem(state) {
    return state.selectedMenuItem
  }
}

// actions //
const actions = { }

// mutations //
const mutations = { 
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