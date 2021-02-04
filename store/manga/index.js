import jikanjs from 'jikanjs/lib/jikan.js';

export const state = () => ({
  mangaById: [],
  mangaGenre: [],
  mangaSearched: [],
  mangaFavorite: [],
  mangaFavoriteCategories: [],
  mangaCharacters: [],
  mangaRecommendationsById: []
});

export const mutations = {
  SET_MANGA_GENRE(state, mangaGenre) {
    state.mangaGenre = mangaGenre;
  },
  SET_MANGA_CHARACTERS(state, mangaCharacters) {
    state.mangaCharacters = mangaCharacters;
  },
  SET_MANGA_SEARCHED(state, mangaSearched) {
    state.mangaSearched = mangaSearched;
  },
  SET_MANGA_BY_ID(state, mangaById) {
    state.mangaById = mangaById;
  },
  SET_MANGA_FAVORITE(state, mangaFavorite) {
    state.mangaFavorite = mangaFavorite;
  },
  SET_MANGA_FAVORITE_CATEGORIES(state, mangaFavoriteCategories) {
    state.mangaFavoriteCategories = mangaFavoriteCategories;
  },
  SET_MANGA_RECOMMENDATIONS_BY_ID(state, mangaRecommendationsById) {
    state.mangaRecommendationsById = mangaRecommendationsById;
  }
};

export const actions = {
  async loadMangaSearched(ctx, query) {
    try {
      const mangaSearchedResponse = await jikanjs.search('manga', query);
      const mangaSearched = mangaSearchedResponse.results;
      if (Array.isArray(mangaSearched) && mangaSearched.length > 0) {
        ctx.commit('SET_MANGA_SEARCHED', mangaSearched);
      } else {
        M.toast({ html: 'Not found', classes: 'red', displayLength: 10000 });
      }
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaGenre(ctx) {
    try {
      const mangaGenreResponse = await jikanjs.loadGenre('manga', $nuxt.$router.app.$route.params.id);
      const mangaGenre = mangaGenreResponse;
      ctx.commit('SET_MANGA_GENRE', mangaGenre);
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaCharacters(ctx) {
    try {
      const mangaCharactersResponse = await jikanjs.loadManga($nuxt.$router.app.$route.params.id, 'characters');
      const mangaCharacters = mangaCharactersResponse;
      ctx.commit('SET_MANGA_CHARACTERS', mangaCharacters);
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaById(ctx) {
    try {
      const mangaResponse = await jikanjs.loadManga($nuxt.$router.app.$route.params.id);
      const mangaById = mangaResponse;
      ctx.commit('SET_MANGA_BY_ID', mangaById);
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaFavorite(ctx) {
    try {
      const favoriteMangaResponse = await jikanjs.loadTop('manga', 1, 'favorite');
      const mangaFavorite = favoriteMangaResponse.top;
      ctx.commit('SET_MANGA_FAVORITE', mangaFavorite);
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaFavoriteCategories(ctx) {
    try {
      const favoriteMangaResponseCategories = await jikanjs.loadTop('manga', 1, 'favorite');
      const mangaFavoriteCategories = favoriteMangaResponseCategories.top.slice(0, 9);
      ctx.commit('SET_MANGA_FAVORITE_CATEGORIES', mangaFavoriteCategories);
    } catch (error) {
      throw error.message;
    }
  },
  async loadMangaRecommendationsById(ctx) {
    try {
      const mangaRecommendationsResponse = await jikanjs.loadManga($nuxt.$router.app.$route.params.id, 'recommendations');
      const mangaRecommendationsById = mangaRecommendationsResponse;
      ctx.commit('SET_MANGA_RECOMMENDATIONS_BY_ID', mangaRecommendationsById);
    } catch (error) {
      throw error.message;
    }
  }
};

export const getters = {
  getMangaGenre: state => state.mangaGenre,
  getMangaSearched: state => state.mangaSearched,
  getMangaCharacters: state => state.mangaCharacters,
  getMangaById: state => state.mangaById,
  getMangaFavorite: state => state.mangaFavorite,
  getMangaFavoriteCategories: state => state.mangaFavoriteCategories,
  getMangaRecommendationsById: state => state.mangaRecommendationsById
};
