import Vue from 'vue'
import Meta from 'vue-meta'
import firebase from 'firebase/app'

Vue.use(Meta)

export default function ({ route }) {
  const currentUser = firebase.auth().currentUser

  if (route.name === 'sign-in') return 'Authentication'
  else if (route.name === 'sign-up') return 'Authentication'
  else if (route.name === 'recovery') return 'Authentication'

  if (!currentUser) return 'Unauthorized'
  else if (currentUser) return 'Authorized'
}
