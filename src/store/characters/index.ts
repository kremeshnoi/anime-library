//Libraries
import router from '../../router';
import jikanjs from 'jikanjs/lib/jikan.js';

//Interfaces
import { StateCharacter } from '@/interfaces/State';
import { CharacterFavoriteResponse } from '@/interfaces/CharacterFavoriteResponse';

export const state: StateCharacter = {
	characterById: [],
	characterFavorite: []
};

export const characters =  {
	state,
	mutations: {
		SET_CHARACTER_BY_ID(state, characterById) {
			state.characterById = characterById;
		},
		SET_CHARACTER_FAVORITE(state, characterFavorite) {
			state.characterFavorite = characterFavorite;
		}
	},
	actions: {
		async loadCharacterById(ctx) {
			try {
				const characterResponse = await jikanjs.loadCharacter(router.app.$route.params.id);
				const characterById = characterResponse;
				ctx.commit('SET_CHARACTER_BY_ID', characterById);
			} catch (error) {
				throw new Error(error);
			}
		},
		async loadCharacterFavorite(ctx) {
			try {
				const favoriteCharactersResponse: CharacterFavoriteResponse = await jikanjs.loadTop('characters');
				const characterFavorite = favoriteCharactersResponse.top;
				ctx.commit('SET_CHARACTER_FAVORITE', characterFavorite);
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	getters: {
		getCharacterById: state => state.characterById,
		getCharacterFavorite: state => state.characterFavorite
	}
};
