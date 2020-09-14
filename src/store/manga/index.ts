//Libraries
import router from '../../router';
import jikanjs from 'jikanjs/lib/jikan.js';

//Interfaces
import { StateManga } from '@/interfaces/State';
import { MangaByIdResponse } from '@/interfaces/MangaByIdResponse';
import { MangaFavoriteResponse } from '@/interfaces/MangaFavoriteResponse';
import { MangaRecommendationsByIdResponse } from '@/interfaces/MangaRecommendationsById';

export const state: StateManga = {
	mangaById: [],
	mangaFavorite: [],
	mangaRecommendationsById: []
};

export const manga = {
	state,
	mutations: {
		SET_MANGA_BY_ID(state, mangaById) {
			state.mangaById = mangaById;
		},
		SET_MANGA_FAVORITE(state, mangaFavorite) {
			state.mangaFavorite = mangaFavorite;
		},
		SET_MANGA_RECOMMENDATIONS_BY_ID(state, mangaRecommendationsById) {
			state.mangaRecommendationsById = mangaRecommendationsById;
		}
	},
	actions: {
		async loadMangaById(ctx) {
			try {
				const mangaResponse: MangaByIdResponse = await jikanjs.loadManga(router.app.$route.params.id);
				const mangaById = mangaResponse;
				ctx.commit('SET_MANGA_BY_ID', mangaById);
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
		async loadMangaRecommendationsById(ctx) {
			try {
				const mangaRecommendationsResponse: MangaRecommendationsByIdResponse = await jikanjs.loadManga(router.app.$route.params.id, 'recommendations');
				const mangaRecommendationsById = mangaRecommendationsResponse;
				ctx.commit('SET_MANGA_RECOMMENDATIONS_BY_ID', mangaRecommendationsById);
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	getters: {
		getMangaById: state => state.mangaById,
		getMangaFavorite: state => state.mangaFavorite,
		getMangaRecommendationsById: state => state.mangaRecommendationsById
	}
};
