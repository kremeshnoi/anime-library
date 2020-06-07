//Libraries
import Vue from "vue";
import Vuex from "vuex";

//Services
import { Top } from "../services/top";
import { Search } from "../services/search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animeSearchResult: [],
    animeTopResult: []
  },
  mutations: {
    SET_ANIME(state, animeSearchResult) {
      state.animeSearchResult = animeSearchResult
    },
    SET_ANIME_TOP(state, animeTopResult) {
      state.animeTopResult = animeTopResult
    }
  },
  actions: {
    async getAnime(ctx, query) {
      try {
        const animeSearchResult = await Search.fetchAnime(query);
        ctx.commit("SET_ANIME", animeSearchResult)
      } catch (e) {
        M.toast({ html: "Anime not found" })
      }
    },
    async getTop(ctx, { type, page, subtype }) {
      const animeTopResult = await Top.fetchTop(type, page, subtype);
      ctx.commit("SET_ANIME_TOP", animeTopResult)
    }
  },
  modules: {},
  getters: {
    fetchAnime: state => state.animeSearchResult,
    fetchTop: state => state.animeTopResult
  }
});
