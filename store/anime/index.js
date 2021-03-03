import jikanjs from 'jikanjs/lib/jikan.js'

export const state = () => ({
  animeById: [],
  animeGenre: [],
  animeAiring: [],
  animeFavorite: [],
  animeSearched: [],
  animeUpcoming: [],
  animeFavoriteCategories: [],
  animeRecommendationsById: []
})

export const mutations = {
  SET_ANIME_BY_ID(state, animeById) {
    state.animeById = animeById
  },
  SET_ANIME_GENRE(state, animeGenre) {
    state.animeGenre = animeGenre
  },
  SET_ANIME_AIRING(state, animeAiring) {
    state.animeAiring = animeAiring
  },
  SET_ANIME_SEARCHED(state, animeSearched) {
    state.animeSearched = animeSearched
  },
  SET_ANIME_FAVORITE(state, animeFavorite) {
    state.animeFavorite = animeFavorite
  },
  SET_ANIME_FAVORITE_CATEGORIES(state, animeFavoriteCategories) {
    state.animeFavoriteCategories = animeFavoriteCategories
  },
  SET_ANIME_UPCOMING(state, animeUpcoming) {
    state.animeUpcoming = animeUpcoming
  },
  SET_ANIME_RECOMMENDATIONS_BY_ID(state, animeRecommendationsById) {
    state.animeRecommendationsById = animeRecommendationsById
  }
}

export const actions = {
  async loadAnimeGenre(ctx) {
    try {
      const animeGenreResponse = await jikanjs.loadGenre('anime', $nuxt.$route.params.id)
      const animeGenre = animeGenreResponse
      ctx.commit('SET_ANIME_GENRE', animeGenre)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeSearched(ctx, query) {
    try {
      const animeSearchedResponse = await jikanjs.search('anime', query)
      const animeSearched = animeSearchedResponse.results
      if (Array.isArray(animeSearched) && animeSearched.length > 0) {
        ctx.commit('SET_ANIME_SEARCHED', animeSearched)
      } else {
        M.toast({ html: 'Not found', classes: 'red', displayLength: 10000 })
      }
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeById(ctx) {
    try {
      const animeResponse = await jikanjs.loadAnime($nuxt.$route.params.id)
      const animeById = animeResponse
      ctx.commit('SET_ANIME_BY_ID', animeById)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeAiring(ctx) {
    try {
      const animeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing')
      const animeAiring = animeAiringResponse.top
      ctx.commit('SET_ANIME_AIRING', animeAiring)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeFavorite(ctx) {
    try {
      const favoriteAnimeResponse = await jikanjs.loadTop('anime', 1, 'favorite')
      const animeFavorite = favoriteAnimeResponse.top
      ctx.commit('SET_ANIME_FAVORITE', animeFavorite)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeFavoriteCategories(ctx) {
    try {
      const favoriteAnimeCategoriesResponse = await jikanjs.loadTop('anime', 1, 'favorite')
      const animeFavoriteCategories = favoriteAnimeCategoriesResponse.top.slice(0, 9)
      ctx.commit('SET_ANIME_FAVORITE_CATEGORIES', animeFavoriteCategories)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeUpcoming(ctx) {
    try {
      const animeUpcomingResponse = await jikanjs.loadTop('anime', 1, 'upcoming')
      const animeUpcoming = animeUpcomingResponse.top
      ctx.commit('SET_ANIME_UPCOMING', animeUpcoming)
    } catch (error) {
      throw error.message
    }
  },
  async loadAnimeRecommendationsById(ctx) {
    try {
      const animeRecommendationsResponse = await jikanjs.loadAnime($nuxt.$route.params.id, 'recommendations')
      const animeRecommendationsById = animeRecommendationsResponse
      ctx.commit('SET_ANIME_RECOMMENDATIONS_BY_ID', animeRecommendationsById)
    } catch (error) {
      throw error.message
    }
  }
}

export const getters = {
  getAnimeById: state => state.animeById,
  getAnimeGenre: state => state.animeGenre,
  getAnimeAiring: state => state.animeAiring,
  getAnimeSearched: state => state.animeSearched,
  getAnimeFavorite: state => state.animeFavorite,
  getAnimeFavoriteCategories: state => state.animeFavoriteCategories,
  getAnimeUpcoming: state => state.animeUpcoming,
  getAnimeRecommendationsById: state => state.animeRecommendationsById,
}
