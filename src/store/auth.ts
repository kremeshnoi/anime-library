import firebase from "firebase/app";

export default {
	actions: {
		async signIn({ dispatch, commit }, { email, password }) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password);
			} catch (error) {
				throw new Error(error);
			}
		},
		async registration({ dispatch }, { email, password, username }) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password);
				const uid = await dispatch("getUid");
				await firebase.database().ref(`/users/${uid}/info`).set({
					username
				});
			} catch (error) {
				throw new Error(error);
			}
		},
		getUid() {
			const user = firebase.auth().currentUser;
			return user ? user.uid : null;
		},
		async signOut() {
			try {
				await firebase.auth().signOut();
			} catch (error) {
				throw new Error(error);
			}
		}
	}
};
