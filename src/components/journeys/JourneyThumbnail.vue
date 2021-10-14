<template>
  <div class="relative flex flex-col text-left mx-4"> 
    <div class="">
      <div class="flex flex-col">
        <div class="bg-white shadow-md rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
              <img src="https://source.unsplash.com/random"
                alt="Just a flower" class=" w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl">
            </div>
            <div class="flex-auto ml-3 justify-evenly py-2">
            <div class="flex flex-wrap ">
              <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                {{ journeyData.category }}
              </div>
              <h2 class="flex-auto text-lg font-light">{{ journeyData.name }}</h2>
            </div>
            <p class="mt-3"></p>
            <div class="flex py-4  text-sm text-gray-500">
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
                <p class="">---</p>
              </div>
              <div class="flex-1 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="">05-25-2021</p>
              </div>
            </div>
            <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                                <button
                                    class="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                    <span class="text-green-400 hover:text-green-500 rounded-lg">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="shopify"
                                            class="svg-inline--fa fa-shopify  w-5 h-5  " role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="currentColor"
                                                d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>62 Products</span>
                                </button>
                            </div>
                            <button
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Edit Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <!-- <div @click="journeySelected(journeyData)" class="xl:w-96 md:w-1/2 mx-2 cursor-pointer">
    <div class="bg-white border border-gray-400">
      <div class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 w-full bg-cover bg-center mb-2 cursor-pointer" style="background-image: url(https://images.unsplash.com/photo-1633287453177-24823499b02c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80)">
        <div class="flex justify-end text-white cursor-pointer">
          Options
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
          </svg>
        </div>
      </div>
      <div class="pb-5 px-5">
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{{ journeyData.category }}</h3>
        <h2 class="text-lg text-gray-900 font-normal title-font mb-4">{{ journeyData.name }}</h2>
        <p class="text-sm">{{ journeyData.description }}</p>
      </div>
      <div class="flex p-4 border-t border-gray-300 text-gray-700">
        <div class="flex-1 inline-flex items-center">
          <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
          </svg>
          <p>Option <span class="text-gray-900 font-bold">1</span></p>
        </div>
        <div class="flex-1 inline-flex items-center">
          <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
          </svg>
          <p>Option <span class="text-gray-900 font-bold">2</span></p>
        </div>
      </div>

    </div>
  </div> -->
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