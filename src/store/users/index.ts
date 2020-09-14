//Libraries
import firebase from 'firebase';

//Interfaces
import { StateUsers } from '@/interfaces/State';
import { UsersInfoResponse } from '@/interfaces/UsersInfoResponse';

export const state: StateUsers = {
	userInfo: []
};

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
