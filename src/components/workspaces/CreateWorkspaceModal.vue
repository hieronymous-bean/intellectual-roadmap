<template>
  <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
    <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
      <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <p class="font-semibold text-gray-800">Create a New Workspace</p>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col px-6 py-5 bg-gray-50">
        <p class="mb-2 font-semibold text-gray-700">Workspace Name</p>
        <input
          type="text"
          name=""
          placeholder="Name..."
          class="w-full mb-5 p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
          id="" v-model="workspaceName"
        />
        <p class="mb-2 font-semibold text-gray-700">Workspace Description</p>
        <textarea
          type="text"
          name=""
          placeholder="Description..."
          class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
          id="" v-model="workspaceDescription"
        ></textarea>
        <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
          <div class="w-full sm:w-1/2">
            <p class="mb-2 font-semibold text-gray-700">Workspace Color</p>
            <select type="text" name="" v-model="workspaceColor" class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none" id="">
              <option value="#000000">Purple</option>
              <option value="#000000">Blue</option>
              <option value="#000000">Green</option>
              <option value="#000000">Red</option>
            </select>
          </div>
          <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
            <p class="mb-2 font-semibold text-gray-700">Next step</p>
            <select
              type="text"
              name=""
              class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
              id="" v-model="workspaceCategory"
            >
              <option value="professional">Professional</option>
              <option value="personal">Personal</option>
              <option value="shared">Shared</option>
            </select>
          </div>
        </div>
        <hr />

        <div class="flex items-center mt-5 space-x-4">
          <input
            class="inline-flex rounded-full"
            type="checkbox"
            id="check1"
            name="check1"
          />
          <label class="inline-flex font-semibold text-gray-400" for="check1">
            Option</label
          ><br />
          <input
            class="inline-flex"
            type="checkbox"
            id="check2"
            name="check2"
                  checked
          />
          <label class="inline-flex font-semibold text-blue-500" for="check2">
            Option</label
          >
        </div>
      </div>
      <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
        <button class="px-4 py-2 text-gray-300 font-semibold bg-gray-100 rounded">
          Cancel
        </button>
        <button @click="createNewWorkspace()" class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'CreateWorkspaceModal',
  data: () => ({
    workspaceName: null,
    workspaceDescription: null,
    workspaceColor: null,
    workspaceCategory: null
  }),
  computed: {

  },
  methods: {
    createNewWorkspace: function() {
      const workspaceDetails = {
        name: this.workspaceName,
        description: this.workspaceDescription,
        color: this.workspaceColor,
        category: this.workspaceCategory
      }

      this.$store.dispatch('workspace/createNewWorkspace', workspaceDetails);
    }
  },
  props: [

  ]
})
</script>