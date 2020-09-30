 import { createStore } from 'vuex'
 import { UserModule } from './User'

export default createStore({
  state: {
    user: null
  },
  // Mutations are functions that effect the State
  mutations: {
   
  },
  // Action are functions that you call throughout your applicantion that call mutations.
  actions: {
    
  },
  modules: {
    User: UserModule
  }
})
