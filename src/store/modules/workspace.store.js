/* workspace.store.js */
import axios from "axios";

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
const actions = {

  createNewWorkspace: ({commit, dispatch}, payload) => {
    const ENV = process.env.ENV;
    let apiEndpointDomain;
    if (ENV === 'development') {
      apiEndpointDomain = process.env.DEV_DOMAIN;
    }

    return axios({
      method: 'post',
      url: `${apiEndpointDomain}/api/workspace/createNewWorkspace`,
      data: {
        workspace: payload,       
      }
    }).then(response => {
      return response;
    })
    
  }

}

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