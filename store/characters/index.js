

import jikanjs from 'jikanjs/lib/jikan.js';



export const state = () => ({
  charactersById: [],
  charactersFavorite: [],
  charactersFavoriteCategories: []
});

export const mutations = {
  SET_CHARACTERS_BY_ID(state, charactersById) {
    state.charactersById = charactersById;
  },
  SET_CHARACTERS_FAVORITE(state, charactersFavorite) {
    state.charactersFavorite = charactersFavorite;
  },
  SET_CHARACTERS_FAVORITE_CATEGORIES(state, charactersFavoriteCategories) {
    state.charactersFavoriteCategories = charactersFavoriteCategories;
  },
};

export const actions = {
  async loadCharactersById(ctx) {
    try {
      const characterResponse = await jikanjs.loadCharacter($nuxt.$router.app.$route.params.id);
      const charactersById = characterResponse;
      ctx.commit('SET_CHARACTERS_BY_ID', charactersById);
    } catch (error) {
      throw error.message;
    }
  },
  async loadCharactersFavorite(ctx) {
    try {
      const favoriteCharactersResponse = await jikanjs.loadTop('characters');
      const charactersFavorite = favoriteCharactersResponse.top;
      ctx.commit('SET_CHARACTERS_FAVORITE', charactersFavorite);
    } catch (error) {
      throw error.message;
    }
  },
  async loadCharactersFavoriteCategories(ctx) {
    try {
      const favoriteCharactersCategoriesResponse = await jikanjs.loadTop('characters');
      const charactersFavoriteCategories = favoriteCharactersCategoriesResponse.top.slice(0, 9);
      ctx.commit('SET_CHARACTERS_FAVORITE_CATEGORIES', charactersFavoriteCategories);
    } catch (error) {
      throw error.message;
    }
  }
};

export const getters = {
  getCharactersById: state => state.charactersById,
  getCharactersFavorite: state => state.charactersFavorite,
  getCharactersFavoriteCategories: state => state.charactersFavoriteCategories,
};
