import { createApp, ref, provide, inject } from 'vue';
import createAuth0Client from "@auth0/auth0-spa-js";

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

function Auth0({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
  }) {
    return options
  }

Auth0.prototype.func = function() {
  console.log('bing')
}

export const Auth0Plugin = {
  install(app, options) {

    let aaa = createApp({
      data: () => ({
        loading: true,
        isAuthenticated: false,
        user: {},
        auth0Client: null,
        popupOpen: false,
        error: null
      }),
    })




    app.config.globalProperties.$auth = aaa

  }



}
