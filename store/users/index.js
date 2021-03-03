export const state = () => ({
  userInfo: []
})

export const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {
  async loadUserInfo({ dispatch, commit }) {
    try {
      const uid = await dispatch('getUid')
      const userInfoResponse = await this.$fire.database.ref(`/users/${uid}/info/username`)
        .on('value', (data) => {
          commit('SET_USER_INFO', data.val())
        })
    } catch (error) {
      throw error.message
    }
  }
}

export const getters = {
  getUserInfo: state => state.userInfo
}
