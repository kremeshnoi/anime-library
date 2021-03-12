import Vue from "vue"
import Meta from "vue-meta"
import firebase from "firebase/app"

Vue.use(Meta)

export default function ({ route }) {
  const currentUser = firebase.auth().currentUser

  if (route.name === "sign-in") return "Authentication"
  if (route.name === "sign-up") return "Authentication"
  if (route.name === "recovery") return "Authentication"

  if (currentUser) return "Authorized"
  if (!currentUser) return "Unauthorized"
}
