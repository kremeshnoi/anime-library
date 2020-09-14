//Libraries
import router from '@/router';
import firebase from 'firebase/app';
import { email } from 'vuelidate/lib/validators';

//Interfaces
import { UserInfoResponse } from '@/interfaces/UserInfoResponse';

export const auth =  {
	actions: {
		getUid() {
			const user = firebase.auth().currentUser;
			return user ? user.uid : null;
		},
		async signIn({ dispatch, commit }, { email, password }) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password);
			} catch (error) {
				throw new Error(error);
			}
		},
		async signUp({ dispatch }, { email, password, username }) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password);
				const uid = await dispatch('getUid');
				await firebase.database().ref(`/users/${uid}/info`).set({
					username
				});
			} catch (error) {
				throw new Error(error);
			}
		},
		async signOut() {
			try {
				await firebase.auth().signOut();
				router.go(0);
			} catch (error) {
				throw new Error(error);
			}
		},
		async recoverPassword({ dispatch }, { email }) {
			try {
				await firebase.auth().sendPasswordResetEmail(email);
			} catch (error) {
				throw new Error(error);
			}
		},
		async deleteAccount() {
			try {
				await firebase.auth().currentUser?.delete();
			} catch (error) {
				throw new Error(error);
			}
		}
	}
};
