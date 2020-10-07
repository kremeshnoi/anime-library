// LIBRARIES

import router from '../../router';
import jikanjs from 'jikanjs/lib/jikan.js';

// INTERFACES

import { StateAnime } from '@/interfaces/state/State';
import { AnimeByIdResponse } from '@/interfaces/anime/AnimeByIdResponse';
import { AnimeGenreResponse } from "@/interfaces/anime/AnimeGenreResponse";
import { AnimeAiringResponse } from '@/interfaces/anime/AnimeAiringResponse';
import { AnimeSearchedResponse } from '@/interfaces/anime/AnimeSearchedResponse';
import { AnimeFavoriteResponse } from '@/interfaces/anime/AnimeFavoriteResponse';
import { AnimeUpcomingResponse } from "@/interfaces/anime/AnimeUpcomingResponse";
import { AnimeRecommendationsByIdResponse } from '@/interfaces/anime/AnimeRecommendationsById';

// STATE CONSTANT

export const state: StateAnime = {
	animeById: [],
	animeGenre: [],
	animeAiring: [],
	animeFavorite: [],
	animeSearched: [],
	animeUpcoming: [],
	animeRecommendationsById: []
};

// VUEX.STORE OPTIONS

export const anime = {
	state,
	mutations: {
		SET_ANIME_BY_ID(state, animeById) {
			state.animeById = animeById;
		},
		SET_ANIME_GENRE(state, animeGenre) {
			state.animeGenre = animeGenre;
		},
		SET_ANIME_AIRING(state, animeAiring) {
			state.animeAiring = animeAiring;
		},
		SET_ANIME_SEARCHED(state, animeSearched) {
			state.animeSearched = animeSearched;
		},
		SET_ANIME_FAVORITE(state, animeFavorite) {
			state.animeFavorite = animeFavorite;
		},
		SET_ANIME_UPCOMING(state, animeUpcoming) {
			state.animeUpcoming = animeUpcoming;
		},
		SET_ANIME_RECOMMENDATIONS_BY_ID(state, animeRecommendationsById) {
			state.animeRecommendationsById = animeRecommendationsById;
		}
	},
	actions: {
		async loadAnimeGenre(ctx) {
			try {
				const animeGenreResponse: AnimeGenreResponse = await jikanjs.loadGenre('anime', router.app.$route.params.id);
				const animeGenre = animeGenreResponse;
				ctx.commit('SET_ANIME_GENRE', animeGenre);
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
					M.toast({ html: 'Not found ヽ( `д´*)ノ', classes: 'red' });
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeById(ctx) {
			try {
				const animeResponse: AnimeByIdResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const animeById = animeResponse;
				ctx.commit('SET_ANIME_BY_ID', animeById);
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
		async loadAnimeFavorite(ctx) {
			try {
				const favoriteAnimeResponse: AnimeFavoriteResponse = await jikanjs.loadTop('anime', 1, 'favorite');
				const animeFavorite = favoriteAnimeResponse.top;
				ctx.commit('SET_ANIME_FAVORITE', animeFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeUpcoming(ctx) {
			try {
				const animeUpcomingResponse: AnimeUpcomingResponse = await jikanjs.loadTop('anime', 1, 'upcoming');
				const animeUpcoming = animeUpcomingResponse.top;
				ctx.commit('SET_ANIME_UPCOMING', animeUpcoming);
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
		}
	},
	getters: {
		getAnimeById: state => state.animeById,
		getAnimeGenre: state => state.animeGenre,
		getAnimeAiring: state => state.animeAiring,
		getAnimeSearched: state => state.animeSearched,
		getAnimeFavorite: state => state.animeFavorite,
		getAnimeUpcoming: state => state.animeUpcoming,
		getAnimeRecommendationsById: state => state.animeRecommendationsById,
	}
};
