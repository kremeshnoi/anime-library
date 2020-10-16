// IMPORTS

	// ANIME

import { AnimeByIdResponse } from '@/interfaces/anime/AnimeByIdResponse';
import { AnimeAiringResponseTop } from '@/interfaces/anime/AnimeAiringResponse';
import { AnimeGenreResponse } from '@/interfaces/anime/AnimeGenreResponse';
import { AnimeFavoriteResponseTop } from '@/interfaces/anime/AnimeFavoriteResponse';
import { AnimeSearchedResponseResults } from '@/interfaces/anime/AnimeSearchedResponse';
import { AnimeUpcomingResponseTop } from '@/interfaces/anime/AnimeUpcomingResponse';
import { AnimeRecommendationsByIdResponseRecommendations } from '@/interfaces/anime/AnimeRecommendationsById';

	// CHARACTERS

import { CharactersFavoriteResponseTop } from '@/interfaces/characters/CharactersFavoriteResponse';

	// MANGA

import { MangaFavoriteResponseTop } from '@/interfaces/manga/MangaFavoriteResponse';
import { MangaByIdResponse } from '@/interfaces/manga/MangaByIdResponse';
import { MangaCharactersResponseCharacters } from "@/interfaces/manga/MangaCharactersResponse";
import { MangaRecommendationsByIdResponseRecommendations } from '@/interfaces/manga/MangaRecommendationsById';

	// USERS

import { UsersInfoResponse } from '@/interfaces/users/UsersInfoResponse';

// INTERFACES

	// ANIME

export interface StateAnime {
	animeById: AnimeByIdResponse[];
	animeGenre: AnimeGenreResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeUpcoming: AnimeUpcomingResponseTop[];
	animeFavorite: AnimeFavoriteResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeRecommendationsById: AnimeRecommendationsByIdResponseRecommendations[];
}

	// CHARACTERS

export interface StateCharacters {
	charactersById: CharactersFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
}

	// MANGA

export interface StateManga {
	mangaGenre: MangaByIdResponse[];
	mangaCharacters: MangaCharactersResponseCharacters[];
	mangaById: MangaByIdResponse[];
	mangaSearched: [];
	mangaFavorite: MangaFavoriteResponseTop[];
	mangaRecommendationsById: MangaRecommendationsByIdResponseRecommendations[];
}

	// USERS

export interface StateUsers {
	userInfo: UsersInfoResponse[];
}
