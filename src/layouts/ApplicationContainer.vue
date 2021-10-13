<template>
  <div class="flex w-screen h-screen text-gray-700">
    <div class="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-200 bg-gray-200 py-3">
      <workspace-selector v-for="(workspace, index) in this.workspaces" :key="index" :workspaceData="workspace"/>
      <a class="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent mt-4 hover:bg-gray-400" href="#">
        <svg class="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </a>
    </div>
    <div class="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
      <button class="flex-shrink-0 relative text-sm focus:outline-none group">
        <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
          <span class="font-medium">
            Workspace Name
          </span>
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#"></a>
        </div>
      </button>
      <div class="h-0 overflow-auto flex-grow">
        <div class="mt-3">
          <a class="flex items-center h-8 hover:bg-gray-300 text-sm px-3" href="#">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span class="ml-2 leading-none font-semibold">Roadmaps</span>
          </a>
          <a class="flex items-center h-8 hover:bg-gray-300 text-sm px-3" href="#">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span class="ml-2 leading-none">Favorited Roadmaps</span>
          </a>
          <a class="flex items-center h-8 hover:bg-gray-300 text-sm px-3" href="#">
            <span class="leading-none w-4">@</span>
            <span class="ml-2 leading-none">Journeys</span>
          </a>
          <a class="flex items-center h-8 hover:bg-gray-300 text-sm px-3" href="#">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span class="ml-2 leading-none">Templates</span>
          </a>
          <a class="flex items-center h-8 hover:bg-gray-300 text-sm px-3" href="#">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <span class="ml-2 leading-none">More</span>
          </a>
        </div>
        
      </div>
    </div>
    <div class="flex flex-col flex-grow">
      <div class="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
        <div>
          <h1 class="text-sm font-bold leading-none">Name of Roadmap</h1>
          <span class="text-xs leading-none">Description of this particular roadmap</span>
        </div>
      </div>
      <div class="flex flex-col flex-grow overflow-auto">
        <div class="flex px-4 py-3">
          
        </div>
      </div>
      <div class="h-12 bg-white px-4 pb-4">
        <div class="flex items-center border-2 border-gray-300 rounded-sm p-1">
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
          <textarea class="flex-grow text-sm px-3 border-l border-gray-300 ml-1" style="resize: none;" placeholder="Message council-of-elrond" cols="" rows="1"></textarea>
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <span class="leading-none w-4 h-4 -mt-px">@</span>
          </button>
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
            <svg class="h-4 w-4 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-shrink-0 w-1/4 max-w-xs border-l border-gray-300 bg-gray-100">
      <div class="flex items-center h-16 border-b border-gray-300 px-4">
        <div class="">
          <h2 class="text-sm font-semibold leading-none">Additional Utilities</h2>
          <a class="text-xs leading-none" href="#">Roadmap Options</a>	
        </div>
        <button class="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-300 ml-auto">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col flex-grow overflow-auto">
        <div class="flex px-4 py-4 border-b border-gray-300">
          <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div class="ml-2">
            <div class="-mt-1">
              <span class="text-sm font-semibold">Boromim</span>
              <span class="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p class="text-sm">Aragorn? This… is Isildur’s heir?</p>
          </div>
        </div>
        <div class="flex px-4 py-3">
          <div class="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div class="ml-2">
            <div class="-mt-1">
              <span class="text-sm font-semibold">Legolas</span>
              <span class="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p class="text-sm">And heir to the throne of Gondor.</p>
            <div class="flex space-x-2 mt-1">
              <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>🤯</span>
                <span class="ml-1 font-medium">7</span>
              </button>
              <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>🏰</span>
                <span class="ml-1 font-medium">2</span>
              </button>
              <button class="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>👑</span>
                <span class="ml-1 font-medium">3</span>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 px-4 pb-3 mt-auto">
          <div class="flex flex-col items-center border-2 border-gray-300 rounded-sm p-1">
            <textarea class="w-full text-sm px-3 bg-transparent" style="resize: none;" placeholder="Reply…" cols="" rows="1"></textarea>
            <div class="flex w-full mt-2">
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded ml-auto hover:bg-gray-200">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <span class="leading-none w-4 h-4 -mt-px">@</span>
              </button>
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                </svg>
              </button>
              <button class="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg class="h-4 w-4 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import components //
import WorkspaceSelector from '../components/workspaces/WorkspaceSelector.vue';

// import supplementary assets //
import Workspaces from '../assets/data/workspaces.json';
export default ({
  name: 'ApplicationContainer',
  data: () => ({
    workspaces: Workspaces.data
  }),
  components: {
    WorkspaceSelector
  },
  computed: {

  },
  methods: {
    
  }
  
})
</script>