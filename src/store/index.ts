//Libraries
import Vue from "vue";
import Vuex from "vuex";

//Services
import { Search } from "@/services/search.ts";
import { TopList } from "@/services/topList.ts";
import { State } from "@/interfaces/state.ts";
import { MaterialToastService } from "@/services/materialService.ts"

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
				const animeSearchResult = await Search.fetchAnime(query);
				if (Array.isArray(animeSearchResult) && animeSearchResult.length > 0) {
					ctx.commit("SET_ANIME", animeSearchResult);
				} else {
					MaterialToastService.toast("Anime not found")
				}
			} catch (e) {
				console.log(e)
			}
		},
		async getTopList(ctx, { type, page, subtype }) {
			try {
				const animeTopListResult = await TopList.fetchTopList(type, page, subtype);
				ctx.commit("SET_ANIME_TOP", animeTopListResult)
			} catch (e) {
				console.log(e)
			}
		}
	},
	modules: {  },
	getters: {
		fetchAnime: state => state.animeSearchResult,
		fetchTopList: state => state.animeTopListResult
	}
});
