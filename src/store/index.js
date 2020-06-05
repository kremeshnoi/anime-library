import Vue from "vue";
import Vuex from "vuex";
import {Search} from "../services/search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animeSearchResult: [],
    animeTopResult: []
  },
  mutations: {
    SET_ANIME(state, animeSearchResult) {
      state.animeSearchResult = animeSearchResult
    }
  },
  actions: {
    async getAnime(ctx, query) {
      const animeSearchResult = await Search.fetchAnime(query);
      ctx.commit('SET_ANIME', animeSearchResult)
    }
  },
  modules: {},
  getters: {
    fetchAnime: state => state.animeSearchResult
  }
});
