export const state = () => ({
  error: null
})

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

export const getters = {
  error: state => state.error
}
