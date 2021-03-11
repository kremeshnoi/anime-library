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

export const actions = {
  async addToLibrary({ dispatch }, { type, status, id }) {
    try {
      const uid = await dispatch("auth/getUid")

      if(type === "Manga") type = "manga"
      else type = "anime"

      await this.$fire.database
        .ref(`/users/${ uid }/${ type }/${ id }/`)
        .set({ status })

      M.toast({ html: "Added to the library", classes: "green", displayLength: 10000 })

    } catch (error) {
      throw error.message
    }
  }
}

export const getters = {
  error: state => state.error
}
