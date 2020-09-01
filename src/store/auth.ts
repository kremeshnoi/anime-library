import firebase from 'firebase/app';
import { email } from 'vuelidate/lib/validators';
import { UserInfoResponse } from '@/interfaces/UserInfoResponse';

export default {
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
		},
		async loadUserInfo({ dispatch, commit }) {
			try {
				const uid = await dispatch('getUid');
				const userInfoResponse = await firebase.database().ref(`/users/${uid}/info/username`)
					.on('value', (data) => {
						commit('SET_USER_INFO', data.val());
					});
			} catch (error) {
				throw new Error(error);
			}
		},
	}
};
