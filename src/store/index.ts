//Libraries
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

//Store modules
import auth from "@/store/auth.ts";

//Interfaces
import { State } from "@/interfaces/state.ts";
import { SearchAnimeResponse } from "@/interfaces/search.ts";
import { FavoriteAnimeResponse } from "@/interfaces/favorite.ts";

//API wrappers
import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

Vue.use(Vuex);

export const state: State = {
	searchAnimeResult: [],
	favoriteAnimeResult: [],
	topMangaResult: [],
	topCharactersResult: [],
	animeResult: [],
	mangaResult: [],
	charactersResult: []
};

export default new Vuex.Store({
	state,
	mutations: {
		SET_ANIME(state, searchAnimeResult) {
			state.searchAnimeResult = searchAnimeResult;
		},
		SET_FAVORITE_ANIME(state, favoriteAnimeResult) {
			state.favoriteAnimeResult = favoriteAnimeResult;
		},
		SET_LOADED_ANIME_DATA(state, loadedAnimeResult) {
			state.loadedAnimeResult = loadedAnimeResult;
		}
	},
	actions: {
		async searchAnime(ctx, query) {
			try {
				const searchAnimeResponse: SearchAnimeResponse = await jikanjs.search("anime", query);
				const searchAnimeResult = searchAnimeResponse.results;
				if (Array.isArray(searchAnimeResult) && searchAnimeResult.length > 0) {
					ctx.commit("SET_ANIME", searchAnimeResult);
				} else {
					M.toast({html: "Anime not found"});
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadFavoriteAnime(ctx, [type, page, subtype]) {
			try {
				const favoriteAnimeResponse: FavoriteAnimeResponse = await jikanjs.loadTop("anime", "1", "favorite");
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
		},
		async loadAnime(ctx) {
			try {
				const loadedAnimeResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const loadedAnimeResult = loadedAnimeResponse;
				ctx.commit("SET_LOADED_ANIME_DATA", loadedAnimeResult);
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	modules: { auth },
	getters: {
		getSearchAnimeResult: state => state.searchAnimeResult,
		getFavoriteAnimeResult: state => state.favoriteAnimeResult,
		getAnimeResult: state => state.loadedAnimeResult,
	}
});
