<template>
  <a @click="workspaceSelected()" class="relative w-10 h-10 rounded-lg mt-4" :class="{ 'shadow-md': selected }" :style="{ 'background-color': workspaceData.color }" href="#">
    <span v-show="notifications" class="absolute w-3 h-3 rounded-full bg-blue-400 top-0 right-0 -mt-1 -mr-1"></span>
  </a>
</template>
<script>
export default ({
  name: 'WorkspaceSelector',
  data: () => ({
    notifications: false,
  }),
  computed: {
    selected: function() {
      let currentWorkspace = this.$store.getters['application/getCurrentWorkspace'];
      return this.workspaceData.id == currentWorkspace.id;
    }
  },
  methods: {
    workspaceSelected: function() {
      return this.$store.commit('application/storeWorkspace', this.workspaceData)
    }
  },
  props: [
    "workspaceData"
  ]
})
</script>