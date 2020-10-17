// LIBRARIES

import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import firebase from "firebase";

// STORE MODULES

import { auth } from '@/store/auth/index';
import { users } from '@/store/users/index';
import { anime } from '@/store/anime/index';
import { manga } from '@/store/manga/index';
import { characters } from '@/store/characters/index'

// VUEX.STORE OPTIONS

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		error: null
	},
	mutations: {
		SET_ERROR(state, error) {
			state.error = error
		},
		CLEAR_ERROR(state) {
			state.error = null
		}
	},
	actions: {
		async addToLibrary({ dispatch }, { type, status, id }) {
			try {
				if (type === 'Manga') type = 'manga';
			    else type = 'anime';

				const uid = await dispatch('getUid');
				await firebase.database().ref(`/${type}/${status}/${id}`).set({
					uid
				});

				M.toast({ html: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Сhanges applied!', classes: 'green' });
			} catch (error) {
				throw new Error(error);
			}
		},
		computeRoute(ctx, result) {
			try {
				let type = result.type;
				if (type === undefined) {
					if(result.role || result.name_kanji) type = 'Character';
					else if(router.app.$route.name === 'Anime') type = 'Anime';
					else if(router.app.$route.name === 'Manga') type = 'Manga';
				}
				else if (type === 'manga') type = 'Manga';
				else if (type === 'Novel') type = 'Manga';
				else if (type === 'One-shot') type = 'Manga';
				else if (type === 'Doujinshi') type = 'Manga';
				else if (type !== 'Manga' && type !== 'manga') type = 'Anime';
				const id = result.mal_id;
				const title = result.url
					.split('/')
					.splice(-1, 1)[0]
					.toLowerCase()
					.split('_')
					.join('-');
				router.push({ name: `${ type }`, params: { id, title } });
			} catch (error) {
				throw new Error(error);
			}
		},
		computeRouteByGenre(ctx, { result, genre }) {
			try {
				let type = result.type;
				if (type === 'anime') {
					type = 'anime-genre'
				} else if(type === 'manga') {
					type = 'manga-genre'
				}
				const id = genre.id;
				const title = genre.title
					.split('/')
					.splice(-1, 1)[0]
					.toLowerCase()
					.split('_')
					.join('-');
				router.push({ name: `${ type }`, params: { id, title } });
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	modules: { auth, anime, characters, manga, users },
	getters: {
		error: state => state.error
	}
});
