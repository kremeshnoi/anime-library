//Libraries
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

//Store modules
import auth from "@/store/auth.ts";

//Interfaces
import { State } from "@/interfaces/state.ts";
import { SearchAnimeResponse } from "@/interfaces/searchedAnime.ts";
import { FavoriteAnimeResponse } from "@/interfaces/favoriteAnime.ts";

//API wrappers
import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

Vue.use(Vuex);

export const state: State = {
	animeResult: [],
	airingAnimeResult: [],
	searchAnimeResult: [],
	favoriteAnimeResult: [],
	favoriteMangaResult: [],
	favoriteCharactersResult: []
};

export default new Vuex.Store({
	state,
	mutations: {
		SET_ANIME(state, animeResult) {
			state.animeResult = animeResult;
		},
		SET_AIRING_ANIME(state, airingAnimeResult) {
			state.airingAnimeResult = airingAnimeResult;
		},
		SET_SEARCHED_ANIME(state, searchAnimeResult) {
			state.searchAnimeResult = searchAnimeResult;
		},
		SET_FAVORITE_ANIME(state, favoriteAnimeResult) {
			state.favoriteAnimeResult = favoriteAnimeResult;
		}
	},
	actions: {
		async loadAnime(ctx) {
			try {
				const animeResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const animeResult = animeResponse;
				ctx.commit("SET_ANIME", animeResult);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAiringAnime(ctx) {
			try {
				const airingAnimeResponse = await jikanjs.loadTop("anime", 1, "airing");
				const airingAnimeResult = airingAnimeResponse.top.slice(0, 12);
				ctx.commit("SET_AIRING_ANIME", airingAnimeResult);
			} catch (error) {
				throw new Error(error);
			}
		},
		async searchAnime(ctx, query) {
			try {
				const searchAnimeResponse: SearchAnimeResponse = await jikanjs.search("anime", query);
				const searchAnimeResult = searchAnimeResponse.results;
				if (Array.isArray(searchAnimeResult) && searchAnimeResult.length > 0) {
					ctx.commit("SET_SEARCHED_ANIME", searchAnimeResult);
				} else {
					M.toast({html: "Anime not found"});
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadFavoriteAnime(ctx) {
			try {
				const favoriteAnimeResponse: FavoriteAnimeResponse = await jikanjs.loadTop("anime", 1, "favorite");
				const favoriteAnimeResult = favoriteAnimeResponse.top;
				ctx.commit("SET_FAVORITE_ANIME", favoriteAnimeResult);
			} catch (error) {
				throw new Error(error);
			}
		},
		async computeRoute(ctx, result) {
			try {
				const id = result.mal_id;
				const title = result.url
					.split("/")
					.splice(-1, 1)[0]
					.toLowerCase()
					.split("_")
					.join("-");
				router.push({ name: "Anime", params: { id, title } });
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	modules: { auth },
	getters: {
		getAnimeResult: state => state.animeResult,
		getAiringAnimeResult: state => state.airingAnimeResult,
		getSearchAnimeResult: state => state.searchAnimeResult,
		getFavoriteAnimeResult: state => state.favoriteAnimeResult,

	}
});
