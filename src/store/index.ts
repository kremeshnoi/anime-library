//Libraries
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

//Store modules
import auth from "@/store/auth.ts";

//Interfaces
import { State } from "@/interfaces/State.ts";
import { UserInfoResponse } from "@/interfaces/UserInfoResponse";
import { AnimeByIdResponse } from "@/interfaces/AnimeByIdResponse.ts";
import { AnimeAiringResponse } from "@/interfaces/AnimeAiringResponse.ts";
import { AnimeSearchedResponse } from "@/interfaces/AnimeSearchedResponse.ts";
import { AnimeFavoriteResponse } from "@/interfaces/AnimeFavoriteResponse.ts";
import { CharactersFavoriteResponse } from "@/interfaces/CharactersFavoriteResponse.ts";
import { MangaFavoriteResponse } from "@/interfaces/MangaFavoriteResponse.ts";

//API wrappers
import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";
import firebase from "firebase";

Vue.use(Vuex);

export const state: State = {
	userInfo: [],
	animeById: [],
	animeAiring: [],
	animeSearched: [],
	animeFavorite: [],
	charactersFavorite: [],
	mangaFavorite: []
};

export default new Vuex.Store({
	state,
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
		},
		SET_ANIME_BY_ID(state, animeById) {
			state.animeById = animeById;
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
		SET_MANGA_FAVORITE(state, mangaFavorite) {
			state.mangaFavorite = mangaFavorite;
		},
		SET_CHARACTERS_FAVORITE(state, charactersFavorite) {
			state.charactersFavorite = charactersFavorite;
		}
	},
	actions: {
		async loadAnimeById(ctx) {
			try {
				const animeResponse: AnimeByIdResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const animeById = animeResponse;
				ctx.commit("SET_ANIME_BY_ID", animeById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaById(ctx) {
			try {
				const animeResponse: AnimeByIdResponse = await jikanjs.loadAnime(router.app.$route.params.id);
				const anime = animeResponse;
				ctx.commit("SET_ANIME", anime);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeAiring(ctx) {
			try {
				const animeAiringResponse: AnimeAiringResponse = await jikanjs.loadTop("anime", 1, "airing");
				const animeAiring = animeAiringResponse.top;
				ctx.commit("SET_ANIME_AIRING", animeAiring);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeSearched(ctx, query) {
			try {
				const animeSearchedResponse: AnimeSearchedResponse = await jikanjs.search("anime", query);
				const animeSearched = animeSearchedResponse.results;
				if (Array.isArray(animeSearched) && animeSearched.length > 0) {
					ctx.commit("SET_ANIME_SEARCHED", animeSearched);
				} else {
					M.toast({ html: "Not found", classes: "red" });
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadAnimeFavorite(ctx) {
			try {
				const favoriteAnimeResponse: AnimeFavoriteResponse = await jikanjs.loadTop("anime", 1, "favorite");
				const animeFavorite = favoriteAnimeResponse.top;
				ctx.commit("SET_ANIME_FAVORITE", animeFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadCharactersFavorite(ctx) {
			try {
				const favoriteCharactersResponse: CharactersFavoriteResponse = await jikanjs.loadTop("characters");
				const charactersFavorite = favoriteCharactersResponse.top;
				ctx.commit("SET_CHARACTERS_FAVORITE", charactersFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadMangaFavorite(ctx) {
			try {
				const favoriteMangaResponse: MangaFavoriteResponse = await jikanjs.loadTop("manga", 1, "favorite");
				const mangaFavorite = favoriteMangaResponse.top;
				ctx.commit("SET_MANGA_FAVORITE", mangaFavorite);
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
		getUserInfo: state => state.userInfo,
		getAnimeById: state => state.animeById,
		getAnimeAiring: state => state.animeAiring,
		getAnimeSearched: state => state.animeSearched,
		getAnimeFavorite: state => state.animeFavorite,
		getCharactersFavorite: state => state.charactersFavorite,
		getMangaFavorite: state => state.mangaFavorite
	}
});
