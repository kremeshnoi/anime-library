import firebase from "firebase/app";

export default {
  actions: {
    async signIn({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    }
  }
};
