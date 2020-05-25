import Vue from "vue";
import Vuex from "vuex";
import {ApiService} from "../services/search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    anime: []
  },
  mutations: {
    loadAnime(state, anime) {
      state.anime = anime
    }
  },
  actions: {
    async fetchAnime(ctx, query) {
      const anime = await ApiService.getAnime(query);
      ctx.commit('loadAnime', anime)
    }
  },
  modules: {},
  getters: {
    getAnime: state => state.anime
  }
});
