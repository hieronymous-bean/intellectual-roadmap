import { store } from '../../store/index';

export const instantiateWorkspaces = async (workspaces) => {
  let currentWorkspace = store.getters['workspace/getCurrentWorkspace'];
  if (!currentWorkspace) {
    store.commit('workspace/storeCurrentWorkspace', workspaces[0])
  }
  let storeWorkspaces = await store.commit('workspace/storeUserWorkspaces', workspaces);
  return storeWorkspaces;
}