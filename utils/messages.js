import Vue from "vue"

Vue.prototype.$message = function (html) {
  M.toast({ html, classes: "green" })
}

Vue.prototype.$error = function (html) {
  M.toast({ html: `[Error]: ${html}`, classes: "red" })
}

export default {
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Wrong password",
  "auth/email-already-in-use": "The email address is already in use by another account",
  "auth/too-many-requests": "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later"
}
