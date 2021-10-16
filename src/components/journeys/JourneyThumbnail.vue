<template>
  <div class="flex my-5"> 
        <div class="bg-white shadow-md border rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
              <img :src="journeyData.image"
                :alt="journeyData.name" class=" w-full object-cover h-48 rounded-2xl">
            </div>
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap ">
                <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                  {{ journeyData.category }}
                </div>
                <h2 class="flex-auto text-lg font-light">{{ journeyData.name }}</h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4 text-sm text-gray-500">
                <div class="flex-1 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                    </path>
                  </svg>
                  <p class="">numMaps</p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="">lastModified</p>
                </div>
              </div>
            <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span class="text-green-400 hover:text-green-500 rounded-lg">
                                        
                                    </span>
                                    <span>Details</span>
                                </button>
                            </div>
                            <button
                                class="mb-2 md:mb-0 bg-primary px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-secondary"
                                type="button" aria-label="like">View Roadmaps</button>
                        </div>
                    </div>
                </div>
            </div>

  </div>
</template>

<script>
export default ({
  name: 'JourneyThumbnail',
  data: () => ({
   
  }),
  computed: {
    
  },
  methods: {
    journeySelected(journey) {
      const journeyRoute = `/app/journeys/${journey.id}`;
      this.$store.commit('journey/storeCurrentJourney', journey);
      return this.$router.push({ path: journeyRoute });
    }
  },
  props: [
    "journeyData"
  ]
})
</script>