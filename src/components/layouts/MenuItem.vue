<template>
  <a @click="menuItemSelected(menuItemData)" :class="{ 'font-semibold': itemIsSelected }"  class="flex items-center h-8 hover:bg-gray-100 text-md px-3 cursor-pointer">
    <span class="leading-none w-4" v-html="menuItemData.icon"></span>
    <span class="ml-2 leading-none">{{ menuItemData.name }}</span>
  </a>
</template>

<script>
export default ({
  name: 'MenuItem',
  data: () => ({
   
  }),
  computed: {
    currentWorkspace: function() {
      return this.$store.getters['application/getCurrentWorkspace'];
    },
    itemIsSelected: function() {
      let selectedMenuItem = this.$store.getters['application/getSelectedMenuItem'];
      return selectedMenuItem.id == this.menuItemData.id
    }
  },
  methods: {
    menuItemSelected: function(item) {
      this.$store.commit('application/storeSelectedMenuItem', item);
      let itemPathName = item.name.toLowerCase();
      this.$router.push({ path: `/app/${itemPathName}` })
    }
  },
  props: [
    "menuItemData"
  ]
})
</script>