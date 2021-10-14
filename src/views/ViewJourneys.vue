<template>
  <div class="flex flex-col flex-grow">
    <div class="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
      <div>
        <h1 class="text-2xl font-regular leading-none">{{ selectedMenuItem.name }}</h1>
        <span class="text-sm font-light leading-none">from {{ currentWorkspace.name }}</span>
      </div>
    </div>
    <div class="flex w-full p-4">
      <journey-tile v-for="(journey, index) in this.userJourneys" :key="index" :journeyData="journey"/>  
    </div>

  </div>
</template>
<script>
// import components //
import JourneyTile from '../components/journeys/JourneyTile.vue';

export default ({
  name: 'ViewJourneys',
  data: () => ({
    
  }),
  components: {
    JourneyTile
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