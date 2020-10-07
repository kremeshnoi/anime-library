// LIBRARIES

import router from '@/router';
import firebase from 'firebase/app';
import { email } from 'vuelidate/lib/validators';

// INTERFACES

import { UsersInfoResponse } from '@/interfaces/users/UsersInfoResponse';

// VUEX.STORE OPTIONS

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
				commit('SET_ERROR', error);
				throw new Error(error);
			}
		},
		async signUp({ dispatch, commit }, { email, password, username }) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password);
				const uid = await dispatch('getUid');
				await firebase.database().ref(`/users/${uid}/info`).set({
					username
				});
			} catch (error) {
				commit('SET_ERROR', error);
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
		async recoverPassword({ dispatch, commit }, { email }) {
			try {
				await firebase.auth().sendPasswordResetEmail(email);
			} catch (error) {
				commit('SET_ERROR', error);
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
