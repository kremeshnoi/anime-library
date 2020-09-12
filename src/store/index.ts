//Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

//Store modules
import auth from '@/store/auth';

//Interfaces
import { State } from '@/interfaces/State';
import { AnimeByIdResponse } from '@/interfaces/AnimeByIdResponse';
import { AnimeAiringResponse } from '@/interfaces/AnimeAiringResponse';
import { AnimeSearchedResponse } from '@/interfaces/AnimeSearchedResponse';
import { AnimeFavoriteResponse } from '@/interfaces/AnimeFavoriteResponse';
import { AnimeRecommendationsByIdResponse } from "@/interfaces/AnimeRecommendationsById";
import { CharactersFavoriteResponse } from '@/interfaces/CharactersFavoriteResponse';
import { MangaByIdResponse } from '@/interfaces/MangaByIdResponse';
import { MangaFavoriteResponse } from '@/interfaces/MangaFavoriteResponse';
import { UserInfoResponse } from '@/interfaces/UserInfoResponse';

//API wrappers
import jikanjs from '../../node_modules/jikanjs/lib/jikan.js';

Vue.use(Vuex);

export const state: State = {
	animeAiring: [],
	animeById: [],
	animeFavorite: [],
	animeSearched: [],
	animeRecommendationsById: [],
	characterById: [],
	charactersFavorite: [],
	mangaById: [],
	mangaFavorite: [],
	mangaRecommendationsById: [],
	userInfo: []
};

export default new Vuex.Store({
	state,
	mutations: {
		SET_ANIME_AIRING(state, animeAiring) {
			state.animeAiring = animeAiring;
		},
		SET_ANIME_BY_ID(state, animeById) {
			state.animeById = animeById;
		},
		SET_ANIME_FAVORITE(state, animeFavorite) {
			state.animeFavorite = animeFavorite;
		},
		SET_ANIME_SEARCHED(state, animeSearched) {
			state.animeSearched = animeSearched;
		},
		SET_ANIME_RECOMMENDATIONS_BY_ID(state, animeRecommendationsById) {
			state.animeRecommendationsById = animeRecommendationsById;
		},
		SET_CHARACTER_BY_ID(state, characterById) {
			state.characterById = characterById;
		},
		SET_CHARACTERS_FAVORITE(state, charactersFavorite) {
			state.charactersFavorite = charactersFavorite;
		},
		SET_MANGA_BY_ID(state, mangaById) {
			state.mangaById = mangaById;
		},
		SET_MANGA_FAVORITE(state, mangaFavorite) {
			state.mangaFavorite = mangaFavorite;
		},
		SET_MANGA_RECOMMENDATIONS_BY_ID(state, mangaRecommendationsById) {
			state.mangaRecommendationsById = mangaRecommendationsById;
		},
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
		async loadAnimeById(ctx) {
			try {
				const animeResponse: AnimeByIdResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const animeById = animeResponse;
				ctx.commit('SET_ANIME_BY_ID', animeById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeRecommendationsById(ctx) {
			try {
				const animeRecommendationsResponse: AnimeRecommendationsByIdResponse = await jikanjs.loadAnime(router.app.$route.params.id, 'recommendations');
				const animeRecommendationsById = animeRecommendationsResponse;
				ctx.commit('SET_ANIME_RECOMMENDATIONS_BY_ID', animeRecommendationsById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadCharacterById(ctx) {
			try {
				const characterResponse: MangaByIdResponse = await jikanjs.loadCharacter(router.app.$route.params.id);
				const characterById = characterResponse;
				ctx.commit('SET_CHARACTER_BY_ID', characterById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaById(ctx) {
			try {
				const mangaResponse: MangaByIdResponse = await jikanjs.loadManga(router.app.$route.params.id);
				const mangaById = mangaResponse;
				ctx.commit('SET_MANGA_BY_ID', mangaById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaRecommendationsById(ctx) {
			try {
				const mangaRecommendationsResponse: MangaByIdResponse = await jikanjs.loadManga(router.app.$route.params.id, 'recommendations');
				const mangaRecommendationsById = mangaRecommendationsResponse;
				ctx.commit('SET_MANGA_RECOMMENDATIONS_BY_ID', mangaRecommendationsById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeAiring(ctx) {
			try {
				const animeAiringResponse: AnimeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing');
				const animeAiring = animeAiringResponse.top;
				ctx.commit('SET_ANIME_AIRING', animeAiring);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeSearched(ctx, query) {
			try {
				const animeSearchedResponse: AnimeSearchedResponse = await jikanjs.search('anime', query);
				const animeSearched = animeSearchedResponse.results;
				if (Array.isArray(animeSearched) && animeSearched.length > 0) {
					ctx.commit('SET_ANIME_SEARCHED', animeSearched);
				} else {
					M.toast({ html: 'Not found', classes: 'red' });
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeFavorite(ctx) {
			try {
				const favoriteAnimeResponse: AnimeFavoriteResponse = await jikanjs.loadTop('anime', 1, 'favorite');
				const animeFavorite = favoriteAnimeResponse.top;
				ctx.commit('SET_ANIME_FAVORITE', animeFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadCharactersFavorite(ctx) {
			try {
				const favoriteCharactersResponse: CharactersFavoriteResponse = await jikanjs.loadTop('characters');
				const charactersFavorite = favoriteCharactersResponse.top;
				ctx.commit('SET_CHARACTERS_FAVORITE', charactersFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaFavorite(ctx) {
			try {
				const favoriteMangaResponse: MangaFavoriteResponse = await jikanjs.loadTop('manga', 1, 'favorite');
				const mangaFavorite = favoriteMangaResponse.top;
				ctx.commit('SET_MANGA_FAVORITE', mangaFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
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
	modules: { auth },
	getters: {
		getUserInfo: state => state.userInfo,
		getAnimeById: state => state.animeById,
		getAnimeAiring: state => state.animeAiring,
		getAnimeSearched: state => state.animeSearched,
		getAnimeFavorite: state => state.animeFavorite,
		getAnimeRecommendationsById: state => state.animeRecommendationsById,
		getCharacterById: state => state.characterById,
		getCharactersFavorite: state => state.charactersFavorite,
		getMangaById: state => state.mangaById,
		getMangaFavorite: state => state.mangaFavorite,
		getMangaRecommendationsById: state => state.mangaRecommendationsById
	}
});
