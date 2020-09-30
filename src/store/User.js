export const UserModule = {
    namespaced: true,

    state: {
        user: null
      },
      // Mutations are functions that effect the State
      mutations: {
        SET_USER(state, user) {
          state.user = user
        }
      },
      // Action are functions that you call throughout your applicantion that call mutations.
      actions: {
        setUser({commit}, user) {
          commit('SET_USER', user)
        }
      }
}