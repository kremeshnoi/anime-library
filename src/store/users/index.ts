// LIBRARIES

import firebase from 'firebase/app';

// INTERFACES

import { StateUsers } from '@/interfaces/state/State';
import { UsersInfoResponse } from '@/interfaces/users/UsersInfoResponse';

// STATE CONSTANT

export const state: StateUsers = {
	userInfo: []
};

// VUEX.STORE OPTIONS

export const users =  {
	state,
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
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
		}
	},
	getters: {
		getUserInfo: state => state.userInfo
	}
};
