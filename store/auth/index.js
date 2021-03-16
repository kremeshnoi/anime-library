import firebase from "firebase/app"

export const actions = {
  async getUid() {
    const user = await firebase.auth().currentUser
    return user ? user.uid : null
  },
  async signIn({ commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      $nuxt.$cookies.set("isAuthenticateted", true)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
      document.querySelector(".preloader-wrapper").style.display = "none"
    }
  },
  async signUp({ dispatch, commit }, { email, password, username }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = await dispatch("getUid")
      await firebase.database().ref(`/users/${uid}/info`).set({
        username
      })
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
      document.querySelector(".preloader-wrapper").style.display = "none"
    }
  },
  async signOut() {
    try {
      await firebase.auth().signOut()
      $nuxt.$cookies.set("isAuthenticateted", false)
      await $nuxt.$router.go(0)
    } catch (error) {
      document.querySelector(".auth-progress").style.display = "none"
      document.querySelector(".preloader-wrapper").style.display = "none"
    }
  },
  async recoverPassword({ commit }, { email }) {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
      document.querySelector(".preloader-wrapper").style.display = "none"
    }
  },
  async deleteAccount() {
    try {
      await firebase.auth().currentUser?.delete()
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
    }
  }
}
