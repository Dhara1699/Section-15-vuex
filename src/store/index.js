import { createStore } from 'vuex';

import  rootMutation from './mutation.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
      number: counterModule
    },
    state() {
      return {
        
        isLoggedIn : false
      };
    },
    mutations: rootMutation,
    //{
     /* increment2(state) {
        state.counter = state.counter + 2;
      },
      increment11(state) {
        state.counter = state.counter + 11;
      }*/
      
    //},
    actions: rootActions,
    getters: rootGetters
  });

 export default store; 