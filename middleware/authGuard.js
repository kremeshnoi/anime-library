import firebase from "firebase/app"

async function getUid() {
  const user = await firebase.auth().currentUser
  return user ? user.uid : null
}

export default async function ({ app, route }) {
  if (route.name !== "set-username") {
    const uid = await getUid()
    const isAuthenticated = app.$cookies.get("isAutheticated")

    await firebase.database().ref(`/users/${uid}/info/hasUsername`)
    .on("value", function(snapshot) {
      snapshot.val()
      if(isAuthenticated && !snapshot.val()) app.router.push("/set-username")
    })
  }

  return
}
