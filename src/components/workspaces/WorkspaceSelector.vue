<template>
  <a class="relative w-10 h-10 rounded-lg mt-4" :style="{ 'background-color': workspaceData.color }" href="#">
    <span v-show="hasNotifications" class="absolute w-3 h-3 rounded-full bg-blue-400 top-0 right-0 -mt-1 -mr-1"></span>
  </a>
</template>
<script>
export default ({
  name: 'WorkspaceSelector',
  data: () => ({
    hasNotifications: false
  }),
  computed: {

  },
  methods: {
    
  },
  props: [
    "workspaceData"
  ]
})
</script>