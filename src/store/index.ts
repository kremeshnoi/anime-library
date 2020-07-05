//Libraries
import Vue from "vue";
import Vuex from "vuex";

//Store modules
import auth from "@/store/auth.ts";

//Interfaces
import { State } from "@/interfaces/state.ts";

//Services
import { fetchAnime } from "@/services/fetchAnime.ts";
import { fetchTopList } from "@/services/fetchTopList.ts";
import { TriggerToast } from "@/services/triggerToast.ts"

Vue.use(Vuex);

export const state: State = {
	animeSearchResult: [],
	animeTopListResult: []
}

export default new Vuex.Store({
	state,
	mutations: {
		SET_ANIME(state, animeSearchResult) {
			state.animeSearchResult = animeSearchResult
		},
		SET_ANIME_TOP(state, animeTopListResult) {
			state.animeTopListResult = animeTopListResult
		}
	},
	actions: {
		async getAnime(ctx, query) {
			try {
				const animeSearchResult = await fetchAnime(query);
				if (Array.isArray(animeSearchResult) && animeSearchResult.length > 0) {
					ctx.commit("SET_ANIME", animeSearchResult);
				} else {
					TriggerToast.toast("Anime not found")
				}
			} catch (e) {
				console.log(e)
			}
		},
		async getTopList(ctx, { type, page, subtype }) {
			try {
				const animeTopListResult = await fetchTopList(type, page, subtype);
				ctx.commit("SET_ANIME_TOP", animeTopListResult);
			} catch (e) {
				console.log(e)
			}
		}
	},
	modules: { auth },
	getters: {
		fetchAnime: state => state.animeSearchResult,
		fetchTopList: state => state.animeTopListResult
	}
});
