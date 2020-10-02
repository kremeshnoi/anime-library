//Libraries
import router from '../../router';
import jikanjs from 'jikanjs/lib/jikan.js';

//Interfaces
import { StateManga } from '@/interfaces/state/State';
import { MangaByIdResponse } from '@/interfaces/manga/MangaByIdResponse';
import { MangaFavoriteResponse } from '@/interfaces/manga/MangaFavoriteResponse';
import { MangaRecommendationsByIdResponse } from '@/interfaces/manga/MangaRecommendationsById';
import { AnimeGenreResponse } from '@/interfaces/anime/AnimeGenreResponse';
import { MangaCharactersResponse } from '@/interfaces/manga/MangaCharactersResponse';

export const state: StateManga = {
	mangaGenre: [],
	mangaCharacters: [],
	mangaById: [],
	mangaFavorite: [],
	mangaRecommendationsById: []
};

export const manga = {
	state,
	mutations: {
		SET_MANGA_GENRE(state, mangaGenre) {
			state.mangaGenre = mangaGenre;
		},
		SET_MANGA_CHARACTERS(state, mangaCharacters) {
			state.mangaCharacters = mangaCharacters;
		},
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
		async loadMangaGenre(ctx) {
			try {
				const mangaGenreResponse: AnimeGenreResponse = await jikanjs.loadGenre('manga', router.app.$route.params.id);
				const mangaGenre = mangaGenreResponse;
				ctx.commit('SET_MANGA_GENRE', mangaGenre);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaCharacters(ctx) {
			try {
				const mangaCharactersResponse: MangaCharactersResponse = await jikanjs.loadManga(router.app.$route.params.id, 'characters');
				const mangaCharacters = mangaCharactersResponse;
				ctx.commit('SET_MANGA_CHARACTERS', mangaCharacters);
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
		getMangaGenre: state => state.mangaGenre,
		getMangaCharacters: state => state.mangaCharacters,
		getMangaById: state => state.mangaById,
		getMangaFavorite: state => state.mangaFavorite,
		getMangaRecommendationsById: state => state.mangaRecommendationsById
	}
};
