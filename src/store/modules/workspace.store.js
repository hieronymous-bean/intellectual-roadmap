// initial state object //
const initialState = () => ({
  currentWorkspace: null,
  userWorkspaces: null
});

// state //
const state = initialState();

// getters //
const getters = {
  getCurrentWorkspace(state) {
    return state.currentWorkspace
  },
  getUserWorkspaces(state) {
    return state.userWorkspaces
  }
}

// actions //
const actions = { }

// mutations //
const mutations = { 
  storeCurrentWorkspace: (state, workspace) => {
    state.currentWorkspace = workspace;
  },
  storeUserWorkspaces: (state, workspaces) => {
    state.userWorkspaces = workspaces;
  },
  workspaceLogout: (state) => {
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