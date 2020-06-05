import Vue from "vue";
import Vuex from "vuex";
import {Search} from "../services/search";
import {Top} from "../services/top";

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
      const animeSearchResult = await Search.fetchAnime(query);
      ctx.commit('SET_ANIME', animeSearchResult)
    },
    async getTop(ctx, query) {
      const animeTopResult = await Top.fetchTop(query);
      ctx.commit('SET_ANIME_TOP', animeTopResult)
    }
  },
  modules: {},
  getters: {
    fetchAnime: state => state.animeSearchResult,
    fetchTop: state => state.animeTopResult
  }
});
