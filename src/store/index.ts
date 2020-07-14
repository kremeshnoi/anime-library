//Libraries
import Vue from "vue";
import Vuex from "vuex";

//Store modules
import auth from "@/store/auth.ts";

//Interfaces
import { State } from "@/interfaces/state.ts";
import { SearchResponse } from "@/interfaces/search.ts";

//API wrappers
import jikanjs from "../../node_modules/jikanjs/lib/jikan.js";

Vue.use(Vuex);

export const state: State = {
  searchAnimeResult: [],
  topListResult: []
};

export default new Vuex.Store({
  state,
  mutations: {
    SET_ANIME(state, searchAnimeResult) {
      state.searchAnimeResult = searchAnimeResult;
    },
    SET_TOP_LIST(state, topListResult) {
      state.topListResult = topListResult;
    }
  },
  actions: {
    async fetchAnime(ctx, query) {
      try {
        const searchAnimeResponse: SearchResponse = await jikanjs.search("anime", query);
        const searchAnimeResult = searchAnimeResponse.results;
        if (Array.isArray(searchAnimeResult) && searchAnimeResult.length > 0) {
          ctx.commit("SET_ANIME", searchAnimeResult);
        } else {
          M.toast({ html: "Anime not found" });
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    async fetchTopList(ctx, [type, page, subtype]) {
      try {
        const topListResponse = await jikanjs.loadTop(type, page, subtype);
        const topListResult = topListResponse.top;
        ctx.commit("SET_TOP_LIST", topListResult);
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  modules: { auth },
  getters: {
    getSearchAnimeResult: state => state.searchAnimeResult,
    getTopListResult: state => state.topListResult
  }
});
