<template>
  <section class="items-center w-full">
    <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
      <div class="flex flex-col items-start mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0 text-black">
        <h2 class="mb-8 text-sm font-bold">Your Journey</h2>
        <h1 class="mb-8 text-2xl font-black md:text-5xl"> {{ journeyData.name }} </h1>
        <p class="mb-8 text-left">{{ journeyData.description }}</p>
        <div class="flex flex-col justify-center lg:flex-row">
          <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </button>
          <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">It will take you to candy shop. <br class="hidden lg:block">
            <a href="#" class="inline-flex items-center font-semibold text-primary md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
          </p>
        </div>
      </div>
      <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
        <img class="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac">
      </div>
    </div>
  </section>

</template>
<script>

export default ({
  name: 'JourneyDetails',
  data: () => ({
    
  }),
  components: {

  },
  computed: {
    journeyData: function() {
      return this.$store.getters['journey/getCurrentJourney']
    }
  },
  methods: {
    
  }
})
</script>