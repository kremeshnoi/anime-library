//Anime
import { AnimeByIdResponse } from '@/interfaces/anime/AnimeByIdResponse';
import { AnimeAiringResponseTop } from '@/interfaces/anime/AnimeAiringResponse';
import { AnimeGenreResponse } from '@/interfaces/anime/AnimeGenreResponse';
import { AnimeFavoriteResponseTop } from '@/interfaces/anime/AnimeFavoriteResponse';
import { AnimeSearchedResponseResults } from '@/interfaces/anime/AnimeSearchedResponse';
import { AnimeUpcomingResponseTop } from '@/interfaces/anime/AnimeUpcomingResponse';
import { AnimeRecommendationsByIdResponseRecommendations } from '@/interfaces/anime/AnimeRecommendationsById';

//Character
import { CharactersFavoriteResponseTop } from '@/interfaces/characters/CharactersFavoriteResponse';

//Manga
import { MangaFavoriteResponseTop } from '@/interfaces/manga/MangaFavoriteResponse';
import { MangaByIdResponse } from '@/interfaces/manga/MangaByIdResponse';
import { MangaRecommendationsByIdResponseRecommendations } from '@/interfaces/manga/MangaRecommendationsById';

//User
import { UsersInfoResponse } from '@/interfaces/users/UsersInfoResponse';

export interface StateAnime {
	animeById: AnimeByIdResponse[];
	animeGenre: AnimeGenreResponse[];
	animeAiring: AnimeAiringResponseTop[];
	animeUpcoming: AnimeUpcomingResponseTop[];
	animeFavorite: AnimeFavoriteResponseTop[];
	animeSearched: AnimeSearchedResponseResults[];
	animeRecommendationsById: AnimeRecommendationsByIdResponseRecommendations[];
}

export interface StateCharacters {
	charactersById: CharactersFavoriteResponseTop[];
	charactersFavorite: CharactersFavoriteResponseTop[];
}

export interface StateManga {
	mangaGenre: MangaByIdResponse[];
	mangaById: MangaByIdResponse[];
	mangaFavorite: MangaFavoriteResponseTop[];
	mangaRecommendationsById: MangaRecommendationsByIdResponseRecommendations[];
}

export interface StateUsers {
	userInfo: UsersInfoResponse[];
}

