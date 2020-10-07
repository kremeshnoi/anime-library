// LIBRARIES

import router from '../../router';
import jikanjs from 'jikanjs/lib/jikan.js';

// INTERFACES

import { StateCharacters } from '@/interfaces/state/State';
import { CharactersFavoriteResponse } from '@/interfaces/characters/CharactersFavoriteResponse';

// STATE CONSTANT

export const state: StateCharacters = {
	charactersById: [],
	charactersFavorite: []
};

// VUEX.STORE OPTIONS

export const characters =  {
	state,
	mutations: {
		SET_CHARACTERS_BY_ID(state, charactersById) {
			state.charactersById = charactersById;
		},
		SET_CHARACTERS_FAVORITE(state, charactersFavorite) {
			state.charactersFavorite = charactersFavorite;
		}
	},
	actions: {
		async loadCharactersById(ctx) {
			try {
				const characterResponse = await jikanjs.loadCharacter(router.app.$route.params.id);
				const charactersById = characterResponse;
				ctx.commit('SET_CHARACTERS_BY_ID', charactersById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadCharactersFavorite(ctx) {
			try {
				const favoriteCharactersResponse: CharactersFavoriteResponse = await jikanjs.loadTop('characters');
				const charactersFavorite = favoriteCharactersResponse.top;
				ctx.commit('SET_CHARACTERS_FAVORITE', charactersFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	getters: {
		getCharactersById: state => state.charactersById,
		getCharactersFavorite: state => state.charactersFavorite
	}
};
