export const state = () => ({
  userInfo: []
})

export const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {}

export const getters = {
  getUserInfo: state => state.userInfo
}
