//Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

//Store modules
import { users } from '@/store/users/index';
import { auth } from '@/store/auth/index';
import { manga } from '@/store/manga/index';
import { anime } from '@/store/anime/index';
import { characters } from '@/store/characters/index'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		async computeRoute(ctx, result) {
			try {
				let type = result.type;
				if (type === undefined) {
					if(result.name_kanji) {
						type = 'Character';
					} else if(router.app.$route.name === 'Anime') {
						type = 'Anime';
					} else if(router.app.$route.name === 'Manga') {
						type = 'Manga';
					}
				} else if (type !== 'Manga' && type !== 'manga') {
					type = 'Anime';
				} else if (type === 'manga') {
					type = 'Manga';
				}
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
		}
	},
	modules: { auth, anime, characters, manga, users },
	getters: {}
});
