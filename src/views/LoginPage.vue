<template>
  <div class="relative min-h-screen w-full flex">
    <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
      <div class="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-greyone text-white bg-fit relative">
        <div class="w-full lg:max-w-2xl md:max-w-md z-10">
          <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full shadow-md py-8 sm:rounded-lg md:rounded-none bg-white">
            <div class="max-w-xl w-full space-y-8">
              <div class="text-center text-dark">
                <h2 class="text-4xl font-thin">
                  Welcome Back!
                </h2>
                <p v-show="!this.loggedIn" class="mt-2 text-sm font-light">Please sign in to your Polestar account.</p>
                <p v-show="this.loggedIn" class="mt-2 text-md text-black">You're already logged in! <router-link to="/" class="text-primary underline cursor-pointer">Click here</router-link> to access Polestar, or you can <span class="text-primary underline cursor-pointer" @click="this.$store.dispatch('authentication/logout')">log out</span> of your account.</p>
              </div>
              <div>
                <div>
                  <button @click="login()" type="button" class="w-full block bg-white focus:bg-gray-100 transition ease-in duration-400 hover:shadow-md text-gray-900 font-semibold rounded-md px-4 py-3 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-none focus:border-gray-300">
                    <div class="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                      <span class="ml-4">Log in with Google</span>
                    </div>
                  </button>
                </div>
              
              <div v-show="!this.loggedIn" class="flex items-center justify-center space-x-2 mt-5">
                <span class="h-px w-16 bg-gray-200"></span>
                <span class="text-gray-300 text-xs font-normal">or continue with</span>
                <span class="h-px w-16 bg-gray-200"></span>
              </div>
              <form v-show="!this.loggedIn" @submit.prevent="passwordLogIn()" class="mt-8 space-y-6">
                <div class="relative">
                  <label class="ml-1 text-xs font-bold text-gray-700 tracking-wide">Email</label>
                  <input
                    class="w-full text-dark px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:ring-none focus:border-gray-200"
                    type="email" placeholder="" disabled v-model="email">
                </div>
                <div class="mt-8 content-center">
                  <label class="ml-1 text-xs font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    class="w-full text-dark px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:ring-none focus:border-gray-200"
                    type="password" placeholder="" disabled v-model="password">
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox"
                      class="rounded bg-gray-200 border-transparent cursor-pointer focus:border-none focus:ring-0 focus:ring-none text-primaryone focus:ring-0 focus:ring-offset-0 focus:ring-white">
                    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <router-link to="/auth/forgotpassword" class="font-medium text-dark hover:text-primaryone">
                      Forgot your password?
                    </router-link>
                  </div>
                </div>
                <div>
                  <button type="submit" class="w-1/2 align-middle flex mx-auto justify-center bg-primaryonelight text-primaryone p-2 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-primarytwolight cursor-pointer transition ease-in duration-300">
                    Sign In
                  </button>
                </div>
                <p class="flex flex-col text-sm items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <router-link to="/auth/signup" class="text-primaryone underline text-xs hover:text-indigo-dark hover:underline cursor-pointer transition ease-in duration-300">Sign up</router-link>
                </p>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",
  data: () => ({
    email: '',
    password: ''
  }),
  components: {

  },
  computed: {

  },
  methods: {
    googleLogIn() {
      this.$store.dispatch('authentication/googleLogIn').then(res => {
        console.log("User Logged In: ", res);
        if (!res) return;
      });
    },
    login() {
      this.$auth.loginWithRedirect()
    },
    logout() {
      
    }
  }
}
</script>