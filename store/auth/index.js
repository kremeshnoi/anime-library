import firebase from "firebase/app"

export const actions = {
  async getUid() {
    const user = await firebase.auth().currentUser
    return user ? user.uid : null
  },
  async signIn({ commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      $nuxt.$cookies.set("isAutheticated", true)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
    }
  },
  async signUp({ dispatch, commit }, { email, password, username }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = await dispatch("getUid")
      await firebase.database().ref(`/users/${uid}/info`).set({
        username,
        hasUsername: true
      })
      $nuxt.$cookies.set("isAutheticated", true)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
    }
  },
  async signOut() {
    try {
      await firebase.auth().signOut()
      $nuxt.$cookies.set("isAutheticated", false)
      $nuxt.$router.push("/") || $nuxt.$router.go(0)
    } catch (error) {
      document.querySelector(".auth-progress").style.display = "none"
    }
  },
  async recoverPassword({ commit }, { email }) {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
    }
  },
  async deleteAccount() {
    try {
      await firebase.auth().currentUser?.delete()
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
    }
  },
  async googleAuth ({ dispatch }) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const uid = dispatch("getUid")
      return uid
    })
    .then((result) => {
      $nuxt.$cookies.set("isAutheticated", true)
      return result
    })
    .then((result) => { firebase.database().ref(`/users/${result}/info`).set({ hasUserName: false })})
    .then((result) => { this.$router.push("/")})
    .catch((error) => { M.toast({ html: `${ error.message }`, classes: "red", displayLength: 10000 })})
  },
  async twitterAuth ({ dispatch }) {
    const provider = new firebase.auth.TwitterAuthProvider()

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const uid = dispatch("getUid")
      return uid
    })
    .then((result) => {
      $nuxt.$cookies.set("isAutheticated", true)
      return result
    })
    .then((result) => { firebase.database().ref(`/users/${result}/info`).set({ hasUserName: false })})
    .then((result) => { this.$router.push("/")})
    .catch((error) => { M.toast({ html: `${ error.message }`, classes: "red", displayLength: 10000 })})
  },
  async setUsername ({ dispatch, commit }, { username }) {
    try {
      const uid = await dispatch("getUid")
      await firebase.database().ref(`/users/${uid}/info`).set({
        username,
        hasUsername: true
      })
      $nuxt.$router.push("/")
    } catch (error) {
      commit("SET_ERROR", error, { root: true })
      document.querySelector(".auth-progress").style.display = "none"
    }
  }
}
