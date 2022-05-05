import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      loggedIn: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

export default store;