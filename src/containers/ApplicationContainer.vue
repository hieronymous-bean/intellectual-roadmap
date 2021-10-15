<template>
  <div class="flex w-screen h-screen text-gray-700 font-galano">
    <div class="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-200 bg-gray-100 py-3">
      <workspace-selector v-for="(workspace, index) in userWorkspaces" :key="index" :workspaceData="workspace"/>
      <a class="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent mt-4 hover:bg-gray-400" href="#">
        <svg class="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </a>
    </div>
    <sidebar-menu />
    <router-view />
  </div>
  <create-workspace-modal />
</template>
<script>
// import components //
import CreateWorkspaceModal from '../components/workspaces/CreateWorkspaceModal.vue';
import SidebarMenu from '../components/layouts/SidebarMenu.vue';
import WorkspaceSelector from '../components/workspaces/WorkspaceSelector.vue';

export default ({
  name: 'ApplicationContainer',
  data: () => ({
    
  }),
  components: {
    CreateWorkspaceModal,
    SidebarMenu,
    WorkspaceSelector
  },
  computed: {
    currentWorkspace: function() {
      return this.$store.getters['workspace/getCurrentWorkspace'];
    },
    selectedMenuItem: function() {
      return this.$store.getters['application/getSelectedMenuItem'];
    },
    userJourneys: function() {
      return this.$store.getters['journey/getUserJourneys'];
    },
    userWorkspaces: function() {
      return this.$store.getters['workspace/getUserWorkspaces'];
    }
  },
  methods: {
    
  }
})
</script>