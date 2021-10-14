<template>
  <div class="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-50">
    <button class="flex-shrink-0 relative text-sm focus:outline-none group">
      <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-100">
        <span class="font-medium" :style="{ color: currentWorkspace.color }">
          {{ currentWorkspace.name }}
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
        <menu-item v-for="(item, index) of this.menu" :key="index" :menuItemData="item"/>
      </div>
    </div>
  </div>
</template>
<script>
// import components //
import MenuItem from './MenuItem.vue';

// import supplementary assets //
import MenuItems from "../../static/menu.json";

export default ({
  name: 'SidebarMenu',
  data: () => ({
    menu: MenuItems.data
  }),
  components: {
    MenuItem
  },
  computed: {
    currentWorkspace: function() {
      return this.$store.getters['workspace/getCurrentWorkspace'];
    }
  },
  methods: {
    
  },
  props: [

  ]
})
</script>